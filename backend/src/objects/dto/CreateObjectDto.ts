import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsInt, IsString } from 'class-validator'
import { CreateDateColumn } from 'typeorm'

export class CreateObjectDto {
  @IsString()
  @ApiProperty()
  public readonly image: string

  @IsInt()
  @ApiProperty()
  public readonly projectId: number
}