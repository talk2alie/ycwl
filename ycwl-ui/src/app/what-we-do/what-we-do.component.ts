import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ycwl-what-we-do',
  standalone: true,
  imports: [BannerComponent, NgbModule],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

}
