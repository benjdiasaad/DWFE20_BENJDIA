import { ProfilService } from './../../services/profil.service';
import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

  
  private produit : Profil = {
    identifiant : "",
    profils : "",
    date_creation : "",
    photo_utilisateur: "",
    email_utilisateur : ""
  };


  constructor(private service: ProfilService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  produis : Profil[] = [];


  add() {
    console.log(this.produit);
    this.service.add(this.produit).subscribe(station => {
      this.produis = [station, ...this.produis];
      this.router.navigate(["profil"]);
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
