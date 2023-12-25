import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsString } from 'class-validator'
import { CreateDateColumn } from 'typeorm'

export class UpdateObjectDto {
  @IsString()
  @ApiProperty()
  public readonly image: string

  @IsString()
  @ApiProperty()
  public readonly name: string
}