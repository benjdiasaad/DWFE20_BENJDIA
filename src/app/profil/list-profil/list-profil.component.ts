import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProfilService } from './../../services/profil.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  
  produits : Profil[] = [];
  constructor(private produitService: ProfilService, private router: Router) { }

  listData = new MatTableDataSource<Profil>();

  displayedColumns: string[] = [
    "identifiant",
    "profils",
    "date_creation",
    "email_utilisateur",
    "actions"
  ];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  ngOnInit() {
    this.getProduit();
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  getProduit(){
    this.produitService.findAll().subscribe(res => {
      if (!res) return;
      console.log(res);
      this.listData = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }


  delete(id) {
    this.produitService.delete(id).subscribe(() => {
      this.produits = this.produits.filter(
        produit => produit.id != id
      );
      console.log(this.produits);
      this.getProduit();
    });
  }

  onEdit(row) {
    console.log(row);
    this.produitService.populateform(row);
    this.router.navigate(["updateProfil"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }

}
