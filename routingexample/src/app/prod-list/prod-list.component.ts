import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  prodlistcomponent = "Inside product list component";
  constructor() { }

  ngOnInit(): void {
  }

}
