import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { UpdateFournisseurComponent } from './Fournisseur/update-fournisseur/update-fournisseur.component';
import { AddFournisseurComponent } from './Fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { ListClientComponent } from './Client/list-client/list-client.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFournisseurComponent } from './Fournisseur/list-fournisseur/list-fournisseur.component';
import { UpdateClientComponent } from './Client/update-client/update-client.component';


const routes: Routes = [
  { path: '', 
  component: ListProduitComponent },
  { path: 'produit', 
  component: ListProduitComponent },
  { path: 'addProdiut', 
  component: AddProduitComponent },
  { path: 'updateProdiut', 
  component: UpdateProduitComponent },
  { path: 'fournisseur', 
  component: ListFournisseurComponent },
  { path: 'addFournisseur', 
  component: AddFournisseurComponent },
  { path: 'updateFournisseur', 
  component: UpdateFournisseurComponent },
  { path: 'client', 
  component: ListClientComponent },
  { path: 'addClient', 
  component: AddClientComponent },
  { path: 'updateClient', 
  component: UpdateClientComponent },
  { path: 'profil', 
  component: ListProfilComponent },
  { path: 'addProfil', 
  component: AddProfilComponent },
  { path: 'updateProfil', 
  component: UpdateProfilComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
