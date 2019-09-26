import {Module} from '@nestjs/common';
import {HeroesService} from './heroes.service';
import {HeroesController} from './heroes.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroesSchema} from './heroes.model';

@Module({
    controllers: [
        HeroesController,
    ],
    imports: [
        MongooseModule.forFeature([
            { name: 'Heroes', schema: HeroesSchema },
        ]),
    ],
    providers: [
        HeroesService,
    ],
})
export class HeroesModule {}
