import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "http://localhost:3000/client";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_client: new FormControl("", Validators.required),
    prenom_client: new FormControl("", Validators.required),
    statut_client: new FormControl("", Validators.required),
    photo_client: new FormControl("", Validators.required),
    telephone_client: new FormControl("", Validators.required),
    email_client: new FormControl("", Validators.required),
    adresse_client: new FormControl("", Validators.required),
    ville_client: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom_client : "",
      prenom_client : "",
      statut_client : "",
      photo_client : "",
      telephone_client: "",
      email_client: "",
      adresse_client: "",
      ville_client : ""
    });
  }

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Client[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


  add(produit) {
    return this.http.post<Client>(this.url, produit);
  }

  update(station) {
    return this.http.put(`${this.url}/${station.id}`, station);
  }

  populateform(row) {
    this.form.setValue(row);
  }
}
