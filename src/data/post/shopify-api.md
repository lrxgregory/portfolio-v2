---
publishDate: 2025-02-03T00:00:00Z
author: Gregory Leroux
title: "Les API Shopify : le guide complet pour les développeurs"
excerpt: Découvrez comment utiliser les API Shopify pour créer des applications personnalisées et automatiser votre boutique en ligne.
image: ~/assets/images/shopify-api.png
category: Shopify
tags:
  - shopify
  - api
  - developpement
  - rest
  - graphql
metadata:
  canonical: https://gregoryleroux.com/shopify-api
---

Les API Shopify sont la clé pour étendre les fonctionnalités de votre boutique en ligne. Que vous souhaitiez créer une application personnalisée ou automatiser certaines tâches, les API Shopify vous offrent toute la flexibilité nécessaire.

## C'est quoi une API ?

Pour moi, une API est un moyen d’exposer ta base de données via une adresse que l’on appelle **endpoint**. L’API sert de pont entre l’utilisateur et la base de données.

Quand vous développez votre API, vous choisissez :

- Les **adresses (endpoints)** auxquelles vous exposez vos données.
- Ce qu’on peut en faire (**les lire, les modifier et/ou les supprimer**).

## Exemple avec un restaurant

Pour les moins techniques d’entre vous, reprenons l’exemple souvent utilisé pour expliquer les API, celui du restaurant :

### Imagine que tu es dans un restaurant :

- **L’API, c’est le serveur** → Il prend ta commande, va en cuisine et te ramène ce que tu as demandé.
- **La base de données, c’est la cuisine** → Tu n’as pas accès aux fourneaux, mais tu peux commander des plats (**données**).
- **L’endpoint, c’est une partie du menu** → `GET /menu/plats` ou `GET /menu/boissons`

Le **serveur** sert d’**intermédiaire** entre toi et la cuisine, comme l’API sert d’intermédiaire entre toi et la base de données.

Tu n’as pas à te préoccuper de **comment fonctionne la cuisine**, c’est le restaurant qui s’en occupe.  
C’est pareil pour la base de données : **Shopify te donne la documentation (le menu)** et l’API permet de récupérer les données qui t’intéressent.

## Les différents types d'API Shopify

Shopify propose plusieurs API adaptées à différents besoins :

### **1. Admin API**

Pour gérer la **partie back-end** de votre boutique.  
**Exemples** :

- Ajouter un produit.
- Créer une commande.
- Modifier les stocks.

### **2. Storefront API**

Pour gérer la **partie front-end** de votre boutique.  
**Exemples** :

- Créer un site headless avec une interface totalement sur mesure.
- Afficher les produits et collections dynamiquement.

### **3. API GraphQL ou REST**

Shopify propose les **deux**, mais ils tendent à privilégier les API **GraphQL**.  
On verra les différences dans un prochain post ! 😉

## En résumé

Shopify vous donne accès aux données que vous pouvez **lire, modifier et utiliser** via leur API.

Cela permet aux développeurs d’**étendre les fonctionnalités** d’une boutique Shopify :

- **Back-end** via les **Admin API**
- **Front-end** via les **Storefront API**

En choisissant les données qu’ils exposent, Shopify garantit la **stabilité** de la solution. Ainsi, les développeurs ne peuvent **pas modifier ou supprimer une donnée essentielle** au bon fonctionnement de la boutique.
