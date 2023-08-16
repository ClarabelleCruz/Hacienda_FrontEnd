import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { FooterComponent } from './footer/components/footer/footer.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    MatIconModule,
    MatMenuModule,
    SplitButtonModule,
    MenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
