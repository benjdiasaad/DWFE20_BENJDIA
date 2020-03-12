import { FournisseurService } from './../../services/fournisseur.service';
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  
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


  constructor(private service: FournisseurService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  produis : Fournisseur[] = [];


  add() {
    console.log(this.produit);
    this.service.add(this.produit).subscribe(station => {
      this.produis = [station, ...this.produis];
      this.router.navigate(["fournisseur"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      console.log(this.produit);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }


}
