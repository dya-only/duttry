import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsString, Length, Matches, MaxLength } from 'class-validator'
import { Column, CreateDateColumn } from 'typeorm'

export class CreateProjectDto {
  @Length(1, 20)
  @IsString()
  @ApiProperty()
  public readonly name: string

  @IsBoolean()
  @ApiProperty()
  public readonly isPublic: boolean

  @CreateDateColumn({
    name: 'createdat',
    type: 'timestamp'
  })
  @IsDate()
  @ApiProperty()
  public readonly createdAt: Date
}