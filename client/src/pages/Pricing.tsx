import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// All icons now use Enhanced 4D versions with glass morphism effects
import {
  CustomShieldIcon,
  CustomBrainIcon,
  CustomGraduationCapIcon,
  CustomFlagIcon,
  CustomZapIcon,
  Enhanced4DShieldIcon,
  Enhanced4DBrainIcon,
  Enhanced4DZapIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DStarIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DUsersIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DCrownIcon,
  Enhanced4DPhoneIcon,
  Enhanced4DTargetIcon,
  Enhanced4DActivityIcon
} from "@/components/LazyCustomIcons";
import { Link } from "wouter";
import { MarketingLayout } from "@/components/MarketingLayout";

// POD Intelligence System Logos
import orcaLogoImg from "@assets/ORCA logo_1758558742074.png";
import apexLogoImg from "@assets/APEX logo_1758557596082.png";
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Essential Protection",
      description: "Perfect for small organizations getting started",
      price: "Essential",
      period: "Protection",
      badge: "Small Organizations",
      color: "border-blue-500/30",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      features: [
        "Up to 250 users",
        "AI-powered threat detection",
        "Basic incident response",
        "FERPA/CIPA compliance",
        "Email & chat support",
        "Cloud security monitoring",
        "Basic IT infrastructure monitoring",
        "Basic user training",
        "Monthly security reports"
      ],
      metrics: "250 Users Max"
    },
    {
      name: "Advanced Security", 
      description: "Comprehensive protection for growing institutions",
      price: "Advanced",
      period: "Security",
      badge: "Most Popular",
      color: "border-purple-500/30",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      popular: true,
      features: [
        "Up to 1,000 users", 
        "Advanced AI threat detection",
        "Automated incident response",
        "Full compliance automation",
        "24/7 priority support",
        "Advanced threat intelligence",
        "Complete IT management suite",
        "Security awareness training",
        "Weekly executive briefings"
      ],
      metrics: "1K Users Max"
    },
    {
      name: "Enterprise Shield",
      description: "Complete security suite for large organizations", 
      price: "Enterprise",
      period: "Shield",
      badge: "Enterprise",
      color: "border-cyan-500/30",
      buttonClass: "bg-cyan-600 hover:bg-cyan-700",
      features: [
        "Unlimited users",
        "Premium AI models",
        "Custom response playbooks", 
        "White-glove compliance",
        "Dedicated success team",
        "Custom threat intelligence",
        "Enterprise IT infrastructure management",
        "On-site training programs",
        "Real-time executive dashboards"
      ],
      metrics: "Unlimited Scale"
    }
  ];

  const governmentPlans = [
    {
      name: "Federal Standard",
      description: "FedRAMP authorized for federal agencies",
      price: "Custom",
      period: "pricing",
      badge: "FedRAMP High",
      color: "border-red-500/30", 
      buttonClass: "bg-red-600 hover:bg-red-700",
      features: [
        "FedRAMP High authorization",
        "FISMA compliance automation",
        "Classified data protection",
        "Inter-agency intelligence sharing",
        "Dedicated government SOC",
        "Government IT infrastructure management",
        "Security clearance requirements",
        "On-premises deployment options",
        "Government-specific training"
      ]
    },
    {
      name: "State & Local",
      description: "Tailored for state and municipal governments",
      price: "Contact",
      period: "for Quote",
      badge: "Government Optimized",
      color: "border-orange-500/30",
      buttonClass: "bg-orange-600 hover:bg-orange-700", 
      features: [
        "Multi-agency coordination",
        "Public safety integration",
        "Citizen data protection",
        "Emergency response protocols",
        "Regional threat intelligence",
        "Municipal IT system management",
        "Government compliance automation",
        "Public sector training programs",
        "Crisis communication tools"
      ]
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-slate-900">
        
        {/* ORCA Platform Pricing Hero */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/20 to-midnight-900">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
              {/* ORCA Platform Branding */}
              <div className="flex items-center justify-center mb-8">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-12 w-auto mr-4" />
                <Badge className="bg-spring-500/20 text-spring-300 border-spring-500/30 text-lg px-6 py-3">
                  CyberSecured AI's ORCA Platform Pricing
                </Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-500">
                  POD Intelligence
                </span><br />
                Investment Plans
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Revolutionary pricing for revolutionary technology. Five POD Intelligence systems 
                (APEX, ECHO, PULSE, SURGE, FLOW) working together to deliver unparalleled cybersecurity protection. 
                <strong className="text-spring-400">Transparent, scalable, and designed for your organization's growth.</strong>
              </p>
              
              {/* POD Intelligence Systems Value Preview */}
              <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <img src={apexLogoImg} alt="APEX" className="h-10 w-10 mx-auto mb-2" />
                  <span className="text-purple-400 text-sm font-bold">APEX</span>
                  <p className="text-xs text-gray-400">Genetic AI</p>
                </div>
                <div className="text-center">
                  <img src={echoLogoImg} alt="ECHO" className="h-10 w-10 mx-auto mb-2" />
                  <span className="text-cyan-400 text-sm font-bold">ECHO</span>
                  <p className="text-xs text-gray-400">5D Interface</p>
                </div>
                <div className="text-center">
                  <Enhanced4DTargetIcon className="h-10 w-10 mx-auto mb-2 text-green-400" size={40} />
                  <span className="text-green-400 text-sm font-bold">PULSE</span>
                  <p className="text-xs text-gray-400">Location Intel</p>
                </div>
                <div className="text-center">
                  <Enhanced4DZapIcon className="h-10 w-10 mx-auto mb-2 text-orange-400" size={40} />
                  <span className="text-orange-400 text-sm font-bold">SURGE</span>
                  <p className="text-xs text-gray-400">Auto Defense</p>
                </div>
                <div className="text-center">
                  <Enhanced4DActivityIcon className="h-10 w-10 mx-auto mb-2 text-blue-400" size={40} />
                  <span className="text-blue-400 text-sm font-bold">FLOW</span>
                  <p className="text-xs text-gray-400">Operations</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Enhanced4DStarIcon key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" size={24} />
                ))}
                <span className="ml-4 text-white font-semibold text-lg">4.9/5 ROI satisfaction from POD Intelligence deployments</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Millions</div>
                  <div className="text-gray-300">Average cost savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">ROI 450%</div>
                  <div className="text-gray-300">Within 12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30 Days</div>
                  <div className="text-gray-300">Free trial period</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <Tabs defaultValue="education" className="w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Choose Your<br />
                  <span className="text-green-400">Protection Level</span>
                </h2>
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 bg-slate-700">
                  <TabsTrigger value="education" className="data-[state=active]:bg-green-600 text-lg py-4">
                    <CustomGraduationCapIcon className="w-6 h-6 mr-2" size={24} />
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="government" className="data-[state=active]:bg-green-600 text-lg py-4">
                    <CustomFlagIcon className="w-6 h-6 mr-2" size={24} />
                    Government
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="education">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`bg-slate-700/60 border ${plan.color} relative ${plan.popular ? 'scale-105' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-purple-600 text-white">{plan.badge}</Badge>
                        </div>
                      )}
                      <CardHeader className="p-8 text-center">
                        <Badge className="mb-4 bg-white/10 text-gray-300">{plan.badge}</Badge>
                        <CardTitle className="text-2xl text-white mb-4">{plan.name}</CardTitle>
                        <p className="text-gray-300 mb-6">{plan.description}</p>
                        <div className="text-4xl text-white mb-2">
                          {plan.price}
                          <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                        </div>
                        <div className="text-cyan-400 font-semibold">{plan.metrics}</div>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className={`w-full text-white ${plan.buttonClass}`}>
                          Get Started
                          <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Educational Pilot Programs */}
                <div className="mt-16">
                  <div className="text-center mb-12">
                    <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      CyberSecured AI-EDU Pilot Programs
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Educational<br />
                      <span className="text-cyan-400">Pilot Programs</span>
                    </h3>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Specialized pilot programs designed for K-12 and higher education institutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-slate-700/60 border border-green-500/30">
                      <CardHeader className="p-6 text-center">
                        <CustomGraduationCapIcon className="w-12 h-12 text-green-400 mx-auto mb-4" size={48} />
                        <CardTitle className="text-xl text-white mb-3">K-12 Pilot Programs</CardTitle>
                        <p className="text-gray-300 text-sm mb-4">Comprehensive cybersecurity for K-12 educational institutions</p>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Small Districts</span>
                            <span className="text-green-400 font-semibold">Custom Pricing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Medium Districts</span>
                            <span className="text-green-400 font-semibold">Custom Pricing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Large Districts</span>
                            <span className="text-green-400 font-semibold">Custom Pricing</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Learn More About K-12 Programs
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/60 border border-purple-500/30">
                      <CardHeader className="p-6 text-center">
                        <Enhanced4DBuildingIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" size={48} />
                        <CardTitle className="text-xl text-white mb-3">Higher Education Pilot Programs</CardTitle>
                        <p className="text-gray-300 text-sm mb-4">Advanced cybersecurity for colleges and universities</p>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Small Institutions</span>
                            <span className="text-purple-400 font-semibold">Custom Pricing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Medium Universities</span>
                            <span className="text-purple-400 font-semibold">Custom Pricing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Large University Systems</span>
                            <span className="text-purple-400 font-semibold">Custom Pricing</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                          Learn More About Higher Ed Programs
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="government">
                <div className="space-y-12">
                  {/* Core Government Plans */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {governmentPlans.map((plan, index) => (
                      <Card key={index} className={`bg-slate-700/60 border ${plan.color}`}>
                        <CardHeader className="p-8 text-center">
                          <Badge className="mb-4 bg-white/10 text-gray-300">{plan.badge}</Badge>
                          <CardTitle className="text-2xl text-white mb-4">{plan.name}</CardTitle>
                          <p className="text-gray-300 mb-6">{plan.description}</p>
                          <div className="text-4xl text-white mb-2">
                            {plan.price}
                            <span className="text-lg text-gray-400 font-normal">
                              {plan.period && `/${plan.period}`}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center space-x-2">
                                <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" size={16} />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className={`w-full text-white ${plan.buttonClass}`}>
                            Contact Sales
                            <Enhanced4DPhoneIcon className="ml-2 w-4 h-4" size={16} />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Specialized Government Solutions */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Specialized Government Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <Card className="bg-slate-700/60 border border-purple-500/30">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Enhanced4DBuildingIcon className="w-8 h-8 text-purple-400 mr-3" size={32} />
                            <div>
                              <h4 className="text-white font-semibold">Multi-State Security Coalition Platform</h4>
                              <p className="text-purple-400 font-bold">Contact for Pricing</p>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">Inter-agency cybersecurity coordination and threat sharing</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-700/60 border border-cyan-500/30">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Enhanced4DShieldIcon className="w-8 h-8 text-cyan-400 mr-3" size={32} />
                            <div>
                              <h4 className="text-white font-semibold">Government Community Cloud Integration</h4>
                              <p className="text-cyan-400 font-bold">Contact for Pricing</p>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">Secure government community cloud deployment</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Individual POD Intelligence System Pricing */}
        <section className="py-20 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/30 to-midnight-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-10 w-auto mr-4" />
                <Badge className="bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4">
                  Individual POD Intelligence System Pricing
                </Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Build Your Perfect<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-500">
                  POD Intelligence Stack
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                Choose individual POD Intelligence systems or combine multiple systems for enhanced protection.
                Each system is priced independently with volume discounts for multiple deployments.
              </p>
            </div>

            {/* Individual POD System Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              
              {/* APEX Genetic AI Pricing */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/30 hover:scale-105 transition-all duration-500">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img src={apexLogoImg} alt="APEX" className="h-12 w-12 mr-3" />
                    <div>
                      <Badge className="mb-2 bg-purple-500/20 text-purple-300">Genetic AI</Badge>
                      <CardTitle className="text-2xl text-white">APEX System</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Self-evolving threat detection with 99.2% accuracy</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">Starter</div>
                      <div className="text-2xl font-bold text-white">$15,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Up to 500 users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">Professional</div>
                      <div className="text-2xl font-bold text-white">$35,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Up to 2,500 users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">Enterprise</div>
                      <div className="text-2xl font-bold text-white">$75,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Unlimited users</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Configure APEX
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* ECHO Holographic Pricing */}
              <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/30 hover:scale-105 transition-all duration-500">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img src={echoLogoImg} alt="ECHO" className="h-12 w-12 mr-3" />
                    <div>
                      <Badge className="mb-2 bg-cyan-500/20 text-cyan-300">5D Interface</Badge>
                      <CardTitle className="text-2xl text-white">ECHO System</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Immersive 5D holographic security operations</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">Starter</div>
                      <div className="text-2xl font-bold text-white">$25,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Up to 500 users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">Professional</div>
                      <div className="text-2xl font-bold text-white">$55,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Up to 2,500 users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">Enterprise</div>
                      <div className="text-2xl font-bold text-white">$125,000<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Unlimited users</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Configure ECHO
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* PULSE Location Intelligence Pricing */}
              <Card className="bg-gradient-to-br from-green-900/50 to-slate-800/50 border-2 border-green-500/30 hover:scale-105 transition-all duration-500">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Enhanced4DTargetIcon className="w-12 h-12 mr-3 text-green-400" size={48} />
                    <div>
                      <Badge className="mb-2 bg-green-500/20 text-green-300">Location Intel</Badge>
                      <CardTitle className="text-2xl text-white">PULSE System</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Real-time geospatial threat tracking with 98.7% accuracy</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">Starter</div>
                      <div className="text-2xl font-bold text-white">$2,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Single campus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">Professional</div>
                      <div className="text-2xl font-bold text-white">$8,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Multi-campus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">Enterprise</div>
                      <div className="text-2xl font-bold text-white">$18,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">System-wide</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Configure PULSE
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* SURGE Autonomous Defense Pricing */}
              <Card className="bg-gradient-to-br from-orange-900/50 to-slate-800/50 border-2 border-orange-500/30 hover:scale-105 transition-all duration-500">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Enhanced4DZapIcon className="w-12 h-12 mr-3 text-orange-400" size={48} />
                    <div>
                      <Badge className="mb-2 bg-orange-500/20 text-orange-300">Auto Defense</Badge>
                      <CardTitle className="text-2xl text-white">SURGE System</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Autonomous threat response with 8-minute deployment</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">Basic</div>
                      <div className="text-2xl font-bold text-white">$5,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Limited drone network</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">Advanced</div>
                      <div className="text-2xl font-bold text-white">$15,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Full coordination</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">Elite</div>
                      <div className="text-2xl font-bold text-white">$35,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Enterprise-wide defense</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Configure SURGE
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* FLOW Operations Automation Pricing */}
              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-2 border-blue-500/30 hover:scale-105 transition-all duration-500">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Enhanced4DActivityIcon className="w-12 h-12 mr-3 text-blue-400" size={48} />
                    <div>
                      <Badge className="mb-2 bg-blue-500/20 text-blue-300">Operations</Badge>
                      <CardTitle className="text-2xl text-white">FLOW System</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">Workflow automation with 68% productivity gains</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">Essential</div>
                      <div className="text-2xl font-bold text-white">$1,800<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Basic automation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">Business</div>
                      <div className="text-2xl font-bold text-white">$6,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Full workflow</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">Enterprise</div>
                      <div className="text-2xl font-bold text-white">$14,500<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">Cross-institutional</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Configure FLOW
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* Complete POD Intelligence Bundle */}
              <Card className="bg-gradient-to-br from-spring-900/50 to-slate-800/50 border-2 border-spring-500/30 hover:scale-105 transition-all duration-500 lg:col-span-1 xl:col-span-1">
                <CardHeader className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img src={orcaLogoImg} alt="ORCA" className="h-12 w-12 mr-3" />
                    <div>
                      <Badge className="mb-2 bg-spring-500/20 text-spring-300">Complete Bundle</Badge>
                      <CardTitle className="text-2xl text-white">Full POD Stack</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">All 5 POD Intelligence systems with 35% bundle savings</p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-spring-400">Starter</div>
                      <div className="text-2xl font-bold text-white">$32,370<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">All systems included (Save $17K)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-spring-400">Professional</div>
                      <div className="text-2xl font-bold text-white">$78,325<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">All systems included (Save $42K)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-spring-400">Enterprise</div>
                      <div className="text-2xl font-bold text-white">$174,525<span className="text-sm text-gray-400">/month</span></div>
                      <div className="text-xs text-gray-400">All systems included (Save $94K)</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-spring-600 hover:bg-spring-700 text-white">
                    Configure Complete POD Stack
                    <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* POD Intelligence Bundle Options */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-8">
                Custom POD Intelligence<br />
                <span className="text-spring-400">Bundle Configurations</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Mix and match POD Intelligence systems for your specific needs. Volume discounts available for multi-system deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-700/60 border border-purple-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-500/20 text-purple-300">2-System Bundle</Badge>
                  <CardTitle className="text-lg text-white mb-3">APEX + ECHO</CardTitle>
                  <div className="text-xl font-bold text-purple-400 mb-2">15% Savings</div>
                  <p className="text-gray-300 text-xs">Genetic AI + Holographic Interface</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Configure Bundle
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-green-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-green-500/20 text-green-300">3-System Bundle</Badge>
                  <CardTitle className="text-lg text-white mb-3">APEX + PULSE + FLOW</CardTitle>
                  <div className="text-xl font-bold text-green-400 mb-2">22% Savings</div>
                  <p className="text-gray-300 text-xs">Core Intelligence Stack</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Configure Bundle
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-orange-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-orange-500/20 text-orange-300">4-System Bundle</Badge>
                  <CardTitle className="text-lg text-white mb-3">All Except SURGE</CardTitle>
                  <div className="text-xl font-bold text-orange-400 mb-2">28% Savings</div>
                  <p className="text-gray-300 text-xs">Advanced Protection Suite</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Configure Bundle
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-spring-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-spring-500/20 text-spring-300">5-System Bundle</Badge>
                  <CardTitle className="text-lg text-white mb-3">Complete POD Stack</CardTitle>
                  <div className="text-xl font-bold text-spring-400 mb-2">35% Savings</div>
                  <p className="text-gray-300 text-xs">Maximum Protection</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-spring-600 hover:bg-spring-700 text-white">
                    Configure Bundle
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrated Packages */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
                Integrated Cloud & Networking Packages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Complete Security<br />
                <span className="text-green-400">Packages</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-700/60 border border-blue-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-blue-500/20 text-blue-300">Essential</Badge>
                  <CardTitle className="text-lg text-white mb-3">CyberSecure Essential</CardTitle>
                  <div className="text-xl font-bold text-blue-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-300 text-xs">Complete basic security package</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-purple-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-500/20 text-purple-300">Advanced</Badge>
                  <CardTitle className="text-lg text-white mb-3">CyberSecure Advanced</CardTitle>
                  <div className="text-xl font-bold text-purple-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-300 text-xs">Enhanced security capabilities</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-yellow-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-yellow-500/20 text-yellow-300">Enterprise</Badge>
                  <CardTitle className="text-lg text-white mb-3">CyberSecure Enterprise</CardTitle>
                  <div className="text-xl font-bold text-yellow-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-300 text-xs">Complete enterprise solution</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Contact Enterprise
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/60 border border-red-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-red-500/20 text-red-300">Government</Badge>
                  <CardTitle className="text-lg text-white mb-3">Custom Government Package</CardTitle>
                  <div className="text-xl font-bold text-red-400 mb-2">Custom</div>
                  <p className="text-gray-300 text-xs">Tailored government solutions</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Value Proposition */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-6xl">
            <Card className="bg-slate-800/80 border border-green-500/30">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Why Organizations Choose<br />
                  <span className="text-green-400">CyberSecured AI</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <Enhanced4DShieldIcon className="w-16 h-16 text-green-400 mx-auto mb-4" size={64} />
                    <h4 className="text-xl font-bold text-white mb-2">Proven Protection</h4>
                    <p className="text-gray-300">99.7% threat detection accuracy with industry-leading response times</p>
                  </div>
                  <div className="text-center">
                    <Enhanced4DBrainIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" size={64} />
                    <h4 className="text-xl font-bold text-white mb-2">AI Innovation</h4>
                    <p className="text-gray-300">Eight core AI engines working together for maximum effectiveness</p>
                  </div>
                  <div className="text-center">
                    <Enhanced4DCrownIcon className="w-16 h-16 text-yellow-400 mx-auto mb-4" size={64} />
                    <h4 className="text-xl font-bold text-white mb-2">Expert Support</h4>
                    <p className="text-gray-300">24/7 access to cybersecurity experts and managed SOC services</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/trials">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg">
                      Start 30-Day Free Trial
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-10 py-4 text-lg">
                      Talk to Sales
                      <Enhanced4DPhoneIcon className="ml-2 w-6 h-6" size={24} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}