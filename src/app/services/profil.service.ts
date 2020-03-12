import { Profil } from './../model/profil';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {


  private url = "http://localhost:3000/profil";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    identifiant: new FormControl("", Validators.required),
    profils: new FormControl("", Validators.required),
    date_creation: new FormControl("", Validators.required),
    photo_utilisateur: new FormControl("", Validators.required),
    email_utilisateur: new FormControl("", Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      identifiant : "",
      profils : "",
      date_creation : "",
      photo_utilisateur: "",
      email_utilisateur : ""
   
    });
  }

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Profil[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


  add(produit) {
    return this.http.post<Profil>(this.url, produit);
  }

  update(station) {
    return this.http.put(`${this.url}/${station.id}`, station);
  }

  populateform(row) {
    this.form.setValue(row);
  }

  
}
