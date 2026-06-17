import {
  Controller, Get, Post, Body, Param, Delete,
  ParseUUIDPipe, Inject,
} from '@nestjs/common';
import type { IUserRoleService } from './interfaces/user-role-service.interface';
import { AssignRoleDto } from './dto/assign-role.dto';

@Controller('user-role')
export class UserRoleController {
  constructor(
    @Inject('IUserRoleService')
    private readonly userRoleService: IUserRoleService,
  ) {}

  @Post()
  assignRole(@Body() assignRoleDto: AssignRoleDto) {
    return this.userRoleService.assignRole(assignRoleDto);
  }

  @Delete(':idUser/:idRole')
  removeRole(
    @Param('idUser', ParseUUIDPipe) idUser: string,
    @Param('idRole', ParseUUIDPipe) idRole: string,
  ) {
    return this.userRoleService.removeRole(idUser, idRole);
  }

  @Get('user/:idUser')
  findRolesByUser(@Param('idUser', ParseUUIDPipe) idUser: string) {
    return this.userRoleService.findRolesByUser(idUser);
  }

  @Get('role/:idRole')
  findUsersByRole(@Param('idRole', ParseUUIDPipe) idRole: string) {
    return this.userRoleService.findUsersByRole(idRole);
  }
}
