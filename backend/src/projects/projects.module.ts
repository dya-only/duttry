import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectsController } from './projects.controller'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Project } from './entities/project.entity'
import { _Object } from '../objects/entities/object.entity'
import { Block } from '../blocks/entities/block.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Project,
      _Object,
      Block
    ]),
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '/uploads/objects'),
        filename: (_, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        },
      }),
    })
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})
export class ProjectsModule {}