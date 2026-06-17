import { Expose, Exclude } from 'class-transformer';

export class ResponseUserDto {
  @Expose()
  idPerson: string;

  @Expose()
  username: string;

  @Exclude()
  passwordHash: string;

  @Expose()
  active: boolean;

  @Expose()
  lastLogin?: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
