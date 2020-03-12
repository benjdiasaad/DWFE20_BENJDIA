import { Produit } from './../model/produit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = "http://localhost:3000/produit";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_produit: new FormControl("", Validators.required),
    nom_court_produit: new FormControl("", Validators.required),
    prix_base_produit: new FormControl("", Validators.required),
    prix_vente_produit: new FormControl("", Validators.required),
    seuil_max_remise_produit: new FormControl("", Validators.required),
    unite_produit: new FormControl("", Validators.required),
    image_produit: new FormControl("", Validators.required),
    quantite_initiale_stock: new FormControl("", Validators.required),
    quantite_actuel_stock: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom_produit : "",
      nom_court_produit : "",
      prix_base_produit : null,
      prix_vente_produit : null,
      seuil_max_remise_produit : null,
      unite_produit: "",
      image_produit: "",
      quantite_initiale_stock: null,
      quantite_actuel_stock : null
    });
  }

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Produit[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


  add(produit) {
    return this.http.post<Produit>(this.url, produit);
  }

  update(station) {
    return this.http.put(`${this.url}/${station.id}`, station);
  }

  populateform(row) {
    this.form.setValue(row);
  }
}
