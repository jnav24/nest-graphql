import {ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform} from '@nestjs/common';
import {validate, ValidationError} from 'class-validator';
import {plainToClass} from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (value instanceof Object && this.isEmpty(value)) {
            throw new HttpException(`Validation failed: Empty state`, HttpStatus.BAD_REQUEST);
        }

        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const obj = plainToClass(metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            throw new HttpException(`Validation failed: ${this.formatErrors(errors)}`, HttpStatus.BAD_REQUEST);
        }

        return obj;
    }

    private formatErrors(errors: ValidationError[]): string {
        return errors.map((error) => {
            for (const constraint in error.constraints) {
                if (!!error.constraints[constraint]) {
                    return error.constraints[constraint];
                }
            }
        }).join(', ');
    }

    private isEmpty(obj: { [key: string]: any }): boolean {
        return !Object.keys(obj);
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Object, Array];
        return !types.find((type) => metatype === type);
    }
}
