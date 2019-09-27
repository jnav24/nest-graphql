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
            return {
                name: 'joe shmoe',
            };
        } catch (error) {
            throw new BadRequestException(error.errmsg || error);
        }
    }
}
