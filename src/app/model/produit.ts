export interface Produit {
        id?: number;
        nom_produit : String;
        nom_court_produit : String;
        prix_base_produit : number;
        prix_vente_produit : number;
        seuil_max_remise_produit : number;
        unite_produit: String;
        image_produit: String;
        quantite_initiale_stock: number;
        quantite_actuel_stock : number;
}
