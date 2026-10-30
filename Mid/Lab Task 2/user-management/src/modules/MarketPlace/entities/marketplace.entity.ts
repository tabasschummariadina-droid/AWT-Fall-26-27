import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "marketplace" })
export class Marketplace {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;


}

