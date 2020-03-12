import { FournisseurService } from './../../services/fournisseur.service';
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  isUpdate: Boolean = false;

  private produit : Fournisseur = {
    nom_fournisseur : "",
    nom_court_fournisseur : "",
    ville_fournisseur : "",
    Adresse_fornisseu : "",
    Tel_Fix_fornissseur : "",
    Tel_mobile_fournisseur: "",
    Fax_fournisseur: "",
    adresse_email_fournisseur: ""
  };

  
  constructor(private service: FournisseurService, private router: Router) {}

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  produits : Fournisseur[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.produit = this.service.form.value;
    this.service.update(this.produit).subscribe(produit => {
      console.log(produit);
      this.router.navigate(["fournisseur"]);
    });
  }

  onAnuller() {
    this.router.navigate(["fournisseur"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }

}
