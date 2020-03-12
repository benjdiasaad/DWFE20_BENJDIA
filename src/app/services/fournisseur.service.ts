import { Fournisseur } from './../model/fournisseur';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private url = "http://localhost:3000/fournisseur";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_fournisseur: new FormControl("", Validators.required),
    nom_court_fournisseur: new FormControl("", Validators.required),
    ville_fournisseur: new FormControl("", Validators.required),
    Adresse_fornisseu: new FormControl("", Validators.required),
    Tel_Fix_fornissseur: new FormControl("", Validators.required),
    Tel_mobile_fournisseur: new FormControl("", Validators.required),
    Fax_fournisseur: new FormControl("", Validators.required),
    adresse_email_fournisseur: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom_fournisseur : "",
      nom_court_fournisseur : "",
      ville_fournisseur : "",
      Adresse_fornisseu : "",
      Tel_Fix_fornissseur : "",
      Tel_mobile_fournisseur: "",
      Fax_fournisseur: "",
      adresse_email_fournisseur: ""
    });
  }

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Fournisseur[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


  add(fournisseur) {
    return this.http.post<Fournisseur>(this.url, fournisseur);
  }

  update(fournisseur) {
    return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
  }

  populateform(row) {
    this.form.setValue(row);
  }
  
}
