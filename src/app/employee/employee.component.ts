import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: any[] = [];
  newEmployee: any = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', contact: '', email: '', address: '' };
  }
}
