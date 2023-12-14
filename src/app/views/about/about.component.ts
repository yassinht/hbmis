import { Component, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    // Define the animation trigger
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Hidden state
      transition(':enter, * => 1', animate('500ms', style({ opacity: 1 }))), // Transition to visible
    ]),
  ],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
