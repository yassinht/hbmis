import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner-flow-details',
  templateUrl: './winner-flow-details.component.html',
  styleUrls: ['./winner-flow-details.component.css']
})
export class WinnerFlowDetailsComponent implements OnInit {

  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
