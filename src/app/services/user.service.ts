import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "jd@example.com",
        // age: 70,
        // address: {
        //   street: "50 Southern St",
        //   city: "Toronto",
        //   province: "ON"
        // },
        isActive: false,
        registered: new Date("08/12/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Spacey",
        email: "ks@example.com",
        // age: 67,
        // address: {
        //   street: "76 Main St",
        //   city: "Mississauga",
        //   province: "ON"
        // },
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Lynn",
        lastName: "Smith",
        email: "ls@example.com",
        // age: 26,
        // address: {
        //   street: "55 Apple St",
        //   city: "Toronto",
        //   province: "ON"
        // },
        isActive: false,
        registered: new Date("01/02/2019 08:30:00"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
    return this.data;
  }

  // getUsers(): User[] {
  //   console.log("Fetching users from service");
  //   return this.users;
  // }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    console.log("Using service to add user");
    this.users.unshift(user);
  }
}
