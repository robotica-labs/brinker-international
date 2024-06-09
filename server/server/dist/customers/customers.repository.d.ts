export declare class CustomersRepository {
    getCustomer(id: number): Promise<any>;
    getCustomers(): Promise<any>;
    createCustomer(firstName: string, lastName: string, email: string): Promise<void>;
}
