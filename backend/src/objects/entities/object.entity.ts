import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsPositive, IsString } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Project } from '../../projects/entities/project.entity'
import { Block } from '../../blocks/entities/block.entity'

@Entity({
  name: 'objects'
})
export class _Object {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  @IsInt()
  @IsPositive()
  @ApiProperty()
  public readonly id: number

  @Column({
    name: 'image',
    type: 'varchar',
    nullable: false
  })
  @IsString()
  @ApiProperty()
  public readonly image: string

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false
  })
  @IsString()
  @ApiProperty()
  public readonly name: string

  @Column({
    name: 'projects_id',
    type: 'int',
    unsigned: true,
    nullable: false
  })
  public readonly projectId: number

  @ManyToOne(() => Project, (u) => u.objects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false
  })
  @JoinColumn({
    name: 'projects_id',
    referencedColumnName: 'id'
  })
  @ApiProperty()
  public readonly project: Project

  @OneToMany(() => Block, (c) => c.object)
  @ApiProperty()
  public readonly blocks: Block[]
}