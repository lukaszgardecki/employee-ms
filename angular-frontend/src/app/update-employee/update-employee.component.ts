import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //pobierz ze ścieżki adresu wartość segmentu 'id' i przypisz go do zmiennej id;
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe(emp => {
      this.employee = emp;
    });
  }

  onSubmit() {
    this.updateEmployee();
    this.goToEmployeeList();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {

    });
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"]);
  }
}
