import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';

@Module({
  providers: [BlocksService]
})
export class BlocksModule {}
