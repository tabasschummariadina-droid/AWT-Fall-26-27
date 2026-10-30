import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lostandfound } from './entities/lostandfound.entity';
import { CreateLostandfoundDto, UpdateLostandfoundDto } from './dto/lostandfound.dto';

@Injectable()
export class LostandfoundService {
    constructor(
        @InjectRepository(Lostandfound)
        private readonly lostandfoundRepo: Repository<Lostandfound>,
    ) { }

    async create(dto: CreateLostandfoundDto) {
        const item = this.lostandfoundRepo.create(dto);
        return await this.lostandfoundRepo.save(item);
    }

    async findAll() {
        return await this.lostandfoundRepo.find();
    }

    async findOne(id: string) {
        const item = await this.lostandfoundRepo.findOneBy({ id });
        if (!item) {
            throw new NotFoundException(`Lostandfound with ID ${id} not found`);
        }
        return item;
    }

    async update(id: string, dto: UpdateLostandfoundDto) {
        const item = await this.findOne(id);
        Object.assign(item, dto);
        return await this.lostandfoundRepo.save(item);
    }

    async remove(id: string) {
        const item = await this.findOne(id);
        return await this.lostandfoundRepo.remove(item);
    }
}