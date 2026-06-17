import {
  IsString, IsEmail, IsBoolean, IsOptional,
  MinLength, MaxLength, Length, Matches,
} from 'class-validator';
import { toLowerSingleSpace, toLowerTrim, trimOnly } from '../../common/transforms';

export class CreatePersonDto {
  @IsString()
  @MaxLength(30)
  @Matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/, { message: 'firstName solo debe contener letras' })
  @toLowerSingleSpace
  firstName: string;

  @IsString()
  @MaxLength(30)
  @Matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/, { message: 'lastName solo debe contener letras' })
  @toLowerSingleSpace
  lastName: string;

  @IsString()
  @MaxLength(30)
  @Matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]*$/, { message: 'middleName solo debe contener letras' })
  @toLowerSingleSpace
  middleName: string;

  @IsString()
  @Length(10, 10, { message: 'dni debe tener exactamente 10 caracteres' })
  @Matches(/^\d+$/, { message: 'dni solo debe contener números' })
  @trimOnly
  dni: string;

  @IsEmail({}, { message: 'email no es válido' })
  @MaxLength(50)
  @toLowerTrim
  email: string;

  @IsString()
  @MaxLength(15)
  @Matches(/^\d+$/, { message: 'phone solo debe contener números' })
  @trimOnly
  phone: string;

  @IsString()
  @MaxLength(30)
  @Matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/, { message: 'nationality solo debe contener letras' })
  @toLowerSingleSpace
  nationality: string;

  @IsString()
  @trimOnly
  address: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'username solo acepta letras, números y guión bajo' })
  @toLowerTrim
  username: string;

  @IsString()
  @MinLength(11, { message: 'password debe tener al menos 11 caracteres' })
  @MaxLength(60)
  password: string;
}
