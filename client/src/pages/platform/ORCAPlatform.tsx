import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import { MarketingLayout } from "@/components/MarketingLayout";
import {
  Enhanced4DShieldIcon,
  Enhanced4DServerIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DExternalLinkIcon,
  Enhanced4DUsersIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DBuildingIcon
} from "@/components/LazyCustomIcons";

// Import ORCA and POD Intelligence system logos
import orcaLogoImg from "@assets/ORCA logo_1758558742074.png";
import apexLogoImg from "@assets/APEX logo_1758557596082.png";
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function ORCAPlatform() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-slate-900">
        
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-spring-900 via-midnight-900 to-cyan-900">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-16 w-auto mr-6" />
                <Badge className="bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4">
                  ORCA UNIFIED PLATFORM
                </Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">
                  ORCA Platform
                </span><br />
                Complete Overview
              </h1>
              <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-5xl mx-auto leading-relaxed">
                The unified cybersecurity platform integrating all five POD Intelligence systems into 
                a single, powerful solution for federal-grade protection and compliance.
              </p>
              
              <div className="grid grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <img src={apexLogoImg} alt="APEX" className="h-12 w-12 mx-auto mb-3" />
                  <span className="text-purple-400 text-sm font-bold">APEX</span>
                  <p className="text-xs text-gray-400">Genetic AI</p>
                </div>
                <div className="text-center">
                  <img src={echoLogoImg} alt="ECHO" className="h-12 w-12 mx-auto mb-3" />
                  <span className="text-cyan-400 text-sm font-bold">ECHO</span>
                  <p className="text-xs text-gray-400">Holographic</p>
                </div>
                <div className="text-center">
                  <Enhanced4DShieldIcon className="h-12 w-12 mx-auto mb-3 text-green-400" size={48} />
                  <span className="text-green-400 text-sm font-bold">PULSE</span>
                  <p className="text-xs text-gray-400">Location Intel</p>
                </div>
                <div className="text-center">
                  <Enhanced4DNetworkIcon className="h-12 w-12 mx-auto mb-3 text-orange-400" size={48} />
                  <span className="text-orange-400 text-sm font-bold">SURGE</span>
                  <p className="text-xs text-gray-400">Autonomous Defense</p>
                </div>
                <div className="text-center">
                  <Enhanced4DServerIcon className="h-12 w-12 mx-auto mb-3 text-blue-400" size={48} />
                  <span className="text-blue-400 text-sm font-bold">FLOW</span>
                  <p className="text-xs text-gray-400">Operations</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  data-testid="button-orca-platform-demo"
                >
                  Schedule Platform Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/solutions">
                  <Button 
                    size="lg" 
                    className="bg-transparent border-2 border-spring-500 text-spring-300 hover:bg-spring-500 hover:text-white px-10 py-4 text-lg"
                    data-testid="button-view-solutions"
                  >
                    View All Solutions
                    <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-20 px-6 bg-gradient-to-br from-midnight-900 via-slate-900 to-midnight-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4">
                UNIFIED PLATFORM CAPABILITIES
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Integrated POD Intelligence<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 via-cyan-400 to-blue-500">
                  Command Center
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Experience the power of five revolutionary AI systems working together as one 
                comprehensive cybersecurity solution.
              </p>
            </div>

            {/* Core Platform Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <Card className="bg-gradient-to-br from-spring-900/50 to-cyan-900/50 border-2 border-spring-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DServerIcon className="w-12 h-12 text-spring-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">Unified Command</h3>
                      <p className="text-spring-300 text-sm">Central Platform Control</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-4">
                    Single dashboard orchestrating all five POD Intelligence systems with 
                    real-time status monitoring and coordinated response capabilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-spring-400" size={16} />
                      <span className="text-xs text-gray-300">Real-time system orchestration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-spring-400" size={16} />
                      <span className="text-xs text-gray-300">Cross-system intelligence correlation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-spring-400" size={16} />
                      <span className="text-xs text-gray-300">Automated threat response coordination</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DShieldIcon className="w-12 h-12 text-cyan-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">Federal Compliance</h3>
                      <p className="text-cyan-300 text-sm">Regulatory Integration</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-4">
                    Built-in FERPA, FISMA, and NIST compliance with automated policy enforcement 
                    and audit trail generation across all platform components.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-cyan-400" size={16} />
                      <span className="text-xs text-gray-300">FERPA educational compliance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-cyan-400" size={16} />
                      <span className="text-xs text-gray-300">FISMA federal security standards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-cyan-400" size={16} />
                      <span className="text-xs text-gray-300">NIST cybersecurity framework</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DNetworkIcon className="w-12 h-12 text-purple-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Integration</h3>
                      <p className="text-purple-300 text-sm">Cross-System Learning</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-4">
                    Advanced machine learning algorithms that enable each POD Intelligence system 
                    to learn from and enhance the capabilities of the others.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-purple-400" size={16} />
                      <span className="text-xs text-gray-300">Multi-system pattern recognition</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-purple-400" size={16} />
                      <span className="text-xs text-gray-300">Federated learning capabilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-purple-400" size={16} />
                      <span className="text-xs text-gray-300">Predictive threat modeling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Platform Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-spring-900/30 to-cyan-900/30 rounded-xl p-6 text-center border border-spring-500/30">
                <div className="text-4xl font-bold text-spring-400 mb-2">99.2%</div>
                <div className="text-sm text-spring-300">Platform Accuracy</div>
              </div>
              <div className="bg-gradient-to-br from-spring-900/30 to-cyan-900/30 rounded-xl p-6 text-center border border-spring-500/30">
                <div className="text-4xl font-bold text-spring-400 mb-2">5</div>
                <div className="text-sm text-spring-300">Integrated AI Systems</div>
              </div>
              <div className="bg-gradient-to-br from-spring-900/30 to-cyan-900/30 rounded-xl p-6 text-center border border-spring-500/30">
                <div className="text-4xl font-bold text-spring-400 mb-2">24/7</div>
                <div className="text-sm text-spring-300">Continuous Protection</div>
              </div>
              <div className="bg-gradient-to-br from-spring-900/30 to-cyan-900/30 rounded-xl p-6 text-center border border-spring-500/30">
                <div className="text-4xl font-bold text-spring-400 mb-2">&lt; 30s</div>
                <div className="text-sm text-spring-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* POD Intelligence Systems Overview */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-purple-800/20 to-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30 text-xl px-8 py-4">
                POD INTELLIGENCE SYSTEMS
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Five Revolutionary<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-500">
                  AI Systems
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Each POD Intelligence system brings unique capabilities that combine to create 
                the most advanced cybersecurity platform available.
              </p>
            </div>

            {/* Individual System Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Link href="/platform/apex-genetic-ai">
                <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img src={apexLogoImg} alt="APEX" className="w-12 h-12 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-white">APEX Genetic AI</h3>
                        <p className="text-purple-300 text-sm">Self-Evolving Intelligence</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      Revolutionary genetic algorithms that evolve and adapt to new threats autonomously.
                    </p>
                    <div className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm">Explore APEX</span>
                      <Enhanced4DArrowRightIcon className="w-4 h-4" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/platform/echo-holographic">
                <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img src={echoLogoImg} alt="ECHO" className="w-12 h-12 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-white">ECHO Holographic</h3>
                        <p className="text-cyan-300 text-sm">5D Interface with AI Avatars</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      Immersive 5D holographic interfaces with live human-like AI avatars for intuitive interaction.
                    </p>
                    <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm">Explore ECHO</span>
                      <Enhanced4DArrowRightIcon className="w-4 h-4" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/platform/pulse-predictive">
                <Card className="bg-gradient-to-br from-green-900/50 to-slate-800/50 border-2 border-green-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Enhanced4DShieldIcon className="w-12 h-12 text-green-400 mr-4" size={48} />
                      <div>
                        <h3 className="text-xl font-bold text-white">PULSE Location Intelligence</h3>
                        <p className="text-green-300 text-sm">Geospatial Threat Tracking</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      Real-time geospatial threat tracking with 98.7% location accuracy for comprehensive security.
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 group-hover:text-green-300 transition-colors">
                      <span className="text-sm">Explore PULSE</span>
                      <Enhanced4DArrowRightIcon className="w-4 h-4" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/platform/surge-unified-response">
                <Card className="bg-gradient-to-br from-orange-900/50 to-slate-800/50 border-2 border-orange-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Enhanced4DNetworkIcon className="w-12 h-12 text-orange-400 mr-4" size={48} />
                      <div>
                        <h3 className="text-xl font-bold text-white">SURGE Autonomous Defense</h3>
                        <p className="text-orange-300 text-sm">Drone Swarm Coordination</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      Autonomous drone networks with 8-minute response time for physical and cyber defense.
                    </p>
                    <div className="flex items-center space-x-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="text-sm">Explore SURGE</span>
                      <Enhanced4DArrowRightIcon className="w-4 h-4" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/platform/flow-federated-learning">
                <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-2 border-blue-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Enhanced4DServerIcon className="w-12 h-12 text-blue-400 mr-4" size={48} />
                      <div>
                        <h3 className="text-xl font-bold text-white">FLOW Operations Automation</h3>
                        <p className="text-blue-300 text-sm">Meeting Intelligence & Workflow</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      Advanced workflow automation with 68% productivity gains and intelligent meeting analysis.
                    </p>
                    <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm">Explore FLOW</span>
                      <Enhanced4DArrowRightIcon className="w-4 h-4" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="py-20 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/30 to-midnight-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4">
                DEPLOYMENT OPTIONS
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Choose Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 via-cyan-400 to-blue-500">
                  Deployment Model
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Flexible deployment options designed for educational institutions and government agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-spring-900/50 to-cyan-900/50 border-2 border-spring-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DGlobeIcon className="w-12 h-12 text-spring-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">Federal Cloud</h3>
                      <p className="text-spring-300 text-sm">FedRAMP Authorized</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-6">
                    Fully managed cloud deployment with FedRAMP authorization for federal agencies 
                    and contractors requiring the highest security standards.
                  </p>
                  <Button 
                    className="w-full bg-spring-600 hover:bg-spring-700" 
                    data-testid="button-federal-cloud"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Federal Cloud Info
                    <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DUsersIcon className="w-12 h-12 text-cyan-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">Educational Institution</h3>
                      <p className="text-cyan-300 text-sm">FERPA Compliant</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-6">
                    Specialized deployment for K-12 schools, universities, and educational systems 
                    with built-in FERPA compliance and student data protection.
                  </p>
                  <Button 
                    className="w-full bg-cyan-600 hover:bg-cyan-700" 
                    data-testid="button-educational-deployment"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Educational Options
                    <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/50 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DBuildingIcon className="w-12 h-12 text-purple-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-xl font-bold text-white">Enterprise Hybrid</h3>
                      <p className="text-purple-300 text-sm">On-Premise + Cloud</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mb-6">
                    Hybrid deployment combining on-premise infrastructure with cloud capabilities 
                    for organizations with specific compliance or sovereignty requirements.
                  </p>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700" 
                    data-testid="button-hybrid-deployment"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Hybrid Solutions
                    <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Deploy<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">
                ORCA Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto">
              Experience the complete ORCA platform with all five POD Intelligence systems 
              working together to provide unparalleled cybersecurity protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="button-4d px-12 py-6 text-xl"
                onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                data-testid="button-orca-platform-consultation"
              >
                Schedule Platform Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-spring-500 text-spring-300 hover:bg-spring-500 hover:text-white px-12 py-6 text-xl"
                  data-testid="button-view-all-solutions"
                >
                  View All Solutions
                  <Enhanced4DArrowRightIcon className="ml-3 w-6 h-6" size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
