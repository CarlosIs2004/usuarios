import {
  Controller, Get, Post, Body, Param, Patch, Delete,
  ParseUUIDPipe, Inject,
} from '@nestjs/common';
import type { IPersonsService } from './interfaces/persons-service.interface';
import { CreatePersonUseCase } from './use-cases/create-person.usecase';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('persons')
export class PersonsController {
  constructor(
    private readonly createPersonUseCase: CreatePersonUseCase,
    @Inject('IPersonsService')
    private readonly personsService: IPersonsService,
  ) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.createPersonUseCase.execute(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.personsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personsService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.personsService.softDelete(id);
  }
}
