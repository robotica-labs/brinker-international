"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRepository = void 0;
const promises_1 = require("fs/promises");
const common_1 = require("@nestjs/common");
let CustomersRepository = class CustomersRepository {
    async getCustomer(id) {
        const contents = await (0, promises_1.readFile)('customers.json', 'utf8');
        const customers = JSON.parse(contents);
        return customers[id];
    }
    async getCustomers() {
        const contents = await (0, promises_1.readFile)('customers.json', 'utf8');
        const customers = JSON.parse(contents);
        return customers;
    }
    async createCustomer(firstName, lastName, email) {
        const contents = await (0, promises_1.readFile)('customers.json', 'utf8');
        const customers = JSON.parse(contents);
        const id = Math.floor(Math.random() * 99);
        customers[id] = { id, firstName, lastName, email };
        await (0, promises_1.writeFile)('customers.json', JSON.stringify(customers));
    }
};
exports.CustomersRepository = CustomersRepository;
exports.CustomersRepository = CustomersRepository = __decorate([
    (0, common_1.Injectable)()
], CustomersRepository);
//# sourceMappingURL=customers.repository.js.map