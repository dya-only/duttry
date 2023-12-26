import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'

export class UpdateBlockDto {
  @IsString()
  @ApiProperty()
  public readonly blockAction: string | null

  @IsInt()
  @ApiProperty()
  public readonly prevBlockId: number | null

  @IsInt()
  @ApiProperty()
  public readonly nextBlockId: number | null
}