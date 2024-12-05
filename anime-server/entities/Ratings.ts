import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anime } from "./Animes";

@Entity("rating", { schema: "animedatabase" })
export class Rating {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @ManyToOne(() => Anime, (anime) => anime.rating)
  anime!: Anime;
}
