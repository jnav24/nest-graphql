import * as mongoose from 'mongoose';
import {IsString} from 'class-validator';

export interface HeroesInterface {
    id?: string;
    alias: string;
    description: string;
    gender: string;
    image: string;
    name: string;
    slug: string;
    species: string;
    universe: string;
}

export class HeroesDto {
    @IsString()
    alias: string;

    @IsString()
    description: string;

    @IsString()
    gender: string;

    @IsString()
    image: string;

    @IsString()
    name: string;

    @IsString()
    slug: string;

    @IsString()
    species: string;

    @IsString()
    universe: string;
}

export const HeroesSchema = new mongoose.Schema({
    alias: String,
    description: String,
    gender: String,
    image: String,
    name: String,
    slug: String,
    species: String,
    universe: String,
});
