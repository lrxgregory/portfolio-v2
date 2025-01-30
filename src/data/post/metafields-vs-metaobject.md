---
publishDate: 2025-02-02T00:00:00Z
author: Gregory Leroux
title: "Metafields VS Metaobjects : c'est quoi la différence ?"
excerpt: Comprenez la différence entre les Metafields et les Metaobjects et comment les utiliser efficacement sur votre boutique Shopify.
image: ~/assets/images/metafields-vs-metaobjects.png
category: Shopify
tags:
  - shopify
  - ecommerce
  - liquid
  - metafields
  - metaobjects
metadata:
  canonical: https://gregoryleroux.com/metafields-vs-metaobjects-shopify
---

## Les Metafields

Les Metafields sont parfaits pour enrichir des objets existants comme les produits, les clients, les commandes, etc. Ils s'ajoutent directement aux objets Shopify et ne nécessitent pas de coder. Avec l'éditeur de thème, vous pouvez lier un Metafield à une section ou un bloc en quelques clics.

### Exemple d'utilisation des Metafields

Prenons une boutique de vêtements vendant des t-shirts. Sur la page produit, aucun champ n'est prévu pour afficher la composition du tissu. Avec les Metafields, vous pouvez créer un champ personnalisé "Composition", qui sera ensuite affiché sur la page produit sans modification du code Liquid.

## Les Metaobjects

Les Metaobjects, en revanche, permettent de créer vos propres types d'objets avec des champs personnalisés (ex: nom, image, URL, description, etc.). Ils doivent être intégrés au thème avec du code Liquid pour s'afficher sur la boutique.

### Exemple d'utilisation des Metaobjects

Imaginons que chaque t-shirt de votre boutique soit illustré par un artiste différent. Vous pouvez créer un Metaobject "Artiste", avec des champs tels que :

- Nom
- Photo
- Biographie
- Produits associés
- Site web

Ensuite, vous pouvez afficher ces données dynamiquement en adaptant votre thème Shopify via Liquid.

## En résumé

| Caractéristique        | Metafields                                          | Metaobjects                                           |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Usage                  | Ajouter des champs à des objets existants           | Créer de nouveaux objets personnalisés                |
| Facilité d'utilisation | Accessible via l'interface Shopify                  | Nécessite du code Liquid                              |
| Exemple                | Ajouter un champ "Composition" sur une page produit | Créer un objet "Artiste" associé à plusieurs produits |

Les Metafields sont idéaux pour ajouter des informations simples et rapides sur des objets Shopify existants, tandis que les Metaobjects sont plus adaptés à des besoins complexes et structurés.
