# Git - Évaluation - Projet *Minitrice* versionné avec Git - Corentin LE GALLIC

<hr>

- [Git - Évaluation - Projet *Minitrice* versionné avec Git](#git---évaluation---projet-minitrice-versionné-avec-git---corentin-le-gallic)
  - [Installation](#installation)
    - [Node](#node)
    - [Projet](#projet)
  - [Exécution](#exécution)
    - [Mode Interactif](#mode-interactif)
    - [STDIN](#stdin)
  - [Remarques](#remarques)

<hr>

## Installation

Afin d'installer et de lancer mon programme, plusieurs outils doivent être préalablement installés. Voici un guide détaillant l'ensemble des procédures et commandes nécessaires au bon fonctionnement de mon programme dans un environnement Linux (Ubuntu / Debian).

### Node

Il est nécessaire d'installer NodeJS afin de pouvoir exécuter les scripts JavaScript contenus dans le projet.

Pour cela, ouvrez un terminal et installer NodeJS grâce à la commande suivante :

```bash
sudo apt update && sudo apt install nodejs # Met à jour les packages déjà installés et installe NodeJS
```

Puis, assurez-vous que NodeJS est correctement installé :

```bash
node --version # Affiche la version de NodeJS si ce-dernier est correctement installé
```

### Projet

Afin de télécharger le dépôt Git, ouvrez un terminal et naviguez vers le dossier dans lequel vous souhaitez installer le dépôt. Puis, exécutez la commande suivante :

```bash
git clone https://github.com/CorentinLeGallic/git-evaluation_groupe-5.git
```

Enfin, entrez dans le dossier cloné et exécutez les commandes suivantes afin de pouvoir exécuter les programmes `minitrice.js` et `generator.js` dans le terminal :

```bash
cd git_evaluation_groupe-5
chmod +x minitrice.js # Rend le fichier minitrice.js exécutable
chmod +x generator.js # Rend le fichier generator.js exécutable
```

# Exécution

Vous pouvez désormais exécuter les programmes `minitrice.js` et `generator.js`.

### Mode interactif

Afin d'exécuter l'un de ces scripts en mode interactif, exécutez l'une des commandes suivantes dans votre terminal :

```bash
./minitrice.js
node minitrice.js
```

### STDIN

Afin d'exécuter l'un de ces scripts en mode STDIN, utilisez le symbole `|` (pipe) afin de passer le résultat d'une commande en valeur d'entrée du programme. Par exemple :

```bash
echo "12+3" | ./minitrice.js # 15
echo "-30+3" | ./minitrice.js # Erreur de syntax pour le calcul : -30+3
```

# Remarques

Suite à une mauvaise compréhension de ma part du TP, j'ai ajouté la vidéo `video2.mp4` générée par Gource directement dans le dépôt, au lieu de la publier sur YouTube. J'ai donc bien réalisé cette étape bien que je n'ai pas fourni de lien YouTube !