-- Table "VENDEUR"
CREATE TABLE VENDEUR (
    id_vendeur INT PRIMARY KEY,
    nom VARCHAR(50),
    login VARCHAR(50),
    mot_de_passe VARCHAR(50)
);

-- Table "PRODUITS"
CREATE TABLE PRODUITS (
    id_produit INT PRIMARY KEY,
    nom_produit VARCHAR(50),
    prix_hors_taxe DECIMAL(10, 2),
    stock INT
);

-- Table "VENTES"
CREATE TABLE VENTES (
    id_vente INT PRIMARY KEY,
    id_vendeur INT,
    date_vente DATETIME,
    montant_total DECIMAL(10, 2),
    FOREIGN KEY (id_vendeur) REFERENCES VENDEUR(id_vendeur)
);

-- Table "LIGNE_VENTE"
CREATE TABLE LIGNE_VENTE (
    id_ligne INT PRIMARY KEY,
    id_vente INT,
    id_produit INT,
    quantite INT,
    prix_unitaire DECIMAL(10, 2),
    FOREIGN KEY (id_vente) REFERENCES VENTES(id_vente),
    FOREIGN KEY (id_produit) REFERENCES PRODUITS(id_produit)
);

-- Table "INVENTAIRE"
CREATE TABLE INVENTAIRE (
    id_inventaire INT PRIMARY KEY,
    id_produit INT,
    date_operation DATETIME,
    code_operation ENUM('vente', 'vente_annulee', 'entree_stock', 'jete', 'retire'),
    mouvement_stock ENUM('fabrique', 'mis_en_vitrine', 'retire'),
    quantite INT,
    FOREIGN KEY (id_produit) REFERENCES PRODUITS(id_produit)
);

-- Table "VENDEUR_CAISSE"
CREATE TABLE VENDEUR_CAISSE (
    id_vendeur_caisse INT PRIMARY KEY,
    id_vendeur INT,
    solde_depart DECIMAL(10, 2),
    solde_final DECIMAL(10, 2),
    date_fermeture DATETIME,
    FOREIGN KEY (id_vendeur) REFERENCES VENDEUR(id_vendeur)
);

-- Table "MOYEN_PAIEMENT"
CREATE TABLE MOYEN_PAIEMENT (
    id_moyen_paiement INT PRIMARY KEY,
    nom_moyen_paiement VARCHAR(50) NOT NULL
);

-- Table "ENCAISSEMENT"
CREATE TABLE ENCAISSEMENT (
    id_encaissement INT PRIMARY KEY,
    id_vendeur_caisse INT,
    id_moyen_paiement INT,
    montant_encaisse DECIMAL(10, 2),
    date_encaissement DATETIME,
    FOREIGN KEY (id_vendeur_caisse) REFERENCES VENDEUR_CAISSE(id_vendeur_caisse),
    FOREIGN KEY (id_moyen_paiement) REFERENCES MOYEN_PAIEMENT(id_moyen_paiement)
);
