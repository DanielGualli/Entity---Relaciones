import { Injectable } from '@nestjs/common';


@Injectable()
export class UsuarioService {
  create(createUsuario: CreateUsuario) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuario: UpdateUsuario) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
