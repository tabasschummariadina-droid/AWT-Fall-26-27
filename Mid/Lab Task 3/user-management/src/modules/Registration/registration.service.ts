import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registration } from "./entities/registration.entity";
import { Repository } from "typeorm";
import { CreateRegistrationDto, UpdateRegistrationDto } from "./dto/registration.dto";


@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(Registration) private readonly registrationRepository: Repository<Registration>,
    ) { }

    async getRegistration() {
        try {
            const registration = await this.registrationRepository.find();
            return registration;
        }
        catch (error) {
            throw error;
        }
    }
    async createRegistration(dto: CreateRegistrationDto) {
        try {
            const registration = await this.registrationRepository.create(dto);
            return await this.registrationRepository.save(registration);
        }
        catch (error) {
            throw error;
        }
    }

}