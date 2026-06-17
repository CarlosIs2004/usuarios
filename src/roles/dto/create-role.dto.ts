import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';
import { toLowerTrim } from '../../common/transforms';

export class CreateRoleDto {
  @IsString()
  @MaxLength(50)
  @toLowerTrim
  name: string;

  @IsOptional()
  @IsString()
  @toLowerTrim
  description?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
