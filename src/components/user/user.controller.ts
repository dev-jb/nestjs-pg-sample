import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
import { UserServiceInterface } from './interface/user.service.interface';
import { Response } from 'src/@core/common/dto/response.dto';
import { UserSuccessMessage } from './enum/user-success-message.enum';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(
        @Inject('UserServiceInterface')
        private readonly userService: UserServiceInterface
    ) {}

    @Post()
    public async update(@Body() createUserDto: CreateUserDto, @Req() req: Request): Promise<Response> {
        return new Response(UserSuccessMessage.USER_CREATED_SUCCESSFULLY, await this.userService.create(createUserDto));
    }

    @Get(':email')
    public async findByEmail(@Param('email') email: string): Promise<Response> {
        return new Response(UserSuccessMessage.USER_FETCHED_SUCCESSFULLY, await this.userService.findByEmail(email));
    }
}
