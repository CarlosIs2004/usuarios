import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { toLowerTrim } from '../../common/transforms';

export class CreateUserDto {
  @IsString()
  idPerson: string;

  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'username solo acepta letras, números y guión bajo' })
  @toLowerTrim
  username: string;

  @IsString()
  @MinLength(11, { message: 'password debe tener al menos 11 caracteres' })
  @MaxLength(255)
  password: string;
}
