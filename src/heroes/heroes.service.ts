import { Model } from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {HeroesInterface} from './heroes.model';

@Injectable()
export class HeroesService {
    constructor(
        @InjectModel('Heroes')
        private readonly heroesModel: Model<HeroesInterface>,
    ) {}

    async create(params: HeroesInterface): Promise<HeroesInterface> {
        return await new this.heroesModel(params).save();
    }

    async findAll(): Promise<HeroesInterface> {
        return await this.heroesModel.find().exec();
    }
}
