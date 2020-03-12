import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FournisseurService } from './../../services/fournisseur.service';
import { Fournisseur } from './../../model/fournisseur';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  produits : Fournisseur[] = [];
  constructor(private produitService: FournisseurService, private router: Router) { }

  listData = new MatTableDataSource<Fournisseur>();

  displayedColumns: string[] = [
    "nom_fournisseur",
    "nom_court_fournisseur",
    "ville_fournisseur",
    "Adresse_fornisseu",
    "Tel_Fix_fornissseur",
    "Tel_mobile_fournisseur",
    "Fax_fournisseur",
    "adresse_email_fournisseur",
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
    this.router.navigate(["updateFournisseur"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }

}
