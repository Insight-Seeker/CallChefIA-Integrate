"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    message: "",
    subject: "demo"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
              <span className="text-gray-600">Contact</span>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts est là pour vous accompagner dans la transformation
            de votre service client. Contactez-nous pour une démonstration personnalisée.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center animate-bounce-gentle">
              <MessageSquare className="w-5 h-5 mr-2" />
              Réponse sous 2h
            </div>
            <div className="flex items-center animate-bounce-gentle" style={{animationDelay: '0.2s'}}>
              <Phone className="w-5 h-5 mr-2" />
              Démo personnalisée
            </div>
            <div className="flex items-center animate-bounce-gentle" style={{animationDelay: '0.4s'}}>
              <CheckCircle className="w-5 h-5 mr-2" />
              Sans engagement
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Demande de contact</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">Nous vous recontacterons dans les 2 heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Je souhaite
                      </Label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full mt-1 bg-white border border-gray-300 rounded-md px-3 py-2 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                        required
                      >
                        <option value="demo">Voir une démonstration</option>
                        <option value="pricing">Discuter des tarifs</option>
                        <option value="integration">Parler d'intégration</option>
                        <option value="support">Support technique</option>
                        <option value="other">Autre demande</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="restaurant" className="text-sm font-medium text-gray-700">
                          Nom du restaurant *
                        </Label>
                        <Input
                          id="restaurant"
                          type="text"
                          placeholder="Chez Marcel"
                          value={formData.restaurant}
                          onChange={(e) => handleInputChange('restaurant', e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="vous@restaurant.fr"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="01 23 45 67 89"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Décrivez-nous votre projet et vos besoins..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full mt-1 bg-white border border-gray-300 rounded-md px-3 py-2 focus:border-[#4b0d63] focus:ring-[#4b0d63] focus:outline-none resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#4b0d63] hover:bg-[#3d0a52] text-white hover-glow">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#4b0d63] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contact@callchef.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#4b0d63] rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#4b0d63] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">Horaires d'ouverture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="font-medium">9h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Samedi</span>
                      <span className="font-medium">10h00 - 16h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dimanche</span>
                      <span className="font-medium text-red-600">Fermé</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center text-green-800">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Support 24/7 par email</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg gradient-hero text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Besoin d'aide immédiate ?</h3>
                  <p className="text-white/90 mb-4">
                    Notre équipe technique est disponible pour vous aider à configurer CallChef.ai
                    et répondre à toutes vos questions.
                  </p>
                  <Button className="bg-white text-[#4b0d63] hover:bg-gray-100" asChild>
                    <Link href="/demo">
                      Voir une démo maintenant
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="light-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Combien de temps pour la mise en place ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">La configuration de CallChef.ai prend généralement 24 à 48 heures. Notre équipe s'occupe de tout.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">L'IA peut-elle gérer mon accent régional ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Oui ! CallChef.ai est entraîné sur tous les accents français et peut même gérer le multilinguisme.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Que se passe-t-il si l'IA ne comprend pas ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">L'IA transfère automatiquement l'appel vers un humain pour les cas complexes ou incompris.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Y a-t-il un engagement de durée ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Non, vous pouvez arrêter à tout moment. Nous proposons aussi un essai gratuit de 14 jours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
