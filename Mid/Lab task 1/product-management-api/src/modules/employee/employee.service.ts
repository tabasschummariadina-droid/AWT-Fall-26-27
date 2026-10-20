import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(data: Partial<Employee>) {
    return this.employeeRepository.save(this.employeeRepository.create(data));
  }

  findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) throw new NotFoundException("Employee not found");
    return employee;
  }

  async update(id: number, data: Partial<Employee>) {
    const employee = await this.findOne(id);
    Object.assign(employee, data, { id });
    return this.employeeRepository.save(employee);
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);
    return { message: "Employee deleted successfully" };
  }
}
