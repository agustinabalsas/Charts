import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoHorizontalComponent } from './grafico-horizontal/grafico-horizontal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficoHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
