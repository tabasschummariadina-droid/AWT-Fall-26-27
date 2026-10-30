import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateMarketplaceDto {
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

export class UpdateMarketplaceDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}

