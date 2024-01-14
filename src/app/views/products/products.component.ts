import { Component, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  currentVisibleIndex: number = 0; // Keep track of the currently visible item index

  constructor() {}

  ngOnInit(): void {

  }




}
