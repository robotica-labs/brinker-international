import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(public customersService: CustomersService) {}

  @Get()
  listCustomers() {
    return this.customersService.getCustomers();
  }
  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    return this.customersService.createCustomer(
      body.firstName,
      body.lastName,
      body.email,
    );
  }
  @Get('/:id')
  async getCustomer(@Param('id') id: number) {
    const customer = await this.customersService.getCustomer(id);

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }
}
