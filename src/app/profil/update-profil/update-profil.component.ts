import { ProfilService } from './../../services/profil.service';
import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  isUpdate: Boolean = false;

  private produit : Profil = {
    identifiant : "",
    profils : "",
    date_creation : "",
    photo_utilisateur: "",
    email_utilisateur : ""
  };

  
  constructor(private service: ProfilService, private router: Router) {}

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  produits : Profil[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.produit = this.service.form.value;
    this.service.update(this.produit).subscribe(produit => {
      console.log(produit);
      this.router.navigate(["profil"]);
    });
  }

  onAnuller() {
    this.router.navigate(["profil"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }

}
