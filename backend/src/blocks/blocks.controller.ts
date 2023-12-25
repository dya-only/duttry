import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { BlocksService } from './blocks.service'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'
import { CreateBlockDto } from './dto/CreateBlockDto'

@ApiTags('blocks')
@Controller('blocks')
export class BlocksController {
  constructor (
    private readonly blocksService: BlocksService
  ) {}

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Post(':objectId/blocks')
  public async createBlock (@Param('objectId') objectId: number, @Body() createBlockDto: CreateBlockDto) {
    await this.blocksService.createBlock(objectId, createBlockDto)

    return {
      success: true
    }
  }

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Get(':objectId/blocks')
  public async findAllBlock (@Param('objectId') objectId: number) {
    const blocks = await this.blocksService.findAllBlock(objectId)

    return {
      success: true,
      body: blocks
    }
  }
}