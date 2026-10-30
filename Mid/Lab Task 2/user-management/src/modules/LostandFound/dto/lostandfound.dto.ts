import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateLostandfoundDto {

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsNumber()
  price!: number;

}

export class UpdateLostandfoundDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  price?: number;
}

