import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor (private readonly userServices: UserService) { }

    @Post()
    async create(@Body() { email, name, password }: CreateUserDto) {
        return this.userServices.create( { email, name, password } )
    }

    @Get()
    async read() {
        return this.userServices.read()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.readOne(id)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() { email, name, password } ){
        return this.userServices.update(id, { email, name, password } )
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userServices.delete(id)
    }
    

}
