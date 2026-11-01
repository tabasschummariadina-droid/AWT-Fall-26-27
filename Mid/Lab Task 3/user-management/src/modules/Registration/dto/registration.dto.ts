import { IsNotEmpty, IsEmail, IsInt, IsString, IsIn, Max, Min, MinLength, Matches, IsNumber, IsOptional } from "class-validator";

export class CreateRegistrationDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  fullName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/)
  password!: string;

  @IsNotEmpty()
  @Min(18)
  @Max(60)
  @IsInt()

  age!: number;

  @IsNotEmpty()
  @Matches(/^01\d{9}$/)
  phone!: string;

  @IsNotEmpty()
  @IsIn(["student", "teacher"])
  accountType!: string;

  @IsOptional()
  @MinLength(10)
  @IsString()
  address?: string;

}

export class UpdateRegistrationDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  fullName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/)
  password?: string;

  @IsOptional()
  @Min(18)
  @Max(60)
  @IsInt()
  age?: number;

  @IsOptional()
  @Matches(/^01\d{9}$/)
  @IsString()
  phone?: string;

  @IsOptional()

  @IsIn(["student", "teacher"])
  accountType?: string;

  @IsOptional()
  @MinLength(10)
  @IsString()
  address?: string;

}