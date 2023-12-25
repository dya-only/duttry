import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsInt, IsString } from 'class-validator'
import { CreateDateColumn } from 'typeorm'

export class CreateObjectDto {
  @IsString()
  @ApiProperty()
  public readonly projectId: string
}