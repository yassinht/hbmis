import { Component, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  timelineItems: any[] = [
    {
      year: '2009-2011',
      title: 'Our Humble Beginnings',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    {
      year: '2009-2011',
      title: 'Our Humble Beginnings',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    {
      year: '2009-2011',
      title: 'Our Humble Beginnings',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    },
    // Add more timeline items as needed
  ];

  currentVisibleIndex: number = 0; // Keep track of the currently visible item index

  constructor() {}

  ngOnInit(): void {
    // Detect when elements are in the viewport and mark the first one as visible
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Check element visibility when scrolling
    this.checkVisibility();
  }

  checkVisibility() {
    // Check if the current visible item is still visible
    const currentVisibleItem = this.timelineItems[this.currentVisibleIndex];
    if (currentVisibleItem) {
      const element = document.querySelector(`[src="${currentVisibleItem.imageSrc}"]`);
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (!(bounding.top >= 0 && bounding.top <= window.innerHeight)) {
          // If the current item is no longer visible, mark it as not visible
          currentVisibleItem.visible = false;
        }
      }
    }

    // Check the next item
    const nextItem = this.timelineItems[this.currentVisibleIndex + 1];
    if (nextItem) {
      const element = document.querySelector(`[src="${nextItem.imageSrc}"]`);
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
          // If the next item enters the viewport, mark it as visible
          nextItem.visible = true;
          this.currentVisibleIndex++; // Update the currently visible index
        }
      }
    }
  }
}
