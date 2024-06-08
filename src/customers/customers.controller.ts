import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  @Get()
  listCustomers() {}
  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    console.log(body);
  }
  @Get('/:id')
  getCustomer(@Param('id') id: string) {
    console.log(id);
  }
}
