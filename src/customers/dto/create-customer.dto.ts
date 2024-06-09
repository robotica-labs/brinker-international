import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsInt() // int for simplicity
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}
