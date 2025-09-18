import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Bot, DollarSign, BarChart3, Calendar, Users, MessageSquare, Zap, Globe, CheckCircle, Star, Settings } from "lucide-react";
import { getHomeContent, getPricingContent } from "@/lib/content";
import ListenButton from "@/components/ListenButton";

export default function Home() {
  const homeContent = getHomeContent();
  const pricingContent = getPricingContent();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 bg-white">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#f58529] via-[#d54e75] to-[#4b0d63] rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">CallChef.ai</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#fonctionnalites" className="text-gray-600 hover:text-gray-900 transition-colors">Fonctionnalités</a>
            <a href="#tarifs" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Démo</a>
            <a href="/admin" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </a>
            <Button variant="outline" asChild>
              <a href="/login">Connexion</a>
            </Button>
            <Button className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white" asChild>
              <a href="/login">Essayer gratuitement</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section avec gradient */}
      <section className="gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm animate-bounce-gentle">
            🚀 Révolutionnez votre service client
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            {homeContent.hero_title || "Comment transformer vos appels manqués en revenus ?"}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            {homeContent.hero_subtitle || "CallChef.ai garantit que votre restaurant ne rate jamais un appel - jour et nuit - tout en automatisant les commandes téléphoniques, réservations et réponses aux questions fréquentes."}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-[#4b0d63] hover:bg-gray-100 hover-glow animate-pulse-soft" asChild>
              <a href="/login">
                {homeContent.hero_cta || "Commencer maintenant"}
              </a>
            </Button>
            <ListenButton />
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {(homeContent.stats || [
              { value: "94%", description: "Appels traités hors heures d'ouverture" },
              { value: "+35%", description: "Augmentation des réservations converties" },
              { value: "89%", description: "Taux de résolution au premier appel" }
            ]).map((stat, index) => (
              <div key={`stat-${index}`} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-soft">{stat.value}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Sneak Peek section */}
      <section className="light-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{homeContent.voice_assistants?.title.split(' vocaux')[0] || "Découvrez nos assistants"}</span> vocaux en action !
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            {homeContent.voice_assistants?.description || "Créez une expérience unique pour vos clients avec un système de réponse téléphonique IA. Personnalisez votre voix et vos sons, avec des dizaines de voix et d'ambiances au choix - tout en restant cohérent avec votre marque."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "MARIE", restaurant: "Chez Marcel", image: "👩‍🍳", accent: "bg-orange-500" },
              { name: "ANTOINE", restaurant: "Pizzeria Antonio", image: "👨‍🍳", accent: "bg-pink-500" },
              { name: "SOPHIE", restaurant: "Bistrot Sophie", image: "👩‍💼", accent: "bg-purple-500" },
              { name: "JULIEN", restaurant: "Le Gourmet", image: "👨‍💼", accent: "bg-indigo-500" }
            ].map((assistant) => (
              <Card key={assistant.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow hover-lift animate-float">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-4">
                    {assistant.image}
                  </div>
                  <CardTitle className="text-xl font-bold">{assistant.name}</CardTitle>
                  <CardDescription className="text-gray-500">{assistant.restaurant}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className={`w-full ${assistant.accent} text-white hover:opacity-90`}>
                    <Zap className="w-4 h-4 mr-2" />
                    ÉCOUTER
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section violette - Combien perdez-vous */}
      <section className="purple-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {homeContent.lost_revenue?.title?.includes('revenus') ? (
              <>
                {homeContent.lost_revenue.title.split('revenus')[0]}
                <span className="gradient-text">revenus</span>
                {homeContent.lost_revenue.title.split('revenus')[1]}
              </>
            ) : (
              homeContent.lost_revenue?.title || "Combien de revenus laissez-vous sur la table ?"
            )}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            {homeContent.lost_revenue?.description || "Les restaurants manquent 25% des appels, avec des pics à 50%, ce qui entraîne une perte de revenus. CallChef.ai répond à tous les appels, augmentant les ventes en récupérant les revenus manqués et les ventes incitatives intelligentes."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-left">
                <strong>Calculateur de revenus :</strong> Utilisez notre formule ROI pour estimer les revenus que vous perdez chaque mois.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-left">
                <strong>Identifiez les fuites :</strong> Analysez les appels manqués, heures de pointe et opportunités de vente.
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
            Commencez à transformer les appels manqués en profits dès aujourd'hui !
          </h3>

          <Button size="lg" className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white text-lg px-8" asChild>
            <a href="/roi-calculator">
              {homeContent.lost_revenue?.cta || "CALCULATEUR DE REVENUS"}
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              SERVICES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fonctionnalités produit et <span className="gradient-text">fonctionnalités</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions complètes adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6 hover-lift animate-fade-in-up">
              <div className="text-5xl mb-4 animate-bounce-gentle">🛒</div>
              <CardTitle className="text-xl mb-3">Compatibilité commandes à emporter</CardTitle>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  Gère efficacement les commandes à emporter et en livraison, fournissant des liens SMS en temps réel
                  pour une commande fluide et réduisant le temps de traitement des appels pour le personnel.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6 hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4 animate-bounce-gentle">📅</div>
              <CardTitle className="text-xl mb-3">Compatibilité système de réservation</CardTitle>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  S'intègre parfaitement à votre système de réservation existant, garantissant un processus
                  de réservation fluide pour vos clients sans interruptions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6 hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl mb-4 animate-bounce-gentle">🤖</div>
              <CardTitle className="text-xl mb-3">Profil d'hôte personnalisé</CardTitle>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  Personnalisez son ton, ses réponses et sa personnalité pour assurer des interactions client fluides,
                  prenant réservations et commandes comme le ferait votre meilleur membre du personnel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How our assistant works */}
      <section className="light-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comment notre <span className="gradient-text">assistant vocal</span> transforme
            les appels manqués en revenus accrus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <div className="text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f58529] to-[#d54e75] rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Récupération des opportunités perdues</h3>
              <p className="text-gray-600">
                L'IA récupère les appels manqués, s'assurant que chaque client potentiel obtient une réponse
                et maximisant les opportunités de conversion.
              </p>
            </div>

            <div className="text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d54e75] to-[#4b0d63] rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Traitement des appels 24/7</h3>
              <p className="text-gray-600">
                L'IA répond aux appels même en dehors des heures d'ouverture, capturant les ventes
                et réservations quand le personnel n'est pas disponible.
              </p>
            </div>

            <div className="text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4b0d63] to-[#171230] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimisation en temps réel</h3>
              <p className="text-gray-600">
                L'IA gère les appels simultanés, prévenant les opportunités manquées
                et améliorant la satisfaction client.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white">
              VOIR L'ÉTUDE DE CAS COMPLÈTE →
            </Button>
          </div>
        </div>
      </section>

      {/* Compatible with section */}
      <section className="purple-section text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Compatible avec</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-80">
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">OpenTable</span>
            </div>
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">Uber Eats</span>
            </div>
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">DoorDash</span>
            </div>
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">Yelp</span>
            </div>
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">Deliveroo</span>
            </div>
            <div className="bg-white rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-gray-800 font-bold">Resy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              NOS TARIFS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {pricingContent.section_title?.includes('pour vous') ? (
                <>
                  {pricingContent.section_title.split('pour vous')[0]}
                  <span className="gradient-text">pour vous</span>
                </>
              ) : (
                pricingContent.section_title || "Choisissez le bon plan pour vous"
              )}
            </h2>
            <p className="text-xl text-gray-600">
              {pricingContent.section_subtitle || "Peu importe le type ou la taille de votre restaurant, il y a un plan pour vous."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(pricingContent.plans || []).map((plan, index) => (
              <Card key={`plan-${index}`} className={`bg-white shadow-lg ${plan.highlighted ? 'shadow-xl border-2 border-purple-500 relative' : ''}`}>
                {plan.badge && plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#4b0d63] text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                  {plan.price.includes('CONTACTEZ') ? (
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {plan.price}<span className="text-lg font-normal text-gray-500">{plan.period}</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500">{plan.sub_price}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`feature-${index}-${featureIndex}`} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.button_text.includes('Contacter') ? 'border-[#4b0d63] text-[#4b0d63] hover:bg-[#4b0d63] hover:text-white' : 'bg-[#4b0d63] hover:bg-[#3d0a52] text-white'}`}
                    variant={plan.button_text.includes('Contacter') ? 'outline' : 'default'}
                    asChild
                  >
                    <a href={plan.button_text.includes('Contacter') ? '/contact' : '/login'}>
                      {plan.button_text}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section avec gradient */}
      <section className="gradient-cta text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Les appels manqués sont des revenus perdus
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Les restaurants perdent jusqu'à 50% des appels pendant les heures de pointe, coûtant des milliers en ventes manquées.
            CallChef.ai répond et récupère ces appels - pour que vous ne perdiez plus jamais un client.
          </p>
          <Button size="lg" className="bg-white text-[#4b0d63] hover:bg-gray-100 text-lg px-8">
            Prendre contact
          </Button>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="purple-section text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Approuvé par les restaurants leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
            {["Chez Marcel", "Pizzeria Roma", "Le Bistrot", "Restaurant Gourmet"].map((name) => (
              <div key={name} className="flex items-center justify-center">
                <div className="bg-white/10 rounded-lg px-6 py-4">
                  <span className="text-white font-semibold">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171230] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#f58529] via-[#d54e75] to-[#4b0d63] rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">CallChef.ai</span>
              </div>
              <p className="text-gray-400">
                Assistants vocaux IA pour restaurants francophones pour une interaction client fluide
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/demo" className="hover:text-white transition-colors">Essayer "CallChef"</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Intégrations</a></li>
                <li><a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Nous contacter</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Nous envoyer un email
                </li>
                <li className="text-sm">info@callchef.ai</li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Contenu, Marketing & Design Web
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CallChef.ai. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
