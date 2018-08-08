import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { Header } from '../components/header/header.component';
import { Navbar } from '../components/navbar/navbar.component';
import { About } from '../components/about/about.component';
import { News } from '../components/news/news.component';
import { PriceList } from '../components/price-list/price-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  { path: 'news', component: News },
  { path: 'about', component: About },
  { path: 'pricelist', component: PriceList },
  //{ path: 'hero/:id', component: HeroDetailComponent },
  //{
  //  path: 'heroes',
  //  component: HeroListComponent,
  //  data: { title: 'Heroes List' }
  //},
  //{
  //  path: '',
  //  redirectTo: '/heroes',
  //  pathMatch: 'full'
  //},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Navbar,
    About,
    News,
    PriceList
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
