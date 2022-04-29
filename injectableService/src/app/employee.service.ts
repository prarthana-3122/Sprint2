import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees():any[]{
    return [
      {
        ID:'A101',FirstName : 'Ashu', LastName:'Johar',
        Department:'IT',DOB:'29/03/1990',Gender:'Female'
      },
    ]
  }
}
