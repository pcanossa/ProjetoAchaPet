import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
