import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Star, GraduationCap, ExternalLink, Building, Users } from "lucide-react";
// All icons now use Enhanced 4D versions with glass morphism effects
import {
  CustomShieldIcon,
  CustomBrainIcon,
  CustomGlobeIcon,
  CustomGraduationCapIcon,
  CustomFlagIcon,
  CustomTargetIcon,
  CustomZapIcon,
  CustomEyeIcon,
  CustomFileTextIcon,
  CustomDatabaseIcon,
  CustomHeadphonesIcon,
  Enhanced4DShieldIcon,
  Enhanced4DBrainIcon,
  Enhanced4DLockIcon,
  Enhanced4DTargetIcon,
  Enhanced4DEyeIcon,
  Enhanced4DBotIcon,
  Enhanced4DZapIcon,
  Enhanced4DActivityIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DFileIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DUsersIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DExternalLinkIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DServerIcon,
  Enhanced4DBuildingIcon
} from "@/components/LazyCustomIcons";
import { Link, useLocation } from "wouter";
import { MarketingLayout } from "@/components/MarketingLayout";

// Professional solution images
import managedEdrImg from "@assets/generated_images/AI_Threat_Detection_Engine_58460592.jpg";
import complianceImg from "@assets/generated_images/Federal_Compliance_Certification_2faa9e41.jpg";
import educationImg from "@assets/generated_images/Academic_Security_Framework_75c0b524.jpg";
import governmentImg from "@assets/generated_images/Government_AI_Security_Fundamentals_722b26ac.jpg";
import platformImg from "@assets/generated_images/Platform_Overview_Datasheet_3d239cec.jpg";
import threatReportImg from "@assets/generated_images/Threat_Report_2025_Cover_50b3edd9.jpg";

// POD Intelligence System Logos
import orcaLogoImg from "@assets/ORCA logo_1758558742074.png";
import apexLogoImg from "@assets/APEX logo_1758557596082.png";
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function Solutions() {
  const [, setLocation] = useLocation();
  
  // POD Intelligence Solution Categories with Platform Page Mappings
  const podIntelligenceSolutions = [
    {
      category: "APEX Genetic AI Solutions",
      icon: <img src={apexLogoImg} alt="APEX" className="w-8 h-8" />,
      description: "Self-evolving threat detection powered by genetic algorithms",
      color: "border-purple-500/50",
      gradient: "from-purple-900/50 to-slate-800/50",
      platformLink: "/platform/apex-genetic-ai",
      solutions: [
        {
          title: "Adaptive Threat Evolution",
          description: "Genetic algorithms that evolve with emerging threats",
          benefits: ["99.2% detection accuracy", "Self-learning patterns", "Zero-day threat prediction"]
        },
        {
          title: "Multi-Generational Learning",
          description: "Knowledge inheritance across threat generations",
          benefits: ["Cumulative intelligence", "Pattern recognition", "Predictive modeling"]
        },
        {
          title: "Sector-Specific Genetics",
          description: "FERPA/FISMA-optimized genetic algorithms",
          benefits: ["Compliance-aware evolution", "Regulatory adaptation", "Policy enforcement"]
        }
      ]
    },
    {
      category: "ECHO Holographic Solutions",
      icon: <img src={echoLogoImg} alt="ECHO" className="w-8 h-8" />,
      description: "5D holographic interfaces with live AI avatars",
      color: "border-cyan-500/50",
      gradient: "from-cyan-900/50 to-slate-800/50",
      platformLink: "/platform/echo-holographic",
      solutions: [
        {
          title: "5D Threat Visualization",
          description: "Immersive security operations with spatial computing",
          benefits: ["340% engagement increase", "Intuitive threat exploration", "Real-time collaboration"]
        },
        {
          title: "AI Avatar Security Briefings",
          description: "Live human-like avatars for security communications",
          benefits: ["Natural language interaction", "Facial expression analysis", "Interactive Q&A"]
        },
        {
          title: "Holographic SOC",
          description: "Virtual security operations center experiences",
          benefits: ["Remote collaboration", "Immersive training", "Enhanced decision-making"]
        }
      ]
    },
    {
      category: "PULSE Location Intelligence",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-green-400" size={32} />,
      description: "Real-time geospatial threat tracking and prediction",
      color: "border-green-500/50",
      gradient: "from-green-900/50 to-slate-800/50",
      platformLink: "/platform/pulse-predictive",
      solutions: [
        {
          title: "Geospatial Threat Tracking",
          description: "Real-time global threat location monitoring",
          benefits: ["98.7% location accuracy", "Global coverage", "15-second response time"]
        },
        {
          title: "Campus Security Integration",
          description: "Physical and digital security convergence",
          benefits: ["Unified threat response", "Emergency coordination", "Access control"]
        },
        {
          title: "Predictive Risk Mapping",
          description: "Location-based threat prediction and prevention",
          benefits: ["94.3% prediction accuracy", "Risk zone identification", "Preventive measures"]
        }
      ]
    },
    {
      category: "SURGE Autonomous Defense",
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />,
      description: "Automated incident response with drone coordination",
      color: "border-orange-500/50",
      gradient: "from-orange-900/50 to-slate-800/50",
      platformLink: "/platform/surge-unified-response",
      solutions: [
        {
          title: "Drone Swarm Coordination",
          description: "Autonomous drone networks for physical security",
          benefits: ["8-minute response time", "99.1% containment rate", "Coordinated defense"]
        },
        {
          title: "Automated Incident Response",
          description: "AI-driven threat containment and neutralization",
          benefits: ["Instant response", "97.8% neutralization", "Multi-vector protection"]
        },
        {
          title: "Strategic Defense Generation",
          description: "Dynamic defense pattern creation and deployment",
          benefits: ["Adaptive strategies", "Resource optimization", "Threat anticipation"]
        }
      ]
    },
    {
      category: "FLOW Operations Automation",
      icon: <Enhanced4DActivityIcon className="w-8 h-8 text-blue-400" size={32} />,
      description: "Workflow automation with meeting intelligence",
      color: "border-blue-500/50",
      gradient: "from-blue-900/50 to-slate-800/50",
      platformLink: "/platform/flow-federated-learning",
      solutions: [
        {
          title: "Meeting Intelligence",
          description: "Multi-platform meeting automation and analysis",
          benefits: ["68% productivity gain", "45% meeting efficiency", "Automated transcription"]
        },
        {
          title: "Workflow Optimization",
          description: "AI-powered process automation and enhancement",
          benefits: ["87% process automation", "Resource allocation", "Predictive scheduling"]
        },
        {
          title: "Federated Learning Operations",
          description: "Cross-organizational knowledge sharing and learning",
          benefits: ["92% knowledge retention", "Collaborative intelligence", "Shared expertise"]
        }
      ]
    }
  ];
  
  const customerTestimonials = [
    {
      quote: "The PULSE genetic algorithm system discovered threats that our previous solutions completely missed. With 99.2% accuracy and autonomous policy generation, it's like having an AI security expert that evolves with every new threat. The ECHO live human-like avatar interface gives our SOC team unprecedented situational awareness - we can literally navigate threats in 5D space with an intelligent AI guide that responds to threats with natural movements and facial expressions.",
      name: "Dr. Sarah Chen",
      title: "University System Chancellor", 
      company: "State University System",
      image: educationImg
    },
    {
      quote: "Deploying the SURGE drone swarm system across our federal facilities was a game-changer. The autonomous cyber defense capabilities integrate seamlessly with our existing infrastructure, while the Live Location tracking provides real-time geospatial intelligence that's critical for national security operations. The genetic AI evolution means our defenses get smarter every day.",
      name: "General Patricia Martinez",
      title: "Chief Information Officer",
      company: "Federal Agency Alliance", 
      image: governmentImg
    },
    {
      quote: "When the unified integration platform correlated threats across all five revolutionary systems, we contained a sophisticated multi-vector attack in under eight minutes. The genetic algorithms in PULSE identified the attack pattern, Live Location tracked the threat vectors, and SURGE coordinated our physical response - it's like nothing else in the industry.",
      name: "Marcus Rodriguez",
      title: "Director of IT Security",
      company: "Metropolitan School District",
      image: complianceImg
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-slate-900">
        
        {/* ORCA/POD Intelligence Solutions Hero */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/20 to-midnight-900">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
              {/* ORCA Platform Branding */}
              <div className="flex items-center justify-center mb-8">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-12 w-auto mr-4" />
                <Badge className="bg-spring-500/20 text-spring-300 border-spring-500/30 text-lg px-6 py-3">
                  CyberSecured AI's ORCA Solutions
                </Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">
                  POD Intelligence
                </span><br />
                Solutions Portfolio
              </h1>
              <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-5xl mx-auto leading-relaxed">
                Revolutionary cybersecurity solutions powered by five specialized AI systems: APEX genetic algorithms, 
                ECHO holographic interfaces, PULSE location intelligence, SURGE autonomous defense, and FLOW operations automation. 
                <strong className="text-spring-400">The complete POD Intelligence ecosystem for any organization.</strong>
              </p>
              <p className="text-xl text-cyan-400 font-semibold mb-8">
                Federal-grade POD Intelligence for educational institutions and government agencies.
              </p>
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-sm px-4 py-2 flex items-center justify-center w-fit mx-auto">
                <img src={orcaLogoImg} alt="ORCA" className="h-4 w-4 mr-2" />
                Powered by CyberSecured AI's ORCA Platform
              </Badge>
              
              <div className="flex justify-center mb-16">
                <Link href="/demo">
                  <Button 
                    size="lg" 
                    className="button-4d px-10 py-4 text-lg font-semibold"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Get a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              {/* POD Intelligence Systems Preview */}
              <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <img src={apexLogoImg} alt="APEX" className="h-10 w-10 mx-auto mb-2" />
                  <span className="text-purple-400 text-sm font-bold">APEX</span>
                </div>
                <div className="text-center">
                  <img src={echoLogoImg} alt="ECHO" className="h-10 w-10 mx-auto mb-2" />
                  <span className="text-cyan-400 text-sm font-bold">ECHO</span>
                </div>
                <div className="text-center">
                  <Enhanced4DTargetIcon className="h-10 w-10 mx-auto mb-2 text-green-400" size={40} />
                  <span className="text-green-400 text-sm font-bold">PULSE</span>
                </div>
                <div className="text-center">
                  <Enhanced4DZapIcon className="h-10 w-10 mx-auto mb-2 text-orange-400" size={40} />
                  <span className="text-orange-400 text-sm font-bold">SURGE</span>
                </div>
                <div className="text-center">
                  <Enhanced4DActivityIcon className="h-10 w-10 mx-auto mb-2 text-blue-400" size={40} />
                  <span className="text-blue-400 text-sm font-bold">FLOW</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-100 text-lg">
                <strong>4.9/5 from 500+ POD Intelligence deployments</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ORCA Solution Offerings */}
        <section className="py-20 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/30 to-midnight-900">
          <div className="container mx-auto max-w-7xl">
            
            {/* ORCA Complete Platform Solution */}
            <div className="text-center mb-20">
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4 flex items-center justify-center w-fit mx-auto">
                <img src={orcaLogoImg} alt="ORCA" className="h-6 w-6 mr-3" />
                ORCA CYBERSECURITY SOLUTIONS
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Choose Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 via-cyan-400 to-blue-500">
                  ORCA Solution
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Deploy ORCA as a complete cybersecurity platform or select individual POD Intelligence systems 
                tailored to your organization's specific needs.
              </p>
            </div>

            {/* ORCA Solution Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              
              {/* ORCA Complete Platform */}
              <Card className="bg-gradient-to-br from-spring-900/50 to-cyan-900/50 border-4 border-spring-500/50 hover:scale-105 transition-all duration-500 group relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-spring-500 text-white font-bold">RECOMMENDED</Badge>
                </div>
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <img src={orcaLogoImg} alt="ORCA Complete" className="w-16 h-16 mr-6" />
                    <div>
                      <h3 className="text-3xl font-bold text-white">ORCA Complete Platform</h3>
                      <p className="text-lg text-spring-300">Full POD Intelligence Ecosystem</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    The comprehensive cybersecurity solution integrating all five POD Intelligence systems: 
                    APEX genetic AI, ECHO holographic interfaces, PULSE location intelligence, SURGE autonomous defense, 
                    and FLOW operations automation.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-xl font-bold text-white">Complete Platform Includes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <img src={apexLogoImg} alt="APEX" className="w-6 h-6" />
                        <span className="text-purple-300 text-sm">APEX Genetic AI</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img src={echoLogoImg} alt="ECHO" className="w-6 h-6" />
                        <span className="text-cyan-300 text-sm">ECHO Holographic</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DTargetIcon className="w-6 h-6 text-green-400" size={24} />
                        <span className="text-green-300 text-sm">PULSE Location Intelligence</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DZapIcon className="w-6 h-6 text-orange-400" size={24} />
                        <span className="text-orange-300 text-sm">SURGE Autonomous Defense</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DActivityIcon className="w-6 h-6 text-blue-400" size={24} />
                        <span className="text-blue-300 text-sm">FLOW Operations Automation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-6 h-6 text-spring-400" size={24} />
                        <span className="text-spring-300 text-sm">Unified Integration Platform</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-black/30 rounded-lg p-3 text-center border border-spring-500/30">
                      <div className="text-lg font-bold text-spring-400 mb-1">99.2%</div>
                      <div className="text-xs text-spring-300">Combined Accuracy</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-center border border-spring-500/30">
                      <div className="text-lg font-bold text-spring-400 mb-1">5</div>
                      <div className="text-xs text-spring-300">AI Systems</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-center border border-spring-500/30">
                      <div className="text-lg font-bold text-spring-400 mb-1">24/7</div>
                      <div className="text-xs text-spring-300">Protection</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-center border border-spring-500/30">
                      <div className="text-lg font-bold text-spring-400 mb-1">Federal</div>
                      <div className="text-xs text-spring-300">Grade</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-spring-500 to-cyan-500 hover:from-spring-600 hover:to-cyan-600 text-white font-bold py-4 text-lg" 
                      data-testid="button-orca-complete-platform"
                      onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Deploy ORCA Complete Platform
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                    <Button 
                      className="w-full group-hover:bg-spring-500 transition-colors" 
                      data-testid="button-orca-platform-demo"
                      onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Schedule Platform Demo
                      <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Individual ORCA Solutions */}
              <Card className="bg-gradient-to-br from-slate-900/50 to-midnight-900/50 border-2 border-cyan-500/50 hover:scale-105 transition-all duration-500 group">
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <Enhanced4DServerIcon className="w-16 h-16 text-cyan-400 mr-6" size={64} />
                    <div>
                      <h3 className="text-3xl font-bold text-white">Individual ORCA Solutions</h3>
                      <p className="text-lg text-cyan-300">Modular POD Intelligence Systems</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    Deploy specific POD Intelligence systems independently based on your immediate security needs. 
                    Each system integrates seamlessly and can be expanded to the complete platform later.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-xl font-bold text-white">Available Individual Solutions:</h4>
                    <div className="space-y-3">
                      <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center space-x-3 mb-2">
                          <img src={apexLogoImg} alt="APEX" className="w-8 h-8" />
                          <span className="font-bold text-purple-300">ORCA APEX Solution</span>
                        </div>
                        <p className="text-sm text-gray-400">Self-evolving genetic AI for threat detection</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30">
                        <div className="flex items-center space-x-3 mb-2">
                          <img src={echoLogoImg} alt="ECHO" className="w-8 h-8" />
                          <span className="font-bold text-cyan-300">ORCA ECHO Solution</span>
                        </div>
                        <p className="text-sm text-gray-400">5D holographic interfaces with AI avatars</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                        <div className="flex items-center space-x-3 mb-2">
                          <Enhanced4DTargetIcon className="w-8 h-8 text-green-400" size={32} />
                          <span className="font-bold text-green-300">ORCA PULSE Solution</span>
                        </div>
                        <p className="text-sm text-gray-400">Location intelligence and geospatial tracking</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                        <div className="flex items-center space-x-3 mb-2">
                          <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />
                          <span className="font-bold text-orange-300">ORCA SURGE Solution</span>
                        </div>
                        <p className="text-sm text-gray-400">Autonomous defense with drone coordination</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                        <div className="flex items-center space-x-3 mb-2">
                          <Enhanced4DActivityIcon className="w-8 h-8 text-blue-400" size={32} />
                          <span className="font-bold text-blue-300">ORCA FLOW Solution</span>
                        </div>
                        <p className="text-sm text-gray-400">Operations automation and meeting intelligence</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 text-lg" 
                      data-testid="button-orca-individual-solutions"
                      onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Configure Individual Solutions
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                    <Button 
                      className="w-full group-hover:bg-cyan-500 transition-colors" 
                      data-testid="button-orca-solutions-comparison"
                      onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Compare Solutions
                      <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* POD Intelligence Technical Categories */}
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4 flex items-center justify-center w-fit mx-auto">
                <img src={orcaLogoImg} alt="ORCA" className="h-6 w-6 mr-3" />
                POD INTELLIGENCE TECHNICAL CAPABILITIES
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Complete POD Intelligence<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 via-cyan-400 to-blue-500">
                  Solution Ecosystem
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                From genetic AI algorithms to holographic interfaces, from location intelligence to autonomous defense - 
                discover how each POD Intelligence system addresses specific cybersecurity challenges while working 
                together as a unified ecosystem.
              </p>
            </div>

            {/* POD Intelligence Solution Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {podIntelligenceSolutions.map((category, index) => (
                <Card key={index} className={`bg-gradient-to-br ${category.gradient} border-2 ${category.color} hover:scale-105 transition-all duration-500 group`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {category.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {category.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="bg-black/30 rounded-lg p-4">
                          <h4 className="text-lg font-bold text-white mb-2">{solution.title}</h4>
                          <p className="text-gray-300 text-sm mb-3">{solution.description}</p>
                          <div className="space-y-1">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <Enhanced4DCheckCircleIcon className="w-3 h-3 text-spring-400" size={12} />
                                <span className="text-xs text-gray-400">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Link href={category.platformLink}>
                        <Button className="w-full bg-gradient-to-r from-spring-500 to-cyan-500 hover:from-spring-600 hover:to-cyan-600 transition-colors" data-testid={`button-platform-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                          Technical Details
                          <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                        </Button>
                      </Link>
                      <Button className="w-full group-hover:bg-spring-500 transition-colors" data-testid={`button-explore-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                        Explore Solutions
                        <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Individual System Solutions */}
            <div className="space-y-20">
              
              {/* PULSE Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
                    🧠 GENETIC AI EVOLUTION
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    PULSE - Autonomous Cyber Defense
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Self-evolving genetic algorithms achieve 99.2% threat detection accuracy through 
                    multi-generational learning and autonomous policy generation. Federal-grade AI 
                    defense that adapts and evolves against emerging threats.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-800/60 rounded-lg p-6 border border-purple-500/30">
                      <h4 className="text-lg font-semibold text-purple-300 mb-4">Core Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            Genetic Algorithm Engine (PyTorch & DEAP)
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            Multi-Generational Learning
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            Autonomous Policy Generation
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            Neural Architecture Search (NAS)
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            Federated Genetic Learning
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" size={16} />
                            FERPA/FISMA Genetics Adaptation
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.2%</div>
                        <div className="text-xs text-purple-300">Detection Accuracy</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-2xl font-bold text-purple-400 mb-1">-78%</div>
                        <div className="text-xs text-purple-300">False Positives</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-2xl font-bold text-purple-400 mb-1">+65%</div>
                        <div className="text-xs text-purple-300">Response Speed</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-2xl font-bold text-purple-400 mb-1">-82%</div>
                        <div className="text-xs text-purple-300">Security Gaps</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/dashboard/pulse'}
                    >
                      <Enhanced4DBrainIcon className="mr-2 w-5 h-5" size={20} />
                      Access PULSE Dashboard
                    </Button>
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Request Federal Demo
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={managedEdrImg}
                    alt="PULSE Genetic AI Interface"
                    className="w-full rounded-xl border border-purple-500/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Live Location Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    📍 GEOSPATIAL INTELLIGENCE
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Live Location Tracking
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Real-time device and asset monitoring with advanced geospatial intelligence 
                    integration. Automated threat correlation provides comprehensive location-based 
                    security for federal agencies and educational institutions.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-800/60 rounded-lg p-6 border border-cyan-500/30">
                      <h4 className="text-lg font-semibold text-cyan-300 mb-4">Advanced Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Real-Time Device Monitoring
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Geospatial Intelligence Integration
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Automated Threat Correlation
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Asset Movement Analytics
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Location-Based Alerting
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                            Federal Compliance Tracking
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/dashboard/location'}
                    >
                      <Enhanced4DGlobeIcon className="mr-2 w-5 h-5" size={20} />
                      View Location Dashboard
                    </Button>
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Schedule Demo
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative lg:order-1">
                  <img 
                    src={educationImg}
                    alt="Live Location Tracking Interface"
                    className="w-full rounded-xl border border-cyan-500/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* ECHO Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                    👁️ 5D HOLOGRAPHIC AVATAR INTERFACE
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    ECHO - Live Human-Like Avatar Interface
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Revolutionary 5D threat visualization with live human-like avatar guide featuring natural movements, 
                    facial expressions, and contextual gestures. Experience temporal threat analysis across time, 
                    3D space, and severity dimensions with an intelligent AI companion that responds to your interactions.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-800/60 rounded-lg p-6 border border-blue-500/30">
                      <h4 className="text-lg font-semibold text-blue-300 mb-4">Revolutionary Technology</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            5D Holographic Threat Matrix
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            Live Avatar with Facial Expressions
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            AI Natural Language Processing
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            Immersive Command Interface
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            Real-Time Data Projection
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                            Voice-Activated Controls
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/dashboard/echo'}
                    >
                      <Enhanced4DEyeIcon className="mr-2 w-5 h-5" size={20} />
                      Enter Holographic Interface
                    </Button>
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Experience Demo
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={platformImg}
                    alt="ECHO Live Avatar Interface"
                    className="w-full rounded-xl border border-blue-500/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* SURGE Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30">
                    🚁 AUTONOMOUS DRONE SWARM
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    SURGE - Autonomous Cyber Defense Swarm
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Drone swarm coordination and monitoring with autonomous defensive operations. 
                    Real-time swarm intelligence provides integrated cyber-physical security for 
                    critical infrastructure and federal facilities.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-800/60 rounded-lg p-6 border border-red-500/30">
                      <h4 className="text-lg font-semibold text-red-300 mb-4">Swarm Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Drone Swarm Coordination
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Autonomous Defensive Operations
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Real-Time Swarm Intelligence
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Integrated Cyber-Physical Security
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Automated Perimeter Defense
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-red-400" size={16} />
                            Critical Infrastructure Protection
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/dashboard/surge'}
                    >
                      <Enhanced4DZapIcon className="mr-2 w-5 h-5" size={20} />
                      Access SURGE Control
                    </Button>
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Federal Consultation
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative lg:order-1">
                  <img 
                    src={governmentImg}
                    alt="SURGE Drone Swarm Control"
                    className="w-full rounded-xl border border-red-500/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Unified Integration Platform */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
                    🔄 UNIFIED ANALYTICS
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Unified Integration Platform
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Cross-system analytics and correlation engine with centralized alert management. 
                    Executive compliance dashboards and federal deployment architecture integrate 
                    all revolutionary systems into a unified command center.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-800/60 rounded-lg p-6 border border-green-500/30">
                      <h4 className="text-lg font-semibold text-green-300 mb-4">Integration Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Cross-System Analytics
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Centralized Alert Management
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Executive Compliance Dashboards
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Federal Deployment Architecture
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Real-Time WebSocket Architecture
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-green-400" size={16} />
                            Multi-System Threat Correlation
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-green-900/30 rounded-lg p-4 text-center border border-green-500/30">
                        <div className="text-2xl font-bold text-green-400 mb-1">5</div>
                        <div className="text-xs text-green-300">WebSocket Servers</div>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-4 text-center border border-green-500/30">
                        <div className="text-2xl font-bold text-green-400 mb-1">JWT</div>
                        <div className="text-xs text-green-300">Role-Based Auth</div>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-4 text-center border border-green-500/30">
                        <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                        <div className="text-xs text-green-300">Real-Time Monitoring</div>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-4 text-center border border-green-500/30">
                        <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-xs text-green-300">Federal Compliant</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/dashboard/unified'}
                    >
                      <Enhanced4DNetworkIcon className="mr-2 w-5 h-5" size={20} />
                      Access Unified Platform
                    </Button>
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Executive Briefing
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={threatReportImg}
                    alt="Unified Integration Platform"
                    className="w-full rounded-xl border border-green-500/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Federal Agency Use Cases */}
            <div className="mt-20 bg-slate-800/60 rounded-xl border border-cyan-500/30 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Federal Agency Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700/40 rounded-lg p-6 border border-purple-500/30">
                  <Enhanced4DShieldIcon className="w-8 h-8 text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-white mb-3">Defense Agencies</h4>
                  <p className="text-gray-300 text-sm">
                    PULSE genetic algorithms adapt to nation-state threats. SURGE provides 
                    perimeter defense for critical military installations.
                  </p>
                </div>
                <div className="bg-slate-700/40 rounded-lg p-6 border border-cyan-500/30">
                  <Enhanced4DGlobeIcon className="w-8 h-8 text-cyan-400 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-white mb-3">Intelligence Services</h4>
                  <p className="text-gray-300 text-sm">
                    Live Location tracking for asset security. ECHO's human-like avatar provides 
                    5D immersive threat analysis with contextual guidance for intelligence operations.
                  </p>
                </div>
                <div className="bg-slate-700/40 rounded-lg p-6 border border-green-500/30">
                  <Enhanced4DNetworkIcon className="w-8 h-8 text-green-400 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-white mb-3">Homeland Security</h4>
                  <p className="text-gray-300 text-sm">
                    Unified Integration Platform correlates threats across all systems. 
                    Executive dashboards provide situational awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Integration Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <Badge className="mb-8 bg-spring-500/20 text-spring-300 border-spring-500/30 text-xl px-8 py-4 flex items-center justify-center w-fit mx-auto">
                <img src={orcaLogoImg} alt="ORCA" className="h-6 w-6 mr-3" />
                UNIFIED PLATFORM INTEGRATION
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                All POD Intelligence Systems<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 via-cyan-400 to-purple-500">
                  Working as One
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Experience the revolutionary power of APEX, ECHO, PULSE, SURGE, and FLOW working together 
                on the unified ORCA platform. Cross-system correlation and intelligent automation deliver 
                unprecedented cybersecurity capabilities.
              </p>
            </div>

            {/* Platform Integration Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-4xl font-bold text-white mb-8">
                  Unified Intelligence Architecture
                </h3>
                <div className="space-y-6">
                  <div className="bg-slate-800/60 rounded-lg p-6 border border-spring-500/30">
                    <div className="flex items-center mb-4">
                      <Enhanced4DNetworkIcon className="w-8 h-8 text-spring-400 mr-3" size={32} />
                      <h4 className="text-xl font-semibold text-white">Cross-System Correlation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      All five POD Intelligence systems share real-time threat intelligence, creating 
                      a unified defense matrix that adapts and responds to threats instantly.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300">APEX Genetics</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-300">ECHO Holographic</Badge>
                      <Badge className="bg-green-500/20 text-green-300">PULSE Location</Badge>
                      <Badge className="bg-orange-500/20 text-orange-300">SURGE Autonomous</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300">FLOW Operations</Badge>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 rounded-lg p-6 border border-cyan-500/30">
                    <div className="flex items-center mb-4">
                      <Enhanced4DBrainIcon className="w-8 h-8 text-cyan-400 mr-3" size={32} />
                      <h4 className="text-xl font-semibold text-white">Intelligent Automation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Advanced AI orchestration automatically routes threats to the most effective 
                      response system while maintaining complete situational awareness.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">&lt; 30s</div>
                        <div className="text-xs text-cyan-300">Response Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">99.8%</div>
                        <div className="text-xs text-cyan-300">Coordination Success</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 rounded-lg p-6 border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <Enhanced4DShieldIcon className="w-8 h-8 text-green-400 mr-3" size={32} />
                      <h4 className="text-xl font-semibold text-white">Federal-Grade Integration</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Complete platform meets all federal compliance requirements while providing 
                      seamless integration with existing government and educational infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-500/20 text-green-300">FedRAMP</Badge>
                      <Badge className="bg-green-500/20 text-green-300">FISMA</Badge>
                      <Badge className="bg-green-500/20 text-green-300">FERPA</Badge>
                      <Badge className="bg-green-500/20 text-green-300">NIST</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={platformImg}
                  alt="ORCA Platform Integration Architecture"
                  className="w-full rounded-xl border border-spring-500/30 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spring-900/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-2">Unified Command Center</h4>
                  <p className="text-spring-200 text-sm">All POD Intelligence systems accessible from a single interface</p>
                </div>
              </div>
            </div>

            {/* Platform Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img src={apexLogoImg} alt="APEX" className="w-10 h-10 mr-4" />
                    <div>
                      <h4 className="text-lg font-bold text-white">APEX Integration</h4>
                      <p className="text-purple-300 text-sm">Genetic AI Evolution</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Genetic algorithms continuously evolve threat detection patterns, sharing 
                    intelligence with all platform systems for comprehensive protection.
                  </p>
                  <Link href="/platform/apex-genetic-ai">
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700" data-testid="button-apex-platform">
                      Explore APEX Platform
                      <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img src={echoLogoImg} alt="ECHO" className="w-10 h-10 mr-4" />
                    <div>
                      <h4 className="text-lg font-bold text-white">ECHO Integration</h4>
                      <p className="text-cyan-300 text-sm">5D Holographic Interface</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Immersive 5D visualization with live AI avatars provides intuitive access 
                    to all platform capabilities with natural language interaction.
                  </p>
                  <Link href="/platform/echo-holographic">
                    <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700" data-testid="button-echo-platform">
                      Explore ECHO Platform
                      <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-slate-800/50 border-2 border-green-500/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DTargetIcon className="w-10 h-10 text-green-400 mr-4" size={40} />
                    <div>
                      <h4 className="text-lg font-bold text-white">PULSE Integration</h4>
                      <p className="text-green-300 text-sm">Location Intelligence</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Real-time geospatial tracking provides location context for all platform 
                    systems, enabling coordinated physical and digital security responses.
                  </p>
                  <Link href="/platform/pulse-predictive">
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700" data-testid="button-pulse-platform">
                      Explore PULSE Platform
                      <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Call-to-Action */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Experience the Complete ORCA Platform
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See how all five POD Intelligence systems work together to provide 
                the most comprehensive cybersecurity solution available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/platform">
                  <Button size="lg" className="button-4d px-10 py-4" data-testid="button-platform-overview">
                    <Enhanced4DServerIcon className="mr-2 w-5 h-5" size={20} />
                    Platform Overview
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4"
                  onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  data-testid="button-schedule-demo"
                >
                  Schedule Integration Demo
                  <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-slate-800 via-purple-800/20 to-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30 text-xl px-8 py-4">
                TECHNICAL SPECIFICATIONS
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Platform Technical<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-500">
                  Architecture
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Deep dive into the technical capabilities powering each POD Intelligence system. 
                From genetic algorithms to holographic interfaces, explore the cutting-edge technology 
                behind the ORCA platform.
              </p>
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* APEX Technical Specs */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-2 border-purple-500/50">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-6">
                    <img src={apexLogoImg} alt="APEX" className="w-12 h-12 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">APEX Genetic AI</h3>
                      <p className="text-purple-300">Self-Evolving Threat Detection</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">PyTorch</div>
                        <div className="text-xs text-purple-300">ML Framework</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">DEAP</div>
                        <div className="text-xs text-purple-300">Genetic Algorithms</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">NAS</div>
                        <div className="text-xs text-purple-300">Neural Architecture</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.2%</div>
                        <div className="text-xs text-purple-300">Detection Rate</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Multi-generational learning algorithms</li>
                      <li>• Federated genetic optimization</li>
                      <li>• FERPA/FISMA compliance genetics</li>
                      <li>• Autonomous policy generation</li>
                    </ul>
                    <Link href="/platform/apex-genetic-ai">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" data-testid="button-apex-technical">
                        View APEX Technical Details
                        <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* ECHO Technical Specs */}
              <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-2 border-cyan-500/50">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-6">
                    <img src={echoLogoImg} alt="ECHO" className="w-12 h-12 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">ECHO Holographic</h3>
                      <p className="text-cyan-300">5D Interface with Live Avatars</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">Three.js</div>
                        <div className="text-xs text-cyan-300">3D Rendering</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">WebGL</div>
                        <div className="text-xs text-cyan-300">GPU Acceleration</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">NLP</div>
                        <div className="text-xs text-cyan-300">Natural Language</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">5D</div>
                        <div className="text-xs text-cyan-300">Dimensions</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Live facial expression avatars</li>
                      <li>• Spatial computing interface</li>
                      <li>• Voice-activated holographic controls</li>
                      <li>• Real-time data projection</li>
                    </ul>
                    <Link href="/platform/echo-holographic">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700" data-testid="button-echo-technical">
                        View ECHO Technical Details
                        <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* PULSE Technical Specs */}
              <Card className="bg-gradient-to-br from-green-900/50 to-slate-800/50 border-2 border-green-500/50">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DTargetIcon className="w-12 h-12 text-green-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">PULSE Location Intelligence</h3>
                      <p className="text-green-300">Geospatial Threat Tracking</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">GIS</div>
                        <div className="text-xs text-green-300">Geographic Systems</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">GPS</div>
                        <div className="text-xs text-green-300">Real-time Tracking</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">ML</div>
                        <div className="text-xs text-green-300">Predictive Analytics</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">15s</div>
                        <div className="text-xs text-green-300">Response Time</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Global asset movement tracking</li>
                      <li>• Geospatial threat correlation</li>
                      <li>• Campus security integration</li>
                      <li>• Risk zone prediction</li>
                    </ul>
                    <Link href="/platform/pulse-predictive">
                      <Button className="w-full bg-green-600 hover:bg-green-700" data-testid="button-pulse-technical">
                        View PULSE Technical Details
                        <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* SURGE Technical Specs */}
              <Card className="bg-gradient-to-br from-orange-900/50 to-slate-800/50 border-2 border-orange-500/50">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-6">
                    <Enhanced4DZapIcon className="w-12 h-12 text-orange-400 mr-4" size={48} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">SURGE Autonomous Defense</h3>
                      <p className="text-orange-300">Drone Swarm Coordination</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">AI</div>
                        <div className="text-xs text-orange-300">Swarm Intelligence</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">IoT</div>
                        <div className="text-xs text-orange-300">Device Networks</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">ROS</div>
                        <div className="text-xs text-orange-300">Robot Operating</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">8m</div>
                        <div className="text-xs text-orange-300">Response Time</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Autonomous drone coordination</li>
                      <li>• Strategic defense generation</li>
                      <li>• Cyber-physical security</li>
                      <li>• Critical infrastructure protection</li>
                    </ul>
                    <Link href="/platform/surge-unified-response">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700" data-testid="button-surge-technical">
                        View SURGE Technical Details
                        <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FLOW Technical Specs */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-2 border-blue-500/50">
                <CardHeader className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Enhanced4DActivityIcon className="w-12 h-12 text-blue-400 mr-4" size={48} />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">FLOW Operations Automation</h3>
                      <p className="text-blue-300">Federated Learning & Meeting Intelligence</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/30 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">TensorFlow</div>
                          <div className="text-xs text-blue-300">Federated Learning</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">WebRTC</div>
                          <div className="text-xs text-blue-300">Meeting Capture</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">NLP</div>
                          <div className="text-xs text-blue-300">Text Processing</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">87%</div>
                          <div className="text-xs text-blue-300">Automation Rate</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Multi-platform meeting integration</li>
                        <li>• Automated workflow optimization</li>
                        <li>• Cross-organizational learning</li>
                        <li>• Intelligent resource allocation</li>
                        <li>• Predictive scheduling systems</li>
                        <li>• Knowledge retention algorithms</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/platform/flow-federated-learning">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" data-testid="button-flow-technical">
                        View FLOW Technical Details
                        <Enhanced4DExternalLinkIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Platform Access CTA */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-6">
                Explore Complete Technical Documentation
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Access detailed technical specifications, API documentation, and integration guides 
                for each POD Intelligence system on the ORCA platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/platform">
                  <Button size="lg" className="button-4d px-10 py-4" data-testid="button-technical-docs">
                    <Enhanced4DFileIcon className="mr-2 w-5 h-5" size={20} />
                    Technical Documentation
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4"
                  onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  data-testid="button-technical-consultation"
                >
                  Technical Consultation
                  <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ORCA Federal Core Platform */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                ORCA Federal Core Platform
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                AI-Powered Security<br />
                <span className="text-cyan-400">Platform</span>
              </h2>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-12">
                Comprehensive AI-driven cybersecurity platform with advanced threat detection, automated compliance, and predictive analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-slate-800/80 border border-red-500/40 hover:border-red-400/60 transition-all duration-300">
                <CardHeader className="p-6 text-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-500/30 to-orange-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-400/50 shadow-2xl transform-gpu hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-xl"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-red-300 rounded-full opacity-60 animate-pulse"></div>
                    <Enhanced4DBrainIcon className="w-8 h-8 text-red-300 relative z-10" size={32} />
                  </div>
                  <CardTitle className="text-lg text-white mb-3">AI-Powered Threat Detection</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• Real-time threat monitoring</li>
                    <li>• Machine learning-based analysis</li>
                    <li>• Behavioral anomaly detection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border border-orange-500/40 hover:border-orange-400/60 transition-all duration-300">
                <CardHeader className="p-6 text-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500/30 to-yellow-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-400/50 shadow-2xl transform-gpu hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
                    <ArrowRight className="w-8 h-8 text-orange-300 relative z-10 filter drop-shadow-lg" style={{filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.7))'}} />
                  </div>
                  <CardTitle className="text-lg text-white mb-3">Automated Incident Response</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• AI-powered response system</li>
                    <li>• Customizable playbooks</li>
                    <li>• Automated containment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border border-green-500/40 hover:border-green-400/60 transition-all duration-300">
                <CardHeader className="p-6 text-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/50 shadow-2xl transform-gpu hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-xl"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
                    <Enhanced4DShieldIcon className="w-8 h-8 text-green-300 relative z-10" size={32} />
                  </div>
                  <CardTitle className="text-lg text-white mb-3">Compliance Automation</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• FERPA, COPPA, CIPA automation</li>
                    <li>• FedRAMP, FISMA compliance</li>
                    <li>• Automated reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300">
                <CardHeader className="p-6 text-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/50 shadow-2xl transform-gpu hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
                    <Enhanced4DTargetIcon className="w-8 h-8 text-purple-300 relative z-10" size={32} />
                  </div>
                  <CardTitle className="text-lg text-white mb-3">Predictive Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• Vulnerability prediction</li>
                    <li>• Risk scoring and prioritization</li>
                    <li>• Trend analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cloud Security Packages */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                Cloud Security Packages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Protection Level<br />
                <span className="text-blue-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto">
                Comprehensive cloud security packages designed for modern infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/90 border border-blue-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-blue-500/20 text-blue-300">Core</Badge>
                  <CardTitle className="text-xl text-white mb-4">Essential Protection</CardTitle>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Essential Protection</div>
                  <p className="text-gray-200 text-sm font-medium">Professional cybersecurity solution</p>
                  <Badge className="mt-2 bg-blue-500/20 text-blue-300">250 Users Max</Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Up to 250 users</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">PyMISP & CIRCL-enhanced threat detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Basic incident response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">FERPA/CIPA compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Email & chat support</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-purple-500/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white">Popular</Badge>
                </div>
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-500/20 text-purple-300">Advanced</Badge>
                  <CardTitle className="text-xl text-white mb-4">Advanced Security</CardTitle>
                  <div className="text-2xl font-bold text-purple-400 mb-2">Advanced Security</div>
                  <p className="text-gray-200 text-sm font-medium">Professional cybersecurity solution</p>
                  <Badge className="mt-2 bg-purple-500/20 text-purple-300">1K Users Max</Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Up to 1000 users</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Advanced AI threat detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Automated incident response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Full compliance automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">24/7 priority support</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-yellow-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-yellow-500/20 text-yellow-300">Enterprise</Badge>
                  <CardTitle className="text-xl text-white mb-4">Enterprise Shield</CardTitle>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">Enterprise Shield</div>
                  <p className="text-gray-200 text-sm font-medium">Professional cybersecurity solution</p>
                  <Badge className="mt-2 bg-yellow-500/20 text-yellow-300">Unlimited Scale</Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Unlimited users</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Premium AI models</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Custom response playbooks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">White-glove compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Dedicated success team</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Contact Enterprise
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hardware Security Packages */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
                Hardware Security Packages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Hardware Security<br />
                <span className="text-orange-400">Infrastructure</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/90 border border-blue-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-blue-500/20 text-blue-300">Fundamental</Badge>
                  <CardTitle className="text-xl text-white mb-4">Hardware Fundamental</CardTitle>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-200 text-sm font-medium">Basic network security hardware foundation</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Basic network security hardware</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Entry-level access control</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Standard encryption devices</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-purple-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-500/20 text-purple-300">Advanced</Badge>
                  <CardTitle className="text-xl text-white mb-4">Hardware Advanced</CardTitle>
                  <div className="text-2xl font-bold text-purple-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-200 text-sm font-medium">Enhanced hardware security infrastructure</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Advanced network security hardware</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Comprehensive access control systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Enhanced encryption solutions</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-yellow-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-yellow-500/20 text-yellow-300">Enterprise</Badge>
                  <CardTitle className="text-xl text-white mb-4">Hardware Enterprise</CardTitle>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-200 text-sm font-medium">Complete enterprise hardware security</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Enterprise-grade security hardware</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">Advanced biometric systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                      <span className="text-gray-200 text-sm font-medium">FIPS 140-2 certified encryption devices</span>
                    </li>
                  </ul>
                  <Button 
                    className="button-4d w-full"
                    onClick={() => { window.location.href = '/contact'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Contact Enterprise
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ORCA Federal - EDU Solutions */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
                ORCA Federal - EDU
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Educational<br />
                <span className="text-green-400">Security Solutions</span>
              </h2>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-12">
                Specialized cybersecurity packages designed for K-12 and Higher Education institutions with FERPA, COPPA, and CIPA compliance.
              </p>
            </div>

            <Tabs defaultValue="k12" className="w-full">
              <div className="text-center mb-12">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-slate-700">
                  <TabsTrigger value="k12" className="data-[state=active]:bg-green-600">
                    K-12 Programs
                  </TabsTrigger>
                  <TabsTrigger value="higher-ed" className="data-[state=active]:bg-green-600">
                    Higher Education
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="k12" className="space-y-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">K-12 Pilot Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-slate-800/90 border border-blue-500/30">
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-blue-500/20 text-blue-300">Core EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core EDU</CardTitle>
                      <div className="text-2xl font-bold text-blue-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple classrooms and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Classroom security solutions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-200 text-sm font-medium">Student data protection</span>
                          </div>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Basic FERPA/COPPA/CIPA compliance</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-purple-500/30 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Popular</Badge>
                    </div>
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-purple-500/20 text-purple-300">Core+ EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core+ EDU</CardTitle>
                      <div className="text-2xl font-bold text-purple-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple classrooms and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Classroom security solutions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-200 text-sm font-medium">Student data protection</span>
                          </div>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Comprehensive FERPA/COPPA/CIPA compliance</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-yellow-500/30">
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-yellow-500/20 text-yellow-300">Advanced EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core Advanced EDU</CardTitle>
                      <div className="text-2xl font-bold text-yellow-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple classrooms and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Advanced classroom security solutions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Advanced student data protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Advanced FERPA/COPPA/CIPA automation</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Contact Enterprise
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="higher-ed" className="space-y-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Higher Education Pilot Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-slate-800/90 border border-blue-500/30">
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-blue-500/20 text-blue-300">Core HI-EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core HI-EDU</CardTitle>
                      <div className="text-2xl font-bold text-blue-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple departments, buildings, and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Research network security</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Campus-wide protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Academic data security</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-purple-500/30 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Popular</Badge>
                    </div>
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-purple-500/20 text-purple-300">Core+ HI-EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core+ HI-EDU</CardTitle>
                      <div className="text-2xl font-bold text-purple-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple departments, buildings, and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Research network security</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Campus-wide protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Academic data security</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-yellow-500/30">
                    <CardHeader className="p-6 text-center">
                      <Badge className="mb-4 bg-yellow-500/20 text-yellow-300">Advanced HI-EDU</Badge>
                      <CardTitle className="text-xl text-white mb-4">ORCA Core Advanced HI-EDU</CardTitle>
                      <div className="text-2xl font-bold text-yellow-400 mb-2">Contact for Pricing</div>
                      <p className="text-gray-200 text-sm font-medium">Multiple departments, buildings, and students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Advanced research network security</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Comprehensive campus-wide protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-200 text-sm font-medium">Advanced academic data security</span>
                        </li>
                      </ul>
                      <Button className="w-full button-4d">
                        Contact Enterprise
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Integrated Cloud & Networking Showcase */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
                Complete Integration Packages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Integrated Cloud &<br />
                <span className="text-purple-400">Networking Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/90 border border-blue-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-blue-500/20 text-blue-300 text-xs">Core</Badge>
                  <CardTitle className="text-lg text-white mb-3">ORCA ICN - Core</CardTitle>
                  <div className="text-xl font-bold text-blue-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-100 text-xs">Core AI platform with basic hardware</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-1 mb-4 text-xs text-gray-100">
                    <li>• Core AI security platform</li>
                    <li>• Basic hardware components</li>
                    <li>• Initial security assessment</li>
                  </ul>
                  <Button size="sm" className="w-full button-4d">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-purple-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-500/20 text-purple-300 text-xs">Advanced</Badge>
                  <CardTitle className="text-lg text-white mb-3">ORCA ICN Advanced</CardTitle>
                  <div className="text-xl font-bold text-purple-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-100 text-xs">Enhanced platform with advanced hardware</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-1 mb-4 text-xs text-gray-100">
                    <li>• Enhanced AI platform</li>
                    <li>• Advanced hardware security</li>
                    <li>• 24/7 security monitoring</li>
                  </ul>
                  <Button size="sm" className="w-full button-4d">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-yellow-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 text-xs">Enterprise</Badge>
                  <CardTitle className="text-lg text-white mb-3">ORCA ICN Enterprise</CardTitle>
                  <div className="text-xl font-bold text-yellow-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-100 text-xs">Complete enterprise solution (unlimited users)</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-1 mb-4 text-xs text-gray-100">
                    <li>• Enterprise AI platform (unlimited)</li>
                    <li>• Comprehensive hardware security</li>
                    <li>• Custom security solutions</li>
                  </ul>
                  <Button size="sm" className="w-full button-4d">
                    Contact Enterprise
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border border-red-500/30">
                <CardHeader className="p-6 text-center">
                  <Badge className="mb-4 bg-red-500/20 text-red-300 text-xs">Government</Badge>
                  <CardTitle className="text-lg text-white mb-3">Custom Government Package</CardTitle>
                  <div className="text-xl font-bold text-red-400 mb-2">Contact for Pricing</div>
                  <p className="text-gray-100 text-xs">Government-specific security solutions</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-1 mb-4 text-xs text-gray-100">
                    <li>• Government-specific solutions</li>
                    <li>• FedRAMP compliance</li>
                    <li>• Advanced threat protection</li>
                  </ul>
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Authority Metrics - Huntress Style */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Empowering the Educational<br />
                <span className="text-cyan-400">and Government Sector</span>
              </h2>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-16">
                ORCA Federal is custom built for you. But don't take our word for it – 
                hear directly from institutions like yours.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <Card className="bg-slate-800/60 border border-cyan-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">500K+</div>
                  <div className="text-white font-semibold mb-2">Students Protected</div>
                  <div className="text-gray-400">Educational institutions secured</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/60 border border-green-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-4">2M+</div>
                  <div className="text-white font-semibold mb-2">Endpoints Managed</div>
                  <div className="text-gray-400">Devices under protection</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/60 border border-purple-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">1.2M+</div>
                  <div className="text-white font-semibold mb-2">Identities Protected</div>
                  <div className="text-gray-400">User accounts secured</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/60 border border-orange-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">300+</div>
                  <div className="text-white font-semibold mb-2">Partners</div>
                  <div className="text-gray-400">Technology integrations</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  className="button-4d px-8 py-4"
                  onClick={() => { window.location.href = '/client-stories'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                >
                  Learn More About Our Success
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2025 Threat Report CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30">
                  Latest Intelligence
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ORCA Federal 2025<br />
                  <span className="text-red-400">Cyber Threat Report</span>
                </h2>
                <p className="text-xl text-gray-100 mb-8">
                  Get details on the cyberattacks we saw most last year, learn key industry insights, 
                  and build strategies to outsmart the most sophisticated threat actors.
                </p>
                <Button 
                  size="lg" 
                  className="button-4d px-8 py-4"
                  onClick={() => { window.location.href = '/resources/threat-report'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                >
                  Download the Threat Report
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <img 
                  src={threatReportImg}
                  alt="2025 Cyber Threat Report"
                  className="w-full max-w-md mx-auto rounded-xl shadow-2xl border border-red-500/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Implementation Workflow */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
                Implementation Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                How We Secure<br />
                <span className="text-purple-400">Your Organization</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
                Our proven 4-phase implementation process ensures rapid deployment with minimal disruption
                to your operations while maximizing security coverage.
              </p>
            </div>

            {/* Implementation Workflow */}
            <div className="relative">
              {/* Workflow Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                {/* Phase 1: Assessment */}
                <div className="relative">
                  <div className="bg-slate-800/90 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <Enhanced4DEyeIcon className="w-12 h-12 text-purple-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Assessment</h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Security posture evaluation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Risk identification</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Compliance gap analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Custom solution design</span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Badge className="bg-purple-500/20 text-purple-300">2-3 Days</Badge>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Deployment */}
                <div className="relative">
                  <div className="bg-slate-800/90 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <Enhanced4DZapIcon className="w-12 h-12 text-cyan-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Deployment</h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Platform installation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Integration configuration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>AI model training</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Testing and validation</span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Badge className="bg-cyan-500/20 text-cyan-300">5-7 Days</Badge>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Training */}
                <div className="relative">
                  <div className="bg-slate-800/90 border border-green-500/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <Enhanced4DUsersIcon className="w-12 h-12 text-green-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Training</h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Admin team training</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>User onboarding</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Response procedures</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Documentation delivery</span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Badge className="bg-green-500/20 text-green-300">2-3 Days</Badge>
                    </div>
                  </div>
                </div>

                {/* Phase 4: Support */}
                <div className="relative">
                  <div className="bg-slate-800/90 border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <CustomHeadphonesIcon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" size={48} />
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Ongoing Support</h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>24/7 monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Regular updates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Performance optimization</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Dedicated success manager</span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Badge className="bg-yellow-500/20 text-yellow-300">Ongoing</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Implementation Time */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center space-x-4 bg-slate-800/90 rounded-xl p-6 border border-spring-500/30">
                  <Enhanced4DCheckCircleIcon className="w-8 h-8 text-spring-400" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-white">Complete Implementation</div>
                    <div className="text-spring-400 font-semibold">10-14 Days Total</div>
                    <div className="text-gray-400">From assessment to full operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Solutions */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built for Your<br />
                <span className="text-cyan-400">Industry</span>
              </h2>
            </div>

            <Tabs defaultValue="education" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-700">
                <TabsTrigger value="education" className="data-[state=active]:bg-cyan-600 text-lg py-4">
                  <CustomGraduationCapIcon className="w-6 h-6 mr-2" size={24} />
                  Education
                </TabsTrigger>
                <TabsTrigger value="government" className="data-[state=active]:bg-cyan-600 text-lg py-4">
                  <CustomFlagIcon className="w-6 h-6 mr-2" size={24} />
                  Government
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-12">
                {/* K-12 and Higher Ed Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-slate-800/90 border border-green-500/30">
                    <CardHeader className="p-8">
                      <CustomGraduationCapIcon className="w-12 h-12 text-green-400 mb-4" size={48} />
                      <CardTitle className="text-2xl text-white mb-4">K-12 Education Solutions</CardTitle>
                      <p className="text-gray-100 mb-6">
                        Comprehensive cybersecurity tailored for K-12 educational institutions with FERPA compliance.
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Student device management</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Classroom security monitoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">CIPA compliance automation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Parent portal security</span>
                        </li>
                      </ul>
                      <Link href="/solutions/k12">
                        <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500/10">
                          Explore K-12 Solutions
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-purple-500/30">
                    <CardHeader className="p-8">
                      <Building className="w-12 h-12 text-purple-400 mb-4" />
                      <CardTitle className="text-2xl text-white mb-4">Higher Education Solutions</CardTitle>
                      <p className="text-gray-100 mb-6">
                        Advanced cybersecurity for universities and colleges with research network protection.
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Research data protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Campus-wide monitoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">BYOD security management</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Multi-campus coordination</span>
                        </li>
                      </ul>
                      <Link href="/solutions/higher-ed">
                        <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10">
                          Explore Higher Ed Solutions
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                {/* Education-Specific Services */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Education-Specific Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-slate-800/90 border border-cyan-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Enhanced4DNetworkIcon className="w-8 h-8 text-cyan-400 mr-3" size={32} />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Research Network Security Partitioning</h4>
                            <p className="text-cyan-400 font-bold text-sm">Contact for Pricing</p>
                          </div>
                        </div>
                        <p className="text-gray-100 text-xs">Secure research data networks with advanced partitioning</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/90 border border-green-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Users className="w-8 h-8 text-green-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Classroom Device Management</h4>
                            <p className="text-green-400 font-bold text-sm">Contact for Pricing</p>
                          </div>
                        </div>
                        <p className="text-gray-100 text-xs">Comprehensive classroom technology security management</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/90 border border-purple-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Enhanced4DShieldIcon className="w-8 h-8 text-purple-400 mr-3" size={32} />
                          <div>
                            <h4 className="text-white font-semibold text-sm">BYOD Security Management</h4>
                            <p className="text-purple-400 font-bold text-sm">Contact for Pricing</p>
                          </div>
                        </div>
                        <p className="text-gray-100 text-xs">Secure bring-your-own-device policies and monitoring</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="government" className="space-y-12">
                {/* Government Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-slate-800/90 border border-red-500/30">
                    <CardHeader className="p-8">
                      <CustomFlagIcon className="w-12 h-12 text-red-400 mb-4" size={48} />
                      <CardTitle className="text-2xl text-white mb-4">Federal Agency Solutions</CardTitle>
                      <p className="text-gray-100 mb-6">
                        FedRAMP High compliant cybersecurity for federal agencies with advanced authentication.
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">PIV/CAC authentication</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">FedRAMP High compliance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Multi-agency coordination</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">FISMA compliance automation</span>
                        </li>
                      </ul>
                      <Link href="/solutions/federal">
                        <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500/10">
                          Explore Federal Solutions
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/90 border border-blue-500/30">
                    <CardHeader className="p-8">
                      <Building className="w-12 h-12 text-blue-400 mb-4" />
                      <CardTitle className="text-2xl text-white mb-4">Municipal Government Solutions</CardTitle>
                      <p className="text-gray-100 mb-6">
                        Smart city cybersecurity with critical infrastructure protection and emergency coordination.
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Smart city infrastructure</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Emergency services integration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Traffic system security</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-gray-100">Utility grid monitoring</span>
                        </li>
                      </ul>
                      <Link href="/solutions/municipal">
                        <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10">
                          Explore Municipal Solutions
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                {/* Specialized Government Services */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Specialized Government Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-slate-800/90 border border-orange-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Enhanced4DNetworkIcon className="w-8 h-8 text-orange-400 mr-3" size={32} />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Multi-State Security Coalition Platform</h4>
                            <p className="text-orange-400 font-bold text-sm">Contact for Pricing</p>
                          </div>
                        </div>
                        <p className="text-gray-100 text-xs">Inter-agency cybersecurity coordination and threat sharing</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/90 border border-cyan-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Enhanced4DShieldIcon className="w-8 h-8 text-cyan-400 mr-3" size={32} />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Government Community Cloud Integration</h4>
                            <p className="text-cyan-400 font-bold text-sm">Contact for Pricing</p>
                          </div>
                        </div>
                        <p className="text-gray-100 text-xs">Secure government community cloud deployment and management</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                      K-12 & Higher Education
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Protecting Student Data<br />
                      <span className="text-blue-400">& Academic Freedom</span>
                    </h3>
                    <p className="text-lg text-gray-100 mb-8">
                      Purpose-built for educational institutions with FERPA compliance, 
                      student privacy protection, and academic research security.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">FERPA & COPPA compliance automation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Student data protection & privacy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Campus network security monitoring</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Research data protection</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => { window.location.href = '/solutions/education'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Explore Education Solutions
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src={educationImg}
                      alt="Education Security Solutions"
                      className="w-full rounded-xl shadow-2xl border border-blue-500/20"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="government" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30">
                      Federal, State & Local Government
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Securing Critical<br />
                      <span className="text-red-400">Government Infrastructure</span>
                    </h3>
                    <p className="text-lg text-gray-100 mb-8">
                      Built for government agencies with FISMA compliance, classified data protection, 
                      and multi-agency collaboration capabilities.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">FISMA & FedRAMP compliance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Classified data protection protocols</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Inter-agency threat intelligence sharing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-100">Critical infrastructure monitoring</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => { window.location.href = '/solutions/government'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Explore Government Solutions
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src={governmentImg}
                      alt="Government Security Solutions"
                      className="w-full rounded-xl shadow-2xl border border-red-500/20"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Customer Success Stories - Huntress Style */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Protecting Organizations<br />
                <span className="text-cyan-400">Like Yours</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {customerTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/60 border border-cyan-500/30 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-gray-100 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-cyan-500/30 object-cover"
                      />
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Showcase */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Complete Platform
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Leading the Charge for<br />
                  <span className="text-purple-400">Managed Cybersecurity</span>
                </h2>
                <p className="text-xl text-gray-100 mb-8">
                  See how ORCA Federal Managed Security stacks up against enterprise-first platforms – 
                  reviewed by organizations just like yours.
                </p>
                
                <div className="flex items-center space-x-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-4 text-white font-semibold">4.9/5 based on hundreds of reviews</span>
                </div>

                <Button 
                  size="lg" 
                  className="button-4d px-8 py-4"
                  onClick={() => { window.location.href = '/client-stories'; setTimeout(() => window.scrollTo(0, 0), 100); }}
                >
                  Read Customer Reviews
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={platformImg}
                  alt="Platform Dashboard"
                  className="w-full rounded-xl shadow-2xl border border-purple-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Comprehensive Security<br />
                <span className="text-cyan-400">Architecture</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Threat Detection */}
              <Card className="bg-slate-800/60 border border-red-500/30 hover:border-red-400/60 transition-colors">
                <CardHeader className="p-8 text-center">
                  <Enhanced4DTargetIcon className="w-16 h-16 text-red-400 mx-auto mb-6" size={64} />
                  <CardTitle className="text-2xl text-white mb-4">AI Threat Detection</CardTitle>
                  <p className="text-gray-100">
                    Advanced machine learning models for real-time threat identification and response
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li>• Neural network analysis</li>
                    <li>• Behavioral anomaly detection</li>
                    <li>• Predictive threat modeling</li>
                    <li>• 8-minute mean response time</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-500 text-red-400 hover:bg-red-500/10"
                    onClick={() => { setLocation('/solutions'); setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Identity Protection */}
              <Card className="bg-slate-800/60 border border-blue-500/30 hover:border-blue-400/60 transition-colors">
                <CardHeader className="p-8 text-center">
                  <Enhanced4DShieldIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" size={64} />
                  <CardTitle className="text-2xl text-white mb-4">Identity Security</CardTitle>
                  <p className="text-gray-100">
                    Comprehensive identity and access management with multi-factor authentication
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li>• Multi-factor authentication</li>
                    <li>• Role-based access control</li>
                    <li>• Identity threat detection</li>
                    <li>• Single sign-on integration</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => { setLocation('/solutions'); setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Compliance Automation */}
              <Card className="bg-slate-800/60 border border-green-500/30 hover:border-green-400/60 transition-colors">
                <CardHeader className="p-8 text-center">
                  <Enhanced4DFileIcon className="w-16 h-16 text-green-400 mx-auto mb-6" size={64} />
                  <CardTitle className="text-2xl text-white mb-4">Compliance Automation</CardTitle>
                  <p className="text-gray-100">
                    Automated regulatory compliance with continuous monitoring and reporting
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li>• FERPA/FISMA/CIPA certified</li>
                    <li>• Automated audit reports</li>
                    <li>• Policy enforcement</li>
                    <li>• Risk assessment dashboards</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-green-500 text-green-400 hover:bg-green-500/10"
                    onClick={() => { setLocation('/solutions'); setTimeout(() => window.scrollTo(0, 0), 100); }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform<br />
              <span className="text-cyan-400">Your Security?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
              Join hundreds of educational institutions and government agencies 
              who trust ORCA Federal for enterprise-grade protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => setLocation('/contact')}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}