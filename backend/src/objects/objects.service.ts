import { Injectable } from '@nestjs/common';
import { _Object } from './entities/object.entity'
import { UpdateObjectDto } from './dto/UpdateObjectDto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ObjectsService {
  constructor(
    @InjectRepository(_Object)
    private readonly objects: Repository<_Object>
  ) {}

  public async createObject (image: Express.Multer.File, projectId: number): Promise<void> {
    await this.objects.insert({
      image: image.filename,
      name: image.originalname,
      projectId
    })
  }

  public async findAllObject (projectId: number): Promise<_Object[]> {
    return await this.objects.find({
      where: { projectId },
      relations: {
        project: true
      }
    })
  }

  public async findObject (objectId: number): Promise<_Object> {
    return await this.objects.findOne({
      where: { id: objectId }
    })
  }

  public async updateObject (objectId: number, updateObjectDto: UpdateObjectDto): Promise<void> {
    await this.objects.update(
      { id: objectId },
      updateObjectDto
    )
  }

  public async removeObject(objectId: number): Promise<void> {
    await this.objects.delete({ id: objectId })
  }
}