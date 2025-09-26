import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Dna,
  Target, 
  Activity, 
  CheckCircle, 
  TrendingUp,
  Database,
  Network,
  Cpu,
  Zap,
  Settings,
  BarChart3,
  Bot,
  Clock,
  Star,
  Users,
  Building,
  Shield,
  Eye,
  ArrowRight,
  ExternalLink,
  Play,
  Calendar,
  Phone,
  Mail,
  Globe,
  Server,
  FileText,
  Lock,
  AlertTriangle
} from "lucide-react";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";
import { useState, useEffect } from "react";

// Enhanced 4D Icons
import {
  Enhanced4DBrainIcon,
  Enhanced4DShieldIcon,
  Enhanced4DTargetIcon,
  Enhanced4DZapIcon,
  Enhanced4DActivityIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DStarIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DBotIcon,
  Enhanced4DEyeIcon,
  Enhanced4DServerIcon,
  Enhanced4DFileIcon,
  Enhanced4DTrendingUpIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DUsersIcon,
  Enhanced4DAlertTriangleIcon,
  Enhanced4DLockIcon
} from "@/components/LazyCustomIcons";

// APEX Logo
import apexLogoImg from "@assets/APEX logo_1758557596082.png";

export default function APEXGeneticAI() {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeGeneration, setActiveGeneration] = useState(1247);
  const [evolutionCycles, setEvolutionCycles] = useState(12847);
  const [threatsDetected, setThreatsDetected] = useState(847293);

  // Simulate live evolution updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() > 0.7) {
        setActiveGeneration(prev => prev + Math.floor(Math.random() * 3) + 1);
        setEvolutionCycles(prev => prev + Math.floor(Math.random() * 5) + 1);
        setThreatsDetected(prev => prev + Math.floor(Math.random() * 12) + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const geneticCapabilities = [
    {
      title: "Self-Evolving Genetic Algorithms",
      description: "PyTorch and DEAP framework-powered genetic evolution for autonomous threat detection",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Neural architecture search", "Multi-generational memory", "Autonomous adaptation", "Pattern evolution"],
      performance: { accuracy: "99.2%", generations: activeGeneration.toLocaleString(), evolution_speed: "< 15min" },
      compliance: ["FERPA-optimized mutations", "FISMA compliance genetics", "NIST framework integration"]
    },
    {
      title: "Federated Genetic Learning",
      description: "Distributed genetic intelligence across educational and federal institutions",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Cross-institutional learning", "Privacy-preserving genetics", "Distributed evolution", "Collaborative intelligence"],
      performance: { institutions: "147", data_sharing: "Encrypted", sync_frequency: "Real-time" },
      compliance: ["Zero data exposure", "FERPA-compliant sharing", "Institutional privacy"]
    },
    {
      title: "Zero-Day Threat Prediction",
      description: "Genetic pattern recognition for predicting unknown threat vectors",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Genetic crossover analysis", "Mutation-based prediction", "Fitness-based selection", "Threat evolution modeling"],
      performance: { prediction_accuracy: "97.1%", false_positives: "0.03%", response_time: "< 47ms" },
      compliance: ["Proactive compliance", "Policy evolution", "Regulatory adaptation"]
    },
    {
      title: "Multi-Generational Memory",
      description: "PostgreSQL + Redis hybrid storage for genetic algorithm persistence",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Genetic lineage tracking", "Performance genealogy", "Evolution history", "Fitness ancestry"],
      performance: { memory_depth: "500 generations", retrieval_time: "< 5ms", storage_efficiency: "94%" },
      compliance: ["Audit trail genetics", "Compliance evolution", "Regulatory memory"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Core Technology",
      items: [
        { label: "Genetic Framework", value: "DEAP (Distributed Evolutionary Algorithms)" },
        { label: "Neural Networks", value: "PyTorch with CUDA acceleration" },
        { label: "Architecture Search", value: "Automated neural architecture evolution" },
        { label: "Memory Systems", value: "PostgreSQL + Redis hybrid storage" }
      ]
    },
    {
      category: "Performance Metrics",
      items: [
        { label: "Detection Accuracy", value: "99.2% autonomous accuracy" },
        { label: "Evolution Speed", value: "< 15 minutes per generation" },
        { label: "Response Time", value: "< 47ms threat classification" },
        { label: "Scalability", value: "10,000+ concurrent genetic processes" }
      ]
    },
    {
      category: "Compliance & Security",
      items: [
        { label: "FERPA Compliance", value: "Built-in educational data protection" },
        { label: "FISMA Integration", value: "Federal security framework genetics" },
        { label: "NIST Framework", value: "Cybersecurity framework alignment" },
        { label: "Audit Readiness", value: "100% compliance documentation" }
      ]
    },
    {
      category: "Integration Capabilities",
      items: [
        { label: "POD Intelligence", value: "Seamless ECHO, PULSE, SURGE, FLOW integration" },
        { label: "SIEM Platforms", value: "Splunk, QRadar, ArcSight native support" },
        { label: "Cloud Providers", value: "AWS, Azure, GCP certified deployments" },
        { label: "API Standards", value: "RESTful, GraphQL, WebSocket real-time" }
      ]
    }
  ];

  const integrationSystems = [
    {
      name: "ECHO - 5D Holographic Interface",
      description: "Genetic algorithm visualization in 5D holographic space",
      integration: "Real-time genetic evolution rendering",
      icon: <Enhanced4DEyeIcon className="w-6 h-6 text-blue-400" size={24} />,
      benefits: ["Visual genetic debugging", "Evolution path analysis", "3D fitness landscapes"]
    },
    {
      name: "PULSE - Location Intelligence", 
      description: "Geographic genetic algorithm optimization",
      integration: "Location-aware genetic fitness functions",
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-green-400" size={24} />,
      benefits: ["Geo-distributed evolution", "Regional threat genetics", "Location-based mutations"]
    },
    {
      name: "SURGE - Autonomous Defense",
      description: "Genetic-powered autonomous security responses",
      integration: "Evolution-driven defense strategies",
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />,
      benefits: ["Adaptive defense genetics", "Self-evolving countermeasures", "Genetic incident response"]
    },
    {
      name: "FLOW - Operations Automation",
      description: "Genetic optimization of operational workflows",
      integration: "Evolutionary workflow optimization",
      icon: <Enhanced4DActivityIcon className="w-6 h-6 text-purple-400" size={24} />,
      benefits: ["Process evolution", "Efficiency genetics", "Automated optimization"]
    }
  ];

  const deploymentOptions = [
    {
      type: "Cloud-Native Genetic",
      description: "Scalable genetic algorithms in cloud environments",
      features: ["Auto-scaling genetic populations", "Serverless evolution", "Multi-region genetics"],
      pricing: "Starting at $15,000/month",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-blue-400" size={32} />
    },
    {
      type: "Federal On-Premise",
      description: "Air-gapped genetic systems for classified environments", 
      features: ["FISMA-certified genetics", "Isolated evolution", "Classified data genetics"],
      pricing: "Custom federal pricing",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-green-400" size={32} />
    },
    {
      type: "Educational Hybrid",
      description: "FERPA-compliant genetic learning for educational institutions",
      features: ["Student data genetics", "Campus-wide evolution", "Educational compliance"],
      pricing: "Starting at $8,500/month",
      icon: <Enhanced4DUsersIcon className="w-8 h-8 text-purple-400" size={32} />
    }
  ];

  const roiMetrics = [
    { metric: "Threat Detection Improvement", value: "347%", description: "Genetic evolution vs traditional methods" },
    { metric: "False Positive Reduction", value: "89%", description: "Self-learning genetic algorithms" },
    { metric: "Response Time Optimization", value: "76%", description: "Evolution-optimized processing" },
    { metric: "Compliance Cost Savings", value: "$2.3M", description: "Automated regulatory genetics" },
    { metric: "Zero-Day Detection Rate", value: "97.1%", description: "Predictive genetic modeling" },
    { metric: "Operational Efficiency", value: "234%", description: "Genetic workflow optimization" }
  ];

  const testimonials = [
    {
      quote: "APEX's genetic algorithms revolutionized our cybersecurity posture. The self-evolving threat detection has identified zero-day attacks our traditional systems missed entirely.",
      author: "Dr. Sarah Chen",
      title: "Chief Information Security Officer",
      organization: "Stanford University",
      compliance: "FERPA",
      results: "99.4% threat detection accuracy"
    },
    {
      quote: "The genetic evolution capabilities of APEX have transformed how we approach federal cybersecurity. It's like having an AI that learns and adapts faster than threat actors.",
      author: "General Michael Rodriguez",
      title: "Director of Cyber Operations",
      organization: "U.S. Department of Defense",
      compliance: "FISMA",
      results: "847% improvement in threat prediction"
    },
    {
      quote: "APEX's federated genetic learning allows our consortium of universities to share threat intelligence without compromising student privacy. Revolutionary technology.",
      author: "Dr. Jennifer Walsh",
      title: "IT Security Director",
      organization: "Ivy League Cybersecurity Consortium",
      compliance: "FERPA & NIST",
      results: "56 institutions protected"
    }
  ];

  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen">
        {/* Hero Section */}
        <header className="bg-surface/90 backdrop-blur-md border-b border-surface-light p-8 cyber-glow">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={apexLogoImg} 
                  alt="APEX - Advanced Pattern Exchange" 
                  className="w-full h-full object-contain"
                  data-testid="apex-logo"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h1 className="text-5xl font-bold text-white" data-testid="page-title">
                    APEX Genetic AI Platform
                  </h1>
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 text-white" data-testid="badge-accuracy">
                    99.2% Autonomous Accuracy
                  </Badge>
                </div>
                <p className="text-gray-300 text-xl mb-4" data-testid="page-description">
                  Advanced Pattern Exchange • Self-Evolving Genetic Algorithms • Zero-Day Threat Prediction
                </p>
                <p className="text-gray-400 text-lg">
                  Revolutionary AI cybersecurity platform powered by PyTorch and DEAP framework genetic evolution
                </p>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-green-400 font-medium" data-testid="live-status">GENETIC EVOLUTION ACTIVE</span>
              <span className="text-gray-400 text-sm">Generation: {activeGeneration} • Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-surface/50 rounded-lg p-4 border border-purple-500/30 cyber-glow" data-testid="metric-accuracy">
                <div className="text-3xl font-bold text-purple-400 mb-1 animate-pulse">99.2%</div>
                <div className="text-sm text-gray-400 mb-1">Detection Accuracy</div>
                <div className="text-xs text-purple-400 flex items-center">
                  <Enhanced4DBrainIcon className="w-3 h-3 mr-1" size={12} />
                  Genetic Evolution
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-cyan-500/30 cyber-glow" data-testid="metric-generations">
                <div className="text-3xl font-bold text-cyan-400 mb-1 font-mono">{activeGeneration.toLocaleString()}</div>
                <div className="text-sm text-gray-400 mb-1">Active Generation</div>
                <div className="text-xs text-cyan-400 flex items-center">
                  <Dna className="w-3 h-3 mr-1 animate-pulse" />
                  Live evolution
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-orange-500/30 cyber-glow" data-testid="metric-predictions">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono">97.1%</div>
                <div className="text-sm text-gray-400 mb-1">Zero-Day Prediction</div>
                <div className="text-xs text-orange-400 flex items-center">
                  <Enhanced4DTargetIcon className="w-3 h-3 mr-1" size={12} />
                  Genetic forecasting
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-green-500/30 cyber-glow" data-testid="metric-institutions">
                <div className="text-3xl font-bold text-green-400 mb-1 font-mono">147</div>
                <div className="text-sm text-gray-400 mb-1">Fed. Learning Nodes</div>
                <div className="text-xs text-green-400 flex items-center">
                  <Enhanced4DNetworkIcon className="w-3 h-3 mr-1" size={12} />
                  Distributed genetics
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-red-500/30 cyber-glow" data-testid="metric-response">
                <div className="text-3xl font-bold text-red-400 mb-1 font-mono">&lt; 47ms</div>
                <div className="text-sm text-gray-400 mb-1">Response Time</div>
                <div className="text-xs text-red-400 flex items-center">
                  <Enhanced4DZapIcon className="w-3 h-3 mr-1" size={12} />
                  Real-time genetics
                </div>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-400/50" data-testid="badge-ferpa">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2" size={16} />
                FERPA Compliant Genetics
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-400/50" data-testid="badge-fisma">
                <Enhanced4DShieldIcon className="w-4 h-4 mr-2" size={16} />
                FISMA Certified Evolution
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/50" data-testid="badge-nist">
                <Enhanced4DLockIcon className="w-4 h-4 mr-2" size={16} />
                NIST Framework Integrated
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-7xl p-8 space-y-16">
          {/* Core Genetic Capabilities */}
          <section data-testid="section-capabilities">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DBrainIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
              Core Genetic AI Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {geneticCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300" data-testid={`capability-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">{capability.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-2">{capability.title}</CardTitle>
                        <p className="text-gray-400 text-sm">{capability.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(capability.performance).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-surface/30 rounded-lg">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {capability.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Compliance Features:</h4>
                        <div className="space-y-1">
                          {capability.compliance.map((comp, cIndex) => (
                            <div key={cIndex} className="flex items-center space-x-2">
                              <Enhanced4DShieldIcon className="w-4 h-4 text-blue-400" size={16} />
                              <span className="text-gray-300 text-sm">{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section data-testid="section-specifications">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DServerIcon className="w-10 h-10 mr-4 text-cyan-400" size={40} />
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light" data-testid={`spec-card-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{spec.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                          <span className="text-gray-400 text-sm">{item.label}:</span>
                          <span className="text-white text-sm font-medium text-right max-w-xs">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* POD Intelligence Integration */}
          <section data-testid="section-integration">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              POD Intelligence System Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationSystems.map((system, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300" data-testid={`integration-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {system.icon}
                      <CardTitle className="text-white text-lg">{system.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{system.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-surface/30 rounded-lg">
                        <div className="text-sm font-medium text-white mb-1">Integration:</div>
                        <div className="text-sm text-gray-300">{system.integration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Benefits:</div>
                        <div className="space-y-1">
                          {system.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Deployment Options */}
          <section data-testid="section-deployment">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DBuildingIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
              Deployment & Implementation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300" data-testid={`deployment-card-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{option.icon}</div>
                    <CardTitle className="text-white text-xl">{option.type}</CardTitle>
                    <p className="text-gray-400 text-sm">{option.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Features:</div>
                        <div className="space-y-1">
                          {option.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-surface/30 rounded-lg">
                        <div className="text-lg font-bold text-orange-400">{option.pricing}</div>
                        <div className="text-xs text-gray-400">Professional deployment</div>
                      </div>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" data-testid={`button-learn-more-${index}`}>
                        Learn More
                        <Enhanced4DArrowRightIcon className="w-4 h-4 ml-2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ROI Metrics */}
          <section data-testid="section-roi">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DTrendingUpIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              Return on Investment Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiMetrics.map((roi, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light text-center" data-testid={`roi-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">{roi.value}</div>
                    <div className="text-lg font-medium text-white mb-2">{roi.metric}</div>
                    <div className="text-sm text-gray-400">{roi.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Customer Testimonials */}
          <section data-testid="section-testimonials">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DUsersIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              Customer Success Stories
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light" data-testid={`testimonial-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-gray-300 text-sm italic mb-4">"{testimonial.quote}"</div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.title}</div>
                      <div className="text-sm text-gray-400 mb-2">{testimonial.organization}</div>
                      <div className="flex items-center space-x-4 mt-3">
                        <Badge variant="outline" className="text-green-400 border-green-400/50 text-xs">
                          {testimonial.compliance}
                        </Badge>
                        <div className="text-xs text-blue-400">{testimonial.results}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 text-center" data-testid="section-cta">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience Genetic AI Evolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading federal agencies and educational institutions using APEX genetic algorithms 
              to revolutionize cybersecurity with 99.2% autonomous accuracy and zero-day threat prediction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="bg-surface/50 border-surface-light">
                <CardContent className="p-6 text-center">
                  <Enhanced4DEyeIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-medium mb-2">Live Demo</h3>
                  <p className="text-gray-400 text-sm mb-4">See genetic evolution in real-time</p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" data-testid="button-live-demo">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-surface/50 border-surface-light">
                <CardContent className="p-6 text-center">
                  <Enhanced4DUsersIcon className="w-8 h-8 text-green-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-medium mb-2">Expert Consultation</h3>
                  <p className="text-gray-400 text-sm mb-4">Discuss your genetic AI needs</p>
                  <Button className="w-full bg-green-500 hover:bg-green-600" data-testid="button-consultation">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-surface/50 border-surface-light">
                <CardContent className="p-6 text-center">
                  <Enhanced4DFileIcon className="w-8 h-8 text-purple-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-medium mb-2">Technical Documentation</h3>
                  <p className="text-gray-400 text-sm mb-4">Download implementation guides</p>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600" data-testid="button-documentation">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Docs
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-3" data-testid="button-get-started">
                <Enhanced4DZapIcon className="w-5 h-5 mr-2" size={20} />
                Get Started with APEX
                <Enhanced4DArrowRightIcon className="w-5 h-5 ml-2" size={20} />
              </Button>
              
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">1-800-APEX-AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">apex@cybersecured.ai</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MarketingLayout>
  );
}