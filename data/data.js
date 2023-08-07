const courses = [
    {
        "properties": {
            "title": "Accueil"
        },
        "Bonjour !": {
            "content": [
                "Bienvenue dans FichesDI !",
                "Le but de ce projet est de proposer des fiches pour apprendre le développement informatique ou s'aider dans son apprentissage.",
                "Ces fiches sont rédigées de manière simple et concise pour rester digestes. Rien de pire qu'un support assommant  quand on galère déjà !",
                {
                    "title": "Comment ça marche ?",
                    "content": [
                        "Les fiches sont regroupées par modules.",
                        "Un module constitue un cours. Il a généralement une introduction, un contenu, une conclusion et un glossaire.",
                        "Mais les fiches peuvent être consultées indépendemment les unes des autres !",
                        "Les fiches peuvent contenir différents types de blocs :",
                        {
                            "type": "note",
                            "content": [
                                "Des blocs de notes pour les remarques ou les précisions"
                            ]
                        },
                        {
                            "type": "warning",
                            "content": [
                                "Des blocs d'avertissement pour les choses auxquelles il faut faire attention"
                            ]
                        },
                        {
                            "type": "example",
                            "content": [
                                "Des blocs d'exemple pour illustrer"
                            ]
                        },
                        {
                            "type": "code",
                            "content": [
                                "Des blocs de code pour le code ou le pseudo-code"
                            ]
                        }
                    ]
                },
                {
                    "title": "Ça remplace les cours ?",
                    "content": [
                        "Pas si vous êtes étudiant(e).",
                        "Je m'explique : le but de FichesDI est avant tout de fournir des ressources complémentaires aux cours : des fiches courtes et faciles à comprendre pour apprendre à son rythme ou réviser en autonomie.",
                        "Mais des fiches ne peuvent pas remplacer un prof, qui peut cerner vos difficultés ou à qui vous pouvez poser des questions."
                    ]
                },
                {
                    "title": "C'est pour qui ?",
                    "content": [
                        "Ce projet s'adresse en particulier aux étudiants en développement informatique qui n'ont jamais développé auparavant et qui ne sont pas à l'aise, mais tout le monde peut l'utiliser."
                    ]
                }
            ]
        }
    },
    {
        "properties": {
            "title": "Initiation à la programmation"
        },
        "Introduction": {
            "content": [
                "Dans ce module, nous allons voir les bases de la programmation.",
                "C'est un module assez théorique pour découvrir des concepts fondamentaux de la programmation.",
                "Le but n'est pas encore de programmer, mais patience, ça arrive ;)",
                {
                    "type": "note",
                    "content": [
                        "Certaines fiches de ce module comportent des bloc de code. Ils sont reconnaissable à leur fond noir et leur police monospace.",
                        "Dans ce module, il ne s'agit pas de code à proprement parler, mais de ce qu'on appelle du <<pseudo-code>>.",
                        "Ça permet de représenter des algorithmes sans pour autant utiliser un vrai langage de programmation. Parfait pour commencer en douceur !"
                    ]
                }
            ]
        },
        "Qu'est-ce qu'un algorithme ?": {
            "content": [
                "Un algorithme est une suite d'instructions qui permet de résoudre un problème.",
                "Il prend des entrées, il a des instructions élémentaires simples, et il fourni un résultat.",
                "Dans notre quotidien, les recettes de cuisine sont des exemples d'algorithmes :",
                {
                    "type": "example",
                    "content": [
                        {
                            "type": "code",
                            "content": [
                                "Ingrédients et ustensiles :",
                                "    300 grammes de pâtes",
                                "    1 litre d'eau",
                                "    du sel",
                                "    une casserole",
                                "    une plaque de cuisson",
                                "    une passoire",
                                "",
                                "Instructions :",
                                "    mettre l'eau et le sel dans la casserole",
                                "    mettre la casserole sur la plaque",
                                "    quand l'eau bout, mettre les pâtes dans la casserole",
                                "    attendre 10 minutes",
                                "    verser le contenu de la casserole dans la passoire",
                                "    servir les pâtes",
                                "",
                                "Résultat :",
                                "    des pâtes cuites."
                            ]
                        }
                    ]
                },
                "En programmation c'est la même chose, mais c'est l'ordinateur qui va suivre les instructions du programme.",
                "Tout ce que fait un ordinateur est décidé par les algorithmes qu'il suit, que ce soit afficher un caractère quand on apuie sur une touche du clavier ou afficher un joli monde en 3D avec des zombies carrés.",
                "Les algorithmes peuvent être très simple comme très complexes selon le problème à résoudre."
            ]
        },
        "Les types de données": {
            "content": [
                "Un programme manipule des données.",
                "Ces données n'ont pas le même sens selon qu'il s'agisse d'un nombre, d'un texte, de si une case est cochée ou non, etc.",
                "Il existe donc plusieurs types, qui sont plus ou moins nombreux selon les langages de programmation.",
                "Le type d'une valeur détermine les opérateurs (+, -, etc) qu'on peut utiliser dessus et leur fonctionnement.",
                "En général on retrouve les types :",
                {
                    "type": "ul",
                    "content": [
                        "<<boolean>> pour représenter les valeurs soit vraies soit fausses",
                        "<<int>> pour représenter les nombres entiers",
                        "<<float>> pour représenter les nombres à virgule",
                        "<<string>> pour représenter du texte. Celui-ci est souvent particulier par rapport aux autres"
                    ]
                },
                "On peut convertir des valeurs d'un type à l'autre implicitement, càd simplement en utilisant une valeur d'un type au lieu d'un autre type.",
                {
                    "type": "example",
                    "content": [
                        "Additionner des nombres avec du texte donne du texte :",
                        "<<Star Wars >> + 26 = <<Star Wars 26>>"
                    ]
                },
                {
                    "type": "note",
                    "content": [
                        "Les langages sont tous plus ou moins permissifs : certains permettent de combiner tous les types ou presque, d'autres obligent à convertir explicitement les valeurs dans le même type avant de les utiliser ensemble."
                    ]
                }
            ]
        },
        "Les variables et constantes": {
            "content": [
                "Les variables et les constantes servent à stocker des valeurs pour les manipuler ou les utiliser plus tard.",
                "Elles ont un nom qui permet de les utiliser, et un type qui détermine les valeurs qu'on peut leur donner.",
                {
                    "title": "Créer une variable ou une constante",
                    "content": [
                        "Il faut d'abord les déclarer en leur donnant un nom ; ensuite, on peut leur affecter une valeur.",
                        "On peut déclarer une variable et lui affecter immédiatement une valeur, ou déclarer la variable sans lui affecter de valeur, par exemple si on veut le faire plus tard :",
                        {
                            "type": "example",
                            "content": [
                                {
                                    "type": "code",
                                    "content": [
                                        "variable mon chiffre = 42",
                                        "variable mon autre chiffre",
                                        "mon autre chiffre = 2023"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Utiliser sa valeur",
                    "content": [
                        "Pour utiliser la valeur d'une variable, il suffit de mettre son nom au lieu d'une valeur :",
                        {
                            "type": "example",
                            "content": [
                                {
                                    "type": "code",
                                    "content": [
                                        "variable mon chiffre = 42",
                                        "variable copie de mon chiffre = mon chiffre",
                                        "variable mon chiffre plus un = mon chiffre + 1",
                                        "mon chiffre = 0"
                                    ]
                                },
                                "Ici on a :",
                                {
                                    "type": "ul",
                                    "content": [
                                        "Déclaré <<mon chiffre>> en lui donnant la valeur 42",
                                        "Déclaré <<copie de mon chiffre>> en lui donnant la valeur de <<mon chiffre>>",
                                        "Déclaré <<mon chiffre plus un>> en lui donnant la valeur de <<mon chiffre>> + 1",
                                        "Et affecté la valeur 0 à <<mon chiffre>>."
                                    ]
                                },
                                "À la fin de ce programme, <<mon chiffre>> vaut 0, <<copie de mon chiffre>> vaut 42, et <<mon chiffre plus un>> vaut 43."
                            ]
                        },
                        {
                            "type": "note",
                            "content": [
                                "Lorsqu'on affecte la valeur d'une variable A à une autre variable B, la valeur de B ne change pas quand on change celle de A."
                            ]
                        }

                    ]
                },
                {
                    "title": "Quelle est la différence entre une variable et une constante ?",
                    "content": [
                        "La différence entre une variable et une constante, c'est qu'on peut modifier la valeur de la variable quand on veut alors que la constante ne peut être affectée qu'à la déclaration.",
                        "Si vous n'affectez pas de valeur à une constante lorsque vous la déclarez, elle aura la valeur par défaut et vous ne pourrez pas la modifier."
                    ]
                }
            ]
        },
        "Les tableaux": {
            "content": [
                "Les tableaux sont des objets qui peuvent stocker plusieurs valeurs dans des <<cases>>.",
                "Un tableau de longueur n comporte n cases.",
                {
                    "title": "Les index",
                    "content": [
                        "Chaque case est associée à un index (en gros, une adresse) qui permet de l'utiliser, et chacune fonctionne comme une variable.",
                        "Pour affecter une valeur à une case ou récupérer sa valeur, il faut utiliser le tableau en spécifiant l'index de la case :",
                        {
                            "type": "code",
                            "content": [
                                "variable mon tableau = nouveau tableau de 10",
                                "case 0 de mon tableau = 20"
                            ]
                        },
                        "Ici on a créé un tableau d'une longueur de 10 cases puis on a affecté la valeur 20 à sa première case.",
                        {
                            "type": "warning",
                            "content": [
                                "Dans quasiment tous les langages, l'index (la numérotation des <<cases>>) commence à 0 !",
                                "Il y a donc un décalage entre le numéro de l'élément et son index :",
                                {
                                    "type": "ul",
                                    "content": [
                                        "Le premier élément est à l'index 0",
                                        "Le deuxième est à l'index 1",
                                        "Le troisième est au 2"
                                    ]
                                },
                                "etc, jusqu'au dernier qui est à l'index n-1 dans un tableau de longueur n.",
                                "C'est source de confusion et on fait souvent des erreurs bêtes à cause de ça, donc il faut y faire attention."
                            ]
                        }
                    ]
                }
            ]
        },
        "Les conditions": {

        },
        "Les boucles": {

        },
        "Les fonctions": {
            "content": [
                "Les fonctions sont comme des machines :",
                {
                    "type": "ul",
                    "content": [
                        "on les alimente avec quelque chose, par exemple des troncs ;",
                        "elles font leur travail",
                        "et elles donnent des planches."
                    ]
                },
                "Une fonction, c'est pareil : elle va effectuer des traitements sur des valeurs ou des objets qu'on lui fourni et donner un résultat.",
                "Une valeur ou un objet qu'on lui fourni est appelé un <<paramètre>>.",
                {
                    "type": "example",
                    "content": [
                        {
                            "type": "code",
                            "content": [
                                "fonction aire du carré (largeur) = largeur²"
                            ]
                        },
                        "La fonction <<aire du carré>> prendrait une largeur comme paramètre et retournerait son carré."
                    ]
                },
                {
                    "type": "note",
                    "content": [
                        "Une fonction peut ne pas avoir de paramètre ou de retour ; elle peut même n'avoir aucun des deux :",
                        {
                            "type": "ul",
                            "content": [
                                "Une fonction sans paramètre peut utiliser une variable déclarée en dehors d'elle.",
                                "Une fonction sans retour peut avoir des effets de bord."
                            ]
                        }
                    ]
                }
            ]
        },
        "La portée": {

        },
        "Les objets": {

        },
        "Les bibliothèques": {

        },
        "Conclusion": {
            
        },
        "Glossaire": {
            
        }
    },
    {
        "properties": {
            "title": "Programmation orientée objet"
        },
        "Introduction": {

        },
        "Les classes": {

        },
        "L'héritage": {

        },
        "Les classes abstraites": {

        },
        "L'encapsulation": {

        },
        "Le polymorphisme": {

        },
        "Les interfaces": {

        },
        "Parenthèse sur les prototypes": {

        },
        "À savoir": {

        },
        "Glossaire": {
            
        }
    },
    {
        "properties": {
            "title": "HTML"
        },
        "Introduction": {
            
        },
        "Comment ça marche ?": {

        },
        "Le squelette HTML": {

        },
        "Les éléments": {

        },
        "Les formulaires": {

        },
        "Conclusion": {
            
        }
    },
    {
        "properties": {
            "title": "CSS"
        },
        "Introduction": {
            
        },
        "Les sélecteurs": {

        },
        "Les propriétés": {

        },
        "Le modèle de boîte": {

        },
        "Les pseudo-classes": {
            
        },
        "Les transitions": {

        },
        "Les animations": {

        },
        "Conclusion": {
            
        }
    },
    {
        "properties": {
            "title": "JavaScript"
        },
        "Introduction": {
            
        },
        "Les types de données": {
            "content": [
                "",
                {
                    "title": "Truthy et falsy",
                    "content": [
                        "En JavaScript, toutes les valeurs peuvent être converties en booléen.",
                        "Une valeur est dite truthy si elle devient vrai en booléen, falsy sinon.",
                        "Les objets sont généralement truthy mais il y a des cas particulier :",
                        {
                            "type": "ul",
                            "content": [
                                "Un nombre est truthy s'il est différent de 0",
                                "Un string est truthy s'il n'est pas vide",
                                "undefined et null sont falsy"
                            ]
                        },
                        {
                            "type": "warning",
                            "content": [
                                "Les tableaux et les objets vides sont des objets et sont donc toujours truthy !",
                                "Si vous voulez contrôler l'exécution selon qu'un tableau soit vide ou non, il faut utiliser sa longueur :",
                                {
                                    "type": "code",
                                    "content": [
                                        "if (tableau.length) {",
                                        "    // vos instructions",
                                        "}"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "Les opérateurs": {
            "content": [
                "JavaScript possède de très nombreux opérateurs.",
                ""
            ]
        },
        "Les variables": {

        },
        "Les fonctions": {
            "content": [
                "",
                ""
            ]
        },
        "Les objets": {

        },
        "Les fonctions fléchées": {

        },
        "Les méthodes des tableaux": {

        },
        "Les fonctions de rappel": {

        },
        "Les méthodes asynchrones": {

        },
        "Les promesses": {

        },
        "Conclusion": {
            
        }
    },
    {
        "properties": {
            "title": "Quelques API du navigateur"
        },
        "Introduction": {

        },
        "Fetch": {

        },
        "SyntheticSpeech": {

        },
        "VoiceRecognition": {

        },
        "Canvas": {

        }
    },
    {
        "properties": {
            "title": "Bases de données"
        },
        "Introduction": {
            
        },
        "Conclusion": {
            
        },
        "Glossaire": {
            
        }
    },
    {
        "properties": {
            "title": "Web"
        },
        "Introduction": {
            
        },
        "Clients et serveurs": {

        },
        "Le protocole HTTP": {
            "content": [
                "Le HTTP est un protocole de communication client-serveur",
                "Son nom signifie Hypertext Transfer Protocol.",
                "Il a une variante sécurisée : le HTTPS.",
                {
                    "title": "Les codes HTTP",
                    "content": [
                        "404, 403, 503... Vous en avez sûrement déjà vu ou entendu parler : les codes HTTP sont renvoyés par les serveurs pour donner des information sur les requêtes et leurs réponses.",
                        "Ces codes sont répartis dans plusieurs catégories, indiquées par leur premier chiffre :",
                        {
                            "type": "ul",
                            "content": [
                                "1 : information",
                                "2 : succès",
                                "3 : redirection",
                                "4 : erreur du client",
                                "5 : erreur du serveur"
                            ]
                        },
                        "Les plus importants à connaître sont :",
                        {
                            "type": "ul",
                            "content": [
                                "200 (OK), envoyé quand tout se passe bien",
                                "403 (interdit) quand le client n'a pas le droit d'accéder à la page qu'il demande",
                                "404 (non trouvé) quand le serveur ne trouve pas la page demandée par le client",
                                "502 (mauvaise passerelle ou erreur de proxy) quand le serveur sert d'intermédiaire et qu'il reçoit une réponse invalide du serveur distant",
                                "503 (service indisponible) quand le service demandé est temporairement indisponible"
                            ]
                        },
                        {
                            "type": "note",
                            "content": [
                                "Les sites affichent souvent les codes d'erreurs, mais jamais les codes d'information et les codes de succès.",
                                "Si ça marche, on le voit."
                            ]
                        }
                    ]
                }
            ]

        },
        "API": {

        },
        "Conclusion": {
            
        },
        "Glossaire": {
            
        }
    },
    {
        "properties": {
            "title": "Quelques API web"
        },
        "Introduction": {
            "content": [
                "Ce module propose simplement quelques exemple d'API web que vous pouvez utiliser dans vos projets.",
                "Certaines présentent un intérêt pour des applications métier tandis que d'autres conviendront plutôt à des projets personnels ; certaines sont libres d'accès, d'autres nécessitent une clé pour être utilisées."
            ]
        },
        "Cats API": {
            "content": []
        },
        "NewsApi": {
            "content": []
        },
        "Open Food Facts": {
            "content": []
        },
        "Open Library": {
            "content": []
        },
        "OpenStreetMap": {
            "content": []
        },
        "OpenWeatherMap": {
            "content": []
        },
        "PokéAPI": {
            "content": []
        },
        "REST Countries": {
            "content": []
        },
        "Photos d'animaux": {
            "content": [
                "Cette section regroupe plusieurs API avec la même finalité : servir des images d'animaux.",
                {
                    "title": "Cataas",
                    "content": [
                        ""
                    ]
                },
                {
                    "title": "DOG API",
                    "content": [
                        ""
                    ]
                },
                {
                    "title": "HTTP Cats",
                    "content": [
                        "Cette API répond aux codes HTTP avec une image de chat légendée qui correspond."
                    ]
                },
                {
                    "title": "RANDOM FOX",
                    "content": [
                        ""
                    ]
                }
            ]
        }
    },
    {
        "properties": {
            "title": "Git"
        },
        "Introduction": {

        },
        "Conclusion": {

        },
        "Glossaire": {

        }
    }
]