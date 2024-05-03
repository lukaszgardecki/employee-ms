import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
    this.saveEmployee();
    this.goToEmployeeList();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(emp => {

    });
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"]);
  }
}
