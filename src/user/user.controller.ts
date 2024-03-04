import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    @Post()
    async create(@Body() { email, name, password }: CreateUserDto) {
        return { email, name, password }
    }

    @Get()
    async read() {
        return []
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return { id }
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() { email, name, password } ){
        return { email, name, password }
    }   

    @Delete('id')
    async delete(@Param('id', ParseIntPipe) id: number){

    }
    

}
