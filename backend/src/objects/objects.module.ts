import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { join } from 'path'
import { ObjectsController } from './objects.controller'
import { _Object } from './entities/object.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([_Object]),
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '/uploads/objects'),
        filename: (_, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        },
      }),
    })
  ],
  controllers: [ObjectsController],
  providers: [ObjectsService],
  exports: [ObjectsService]
})
export class ObjectsModule {}
