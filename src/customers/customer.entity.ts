import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsEmail, IsString } from 'class-validator';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
