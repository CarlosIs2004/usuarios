import { Expose, Type } from 'class-transformer';
import { ResponseUserDto } from '../../users/dto/response-user.dto';

export class ResponsePersonDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  middleName: string;

  @Expose()
  dni: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  nationality: string;

  @Expose()
  address: string;

  @Expose()
  active: boolean;

  @Expose()
  @Type(() => ResponseUserDto)
  user?: ResponseUserDto;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
