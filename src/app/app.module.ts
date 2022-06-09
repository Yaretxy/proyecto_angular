import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';





import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {MatCardMdImage} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSliderModule} from '@angular/material/slider';





//componentes
import { MascotasComponent } from './mascotas/mascotas.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { LoaddingButtonComponent } from './loadding-button/loadding-button.component';
import { ModalComponent } from './modal/modal.component';
import { TablaComponent } from './tabla/tabla.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MascotasComponent,
    AgregarMascotasComponent,
    LoaddingButtonComponent,
    ModalComponent,
    TablaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatChipsModule,
    MatStepperModule,
    MatSliderModule
  ],
  exports:[
    MatTableModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
