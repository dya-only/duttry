import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Block } from './entities/block.entity'
import { _Object } from '../objects/entities/object.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Block, _Object])],
  controllers: [BlocksController],
  providers: [BlocksService],
  exports: [BlocksService]
})
export class BlocksModule {}
