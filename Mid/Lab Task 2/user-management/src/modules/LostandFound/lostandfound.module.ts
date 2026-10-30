import { Module } from '@nestjs/common';
import { LostandfoundService } from './lostandfound.service';
import { LostandfoundController } from './lostandfound.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lostandfound } from './entities/lostandfound.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Lostandfound])],
    controllers: [LostandfoundController],
    providers: [LostandfoundService],
})
export class LostandfoundModule { }