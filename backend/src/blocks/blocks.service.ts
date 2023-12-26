import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/CreateBlockDto'
import { Block } from './entities/block.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateBlockDto } from './dto/UpdateBlockDto'
import { _Object } from '../objects/entities/object.entity'

@Injectable()
export class BlocksService {
  constructor (
    @InjectRepository(Block)
    private readonly blocks: Repository<Block>,

    @InjectRepository(_Object)
    private readonly objects: Repository<_Object>
  ) {}

  public async createBlock (createBlockDto: CreateBlockDto): Promise<void> {
    await this.blocks.insert(createBlockDto)
  }

  public async findAllBlock (objectId: number): Promise<Block[]> {
    return await this.blocks.find({
      where: { objectId },
      relations: {
        object: true
      }
    })
  }

  public async findBlock (blockId: number): Promise<Block> {
    return await this.blocks.findOne({
      where:  { id: blockId },
      relations: {
        object: true
      }
    })
  }

  public async updateBlock (blockId: number, updateBlockDto: UpdateBlockDto): Promise<void> {
    await this.blocks.update(
      { id: blockId },
      updateBlockDto
    )
  }

  public async removeAllBlock (projectId: number): Promise<void> {
    const objects = (await this.objects.find({
      select: ['id'],
      where: { projectId }
    })).map(async (object) => {
      await this.blocks.delete({ objectId: object.id })
    })
  }
}