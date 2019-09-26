import * as mongoose from 'mongoose';

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
    alias: string;
    description: string;
    gender: string;
    image: string;
    name: string;
    slug: string;
    species: string;
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
