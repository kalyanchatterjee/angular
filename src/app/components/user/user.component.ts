import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  // Properties
  user: User;
  //   Methods
  constructor() {}

  ngOnInit() {
    //   Runs when component is initialized
    this.user = {
      firstName: "John",
      lastName: "Doe",
      email: "jd@example.com"
      // age: 30,
      // address: {
      //   street: "50 Southern St",
      //   city: "Toronto",
      //   province: "ON"
      // }
    };
  }
}
