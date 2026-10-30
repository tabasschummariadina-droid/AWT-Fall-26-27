
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marketplace } from './entities/marketplace.entity';
import { CreateMarketplaceDto, UpdateMarketplaceDto } from './dto/marketplace.dto';

@Injectable()
export class MarketplaceService {
    constructor(
        @InjectRepository(Marketplace)
        private readonly marketplaceRepo: Repository<Marketplace>,
    ) { }

    create(dto: CreateMarketplaceDto) {
        const item = this.marketplaceRepo.create(dto);
        return this.marketplaceRepo.save(item);
    }

    findAll() {
        return this.marketplaceRepo.find();
    }

    findOne(id: string) {
        return `This action returns #${id} marketplace`;
    }

    update(id: string, dto: UpdateMarketplaceDto) {
        return `This action updates #${id} marketplace`;
    }

    remove(id: string) {
        return `This action removes #${id} marketplace`;
    }
}

