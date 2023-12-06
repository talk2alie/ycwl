import { Routes } from '@angular/router';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhereWeWorkComponent } from './where-we-work/where-we-work.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { NewsComponent } from './news/news.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { ImpactStoriesComponent } from './impact-stories/impact-stories.component';
import { OurCentersComponent } from './our-centers/our-centers.component';
import { InnovationHubComponent } from './innovation-hub/innovation-hub.component';
import { DonateComponent } from './donate/donate.component';

export const routes: Routes = [
  { path: 'what-we-do', component: WhatWeDoComponent, title: 'YCWL | What We Do' },
  { path: 'where-we-work', component: WhereWeWorkComponent, title: 'YCWL | Where We Work' },
  { path: 'who-we-are', component: WhoWeAreComponent, title: 'YCWL | Who We Are' },
  { path: 'news', component: NewsComponent, title: 'YCWL | News' },
  { path: 'get-involved', component: GetInvolvedComponent, title: 'YCWL | Get Involved' },
  { path: 'impact-stories', component: ImpactStoriesComponent, title: 'YCWL | Impact Stories' },
  { path: 'our-centers', component: OurCentersComponent, title: 'YCWL | Our Centers' },
  { path: 'innovation-hub', component: InnovationHubComponent, title: 'YCWL | Innovation Hub' },
  { path: 'donate', component: DonateComponent, title: 'YCWL | Donate' },
  { path: '',   redirectTo: '/what-we-do', pathMatch: 'full' },
  { path: '**', component: WhatWeDoComponent }
];
