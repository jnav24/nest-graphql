import {BadRequestException, Controller, Get} from '@nestjs/common';
import {HeroesService} from './heroes.service';

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
}
