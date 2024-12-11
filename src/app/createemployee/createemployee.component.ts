import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {

  public employeeform: FormGroup = new FormGroup({
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),

    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),

    type: new FormControl(),

    // form array 1st step

    hikes: new FormArray([]),

    // travelfee: new FormControl(),
    // wifibillamount: new FormControl(),

  })
  // form array 2nd step

  get hikesFormArray() {
    return this.employeeform.get('hikes') as FormArray;
  }
  // form array 3rd step
  addhikes(){
    this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )

  }
  // formarray 5th step
  delete(i: number) {
    this.hikesFormArray.removeAt(i);
  }

  constructor(private _employeeService:EmployeesService) {

    this.employeeform.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'work from office') {
          this.employeeform.addControl('travelfee', new FormControl());
          this.employeeform.removeControl('wifibillamount');
        }
        else {
          this.employeeform.addControl('wifibillamount', new FormControl());
          this.employeeform.removeControl('travelfee');
        }
      }
    )
  }

  submit(){
    console.log(this.employeeform.value);
    this._employeeService.addEmployees(this.employeeform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!!");
      },
      (err:any)=>{
        alert("err.error");
      }
    )
  }


}
