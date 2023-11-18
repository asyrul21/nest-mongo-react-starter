import { IsOptional, IsString } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
