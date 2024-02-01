import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productName: string;
  selectedProduct: any; // Add a property to store the selected product
  otherProducts: any[]; // Add a property to store other products
  limit: number = 1; // Initial limit

  products = [
    { name: 'Winner Flow', image: '../../../assets/img/sflow1.png', description: 'Le Winner Flow est un embout d\'exsufflation utilisé lors d\'exercices respiratoires. Il assure un débit ventilatoire constant.' },
    { name: 'STIM-Flow', image: '../../../assets/img/sflow2.png', description: 'Le STIMFLOW® est un stimulateur biofeedback abdomino-périnéal, associé au Winner Flow, permettant de rééduquer les pathologies de la statique pelvienne.' },
    { name: 'Scores', image: '../../../assets/img/score.png', description: 'Application de Scores et d\'Échelles d\'auto-évaluation référencés scientifiquement pour les professionnels de santé.' },
    { name: 'e1', image: '../../../assets/img/e1.webp', description: 'Application de Scores et d\'Échelles d\'auto-évaluation référencés scientifiquement pour les professionnels de santé.' },
    { name: 'e2', image: '../../../assets/img/e2.webp', description: 'Application de Scores et d\'Échelles d\'auto-évaluation référencés scientifiquement pour les professionnels de santé.' },
    { name: 'e3', image: '../../../assets/img/e3.webp', description: 'Application de Scores et d\'Échelles d\'auto-évaluation référencés scientifiquement pour les professionnels de santé.' },


  ];
  constructor(private route: ActivatedRoute,private router: Router,private el: ElementRef) { 


  

     window.scrollTo(0, 0);
    

   
   
  }
  @ViewChild('topElement') topElement: ElementRef;

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params) => {
      this.productName = params.get('productName');
      this.selectedProduct = this.products.find(
        (product) => product.name === this.productName
      );
      this.otherProducts = this.products.filter(
        (product) => product.name !== this.productName
      );
    });
  }

 

  scrollToTop() {
    if (this.topElement) {
      this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}