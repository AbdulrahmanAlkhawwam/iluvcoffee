import { Body, Delete, Get, HttpException, HttpStatus, Injectable, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { existsSync } from 'fs';
import { NotFoundError } from 'rxjs';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "coffee",
            brand: "brand",
            flavors: [
                "chocolate",
                "water"
            ],
        }
    ];

    findAll(): Coffee[] {
        return this.coffees;
    }

    findCoffee(id: Number) {
        const coffee = this.coffees.find(
            item => item.id === id
        );
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(coffee) {
        this.coffees.push(coffee);
        return CreateCoffeeDto;
    }

    update(id: Number, date): boolean {
        const exisitingCoffee = this.findCoffee(id);
        if (exisitingCoffee) {
            // update coffee 
        }
        return true;
    }

    remove(id: String): Boolean {
        const coffeeIndex = this.coffees.findIndex(item => item.id === Number(id));
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
        return true;
    }
}
/// CRUD : Create Read Update Delete
