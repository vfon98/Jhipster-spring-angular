import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TrainingDemoSharedModule } from 'app/shared/shared.module';
import { TrainingDemoCoreModule } from 'app/core/core.module';
import { TrainingDemoAppRoutingModule } from './app-routing.module';
import { TrainingDemoHomeModule } from './home/home.module';
import { TrainingDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TrainingDemoSharedModule,
    TrainingDemoCoreModule,
    TrainingDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TrainingDemoEntityModule,
    TrainingDemoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TrainingDemoAppModule {}
