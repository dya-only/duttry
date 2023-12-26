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
  public readonly blockType: 'start' | 'action' | 'logical'

  @Column({
    name: 'block_action',
    type: 'varchar',
    nullable: true
  })
  @IsString()
  @ApiProperty()
  public readonly blockAction: string | null

  @Column({
    name: 'prev_block_id',
    type: 'int',
    nullable: true
  })
  @IsInt()
  @ApiProperty()
  public readonly prevBlockId: number | null

  @Column({
    name: 'next_block_id',
    type: 'int',
    nullable: true
  })
  @IsInt()
  @ApiProperty()
  public readonly nextBlockId: number | null

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