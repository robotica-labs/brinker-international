import { IsString, IsEmail, IsInt } from 'class-validator';

export class CreateCustomerDto {
  @IsInt() // int for simplicity
  id: BigInteger;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}
