"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Play, Pause, Volume2, Clock, CheckCircle, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const demoCallsOrder = [
    {
      id: 1,
      title: "Commande Pizza - Client Satisfait",
      duration: "2m 34s",
      scenario: "Commande classique",
      transcript: "Bonjour ! Je voudrais commander une pizza margherita grande et une salade César. C'est pour une livraison au 12 rue de la Paix. Merci !",
      aiResponse: "Parfait ! Je note une pizza margherita grande à 14€ et une salade César à 9€. Soit un total de 23€. Votre commande sera livrée au 12 rue de la Paix dans 25-30 minutes. Puis-je avoir votre numéro de téléphone pour confirmer ?",
      sentiment: "positif",
      outcome: "Commande validée",
      revenue: "23€"
    },
    {
      id: 2,
      title: "Commande Complexe avec Personnalisation",
      duration: "4m 12s",
      scenario: "Commande avec modifications",
      transcript: "Salut, je voudrais une pizza 4 fromages mais sans roquefort, et à la place mettre de la mozzarella di buffala. Et aussi des pâtes carbonara mais avec des lardons sans nitrites si possible.",
      aiResponse: "Bien sûr ! Je note une pizza 4 fromages personnalisée avec mozzarella di buffala au lieu du roquefort, et des pâtes carbonara avec lardons sans nitrites. Je vérifie avec la cuisine pour les lardons spéciaux. Cela vous convient ?",
      sentiment: "positif",
      outcome: "Commande adaptée",
      revenue: "27€"
    },
    {
      id: 3,
      title: "Client Allergique - Transfert Humain",
      duration: "1m 45s",
      scenario: "Transfert nécessaire",
      transcript: "Bonjour, j'ai plusieurs allergies alimentaires graves : gluten, fruits de mer et arachides. Pouvez-vous me conseiller des plats sans risque de contamination croisée ?",
      aiResponse: "Je comprends l'importance de vos allergies. Pour votre sécurité, je vais vous mettre en contact avec notre chef qui pourra vous donner des conseils précis sur nos plats sans risque. Un moment s'il vous plaît...",
      sentiment: "neutre",
      outcome: "Transfert humain",
      revenue: "15€"
    }
  ];

  const demoCallsReservation = [
    {
      id: 4,
      title: "Réservation Table de 6 Personnes",
      duration: "2m 10s",
      scenario: "Réservation standard",
      transcript: "Bonsoir, j'aimerais réserver une table pour 6 personnes samedi soir vers 20h. Est-ce que c'est possible ?",
      aiResponse: "Bonsoir ! Je vérifie nos disponibilités pour samedi soir... Parfait, j'ai une table pour 6 personnes disponible à 20h15. Puis-je avoir votre nom et numéro de téléphone pour la réservation ?",
      sentiment: "positif",
      outcome: "Réservation confirmée",
      revenue: "~180€"
    },
    {
      id: 5,
      title: "Demande d'Informations - Menu & Horaires",
      duration: "1m 30s",
      scenario: "Renseignements",
      transcript: "Bonjour, j'appelle pour savoir si vous servez encore à 14h30 et quels sont vos plats végétariens ?",
      aiResponse: "Bonjour ! Oui, nous servons jusqu'à 15h en continu. Pour les plats végétariens, nous avons une salade quinoa-avocat, des pâtes aux légumes, une pizza végétarienne et un risotto aux champignons. Souhaitez-vous réserver ou commander ?",
      sentiment: "positif",
      outcome: "Information fournie",
      revenue: "0€"
    },
    {
      id: 6,
      title: "Modification de Réservation",
      duration: "1m 55s",
      scenario: "Gestion existante",
      transcript: "Bonjour, j'ai une réservation ce soir au nom de Martin pour 4 personnes à 19h30. Est-ce qu'on peut décaler à 20h et passer à 6 personnes ?",
      aiResponse: "Bonjour M. Martin ! Je retrouve votre réservation pour 4 personnes à 19h30. Je peux vous proposer 20h15 pour 6 personnes, est-ce que cela vous convient ? Je modifie tout de suite.",
      sentiment: "positif",
      outcome: "Modification réussie",
      revenue: "0€"
    }
  ];

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
      // Mock - simulate audio playback
      setTimeout(() => setPlayingIndex(null), 3000);
    }
  };

  const CallCard = ({ call, index }: { call: { id: number, title: string, duration: string, scenario: string, transcript: string, aiResponse: string, sentiment: string, outcome: string, revenue: string }, index: number }) => (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2">{call.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {call.duration}
              </div>
              <Badge variant="outline" className="text-xs">
                {call.scenario}
              </Badge>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => handlePlay(index)}
            className={`${playingIndex === index ? 'bg-red-500 hover:bg-red-600' : 'bg-[#4b0d63] hover:bg-[#3d0a52]'} text-white`}
          >
            {playingIndex === index ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-2">🎤 Client :</h4>
            <p className="text-sm bg-gray-50 p-3 rounded-lg italic">"{call.transcript}"</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-purple-700 mb-2">🤖 CallChef.ai :</h4>
            <p className="text-sm bg-purple-50 p-3 rounded-lg">{call.aiResponse}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                call.sentiment === 'positif' ? 'bg-green-100 text-green-800' :
                call.sentiment === 'neutre' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {call.sentiment === 'positif' ? '😊 Positif' :
                 call.sentiment === 'neutre' ? '😐 Neutre' : '😟 Négatif'}
              </div>
              <span className="text-sm text-gray-600">{call.outcome}</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">{call.revenue}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
              <span className="text-gray-600">Démonstration vocale</span>
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
            Écoutez CallChef.ai en action
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez comment notre assistant vocal gère différents types d'appels
            avec une intelligence naturelle et une efficacité redoutable.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Volume2 className="w-5 h-5 mr-2" />
              Audio HD
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Vrais enregistrements
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              IA GPT-4o
            </div>
          </div>
        </div>
      </section>

      {/* Demo Sections */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Gestion des <span className="gradient-text">commandes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De la commande simple aux demandes complexes, voyez comment CallChef.ai
              s'adapte à chaque situation avec professionnalisme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {demoCallsOrder.map((call, index) => (
              <CallCard key={call.id} call={call} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="light-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Gestion des <span className="gradient-text">réservations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Réservations, modifications, renseignements... CallChef.ai gère
              tout avec la courtoisie d'un professionnel expérimenté.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {demoCallsReservation.map((call, index) => (
              <CallCard key={call.id} call={call} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="purple-section text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Résultats concrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">245€</div>
              <p className="text-white/80">Revenus générés dans ces exemples</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <p className="text-white/80">Seul transfert humain nécessaire</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-white/80">Satisfaction client</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2m 20s</div>
              <p className="text-white/80">Durée moyenne d'appel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à tester CallChef.ai dans votre restaurant ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Démarrez votre essai gratuit de 14 jours et découvrez comment notre assistant vocal
            peut transformer votre service client dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white" asChild>
              <Link href="/login">
                Essai gratuit 14 jours
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Parler à un expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
