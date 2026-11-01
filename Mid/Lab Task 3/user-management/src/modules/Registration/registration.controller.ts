/*import { Body, Controller, Get, Post } from "@nestjs/common";
import { RegistrationService } from "./registration.service";
import { CreateRegistrationDto } from "./dto/registration.dto";

@Controller("registration")
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) { }

    @Get()
    async getRegistration() {
        return await this.registrationService.getRegistration();
    }

    @Post()
    async createRegistration(@Body() dto: CreateRegistrationDto) {
        return await this.registrationService.createRegistration(dto);
    }
}*/

import { Body, Controller, Post } from "@nestjs/common";
import { CreateRegistrationDto } from "./dto/registration.dto";

@Controller("users")
export class RegistrationController {
    @Post("register")
    register(@Body() dto: CreateRegistrationDto) {
        return {
            message: "User registered successfully",
            fullName: dto.fullName,
            email: dto.email,
            age: dto.age,
            accountType: dto.accountType,
        };
    }
}


