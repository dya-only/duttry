import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/CreateBlockDto'
import { Block } from './entities/block.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class BlocksService {
  constructor (
    @InjectRepository(Block)
    private readonly blocks: Repository<Block>
  ) {}

  public async createBlock (objectId: number, createBlockDto: CreateBlockDto): Promise<void> {
    await this.blocks.insert({
      blockType: createBlockDto.blockType,
      sequence: createBlockDto.sequence,
      objectId
    })
  }

  public async findAllBlock (objectId: number): Promise<Block[]> {
    return await this.blocks.find({
      where: { objectId },
      order: {
        sequence: 'ASC'
      }
    })
  }
}