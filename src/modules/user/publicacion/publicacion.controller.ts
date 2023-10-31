import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('publicacion')
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Post()
  create(@Body() createPublicacionDto: CreatePublicacion) {
    return this.publicacionService.create(createPublicacion);
  }

  @Get()
  findAll() {
    return this.publicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicacion: UpdatePublicacion) {
    return this.publicacionService.update(+id, updatePublicacion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicacionService.remove(+id);
  }
}
