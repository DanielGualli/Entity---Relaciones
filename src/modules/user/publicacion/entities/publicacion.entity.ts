import { Entity, Column, PrimaryGeneratedColumn, @ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Publicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  telefono: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.publicaciones)
  usuario: Usuario;
}
