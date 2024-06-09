import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    findCustomer(id: string): Promise<import("./customer.entity").Customer>;
    findAllCustomer(email: string): Promise<import("./customer.entity").Customer[]>;
    createCustomer(body: CreateCustomerDto): void;
    getCustomer(id: number): Promise<import("./customer.entity").Customer>;
    updateCustomer(id: string, body: UpdateCustomerDto): Promise<import("./customer.entity").Customer>;
    removeCustomer(id: string): Promise<import("./customer.entity").Customer>;
}
