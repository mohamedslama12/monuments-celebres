🏛️ Spécification de l'application "Monuments Célèbres" – Next.js
🎯 Objectif
Créer une application web qui présente une sélection de monuments célèbres à travers le monde, avec des informations détaillées, des photos, et une carte interactive.

⚙️ Stack technique
Framework : Next.js (React + SSR/SSG)

Langage : TypeScript (optionnel mais recommandé)

CSS : Tailwind CSS ou Styled Components

Base de données : MongoDB ou Firebase (facultatif si les données sont statiques)

API : REST ou GraphQL (si dynamique)

Carte : Leaflet.js ou Google Maps API

Images : hébergées localement ou via un CDN

📱 Fonctionnalités principales
1. Page d’accueil
Liste de monuments avec image miniature, nom et pays.

Barre de recherche.

Filtres : continent, type (statue, tour, pont, etc.).

2. Page de détails d’un monument
Nom complet

Localisation (ville, pays)

Carte interactive

Historique / Description

Galerie d’images

Date de construction

Architecte (si connu)

3. Page “À propos”
Objectif de l'application

Source des données (Wikipedia, API, etc.)

4. (Optionnel) Authentification
Connexion/Inscription

Ajout de favoris

🧩 Architecture des pages (Next.js)
/ : page d’accueil (liste des monuments)

/monument/[id] : détail d’un monument

/about : à propos

/favoris : (optionnel)
🛠️ Fonctionnalités techniques
SSG avec getStaticProps/getStaticPaths pour pré-rendu des pages de monuments

API Routes (si ajout de favoris ou gestion dynamique)

Lazy loading des images

SEO : balises OpenGraph, title, description
 realise par : mohamed slama , omar mazouz , raed souissi