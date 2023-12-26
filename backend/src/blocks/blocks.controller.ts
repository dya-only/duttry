import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { BlocksService } from './blocks.service'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'
import { CreateBlockDto } from './dto/CreateBlockDto'
import { UpdateBlockDto } from './dto/UpdateBlockDto'

@ApiTags('blocks')
@Controller('blocks')
export class BlocksController {
  constructor (
    private readonly blocksService: BlocksService
  ) {}

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Post()
  public async createBlock (@Body() createBlockDto: CreateBlockDto) {
    await this.blocksService.createBlock(createBlockDto)

    return {
      success: true
    }
  }

  @Get('object/:objectId')
  public async findAllBlock (@Param('objectId') objectId: number) {
    const blocks = await this.blocksService.findAllBlock(objectId)

    return {
      success: true,
      body: blocks
    }
  }

  @Get(':blockId')
  public async findBlock (@Param('blockId') blockId: number) {
    const block = await this.blocksService.findBlock(blockId)
    return {
      success: true,
      body: block
    }
  }

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Patch(':blockId')
  public async updateBlock (@Param('blockId') blockId: number, @Body() updateBlockDto: UpdateBlockDto) {
    const block = await this.blocksService.findBlock(blockId)

    if (block === undefined) {
      throw new NotFoundException({
        success: false,
        message: 'Block not found.'
      })
    }

    await this.blocksService.updateBlock(blockId, updateBlockDto)

    return {
      success: true
    }
  }

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Delete('all/:projectId')
  public async removeAllBlock (@Param('projectId') projectId: number) {
    await this.blocksService.removeAllBlock(projectId)

    return {
      success: true
    }
  }
}