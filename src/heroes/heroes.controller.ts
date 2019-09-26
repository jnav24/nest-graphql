import {Controller, Get} from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    @Get()
    public index() {
        return {
            name: 'pizza',
        };
    }
}
