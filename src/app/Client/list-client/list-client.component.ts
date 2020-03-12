import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  produits : Client[] = [];
  constructor(private produitService: ClientService, private router: Router) { }

  listData = new MatTableDataSource<Client>();

  displayedColumns: string[] = [
    "nom_client",
    "prenom_client",
    "statut_client",
    "photo_client",
    "telephone_client",
    "email_client",
    "adresse_client",
    "ville_client",
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
    this.router.navigate(["updateClient"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
