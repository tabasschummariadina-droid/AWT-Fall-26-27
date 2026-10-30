import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getUser() {
        return await this.userService.getUser();
    }

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        return await this.userService.createUser(dto);
    }
}