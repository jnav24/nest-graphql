import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroesModule} from './heroes/heroes.module';

@Module({
    imports: [
        HeroesModule,
        MongooseModule.forRoot('mongodb://localhost:27017/heroes'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
