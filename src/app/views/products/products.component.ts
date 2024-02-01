import { Component, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  currentVisibleIndex: number = 0; // Keep track of the currently visible item index
  products = [
    { name: 'Winner Flow', image: '../../../assets/img/sflow1.png', description: 'Le Winner Flow est un embout d\'exsufflation utilisé lors d\'exercices respiratoires. Il assure un débit ventilatoire constant.' },
    { name: 'STIM-Flow', image: '../../../assets/img/sflow2.png', description: 'Le STIMFLOW® est un stimulateur biofeedback abdomino-périnéal, associé au Winner Flow, permettant de rééduquer les pathologies de la statique pelvienne.' },
    { name: 'Scores', image: '../../../assets/img/score.png', description: 'Application de Scores et d\'Échelles d\'auto-évaluation référencés scientifiqument pour les professionnels de santé.' },
    // Add more products...
  ];
  constructor() {}

  ngOnInit(): void {

  }




}
