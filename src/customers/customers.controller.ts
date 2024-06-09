import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('/:id')
  findCustomer(@Param('id') id: string) {
    return this.customersService.findOne(parseInt(id));
  }

  @Get()
  findAllCustomer(@Query('email') email: string) {
    return this.customersService.find(email);
  }

  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    this.customersService.create(body.firstName, body.lastName, body.email);
  }
  @Get('/:id')
  getCustomer(@Param('id') id: number) {
    const customer = this.customersService.findOne(id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  @Patch('/:id')
  updateCustomer(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    return this.customersService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeCustomer(@Param('id') id: string) {
    return this.customersService.remove(parseInt(id));
  }
}
