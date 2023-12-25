import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsPositive, IsString } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { _Object } from '../../objects/entities/object.entity'

@Entity({
  name: 'blocks'
})
export class Block {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  @IsInt()
  @IsPositive()
  @ApiProperty()
  public readonly id: number

  @Column({
    name: 'block_type',
    type: 'varchar',
    nullable: false
  })
  @IsString()
  @ApiProperty()
  public readonly blockType: string

  @Column({
    name: 'sequence',
    type: 'int',
    nullable: false
  })
  @IsInt()
  @ApiProperty()
  public readonly sequence: number

  @Column({
    name: 'objects_id',
    type: 'int',
    unsigned: true,
    nullable: false
  })
  public readonly objectId: number

  @ManyToOne(() => _Object, (u) => u.blocks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false
  })
  @JoinColumn({
    name: 'objects_id',
    referencedColumnName: 'id'
  })
  @ApiProperty()
  public readonly object: Object
}