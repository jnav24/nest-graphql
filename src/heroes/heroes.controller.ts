import {BadRequestException, Body, Controller, Get, Post, UsePipes} from '@nestjs/common';
import {HeroesService} from './heroes.service';
import {HeroesDto} from './heroes.model';
import {ValidationPipe} from '../shared/pipes/validation.pipe';

@Controller('heroes')
export class HeroesController {
    constructor(
        private readonly heroesService: HeroesService,
    ) {}

    @Get()
    public async index() {
        try {
            return await this.heroesService.findAll();
        } catch (error) {
            throw new BadRequestException(error.errmsg || error);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    public async store(@Body() hero: HeroesDto) {
        try {
            await this.heroesService.create(hero);
        } catch (error) {
            throw new BadRequestException(error.errmsg || error);
        }
    }
}
