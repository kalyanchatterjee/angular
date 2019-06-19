import { Component } from "@angular/core";
import { templateSourceUrl } from "@angular/compiler";

@Component({
  selector: "app-user",
  //   template: "<h2>John Doe</h2>"
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address = {
    street: "",
    city: "",
    state: ""
  };
  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  //   Mixed array
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  //   Methods
  constructor() {
    //   Runs when component is initialized
    this.firstName = "John";
    this.lastName = "Smith";
    this.age = 30;
    this.address.street = "50 Main St.";
    this.address.city = "Toronto";
    this.address.state = "Ontario";
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ["Hello", "World"];
    this.mixedArray = ["Hello", true, 1];
    this.myTuple = ["Apple", 1, false];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumbers(2, 3));
  }
  // You can also assign types to function parameters
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  sayHello() {
    //   ES6 way
    console.log(`Hello ${this.firstName}`);
    // Same as
    // console.log('Hello ' + this.firstName).
  }

  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }
}
