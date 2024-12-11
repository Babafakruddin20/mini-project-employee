import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-allemployees-details',
  templateUrl: './allemployees-details.component.html',
  styleUrls: ['./allemployees-details.component.css']
})
export class AllemployeesDetailsComponent {

  public employee:any={};
  constructor(private _activatedRoute:ActivatedRoute,private _employeeService:EmployeesService){
  _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // api call with data.id
        _employeeService.getEmployee(data.id).subscribe(
          (data:any)=>{
            this.employee = data;
          }
        )
      }
    )
  
}
}
