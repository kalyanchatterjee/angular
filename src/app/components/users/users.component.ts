import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  showUserForm: boolean;
  // When the parameter is {static: true}, the form cannot clear with this.form.reset() and throws an error. When there is no second argument, Angular cannot read it.
  @ViewChild("userForm", { static: false }) form: any;
  data: any;

  // Dependency injection
  // 'private' because this variable can only be used in the class
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.showExtended = true;
    this.loaded = false;
    this.enableAdd = false;
    this.showUserForm = false;

    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    // Doing this to show a "Loading users..." message
    // setTimeout(() => {
    //   this.users = this.dataService.getUsers();
    //   this.loaded = true;
    // }, 2000);
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);
  //   // Clear the form
  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //     email: ""
  //     // age: null,
  //     // address: {
  //     //   street: "",
  //     //   city: "",
  //     //   province: ""
  //     // }
  //   };
  // }

  // onSubmit(event) {
  //   event.preventDefault();
  //   console.log("123");
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
