import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, TrendingUp, Users, Clock, Star, Quote, ArrowLeft, CheckCircle, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function CaseStudyPage() {
  const successStories = [
    {
      id: 1,
      restaurantName: "Chez Marcel",
      location: "Paris 11ème",
      type: "Bistrot traditionnel",
      avatar: "👨‍🍳",
      owner: "Marcel Dubois",
      title: "Propriétaire",
      quote: "CallChef.ai a révolutionné notre service ! Nous ne perdons plus aucun appel, même pendant le coup de feu du midi. Notre chiffre d'affaires a augmenté de 35% en seulement 3 mois.",
      stats: {
        revenueIncrease: "+35%",
        missedCallsReduction: "-89%",
        customerSatisfaction: "4.8/5",
        timeSaved: "15h/semaine"
      },
      challenges: [
        "Beaucoup d'appels manqués pendant les heures de pointe",
        "Personnel débordé qui ne peut pas répondre au téléphone",
        "Perte de clients qui ne rappellent pas"
      ],
      results: [
        "95% des appels désormais traités automatiquement",
        "Augmentation du CA de 35% en 3 mois",
        "Staff peut se concentrer sur le service en salle",
        "Clients ravis de l'efficacité du service"
      ]
    },
    {
      id: 2,
      restaurantName: "Pizzeria Bella Vista",
      location: "Lyon 6ème",
      type: "Pizzeria familiale",
      avatar: "👩‍🍳",
      owner: "Sofia Romano",
      title: "Gérante",
      quote: "Incroyable ! CallChef.ai prend les commandes parfaitement, même les plus complexes. Nos clients n'ont jamais été aussi satisfaits. L'IA comprend même les accents de nos clients italiens !",
      stats: {
        revenueIncrease: "+42%",
        missedCallsReduction: "-92%",
        customerSatisfaction: "4.9/5",
        timeSaved: "20h/semaine"
      },
      challenges: [
        "Commandes complexes difficiles à gérer au téléphone",
        "Barrière de langue avec certains clients",
        "Manque de personnel en soirée"
      ],
      results: [
        "Gestion parfaite des commandes personnalisées",
        "Support multilingue français/italien",
        "Service 24/7 sans personnel supplémentaire",
        "ROI de 380% la première année"
      ]
    },
    {
      id: 3,
      restaurantName: "Le Comptoir Moderne",
      location: "Bordeaux",
      type: "Restaurant gastronomique",
      avatar: "👨‍💼",
      owner: "Antoine Lefebvre",
      title: "Chef & Propriétaire",
      quote: "CallChef.ai s'est parfaitement adapté à notre style de service haut de gamme. L'IA est polie, professionnelle et n'oublie jamais de proposer nos vins. C'est notre meilleur serveur !",
      stats: {
        revenueIncrease: "+28%",
        missedCallsReduction: "-85%",
        customerSatisfaction: "4.7/5",
        timeSaved: "12h/semaine"
      },
      challenges: [
        "Maintenir un service de qualité premium au téléphone",
        "Formations constantes du personnel pour les réservations",
        "Gestion des demandes spéciales et allergies"
      ],
      results: [
        "Service téléphonique toujours impeccable",
        "Réduction des erreurs de réservation de 95%",
        "Transfert intelligent pour les cas complexes",
        "Amélioration de l'image de marque"
      ]
    }
  ];

  const industryStats = [
    { metric: "95%", description: "de satisfaction client", icon: "😊" },
    { metric: "€2.3M", description: "de revenus récupérés en 2024", icon: "💰" },
    { metric: "50000+", description: "appels traités par mois", icon: "📞" },
    { metric: "24/7", description: "disponibilité sans interruption", icon: "🕒" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#f58529] via-[#d54e75] to-[#4b0d63] rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">CallChef.ai</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Études de cas</span>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Témoignages clients
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez comment CallChef.ai a transformé l'activité de nos clients restaurateurs
            avec des résultats concrets et mesurables.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Résultats prouvés
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              ROI mesurable
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Clients satisfaits
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#4b0d63] mb-2">{stat.metric}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="light-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Histoires de <span className="gradient-text">succès</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos clients nous racontent comment CallChef.ai a révolutionné leur activité
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={story.id} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Restaurant Info & Quote */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-4xl">{story.avatar}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{story.restaurantName}</h3>
                          <p className="text-gray-600">{story.type} • {story.location}</p>
                          <p className="text-sm text-gray-500">{story.owner}, {story.title}</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6 relative">
                        <Quote className="w-8 h-8 text-[#4b0d63] absolute top-4 left-4 opacity-20" />
                        <p className="text-lg italic text-gray-800 pl-8">"{story.quote}"</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-red-500" />
                            Défis initiaux
                          </h4>
                          <ul className="space-y-2">
                            {story.challenges.map((challenge, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Résultats obtenus
                          </h4>
                          <ul className="space-y-2">
                            {story.results.map((result, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-[#f58529] via-[#d54e75] to-[#4b0d63] p-6 rounded-lg text-white">
                        <h4 className="font-semibold mb-4 text-center">Résultats en chiffres</h4>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{story.stats.revenueIncrease}</div>
                            <p className="text-sm text-white/80">Augmentation CA</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">{story.stats.missedCallsReduction}</div>
                            <p className="text-sm text-white/80">Réduction appels manqués</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">{story.stats.customerSatisfaction}</div>
                            <p className="text-sm text-white/80">Satisfaction client</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">{story.stats.timeSaved}</div>
                            <p className="text-sm text-white/80">Temps économisé</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Retour sur <span className="gradient-text">investissement</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CallChef.ai s'amortit rapidement grâce aux revenus récupérés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">⚡</div>
                <CardTitle>Mise en place rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Configuration complète en moins de 48h. Aucune installation technique requise.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">📈</div>
                <CardTitle>ROI immédiat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Retour sur investissement dès le premier mois grâce aux appels récupérés.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>Résultats garantis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Si vous n'êtes pas satisfait, nous vous remboursons intégralement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="purple-section text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Plus de 500 restaurants nous font déjà confiance.
            Découvrez pourquoi CallChef.ai est devenu indispensable à leur succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4b0d63] hover:bg-gray-100" asChild>
              <Link href="/login">
                Essai gratuit 14 jours
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4b0d63]" asChild>
              <Link href="/contact">
                Parler à un expert
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce qu'ils disent de nous</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Une révolution pour notre pizzeria ! Les commandes sont prises parfaitement,
                  même pendant nos heures de pointe."
                </p>
                <div className="font-semibold">Marco Rossini</div>
                <div className="text-sm text-gray-500">Pizzeria Marco, Marseille</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "CallChef.ai comprend parfaitement nos clients et sait les orienter.
                  C'est comme avoir un serveur parfait 24h/24."
                </p>
                <div className="font-semibold">Claire Martin</div>
                <div className="text-sm text-gray-500">Brasserie du Port, Nantes</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Installation facile, résultats immédiats. Notre CA a augmenté de 30%
                  en 2 mois seulement."
                </p>
                <div className="font-semibold">Jean-Pierre Durand</div>
                <div className="text-sm text-gray-500">Le Gourmet, Toulouse</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
