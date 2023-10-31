import { Module } from '@nestjs/common';
import { PublicacionModule } from './publicacion/publicacion.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PublicacionModule, UsuarioModule]
})
export class UserModule {}
