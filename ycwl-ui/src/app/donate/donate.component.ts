import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'ycwl-donate',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

}
