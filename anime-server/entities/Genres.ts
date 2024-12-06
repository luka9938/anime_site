import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anime } from "./Animes";

@Entity("genres", { schema: "animeDatabase" })
export class Genre {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @ManyToMany(() => Anime, (anime) => anime.genres)
  animes!: Anime[];
}
