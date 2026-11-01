import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "registration" })
export class Registration {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column()
  phone!: string;

  @Column()
  accountType!: string;

  @Column()
  address!: string;



}

