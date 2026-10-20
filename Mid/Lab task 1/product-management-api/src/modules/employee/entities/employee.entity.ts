import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column("int")
  age!: number;

  @Column("int")
  yearsOfWorking!: number;
}
