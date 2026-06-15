import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PersonsModule } from './persons/persons.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [UsuariosModule, PersonsModule, UsersModule, RolesModule, UserRoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
