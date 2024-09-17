import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery): Coffee[] {
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
        // return `find all coffees . Limit : ${limit} and offset : ${offset}`;
    }

    @Get(':id')
    finaCoffee(@Param('id') id: Number): Coffee {
        return this.coffeesService.findCoffee(id);
        // return `find coffee number #${id} .`;
    }

    @Post()
    create(@Body() body: CreateCoffeeDto) {
        this.coffeesService.create(body);
        // return body;
    }

    @Patch(':id')
    update(@Param('id') id: Number, @Body() body: UpdateCoffeeDto) {
        this.coffeesService.update(id, body);
        // return "update : hello world";
    }

    @Delete(':id')
    remove(@Param('id') id: String, @Body() body) {
        this.coffeesService.remove(id);
        // return "remove : hello world";
    }

}
