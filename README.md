# Cloud Ninja Services

![CI](https://github.com/ferdinand-sondeck/cloud-ninja-services/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/ferdinand-sondeck/cloud-ninja-services/branch/main/graph/badge.svg)](https://codecov.io/gh/ferdinand-sondeck/cloud-ninja-services)

Une application web Node.js pour consulter le catalogue des services de CloudNinja Corp.# 
Cloud Ninja Services

Une application web Node.js pour consulter le catalogue des services de 
CloudNinja Corp.
## Sécurité et Qualité du Code

Cette application implémente plusieurs mesures pour assurer la qualité du code et la sécurité :

### Qualité du Code
- ESLint avec configuration stricte pour assurer la cohérence et détecter les problèmes potentiels
- Tests unitaires et d'intégration avec Jest
- Couverture de code minimale de 70%

### Sécurité
- Analyse automatique des dépendances vulnérables avec npm audit
- En-têtes de sécurité HTTP pour protéger contre les attaques courantes
- Validation des données d'entrée pour prévenir les injections
- Intégration continue avec GitHub Actions pour vérifier la qualité et la sécurité à chaque push

Pour exécuter les vérifications de sécurité localement :
```
npm run security
```
```

## Commit et push des changements

Committons et poussons nos changements :

```bash
# Ajouter tous les fichiers au suivi Git
git add .

# Créer un commit
git commit -m "Quête 3 : Implémentation des outils de qualité de code et de sécurité"

# Pousser les changements vers GitHub
git push
