export const featuredCourses = [
    {
      id: 1,
      title: "Importer de Chine comme un Pro",
      description: "Maîtrisez tout le processus d'import depuis la recherche de fournisseurs jusqu'à la livraison",
      price: 497,
      duration: "15h",
      rating: 4.9,
      category: "Chine",
      students: 1284,
      lessons: 42,
      language: "Français",
      imageUrl: "/images/china-import.jpg",
      objectives: [
        "Trouver des fournisseurs vérifiés",
        "Négocier les meilleurs prix",
        "Gérer la logistique maritime",
        "Éviter les pièges douaniers"
      ]
    },
    {
      id: 2,
      title: "Douanes & Réglementations UE",
      description: "Guide complet des procédures douanières et normes européennes",
      price: 297,
      duration: "8h",
      rating: 4.7,
      category: "Législation",
      students: 892,
      lessons: 28,
      language: "Français",
      imageUrl: "/images/customs.jpg"
    }
  ];
  
  export const fullCourse = {
    id: 1,
    title: "Importer de Chine comme un Pro",
    instructor: {
      name: "Émilie Rousseau",
      bio: "15 ans d'expérience en commerce international, fondatrice de SinoImport Consulting",
      avatar: "/images/instructor.jpg"
    },
    sections: [
      {
        title: "Introduction à l'Importation",
        lessons: [
          "Pourquoi importer de Chine ?",
          "Panorama du marché chinois",
          "Étude de cas : Success stories"
        ]
      },
      {
        title: "Recherche de Fournisseurs",
        lessons: [
          "Utiliser Alibaba efficacement",
          "Vérifier les licences d'export",
          "Visiter les usines (virtuellement)"
        ]
      }
    ],
    curriculum: [
      {
        section: 1,
        title: "Fondamentaux de l'Import",
        duration: "2h15",
        resources: [
          "Checklist de vérification fournisseur",
          "Modèle de contrat d'achat"
        ]
      },
      {
        section: 2,
        title: "Négociation Commerciale",
        duration: "3h30",
        resources: [
          "Guide des Incoterms 2024",
          "Calculateur de coûts"
        ]
      }
    ],
    faq: [
      {
        question: "Quelle garantie offrez-vous ?",
        answer: "30 jours satisfait ou remboursé"
      },
      {
        question: "Mises à jour incluses ?",
        answer: "Accès à vie à toutes les mises à jour"
      }
    ],
    reviews: [
      {
        user: "Marc D.",
        rating: 5,
        comment: "La formation la plus complète que j'ai trouvée sur le sujet !"
      },
      {
        user: "Sophie L.",
        rating: 4,
        comment: "Très bon contenu, quelques modules mériteraient plus d'exemples concrets"
      }
    ]
  };
  
  // Statistiques réalistes
  export const courseStats = {
    avgCompletionTime: "3 semaines",
    successRate: "94%",
    supportResponseTime: "<4h"
  };