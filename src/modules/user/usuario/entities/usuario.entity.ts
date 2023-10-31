import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Publicacion } from '../../publicacion/entities/publicacion.entity';

@Entity()
export class usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number

  @OneToMany(() => Publicacion, (publicacion) => publicacion.usuario)
  publicaciones: Publicacion[];
}


