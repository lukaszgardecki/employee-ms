import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee>

  ngOnInit(): void {
      this.employees = [
        {
          id: 1,
          firstName: "Thomas",
          lastName: "Gratter",
          emailId: "t.gratter@gmail.com"
        },
        {
          id: 2,
          firstName: "Kate",
          lastName: "Richardson",
          emailId: "k.richardson@gmail.com"
        }
      ]
  }  
}
