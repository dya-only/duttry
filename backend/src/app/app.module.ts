import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthMiddleware } from '../auth/auth.middleware'
import { AuthModule } from 'src/auth/auth.module'
import { UsersModule } from 'src/users/users.module'
import { ConfigurationModule } from '../configuration/configuration.module'
import { ProjectsModule } from 'src/projects/projects.module'
import { ObjectsModule } from '../objects/objects.module'
import { BlocksModule } from '../blocks/blocks.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST', 'db'),
        port: configService.get('DATABASE_PORT', 3306),
        username: configService.get('DATABASE_USERNAME', 'duttry'),
        password: configService.get('DATABASE_PASSWORD', 'duttrypassword'),
        database: configService.get('DATABASE_SCHEMA', 'duttry'),
        synchronize: configService.get('DATABASE_SYNCHRONIZE', true),
        autoLoadEntities: true
      })
    }),
    ConfigurationModule,
    UsersModule,
    AuthModule,
    ProjectsModule,
    ObjectsModule,
    BlocksModule
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*')
  }
}