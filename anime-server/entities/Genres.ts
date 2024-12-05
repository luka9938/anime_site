import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anime } from "./Animes";

@Entity("genres", { schema: "anime_database" })
export class Genre {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug!: string;

  @Column("varchar", { name: "image_background", nullable: true, length: 255 })
  image_background!: string | null;

  @ManyToMany(() => Anime, (anime) => anime.genres)
  animes!: Anime[];
}
