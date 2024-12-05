import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anime } from "./Games";

@Entity("stores", { schema: "anime_database" })
export class Store {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug!: string;

  @Column("varchar", { name: "image_background", nullable: true, length: 255 })
  image_background!: string | null;

  @ManyToMany(() => Anime, (anime) => anime.stores)
  animes!: Anime[];
}
