import { Column, Entity, ManyToMany } from "typeorm";
import { Anime } from "./Animes";

@Entity("type", { schema: "animedatabase" })
export class Type {
  @Column("int", { primary: true, name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @ManyToMany(() => Anime, (anime) => anime.type)
  anime!: Anime[];
}
