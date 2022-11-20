import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Dummyusers from 'src/assets/Dummy_users.json';
import { MatTableModule } from '@angular/material/table';

interface USERS {
  id: Number;
  firstName: String;
  lastName: String;
  username: String;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  constructor(private httpService: HttpClient, private router: Router) {}

  data: any[] | undefined;

  employees: USERS[] = Dummyusers;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'username',
    'action',
  ];
  dataSource = this.employees;

  ngOnInit(): void {
    this.httpService.get('./assets/Dummy_users.json').subscribe(
      (data) => {
        this.data = data as string[]; // FILL THE ARRAY WITH DATA.
        console.log('All data', this.data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onView(id: number) {
    // console.log(id)
    this.router.navigate([`test/${id}`]);
  }
}
