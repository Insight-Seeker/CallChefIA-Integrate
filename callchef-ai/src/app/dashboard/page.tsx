"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Clock,
  Users,
  ShoppingCart,
  TrendingUp,
  Calendar,
  Settings,
  Bot,
  BarChart3,
  Download,
  Play,
  Volume2,
  Heart,
  ThumbsDown,
  ArrowUpRight,
  PhoneCall,
  MessageSquare,
  Headphones,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Mic,
  Pause
} from "lucide-react";

export default function DashboardPage() {
  // Mock data
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [isEditingMenu, setIsEditingMenu] = useState(false);
  const [voiceSettings, setVoiceSettings] = useState({
    voiceType: "female_french",
    speed: 75,
    nightMode: true,
    autoTransfer: true,
    promotions: false
  });
  const [isTesting, setIsTesting] = useState(false);

  const stats = {
    totalCalls: 234,
    totalDuration: "12h 34m",
    uniqueCallers: 156,
    orders: 89,
    humanTransfers: 12,
    avgSentiment: 4.2
  };

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Pizza Margherita", price: 14, category: "Pizzas", available: true, description: "Tomate, mozzarella, basilic" },
    { id: 2, name: "Salade César", price: 9, category: "Salades", available: true, description: "Salade verte, parmesan, croûtons" },
    { id: 3, name: "Pâtes Carbonara", price: 12, category: "Pâtes", available: false, description: "Pâtes, lardons, œuf, parmesan" },
    { id: 4, name: "Tiramisu", price: 6, category: "Desserts", available: true, description: "Mascarpone, café, cacao" }
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "", category: "", description: "" });

  const recentCalls = [
    {
      id: "1",
      time: "14:23",
      duration: "3m 45s",
      type: "Commande",
      sentiment: "positif",
      amount: "€24.50",
      transcription: "Bonjour, je voudrais commander une pizza margherita et une salade César..."
    },
    {
      id: "2",
      time: "14:15",
      duration: "2m 12s",
      type: "Réservation",
      sentiment: "positif",
      amount: "-",
      transcription: "Bonjour, j'aimerais réserver une table pour 4 personnes ce soir à 20h..."
    },
    {
      id: "3",
      time: "14:08",
      duration: "5m 01s",
      type: "Transfert",
      sentiment: "neutre",
      amount: "-",
      transcription: "Bonjour, j'ai une allergie aux fruits de mer, est-ce que..."
    }
  ];

  const handleAddMenuItem = () => {
    if (newItem.name && newItem.price && newItem.category) {
      setMenuItems([...menuItems, {
        id: Date.now(),
        name: newItem.name,
        price: Number.parseFloat(newItem.price),
        category: newItem.category,
        description: newItem.description,
        available: true
      }]);
      setNewItem({ name: "", price: "", category: "", description: "" });
    }
  };

  const handleDeleteMenuItem = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const toggleItemAvailability = (id: number) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  const handleTestVoice = () => {
    setIsTesting(true);
    // Simulate voice test
    setTimeout(() => setIsTesting(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#f58529] via-[#d54e75] to-[#4b0d63] rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">CallChef.ai</span>
              </div>
              <div className="text-sm text-gray-600">
                Restaurant Chez Marcel
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                ● En ligne
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
              <Button variant="outline" size="sm">
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:border-[#4b0d63] focus:ring-[#4b0d63]"
              >
                <option value="24h">24 heures</option>
                <option value="7d">7 jours</option>
                <option value="30d">30 jours</option>
                <option value="90d">90 jours</option>
              </select>
            </div>
          </div>

          <Alert className="bg-green-50 border-green-200 mb-6">
            <Bot className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Votre assistant vocal a traité <strong>23 appels</strong> aujourd'hui avec un taux de satisfaction de <strong>4.2/5</strong>
            </AlertDescription>
          </Alert>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Appels total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#4b0d63]" />
                <span className="text-2xl font-bold">{stats.totalCalls}</span>
              </div>
              <p className="text-xs text-green-600 mt-1">+12% vs période précédente</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Durée totale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#4b0d63]" />
                <span className="text-2xl font-bold">{stats.totalDuration}</span>
              </div>
              <p className="text-xs text-green-600 mt-1">+8% vs période précédente</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Appelants uniques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#4b0d63]" />
                <span className="text-2xl font-bold">{stats.uniqueCallers}</span>
              </div>
              <p className="text-xs text-green-600 mt-1">+15% vs période précédente</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Commandes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4 text-[#4b0d63]" />
                <span className="text-2xl font-bold">{stats.orders}</span>
              </div>
              <p className="text-xs text-green-600 mt-1">+22% vs période précédente</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Transferts humain</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Headphones className="w-4 h-4 text-orange-500" />
                <span className="text-2xl font-bold">{stats.humanTransfers}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">5% des appels</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Sentiment moyen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-green-500" />
                <span className="text-2xl font-bold">{stats.avgSentiment}/5</span>
              </div>
              <p className="text-xs text-green-600 mt-1">Très satisfaisant</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="calls" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calls">Appels récents</TabsTrigger>
            <TabsTrigger value="analytics">Analytiques</TabsTrigger>
            <TabsTrigger value="settings">Configuration IA</TabsTrigger>
            <TabsTrigger value="menu">Gestion Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="calls" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PhoneCall className="w-5 h-5" />
                  <span>Appels récents</span>
                </CardTitle>
                <CardDescription>
                  Historique des derniers appels traités par votre assistant vocal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Heure</TableHead>
                      <TableHead>Durée</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Sentiment</TableHead>
                      <TableHead>Montant</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentCalls.map((call) => (
                      <TableRow key={call.id}>
                        <TableCell className="font-medium">{call.time}</TableCell>
                        <TableCell>{call.duration}</TableCell>
                        <TableCell>
                          <Badge variant={call.type === "Commande" ? "default" : "secondary"} className="bg-[#4b0d63] text-white">
                            {call.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            {call.sentiment === "positif" ? (
                              <Heart className="w-4 h-4 text-green-500" />
                            ) : call.sentiment === "négatif" ? (
                              <ThumbsDown className="w-4 h-4 text-red-500" />
                            ) : (
                              <div className="w-4 h-4 bg-gray-400 rounded-full" />
                            )}
                            <span className="text-sm capitalize">{call.sentiment}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{call.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Play className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Évolution des appels</CardTitle>
                  <CardDescription>Nombre d'appels par jour</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-[#4b0d63]" />
                      <p>Graphique des appels</p>
                      <p className="text-sm">(Données en temps réel)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Répartition par type</CardTitle>
                  <CardDescription>Types d'appels les plus fréquents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Commandes</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Réservations</span>
                        <span>22%</span>
                      </div>
                      <Progress value={22} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Renseignements</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Configuration de l'assistant vocal</CardTitle>
                <CardDescription>
                  Personnalisez la voix et le comportement de votre assistant IA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Voix et langue</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Type de voix</Label>
                        <select
                          value={voiceSettings.voiceType}
                          onChange={(e) => setVoiceSettings({...voiceSettings, voiceType: e.target.value})}
                          className="w-full mt-1 bg-white border border-gray-300 rounded-md px-3 py-2 focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                        >
                          <option value="female_french">Voix féminine française - Marie</option>
                          <option value="male_french">Voix masculine française - Antoine</option>
                          <option value="neutral_french">Voix neutre française</option>
                        </select>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Débit de parole: {voiceSettings.speed}%</Label>
                        <div className="mt-2">
                          <input
                            type="range"
                            min="50"
                            max="150"
                            value={voiceSettings.speed}
                            onChange={(e) => setVoiceSettings({...voiceSettings, speed: Number.parseInt(e.target.value)})}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Lent</span>
                            <span>Normal</span>
                            <span>Rapide</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button
                          onClick={handleTestVoice}
                          disabled={isTesting}
                          className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white"
                        >
                          {isTesting ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Test en cours...
                            </>
                          ) : (
                            <>
                              <Mic className="w-4 h-4 mr-2" />
                              Tester la voix
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Comportement</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <span className="text-sm font-medium">Mode nuit automatique</span>
                          <p className="text-xs text-gray-500">Volume réduit après 22h</p>
                        </div>
                        <Button
                          variant={voiceSettings.nightMode ? "default" : "outline"}
                          size="sm"
                          onClick={() => setVoiceSettings({...voiceSettings, nightMode: !voiceSettings.nightMode})}
                          className={voiceSettings.nightMode ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {voiceSettings.nightMode ? "Activé" : "Désactivé"}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <span className="text-sm font-medium">Transfert automatique si complexe</span>
                          <p className="text-xs text-gray-500">Allergies, demandes spéciales</p>
                        </div>
                        <Button
                          variant={voiceSettings.autoTransfer ? "default" : "outline"}
                          size="sm"
                          onClick={() => setVoiceSettings({...voiceSettings, autoTransfer: !voiceSettings.autoTransfer})}
                          className={voiceSettings.autoTransfer ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {voiceSettings.autoTransfer ? "Activé" : "Désactivé"}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <span className="text-sm font-medium">Rappel des promotions</span>
                          <p className="text-xs text-gray-500">Suggère les offres en cours</p>
                        </div>
                        <Button
                          variant={voiceSettings.promotions ? "default" : "outline"}
                          size="sm"
                          onClick={() => setVoiceSettings({...voiceSettings, promotions: !voiceSettings.promotions})}
                          className={voiceSettings.promotions ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {voiceSettings.promotions ? "Activé" : "Désactivé"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Button className="bg-[#4b0d63] hover:bg-[#3d0a52] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder les paramètres
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Gestion du menu</span>
                  <Button
                    onClick={() => setIsEditingMenu(!isEditingMenu)}
                    variant={isEditingMenu ? "destructive" : "default"}
                    className={isEditingMenu ? "" : "bg-[#4b0d63] hover:bg-[#3d0a52] text-white"}
                  >
                    {isEditingMenu ? (
                      <>
                        <X className="w-4 h-4 mr-2" />
                        Annuler
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Modifier le menu
                      </>
                    )}
                  </Button>
                </CardTitle>
                <CardDescription>
                  Gérez les plats disponibles pour les commandes vocales
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add new item form */}
                {isEditingMenu && (
                  <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-3">Ajouter un plat</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      <Input
                        placeholder="Nom du plat"
                        value={newItem.name}
                        onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                      />
                      <Input
                        placeholder="Prix (€)"
                        type="number"
                        value={newItem.price}
                        onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                      />
                      <select
                        value={newItem.category}
                        onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:border-[#4b0d63] focus:ring-[#4b0d63]"
                      >
                        <option value="">Catégorie</option>
                        <option value="Pizzas">Pizzas</option>
                        <option value="Pâtes">Pâtes</option>
                        <option value="Salades">Salades</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Boissons">Boissons</option>
                      </select>
                      <Button onClick={handleAddMenuItem} className="bg-green-600 hover:bg-green-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Ajouter
                      </Button>
                    </div>
                    <Input
                      placeholder="Description (optionnel)"
                      value={newItem.description}
                      onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                      className="mt-3"
                    />
                  </div>
                )}

                {/* Menu items table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plat</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Statut</TableHead>
                      {isEditingMenu && <TableHead>Actions</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menuItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            {item.description && (
                              <div className="text-sm text-gray-500">{item.description}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.category}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{item.price}€</TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant={item.available ? "default" : "secondary"}
                            onClick={() => isEditingMenu && toggleItemAvailability(item.id)}
                            disabled={!isEditingMenu}
                            className={item.available ? "bg-green-600 hover:bg-green-700 text-white" : ""}
                          >
                            {item.available ? "Disponible" : "Indisponible"}
                          </Button>
                        </TableCell>
                        {isEditingMenu && (
                          <TableCell>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteMenuItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {menuItems.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Aucun plat dans le menu</p>
                    <p className="text-sm">Ajoutez votre premier plat pour commencer</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
