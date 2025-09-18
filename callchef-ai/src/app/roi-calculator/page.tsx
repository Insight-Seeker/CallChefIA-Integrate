"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, TrendingUp, AlertTriangle, CheckCircle, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    dailyCalls: 50,
    averageOrderValue: 25,
    missedCallPercentage: 25,
    conversionRate: 60,
    operatingDaysPerMonth: 26
  });

  const [results, setResults] = useState({
    dailyMissedCalls: 0,
    dailyLostRevenue: 0,
    monthlyLostRevenue: 0,
    yearlyLostRevenue: 0,
    callchefMonthlyCost: 79,
    monthlySavings: 0,
    roi: 0
  });

  const calculateROI = () => {
    const dailyMissedCalls = (formData.dailyCalls * formData.missedCallPercentage) / 100;
    const dailyLostRevenue = dailyMissedCalls * (formData.conversionRate / 100) * formData.averageOrderValue;
    const monthlyLostRevenue = dailyLostRevenue * formData.operatingDaysPerMonth;
    const yearlyLostRevenue = monthlyLostRevenue * 12;

    // Avec CallChef.ai, on récupère 95% des appels manqués
    const recoveryRate = 0.95;
    const monthlySavings = monthlyLostRevenue * recoveryRate;
    const netMonthlySavings = monthlySavings - results.callchefMonthlyCost;
    const roi = ((netMonthlySavings * 12) / (results.callchefMonthlyCost * 12)) * 100;

    setResults({
      dailyMissedCalls: Math.round(dailyMissedCalls * 10) / 10,
      dailyLostRevenue: Math.round(dailyLostRevenue),
      monthlyLostRevenue: Math.round(monthlyLostRevenue),
      yearlyLostRevenue: Math.round(yearlyLostRevenue),
      callchefMonthlyCost: 79,
      monthlySavings: Math.round(monthlySavings),
      roi: Math.round(roi)
    });
  };

  useEffect(() => {
    calculateROI();
  }, [formData]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: Number.parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
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
              <span className="text-gray-600">Calculateur de ROI</span>
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
            Calculateur de ROI
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez combien d'argent vous perdez chaque mois à cause des appels manqués
            et calculez vos économies potentielles avec CallChef.ai.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Calcul personnalisé
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              ROI en temps réel
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Données industrie
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Paramètres de votre restaurant</CardTitle>
                <CardDescription>
                  Ajustez ces valeurs selon votre activité pour un calcul personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="dailyCalls" className="text-sm font-medium text-gray-700">
                    Nombre d'appels par jour
                  </Label>
                  <Input
                    id="dailyCalls"
                    type="number"
                    value={formData.dailyCalls}
                    onChange={(e) => handleInputChange('dailyCalls', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    min="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Estimation moyenne : 30-80 appels/jour</p>
                </div>

                <div>
                  <Label htmlFor="averageOrderValue" className="text-sm font-medium text-gray-700">
                    Panier moyen (€)
                  </Label>
                  <Input
                    id="averageOrderValue"
                    type="number"
                    value={formData.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    min="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Montant moyen d'une commande</p>
                </div>

                <div>
                  <Label htmlFor="missedCallPercentage" className="text-sm font-medium text-gray-700">
                    Pourcentage d'appels manqués (%)
                  </Label>
                  <Input
                    id="missedCallPercentage"
                    type="number"
                    value={formData.missedCallPercentage}
                    onChange={(e) => handleInputChange('missedCallPercentage', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    min="0"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Moyenne industrie : 25% (pics à 50%)</p>
                </div>

                <div>
                  <Label htmlFor="conversionRate" className="text-sm font-medium text-gray-700">
                    Taux de conversion appel → commande (%)
                  </Label>
                  <Input
                    id="conversionRate"
                    type="number"
                    value={formData.conversionRate}
                    onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    min="0"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Combien d'appels deviennent des commandes</p>
                </div>

                <div>
                  <Label htmlFor="operatingDaysPerMonth" className="text-sm font-medium text-gray-700">
                    Jours d'ouverture par mois
                  </Label>
                  <Input
                    id="operatingDaysPerMonth"
                    type="number"
                    value={formData.operatingDaysPerMonth}
                    onChange={(e) => handleInputChange('operatingDaysPerMonth', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                    min="1"
                    max="31"
                  />
                  <p className="text-xs text-gray-500 mt-1">Fermé le dimanche = 26 jours</p>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Current Losses */}
              <Card className="shadow-lg border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-red-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Vos pertes actuelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-red-600">Appels manqués/jour</p>
                      <p className="text-2xl font-bold text-red-800">{results.dailyMissedCalls}</p>
                    </div>
                    <div>
                      <p className="text-sm text-red-600">Revenus perdus/jour</p>
                      <p className="text-2xl font-bold text-red-800">{formatCurrency(results.dailyLostRevenue)}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-red-200">
                    <div className="text-center">
                      <p className="text-sm text-red-600">Revenus perdus par mois</p>
                      <p className="text-4xl font-bold text-red-800">{formatCurrency(results.monthlyLostRevenue)}</p>
                    </div>
                  </div>
                  <div className="text-center bg-red-100 p-3 rounded-lg">
                    <p className="text-sm text-red-700">Soit <strong>{formatCurrency(results.yearlyLostRevenue)}</strong> perdus par an !</p>
                  </div>
                </CardContent>
              </Card>

              {/* With CallChef.ai */}
              <Card className="shadow-lg border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Avec CallChef.ai
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-green-600">Revenus récupérés/mois</p>
                      <p className="text-2xl font-bold text-green-800">{formatCurrency(results.monthlySavings)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-600">Coût CallChef.ai/mois</p>
                      <p className="text-2xl font-bold text-green-800">{formatCurrency(results.callchefMonthlyCost)}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-green-200">
                    <div className="text-center">
                      <p className="text-sm text-green-600">Bénéfice net mensuel</p>
                      <p className="text-4xl font-bold text-green-800">
                        {formatCurrency(results.monthlySavings - results.callchefMonthlyCost)}
                      </p>
                    </div>
                  </div>
                  <div className="text-center bg-green-100 p-3 rounded-lg">
                    <p className="text-sm text-green-700">
                      ROI de <strong>{results.roi}%</strong> dès la première année !
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="shadow-lg gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Vous pourriez économiser {formatCurrency(results.monthlySavings - results.callchefMonthlyCost)}/mois
                  </h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-[#4b0d63] hover:bg-gray-100" asChild>
                      <Link href="/login">
                        Essai gratuit 14 jours
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#4b0d63]">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger le rapport PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="light-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Statistiques de <span className="gradient-text">l'industrie</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces données proviennent d'études réalisées sur plus de 1000 restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">25%</div>
                <p className="text-sm text-gray-600">Moyenne d'appels manqués</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">50%</div>
                <p className="text-sm text-gray-600">Pics en heures de pointe</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-sm text-gray-600">Taux de récupération avec IA</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
                <p className="text-sm text-gray-600">Retour sur investissement moyen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
