import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'ycwl-news',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
