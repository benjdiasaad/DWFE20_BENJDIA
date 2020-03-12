import { ClientService } from './../../services/client.service';
import { Client } from './../../model/client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  private produit : Client = {
    nom_client : "",
    prenom_client : "",
    statut_client : "",
    photo_client : "",
    telephone_client: "",
    email_client: "",
    adresse_client: "",
    ville_client : ""
  };


  constructor(private service: ClientService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  produis : Client[] = [];


  add() {
    console.log(this.produit);
    this.service.add(this.produit).subscribe(station => {
      this.produis = [station, ...this.produis];
      this.router.navigate(["client"]);
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
