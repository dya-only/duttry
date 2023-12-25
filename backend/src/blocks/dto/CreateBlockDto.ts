import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'

export class CreateBlockDto {
  @IsString()
  @ApiProperty()
  public readonly blockType: string

  @IsInt()
  @ApiProperty()
  public readonly sequence: number
}