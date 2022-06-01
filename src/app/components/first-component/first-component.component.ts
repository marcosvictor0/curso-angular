import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Marcos';
  age: number = 21;
  job: string = 'Programador';
  hobbies = [
    "assistir", " Jogar", " Ler",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
