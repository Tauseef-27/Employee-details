import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { TestComponent } from './employee-table/test/test.component';

const routes: Routes = [
  {path: '', component: EmployeeTableComponent},
  {path: 'test/:id', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
