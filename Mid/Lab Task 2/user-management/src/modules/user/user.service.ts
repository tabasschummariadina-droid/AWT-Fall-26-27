import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async getUser() {
        try {
            const user = await this.userRepository.find();
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(dto: CreateUserDto) {
        try {
            const user = await this.userRepository.create(dto);
            return await this.userRepository.save(user);
        }
        catch (error) {
            throw error;
        }
    }

}