import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent {
  employees:any=[];
  term:string='';
  column:string='';
  order:string='';
  public page:number=1;
  constructor(private _employeesService:EmployeesService){
   _employeesService.getEmployees().subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }
  search(){
    this._employeesService.getFilteredEmployees(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("internal server error");
      } 
    )
  }
  sort(){
    this._employeesService.getSortedEmployees(this.column,this.order).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("internal server error");
      } 
    ) 
  }
  pagination(){
    this._employeesService.getPagedEmployees(this.page).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        console.log('internal server error');
      } 
    )
  }
  delete(id:string){
    this._employeesService.deleteEmployees(id).subscribe(
      (data:any)=>{
        alert('deleted successfully')
        location.reload();
      },
      (err:any)=>{
        alert(err. error);
      } 
    )
  }

}
