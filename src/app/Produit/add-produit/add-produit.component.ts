import { ProduitService } from './../../services/produit.service';
import { Produit } from './../../model/produit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {


  private produit : Produit = {
    nom_produit : "",
    nom_court_produit : "",
    prix_base_produit : 1,
    prix_vente_produit : 1,
    seuil_max_remise_produit : 1,
    unite_produit: "",
    image_produit: "",
    quantite_initiale_stock: 1,
    quantite_actuel_stock : 1
  };


  constructor(private service: ProduitService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  produis : Produit[] = [];


  add() {
    console.log(this.produit);
    this.service.add(this.produit).subscribe(station => {
      this.produis = [station, ...this.produis];
      this.router.navigate(["/"]);
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
