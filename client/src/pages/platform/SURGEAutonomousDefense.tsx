import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Zap,
  Target, 
  Activity, 
  CheckCircle, 
  TrendingUp,
  Database,
  Network,
  Cpu,
  Settings,
  BarChart3,
  Bot,
  Clock,
  Star,
  Users,
  Building,
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
  AlertTriangle,
  Radio,
  Headset,
  MapPin,
  Timer,
  ShieldCheck,
  Crosshair,
  Command
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

export default function SURGEAutonomousDefense() {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeDrones, setActiveDrones] = useState(256);
  const [responseTime, setResponseTime] = useState(8);
  const [containmentRate, setContainmentRate] = useState(99.1);
  const [activeIncidents, setActiveIncidents] = useState(3);
  const [neutralizationRate, setNeutralizationRate] = useState(97.8);

  // Simulate live SURGE updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() > 0.8) {
        setActiveDrones(prev => Math.max(240, Math.min(256, prev + Math.floor(Math.random() * 6) - 3)));
        setResponseTime(prev => Math.max(6, Math.min(12, prev + (Math.random() - 0.5) * 2)));
        setContainmentRate(prev => Math.max(98.5, Math.min(99.9, prev + (Math.random() - 0.5) * 0.4)));
        setActiveIncidents(prev => Math.max(0, Math.min(8, prev + Math.floor(Math.random() * 3) - 1)));
        setNeutralizationRate(prev => Math.max(96.0, Math.min(99.0, prev + (Math.random() - 0.5) * 0.5)));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const surgeCapabilities = [
    {
      title: "Autonomous Drone Swarm Coordination",
      description: "256-drone network with AI-powered swarm intelligence for comprehensive security coverage",
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["256 drone autonomous network", "Real-time swarm coordination", "Adaptive formation patterns", "Distributed intelligence mesh"],
      performance: { drones: "256 active", coverage: "50km radius", response: "< 3 minutes", coordination: "Real-time mesh" },
      compliance: ["FAA Part 107 certified", "NDAA compliance", "DoD security clearance", "Export control approved"]
    },
    {
      title: "AI-Driven Threat Containment",
      description: "Machine learning-powered threat analysis with 97.8% neutralization success rate",
      icon: <Enhanced4DShieldIcon className="w-8 h-8 text-red-400" size={32} />,
      features: ["Advanced threat classification", "Predictive containment strategies", "Multi-vector response", "Autonomous neutralization"],
      performance: { accuracy: "97.8%", response_time: "< 8 minutes", success_rate: "99.1%", false_positives: "< 0.2%" },
      compliance: ["FISMA security protocols", "NIST incident response", "DoD cyber standards", "Emergency response certified"]
    },
    {
      title: "Strategic Defense Pattern Generation",
      description: "Dynamic defense pattern creation and deployment for evolving threat landscapes",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Pattern recognition AI", "Dynamic strategy adaptation", "Threat evolution modeling", "Proactive defense positioning"],
      performance: { patterns: "12,847 active", adaptation: "Real-time", effectiveness: "94.3%", coverage: "360° protection" },
      compliance: ["Strategic defense protocols", "Military operation standards", "Emergency management certified", "Inter-agency coordination"]
    },
    {
      title: "Multi-Vector Protection System",
      description: "Comprehensive protection across physical, cyber, and hybrid threat vectors",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Physical perimeter defense", "Cyber threat monitoring", "Hybrid attack detection", "Coordinated response protocols"],
      performance: { vectors: "12+ protected", integration: "Seamless", monitoring: "24/7/365", response: "Coordinated multi-domain" },
      compliance: ["Critical infrastructure protection", "Homeland security standards", "CISA guidelines", "Multi-agency protocols"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Drone Swarm Technology",
      items: [
        { label: "Network Size", value: "256 autonomous drones with mesh communication" },
        { label: "Coverage Area", value: "50km radius with adaptive positioning" },
        { label: "Battery Life", value: "8+ hours with hot-swap capability" },
        { label: "Communication", value: "Encrypted mesh network with redundancy" }
      ]
    },
    {
      category: "Response Performance",
      items: [
        { label: "Response Time", value: "8-minute average deployment time" },
        { label: "Containment Rate", value: "99.1% successful threat containment" },
        { label: "Neutralization Rate", value: "97.8% threat neutralization success" },
        { label: "Coverage Speed", value: "< 3 minutes to full area deployment" }
      ]
    },
    {
      category: "AI & Analytics",
      items: [
        { label: "Threat Classification", value: "Real-time ML-powered analysis" },
        { label: "Pattern Recognition", value: "12,847+ active defense patterns" },
        { label: "Predictive Accuracy", value: "94.3% threat prediction rate" },
        { label: "Learning Rate", value: "Continuous adaptation and improvement" }
      ]
    },
    {
      category: "Integration & Compliance",
      items: [
        { label: "POD Intelligence", value: "Seamless APEX, ECHO, PULSE, FLOW integration" },
        { label: "Emergency Systems", value: "911, FirstNet, and emergency response integration" },
        { label: "Compliance Standards", value: "FISMA, NIST, DoD, FAA Part 107 certified" },
        { label: "Security Clearance", value: "DoD Secret/Top Secret compatible" }
      ]
    }
  ];

  const droneSwarmFeatures = [
    {
      name: "Mesh Network Intelligence",
      description: "Distributed AI processing across the entire drone swarm network",
      capabilities: ["256-node mesh network", "Real-time data sharing", "Redundant communication paths", "Autonomous decision making"],
      specifications: { latency: "< 50ms", range: "15km per node", reliability: "99.97%", encryption: "AES-256" },
      icon: <Enhanced4DNetworkIcon className="w-6 h-6 text-orange-400" size={24} />
    },
    {
      name: "Adaptive Formation Control",
      description: "Dynamic positioning and formation adjustments based on threat assessment",
      capabilities: ["Real-time formation changes", "Threat-based positioning", "Obstacle avoidance", "Coordinated movements"],
      specifications: { formations: "24+ patterns", adaptation_time: "< 30 seconds", precision: "± 0.5m", coordination: "Swarm AI" },
      icon: <Enhanced4DTargetIcon className="w-6 h-6 text-cyan-400" size={24} />
    },
    {
      name: "Autonomous Response Protocols",
      description: "Pre-programmed and AI-generated response strategies for various threat scenarios",
      capabilities: ["Threat escalation protocols", "Autonomous engagement rules", "De-escalation procedures", "Human oversight integration"],
      specifications: { protocols: "147+ scenarios", response_time: "< 8 minutes", accuracy: "97.8%", oversight: "Human-in-loop" },
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      name: "Real-Time Intelligence Fusion",
      description: "Integration of multiple intelligence sources for comprehensive situational awareness",
      capabilities: ["Multi-sensor fusion", "Real-time analysis", "Threat correlation", "Predictive modeling"],
      specifications: { sources: "15+ feeds", processing: "Real-time", accuracy: "94.3%", prediction: "85% advance warning" },
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />
    }
  ];

  const incidentResponseWorkflow = [
    {
      phase: "Detection & Classification",
      duration: "0-2 minutes",
      description: "AI-powered threat detection and initial classification",
      actions: ["Sensor network activation", "Threat type identification", "Risk assessment", "Priority classification"],
      automation: "100% automated",
      icon: <Enhanced4DEyeIcon className="w-6 h-6 text-yellow-400" size={24} />
    },
    {
      phase: "Swarm Deployment",
      duration: "2-5 minutes", 
      description: "Autonomous drone swarm positioning and formation establishment",
      actions: ["Optimal drone selection", "Formation calculation", "Route planning", "Deployment execution"],
      automation: "95% automated",
      icon: <Enhanced4DZapIcon className="w-6 h-6 text-orange-400" size={24} />
    },
    {
      phase: "Containment & Assessment",
      duration: "5-8 minutes",
      description: "Threat containment and detailed situation assessment",
      actions: ["Perimeter establishment", "Threat isolation", "Intelligence gathering", "Escalation evaluation"],
      automation: "90% automated",
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      phase: "Neutralization & Response",
      duration: "8+ minutes",
      description: "Coordinated response and threat neutralization if required",
      actions: ["Response strategy execution", "Multi-vector coordination", "Human oversight integration", "Situation resolution"],
      automation: "80% automated",
      icon: <Enhanced4DCheckCircleIcon className="w-6 h-6 text-green-400" size={24} />
    }
  ];

  const integrationSystems = [
    {
      name: "APEX - Genetic AI Integration",
      description: "AI-powered threat prediction and genetic algorithm optimization for drone strategies",
      integration: "Real-time genetic optimization of drone formations and response patterns",
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />,
      benefits: ["Evolving response strategies", "Pattern optimization", "Predictive deployment"],
      surge_features: ["Formation genetics", "Response evolution", "Strategy adaptation"]
    },
    {
      name: "ECHO - Holographic Command",
      description: "Immersive 5D holographic command and control for drone operations",
      integration: "Holographic drone visualization and command interface with avatar guidance",
      icon: <Enhanced4DEyeIcon className="w-6 h-6 text-cyan-400" size={24} />,
      benefits: ["3D operational awareness", "Immersive command interface", "Real-time visualization"],
      surge_features: ["Drone swarm visualization", "Holographic command center", "Avatar-guided operations"]
    },
    {
      name: "PULSE - Location Intelligence",
      description: "Geographic intelligence and terrain analysis for optimal drone positioning",
      integration: "Real-time geographic analysis and location-based threat assessment",
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-green-400" size={24} />,
      benefits: ["Terrain optimization", "Geographic threat analysis", "Location-based deployment"],
      surge_features: ["Geographic formation optimization", "Terrain-aware deployment", "Location intelligence"]
    },
    {
      name: "FLOW - Operations Automation",
      description: "Automated operational workflows and process optimization for response coordination",
      integration: "Automated incident management and response workflow orchestration",
      icon: <Enhanced4DActivityIcon className="w-6 h-6 text-blue-400" size={24} />,
      benefits: ["Workflow automation", "Process optimization", "Coordination enhancement"],
      surge_features: ["Response automation", "Process coordination", "Workflow optimization"]
    }
  ];

  const deploymentOptions = [
    {
      type: "Federal Defense",
      description: "Complete autonomous defense system for federal facilities and critical infrastructure",
      features: ["256-drone network", "24/7 monitoring", "DoD security clearance", "Emergency response integration"],
      pricing: "Custom federal pricing",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-red-400" size={32} />,
      specifications: { coverage: "50km radius", response: "< 8 minutes", drones: "256 autonomous", clearance: "Secret/Top Secret" }
    },
    {
      type: "Educational Campus",
      description: "FERPA-compliant campus security with drone-based threat response",
      features: ["Scalable drone coverage", "Student privacy protection", "Campus-wide integration", "Emergency protocols"],
      pricing: "Starting at $85,000/month",
      icon: <Enhanced4DUsersIcon className="w-8 h-8 text-blue-400" size={32} />,
      specifications: { coverage: "Campus-wide", response: "< 10 minutes", drones: "64-128 adaptive", compliance: "FERPA certified" }
    },
    {
      type: "Critical Infrastructure",
      description: "Industrial and utility protection with autonomous drone surveillance and response",
      features: ["Infrastructure monitoring", "Perimeter defense", "Industrial protocols", "Utility integration"],
      pricing: "Starting at $120,000/month",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-orange-400" size={32} />,
      specifications: { coverage: "Multi-site", response: "< 6 minutes", drones: "128-256 scalable", integration: "SCADA/ICS" }
    }
  ];

  const roiMetrics = [
    { metric: "Response Time Reduction", value: "78%", description: "Faster incident response vs traditional methods" },
    { metric: "Threat Containment Rate", value: "99.1%", description: "Successful threat containment and neutralization" },
    { metric: "False Alarm Reduction", value: "92%", description: "AI-powered threat classification accuracy" },
    { metric: "Cost Savings", value: "$4.2M", description: "Annual security cost reduction per deployment" },
    { metric: "Coverage Efficiency", value: "340%", description: "Improved area coverage vs static systems" },
    { metric: "Neutralization Success", value: "97.8%", description: "Successful threat neutralization rate" }
  ];

  const testimonials = [
    {
      quote: "SURGE has transformed our campus security posture. The 8-minute response time and 99.1% containment rate gives us confidence that our students and faculty are protected.",
      author: "Dr. Elizabeth Martinez",
      title: "Chief Security Officer",
      organization: "University of California System",
      compliance: "FERPA",
      results: "99.1% threat containment rate",
      deployment: "Educational Campus"
    },
    {
      quote: "The autonomous drone capabilities of SURGE provide unmatched situational awareness and response speed. It's revolutionized how we approach perimeter security.",
      author: "Colonel James Richardson",
      title: "Installation Security Chief",
      organization: "U.S. Army Fort Campbell",
      compliance: "DoD/FISMA",
      results: "78% faster response times",
      deployment: "Federal Defense"
    },
    {
      quote: "SURGE's integration with our existing security infrastructure was seamless. The 256-drone network provides comprehensive coverage that was impossible before.",
      author: "Sarah Chen",
      title: "Director of Physical Security",
      organization: "Pacific Nuclear Facility",
      compliance: "NRC/NERC",
      results: "340% coverage improvement",
      deployment: "Critical Infrastructure"
    }
  ];

  const demoScenarios = [
    {
      title: "Active Shooter Response",
      description: "Complete demonstration of SURGE's autonomous response to active threat scenario",
      duration: "15 minutes",
      participants: "1-20 viewers",
      features: ["Real-time threat detection", "Drone swarm deployment", "Containment strategies", "Coordination protocols"],
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      title: "Perimeter Breach Simulation",
      description: "Watch SURGE detect and respond to unauthorized perimeter access",
      duration: "10 minutes", 
      participants: "1-15 viewers",
      features: ["Perimeter monitoring", "Automated detection", "Drone response", "Escalation procedures"],
      icon: <Enhanced4DTargetIcon className="w-6 h-6 text-orange-400" size={24} />
    },
    {
      title: "Multi-Vector Attack Response",
      description: "Complex scenario showing SURGE coordination across multiple threat vectors",
      duration: "20 minutes",
      participants: "1-25 viewers", 
      features: ["Multiple threat types", "Coordinated response", "Resource allocation", "Strategic deployment"],
      icon: <Enhanced4DNetworkIcon className="w-6 h-6 text-cyan-400" size={24} />
    }
  ];

  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen">
        {/* Hero Section */}
        <header className="bg-surface/90 backdrop-blur-md border-b border-surface-light p-8 cyber-glow">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl flex items-center justify-center border border-orange-500/50">
                <Enhanced4DZapIcon className="w-12 h-12 text-orange-400" size={48} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h1 className="text-5xl font-bold text-white" data-testid="page-title">
                    SURGE Autonomous Defense
                  </h1>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-700 text-white" data-testid="badge-response">
                    {responseTime}-Min Response
                  </Badge>
                </div>
                <p className="text-gray-300 text-xl mb-4" data-testid="page-description">
                  Strategic Unified Response Generation Engine • Autonomous Drone Networks • AI-Driven Threat Containment
                </p>
                <p className="text-gray-400 text-lg">
                  Revolutionary autonomous defense platform with 256-drone swarm coordination and 8-minute response capability
                </p>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-orange-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-orange-400 font-medium" data-testid="live-status">SURGE DEFENSE SYSTEMS ACTIVE</span>
              <span className="text-gray-400 text-sm">Active Drones: {activeDrones} • Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-surface/50 rounded-lg p-4 border border-orange-500/30 cyber-glow" data-testid="metric-response">
                <div className="text-3xl font-bold text-orange-400 mb-1 animate-pulse">{responseTime}min</div>
                <div className="text-sm text-gray-400 mb-1">Response Time</div>
                <div className="text-xs text-orange-400 flex items-center">
                  <Enhanced4DZapIcon className="w-3 h-3 mr-1" size={12} />
                  Autonomous deployment
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-red-500/30 cyber-glow" data-testid="metric-containment">
                <div className="text-3xl font-bold text-red-400 mb-1 font-mono">{containmentRate}%</div>
                <div className="text-sm text-gray-400 mb-1">Containment Rate</div>
                <div className="text-xs text-red-400 flex items-center">
                  <Enhanced4DShieldIcon className="w-3 h-3 mr-1" size={12} />
                  Threat neutralization
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-cyan-500/30 cyber-glow" data-testid="metric-drones">
                <div className="text-3xl font-bold text-cyan-400 mb-1 font-mono">{activeDrones}</div>
                <div className="text-sm text-gray-400 mb-1">Active Drones</div>
                <div className="text-xs text-cyan-400 flex items-center">
                  <Enhanced4DNetworkIcon className="w-3 h-3 mr-1" size={12} />
                  Swarm network
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-green-500/30 cyber-glow" data-testid="metric-neutralization">
                <div className="text-3xl font-bold text-green-400 mb-1 font-mono">{neutralizationRate}%</div>
                <div className="text-sm text-gray-400 mb-1">Neutralization Rate</div>
                <div className="text-xs text-green-400 flex items-center">
                  <Enhanced4DTargetIcon className="w-3 h-3 mr-1" size={12} />
                  AI-driven success
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-purple-500/30 cyber-glow" data-testid="metric-incidents">
                <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">{activeIncidents}</div>
                <div className="text-sm text-gray-400 mb-1">Active Incidents</div>
                <div className="text-xs text-purple-400 flex items-center">
                  <Enhanced4DActivityIcon className="w-3 h-3 mr-1" size={12} />
                  Real-time monitoring
                </div>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-orange-400 border-orange-400/50" data-testid="badge-dod">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2" size={16} />
                DoD Security Certified
              </Badge>
              <Badge variant="outline" className="text-red-400 border-red-400/50" data-testid="badge-faa">
                <Enhanced4DShieldIcon className="w-4 h-4 mr-2" size={16} />
                FAA Part 107 Compliant
              </Badge>
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50" data-testid="badge-fisma">
                <Enhanced4DLockIcon className="w-4 h-4 mr-2" size={16} />
                FISMA Security Standards
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-7xl p-8 space-y-16">
          {/* Core SURGE Capabilities */}
          <section data-testid="section-capabilities">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DZapIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
              Autonomous Defense Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {surgeCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300" data-testid={`capability-card-${index}`}>
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
                              <Enhanced4DShieldIcon className="w-4 h-4 text-orange-400" size={16} />
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

          {/* Drone Swarm Coordination */}
          <section data-testid="section-drone-swarm">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-cyan-400" size={40} />
              Drone Swarm Coordination
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {droneSwarmFeatures.map((feature, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300" data-testid={`swarm-feature-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {feature.icon}
                      <CardTitle className="text-white text-lg">{feature.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(feature.specifications).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-surface/30 rounded-lg">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                        <div className="space-y-1">
                          {feature.capabilities.map((capability, cIndex) => (
                            <div key={cIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-cyan-400" size={16} />
                              <span className="text-gray-300 text-sm">{capability}</span>
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

          {/* Automated Incident Response Workflow */}
          <section data-testid="section-incident-response">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DActivityIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              Automated Incident Response Workflow
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {incidentResponseWorkflow.map((phase, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light relative" data-testid={`response-phase-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {phase.icon}
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{phase.phase}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">{phase.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{phase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center p-2 bg-surface/30 rounded-lg">
                        <div className="text-sm font-bold text-white">{phase.automation}</div>
                        <div className="text-xs text-gray-400">Automation Level</div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-sm">Actions:</h4>
                        <div className="space-y-1">
                          {phase.actions.map((action, aIndex) => (
                            <div key={aIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-3 h-3 text-green-400" size={12} />
                              <span className="text-gray-300 text-xs">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {index < incidentResponseWorkflow.length - 1 && (
                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden xl:block">
                      <Enhanced4DArrowRightIcon className="w-6 h-6 text-orange-400" size={24} />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section data-testid="section-specifications">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DServerIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
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
              <Enhanced4DBrainIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
              POD Intelligence System Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationSystems.map((system, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300" data-testid={`integration-card-${index}`}>
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
                      <div>
                        <div className="text-sm font-medium text-white mb-2">SURGE Features:</div>
                        <div className="space-y-1">
                          {system.surge_features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DZapIcon className="w-4 h-4 text-orange-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
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
              <Enhanced4DBuildingIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              Deployment & Implementation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-blue-500/50 transition-all duration-300" data-testid={`deployment-option-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">{option.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-2">{option.type}</CardTitle>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(option.specifications).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-surface/30 rounded-lg">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Features:</h4>
                        <div className="space-y-1">
                          {option.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-700">
                        <div className="text-lg font-bold text-orange-400 mb-2">{option.pricing}</div>
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700" data-testid={`button-contact-${index}`}>
                          Contact for Demo
                          <Enhanced4DArrowRightIcon className="w-4 h-4 ml-2" size={16} />
                        </Button>
                      </div>
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
              Performance & ROI Analytics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiMetrics.map((roi, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light text-center" data-testid={`roi-metric-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-400 mb-2">{roi.value}</div>
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
              <Enhanced4DStarIcon className="w-10 h-10 mr-4 text-yellow-400" size={40} />
              Customer Success Stories
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light" data-testid={`testimonial-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Enhanced4DStarIcon key={i} className="w-4 h-4 text-yellow-400" size={16} />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 text-sm mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-2">
                      <div>
                        <div className="text-white font-medium">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.title}</div>
                        <div className="text-gray-400 text-sm">{testimonial.organization}</div>
                      </div>
                      <div className="flex items-center space-x-4 text-xs">
                        <Badge variant="outline" className="text-orange-400 border-orange-400/50">
                          {testimonial.compliance}
                        </Badge>
                        <span className="text-green-400">{testimonial.results}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Deployment: {testimonial.deployment}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Demo Scenarios */}
          <section data-testid="section-demos">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DEyeIcon className="w-10 h-10 mr-4 text-cyan-400" size={40} />
              Interactive Demonstrations
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demoScenarios.map((demo, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300" data-testid={`demo-scenario-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {demo.icon}
                      <CardTitle className="text-white text-lg">{demo.title}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{demo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-2 bg-surface/30 rounded-lg">
                          <div className="text-sm font-bold text-white">{demo.duration}</div>
                          <div className="text-xs text-gray-400">Duration</div>
                        </div>
                        <div className="text-center p-2 bg-surface/30 rounded-lg">
                          <div className="text-sm font-bold text-white">{demo.participants}</div>
                          <div className="text-xs text-gray-400">Participants</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-sm">Features:</h4>
                        <div className="space-y-1">
                          {demo.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-3 h-3 text-green-400" size={12} />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700" data-testid={`button-demo-${index}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Schedule Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call-to-Action */}
          <section className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-8 border border-orange-500/50 cyber-glow" data-testid="section-cta">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Deploy SURGE Autonomous Defense Today
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of autonomous security with 8-minute response times, 99.1% containment rates, and 256-drone swarm coordination. Protect your organization with cutting-edge AI-driven defense technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-3" data-testid="button-schedule-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-3" data-testid="button-live-demo">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live Demo
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-3" data-testid="button-contact-sales">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                  <span>DoD Security Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                  <span>FAA Part 107 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </section>

          {/* Cross-linking to Related Systems */}
          <section data-testid="section-related-systems">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              Related POD Intelligence Systems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/platform/apex-genetic-ai" className="block">
                <Card className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300 cursor-pointer" data-testid="link-apex">
                  <CardContent className="p-6 text-center">
                    <Enhanced4DBrainIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" size={48} />
                    <h3 className="text-lg font-bold text-white mb-2">APEX Genetic AI</h3>
                    <p className="text-gray-400 text-sm">Self-evolving genetic algorithms</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/platform/echo-holographic" className="block">
                <Card className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300 cursor-pointer" data-testid="link-echo">
                  <CardContent className="p-6 text-center">
                    <Enhanced4DEyeIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" size={48} />
                    <h3 className="text-lg font-bold text-white mb-2">ECHO Holographic</h3>
                    <p className="text-gray-400 text-sm">5D holographic interface</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/platform/pulse-predictive" className="block">
                <Card className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300 cursor-pointer" data-testid="link-pulse">
                  <CardContent className="p-6 text-center">
                    <Enhanced4DGlobeIcon className="w-12 h-12 text-green-400 mx-auto mb-4" size={48} />
                    <h3 className="text-lg font-bold text-white mb-2">PULSE Predictive</h3>
                    <p className="text-gray-400 text-sm">Location intelligence platform</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/solutions" className="block">
                <Card className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300 cursor-pointer" data-testid="link-solutions">
                  <CardContent className="p-6 text-center">
                    <Enhanced4DActivityIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" size={48} />
                    <h3 className="text-lg font-bold text-white mb-2">View All Solutions</h3>
                    <p className="text-gray-400 text-sm">Complete security portfolio</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </MarketingLayout>
  );
}
