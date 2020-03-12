import { ProduitService } from './services/produit.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './Dashboard/side-menu/side-menu.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { UpdateFournisseurComponent } from './Fournisseur/update-fournisseur/update-fournisseur.component';
import { ListFournisseurComponent } from './Fournisseur/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './Fournisseur/add-fournisseur/add-fournisseur.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ListClientComponent } from './Client/list-client/list-client.component';
import { UpdateClientComponent } from './Client/update-client/update-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    UpdateFournisseurComponent,
    ListFournisseurComponent,
    AddFournisseurComponent,
    AddClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    ListProfilComponent,
    AddProfilComponent,
    UpdateProfilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
