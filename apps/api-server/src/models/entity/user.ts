/**
 * user model
 */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200
  })
  userName: string;

  @Column({
    length: 200
  })
  password: string;

  @Column()
  create_at: number;
}