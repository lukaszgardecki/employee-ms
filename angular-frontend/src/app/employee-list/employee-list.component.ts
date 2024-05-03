import { Component, Injectable, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee>;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
      this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(emplList => {
      this.employees = emplList;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(["update-employee", id]);
  }
}
