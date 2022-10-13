import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  employeecode = ""
  employeename = ""
  designation = ""
  gender = ""
  company=""
  salary = ""
  companyaddress = ""
  number = ""
  email = ""
  mobile = ""
  bloodgroup = ""
  date = ""
  
  readvalues = () => {
    let data={
    "employeecode": this.employeecode,
      "employeename": this.employeename,
      "designation": this.designation,
      "gender": this.gender,
      "company": this.company,
      "salary": this.salary,
      "companyaddress": this.companyaddress,
      "number": this.number,
      "email": this.email,
      "mobile": this.mobile,
      "bloodgroup": this.bloodgroup,
      "date": this.date
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
