import {
  Body,
  Controller, Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post, Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ObjectsService } from './objects.service'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { UpdateObjectDto } from './dto/UpdateObjectDto'
import { CreateObjectDto } from './dto/CreateObjectDto'

@ApiTags('objects')
@ApiCookieAuth('JWT_TOKEN')
@UseGuards(AuthGuard)
@Controller('objects')
export class ObjectsController {
  constructor(
    private readonly objectsService: ObjectsService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  public async createObject (@UploadedFile() image: Express.Multer.File, @Body() createObjectDto: CreateObjectDto) {
    await this.objectsService.createObject(image, +createObjectDto.projectId)

    return {
      success: true
    }
  }

  @Get('project/:projectId')
  public async findAllObject (@Param('projectId') projectId: number) {
    const objects = await this.objectsService.findAllObject(projectId)

    return {
      success: true,
      body: objects
    }
  }

  @Get(':objectId')
  public async findObject (@Param('objectId') objectId: number) {
    const object = await this.objectsService.findObject(objectId)

    return {
      success: true,
      body: object
    }
  }

  @Patch(':objectId')
  public async updateObject (@Param('objectId') objectId: number, @Body() updateObjectDto: UpdateObjectDto) {
    const object = await this.objectsService.findObject(objectId)

    if (object === undefined) {
      throw new NotFoundException({
        success: false,
        message: 'Object not found.'
      })
    }

    await this.objectsService.updateObject(objectId, updateObjectDto)

    return {
      success: true
    }
  }

  @Delete(':objectId')
  public async removeObject (@Param('objectId') objectId: number) {
    await this.objectsService.removeObject(objectId)

    return {
      success: true
    }
  }
}