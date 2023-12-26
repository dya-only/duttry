import { ApiProperty } from '@nestjs/swagger'
import { IsEmpty, IsInt, IsOptional, IsString } from 'class-validator'

export class CreateBlockDto {
  @IsInt()
  @ApiProperty()
  public readonly objectId: number

  @IsString()
  @ApiProperty()
  public readonly blockType: 'start' | 'action' | 'logical'

  @IsString()
  @IsOptional()
  @ApiProperty()
  public readonly blockAction: string | null

  @IsInt()
  @IsOptional()
  @ApiProperty()
  public readonly prevBlockId: number | null

  @IsInt()
  @IsOptional()
  @ApiProperty()
  public readonly nextBlockId: number | null
}