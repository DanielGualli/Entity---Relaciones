import { Injectable } from '@nestjs/common';
import { CreatepublicacionDto } from './create-publicacion';
import { UpdateDto } from './update-publicacion';

@Injectable()
export class DistribuidorService {
  create(createpublicacion: Createpublicacion) {
    return 'This action adds a new publicacion';
  }

  findAll() {
    return `This action returns all publicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicacion`;
  }

  update(id: number, updatepublicacion: UpdateDto) {
    return `This action updates a #${id} publicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicacion`;
  }
}
