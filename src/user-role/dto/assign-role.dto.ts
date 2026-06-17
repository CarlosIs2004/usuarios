import { IsString, Matches } from 'class-validator';
import { trimOnly } from '../../common/transforms';

export class AssignRoleDto {
  @IsString()
  @Matches(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
  @trimOnly
  idUser: string;

  @IsString()
  @Matches(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
  @trimOnly
  idRole: string;
}
