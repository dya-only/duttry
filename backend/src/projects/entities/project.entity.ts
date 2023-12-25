import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsInt, IsPositive, IsString, Length } from 'class-validator'
import { User } from 'src/users/entities/user.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { _Object } from '../../objects/entities/object.entity'

@Entity({
  name: 'projects'
})
export class Project {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  @IsInt()
  @IsPositive()
  @ApiProperty()
  public readonly id: number

  @Column({
    type: 'varchar',
    unique: true
  })
  @Length(1, 20)
  @IsString()
  @ApiProperty()
  public readonly name: string

  @Column({
    name: 'is_public',
    type: 'boolean',
    nullable: false
  })
  @IsBoolean()
  public readonly isPublic: boolean

  @Column({
    name: 'users_id',
    type: 'int',
    unsigned: true,
    nullable: false
  })
  public readonly userId: number

  @ManyToOne(() => User, (u) => u.projects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false
  })
  @JoinColumn({
    name: 'users_id',
    referencedColumnName: 'id'
  })
  @ApiProperty()
  public readonly user: User

  @OneToMany(() => _Object, (c) => c.project)
  @ApiProperty()
  public readonly objects: _Object[]

  @CreateDateColumn({
    name: 'createdat',
    type: 'timestamp'
  })
  @IsDate()
  @ApiProperty()
  public readonly createdAt: Date

  @UpdateDateColumn({
    name: 'updatedat',
    type: 'timestamp'
  })
  @IsDate()
  @ApiProperty()
  public readonly updatedAt: Date
}