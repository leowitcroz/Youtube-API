import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }

    async create({ email, name, password }: CreateUserDto) {
        return await this.prisma.users.create({
            data: {
                email,
                name,
                password
            }
        })
    }

    async read() {
        return await this.prisma.users.findMany()
    }

    async readOne(id: number) {
        return await this.prisma.users.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, { email, name, password }) {

        await this.exists(id)

        return await this.prisma.users.update({
            where: {
                id
            },
            data: {
                email,
                name,
                password
            }
        })
    }

    async delete(id: number) {

        await this.exists(id)

        return this.prisma.users.delete({
            where: {
                id
            }
        })
      
    }

    async exists(id: number) {
        if (!(await this.readOne(id))) {
            throw new NotFoundException('usuario não existe')
        }
    }

}
