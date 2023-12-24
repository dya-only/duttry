import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/CreateProjectDto';

@Injectable()
export class ProjectsService {
  constructor (
    @InjectRepository(Project)
    private readonly projects: Repository<Project>
  ) {}

  public async createProject (userId: number, createProjectDto: CreateProjectDto): Promise<void> {
    await this.projects.insert({
      name: createProjectDto.name,
      isPublic: false,
      userId
    })
  }

  public async findProject (projectId: number): Promise<void> {
    await this.projects.findOne({
      where: { id: projectId },
      relations: {
        user: true
      }
    }) ?? undefined
  }

  public async removeProject (userId: number, projectId: number): Promise<void> {
    await this.projects.delete({ id: projectId, userId })
  }
}