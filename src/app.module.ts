import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroesModule} from './heroes/heroes.module';
import {APP_FILTER} from '@nestjs/core';
import {HttpExceptionFilter} from './shared/filters/http-exception.filter';

const HttpExceptionObj = {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
};

@Module({
    imports: [
        HeroesModule,
        MongooseModule.forRoot('mongodb://nest:nestMongoDB@localhost:27017/heroes'),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        HttpExceptionObj,
    ],
})
export class AppModule {}
