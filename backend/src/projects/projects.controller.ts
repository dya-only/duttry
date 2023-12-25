import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Res, UseGuards } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from 'src/auth/auth.guard'
import { CreateProjectDto } from './dto/CreateProjectDto'
import { Response } from 'express'

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor (
    private readonly projectsService: ProjectsService
  ) {}

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Post()
  public async createProject (@Res({ passthrough: true }) res: Response, @Body() createProjectDto: CreateProjectDto) {
    const userId = res.locals.userId
    await this.projectsService.createProject(userId, createProjectDto)

    return {
      success: true
    }
  }

  @Get(':projectId')
  public async findProject (@Param('projectId') projectId: number) {
    const project = await this.projectsService.findProject(projectId)
    if (project === undefined) {
      throw new NotFoundException({
        success: false,
        message: 'Project not found'
      })
    }

    return {
      success: true,
      body: project
    }
  }

  @ApiCookieAuth('JWT_TOKEN')
  @UseGuards(AuthGuard)
  @Delete(':projectId')
  public async removeProject (@Res({ passthrough: true }) res: Response, @Param('projectId') projectId: number) {
    const userId = res.locals.userId
    await this.projectsService.removeProject(userId, projectId)

    return {
      success: true
    }
  }
}