import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

// Assuming `Genre` is related to anime genres
import { Genre } from "./Genres";

// You can define the Anime entity based on your provided Anime interface

@Entity("anime", { schema: "animedatabase" })
export class Anime {
  @PrimaryGeneratedColumn({ type: "int", name: "mal_id" })
  id!: number;

  @Column("varchar", { name: "title", length: 255 })
  title!: string;

  @Column("varchar", { name: "title_english", nullable: true, length: 255 })
  title_english!: string | null;

  @Column("varchar", { name: "title_japanese", nullable: true, length: 255 })
  title_japanese!: string | null;

  @Column("varchar", { name: "type", length: 50 })
  type!: string;

  @Column("varchar", { name: "source", length: 255 })
  source!: string;

  @Column("int", { name: "episodes", nullable: true })
  episodes!: number | null;

  @Column("varchar", { name: "status", length: 100 })
  status!: string;

  @Column("varchar", { name: "airing", length: 1, nullable: true })
  airing!: string;

  @Column("varchar", { name: "rating", length: 50 })
  rating!: string;

  @Column("int", { name: "score" })
  score!: number;

  @Column("int", { name: "popularity" })
  popularity!: number;

  @Column("text", { name: "synopsis", nullable: true })
  synopsis!: string | null;

  @Column("text", { name: "background", nullable: true })
  background!: string | null;

  @Column("varchar", { name: "season", length: 50, nullable: true })
  season!: string | null;

  @Column("int", { name: "year", nullable: true })
  year!: number | null;

  @Column("date", { name: "aired_from", nullable: true })
  aired_from!: Date | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  image_url!: string | null;

  @ManyToMany(() => Genre, (genre) => genre.animes)
  @JoinTable({
    name: "anime_genres",
    joinColumns: [{ name: "anime_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "genre_id", referencedColumnName: "id" }],
    schema: "animedatabase",
  })
  genres!: Genre[];

  // Example of how to structure the trailer data
  @Column("varchar", { name: "trailer_youtube_id", nullable: true })
  trailer_youtube_id!: string | null;

  @Column("varchar", { name: "trailer_url", nullable: true })
  trailer_url!: string | null;

  @Column("varchar", { name: "trailer_embed_url", nullable: true })
  trailer_embed_url!: string | null;

  // Trailer images
  @Column("varchar", { name: "trailer_image_url", nullable: true })
  trailer_image_url!: string | null;
}
