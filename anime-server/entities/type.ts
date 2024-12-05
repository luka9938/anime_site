import { Column, Entity, ManyToMany } from "typeorm";
import { Anime } from "./Animes";

@Entity("type", { schema: "anime_database" })
export class type {
  @Column("int", { primary: true, name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug!: string;

  @ManyToMany(() => Anime, (anime) => anime.type)
  animes!: Anime[];
}
