import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "lostandfound" })
export class Lostandfound {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;
}

