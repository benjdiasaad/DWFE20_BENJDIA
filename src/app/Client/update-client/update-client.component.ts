import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {


  isUpdate: Boolean = false;

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

  
  constructor(private service: ClientService, private router: Router) {}

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  produits : Client[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.produit = this.service.form.value;
    this.service.update(this.produit).subscribe(produit => {
      console.log(produit);
      this.router.navigate(["client"]);
    });
  }

  onAnuller() {
    this.router.navigate(["client"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }



}
