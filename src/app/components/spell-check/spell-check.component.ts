import { Component, OnInit } from "@angular/core";
import dictionary from "../../../assets/dictionary.json";

@Component({
  selector: "app-spell-check",
  templateUrl: "./spell-check.component.html",
  styleUrls: ["./spell-check.component.css"]
})
export class SpellCheckComponent implements OnInit {
  // Declare a property to bind to
  sentence: string;
  constructor() {}
  ngOnInit() {}

  onSubmit({ value, valid }: { value: string; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      let typo_index = this.findTypos(this.sentence);
      if (typo_index.length !== 0) {
        let words = this.sentence.split(" ");
        typo_index.forEach(element => {
          words[element] = "[" + words[element] + "]";
        });
        this.sentence = words.join(" ");
      } else {
        alert("No typos were found!");
      }
    }
  }

  findTypos(sentence: string): number[] {
    let index = 0;
    let typo_index = [];
    let words = sentence.split(" ");
    words.forEach(word => {
      if (!dictionary.hasOwnProperty(word.toLowerCase())) {
        typo_index.push(index);
      }
      index++;
    });
    return typo_index;
  }
}
