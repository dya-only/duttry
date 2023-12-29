import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateBlockDto {
  @IsInt()
  @ApiProperty()
  public readonly objectId: number

  @IsString()
  @ApiProperty()
  public readonly blockType: 'start' | 'action' | 'logical' | 'loop'

  @IsString()
  @IsOptional()
  @ApiProperty()
  public readonly blockAction: string | null

  @IsInt()
  @ApiProperty()
  public readonly sequence: number
}