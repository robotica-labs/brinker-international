import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}
