import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap,
  Shield,
  Radar,
  Command,
  Wifi,
  Satellite,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Activity,
  TrendingUp,
  Users,
  Building,
  Brain,
  Network
} from "lucide-react";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

// Enhanced 4D Icons
import {
  Enhanced4DZapIcon,
  Enhanced4DShieldIcon,
  Enhanced4DTargetIcon,
  Enhanced4DActivityIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DStarIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DBrainIcon,
  Enhanced4DGlobeIcon
} from "@/components/LazyCustomIcons";

export default function SURGESystem() {
  const autonomousCapabilities = [
    {
      title: "Drone Swarm Coordination",
      description: "Autonomous drone networks for physical security with 8-minute response time",
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Multi-drone coordination", "AI navigation", "Threat interception", "Swarm intelligence"],
      performance: { response_time: "8min", containment_rate: "99.1%", swarm_size: "256 drones", coordination_accuracy: "98.7%" }
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven threat containment with 97.8% neutralization success rate",
      icon: <Enhanced4DShieldIcon className="w-8 h-8 text-red-400" size={32} />,
      features: ["Instant response activation", "Multi-vector containment", "Automated neutralization", "Threat isolation"],
      performance: { neutralization_rate: "97.8%", activation_time: "< 2s", containment_success: "99.1%", isolation_efficiency: "94.6%" }
    },
    {
      title: "Strategic Defense Generation",
      description: "Dynamic defense pattern creation and deployment for adaptive threat response",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Real-time strategy creation", "Adaptive pattern generation", "Resource optimization", "Tactical planning"],
      performance: { strategy_generation: "< 30s", adaptation_rate: "156%", resource_efficiency: "89%", tactical_accuracy: "96.3%" }
    },
    {
      title: "ACDS Integration",
      description: "Advanced Cyber Defense System integration for unified threat response coordination",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["System integration", "Unified coordination", "Cross-platform communication", "Response synchronization"],
      performance: { integration_coverage: "100%", sync_latency: "< 5ms", coordination_efficiency: "234%", system_uptime: "99.97%" }
    }
  ];

  const responseWorkflow = [
    {
      phase: "Detection",
      duration: "< 2 seconds",
      description: "Automated threat identification and classification with AI analysis",
      activities: ["Threat scanning", "Pattern recognition", "Risk assessment", "Alert generation"],
      automation_level: "100%"
    },
    {
      phase: "Analysis",
      duration: "< 10 seconds",
      description: "Comprehensive threat analysis and response strategy formulation",
      activities: ["Threat profiling", "Impact analysis", "Strategy selection", "Resource allocation"],
      automation_level: "97%"
    },
    {
      phase: "Deployment",
      duration: "< 30 seconds",
      description: "Automated deployment of containment measures and response resources",
      activities: ["Resource activation", "Containment deployment", "Perimeter establishment", "Isolation protocols"],
      automation_level: "95%"
    },
    {
      phase: "Containment",
      duration: "< 8 minutes",
      description: "Multi-vector threat containment with drone coordination and system isolation",
      activities: ["Drone deployment", "Threat isolation", "System containment", "Damage prevention"],
      automation_level: "92%"
    },
    {
      phase: "Neutralization",
      duration: "< 15 minutes",
      description: "Complete threat neutralization and system restoration",
      activities: ["Threat elimination", "System restoration", "Damage assessment", "Recovery initiation"],
      automation_level: "89%"
    }
  ];

  const deploymentScenarios = [
    {
      sector: "Critical Infrastructure",
      setup: "Power grid and utility protection with autonomous drone surveillance",
      features: ["Infrastructure monitoring", "Automated threat response", "Emergency protocols", "Damage prevention"],
      metrics: { uptime_improvement: "99.97%", threat_prevention: "94%", response_efficiency: "234%", damage_reduction: "87%" },
      protected_assets: "Regional power grid"
    },
    {
      sector: "Federal Facilities",
      setup: "Classified facility protection with clearance-aware autonomous systems",
      features: ["Perimeter security", "Clearance verification", "Threat interdiction", "Emergency lockdown"],
      metrics: { security_posture: "99.8%", breach_prevention: "100%", response_time: "8min", containment_rate: "99.1%" },
      protected_assets: "Classified facilities"
    },
    {
      sector: "Educational Campuses",
      setup: "Campus-wide autonomous security with student safety prioritization",
      features: ["Campus patrol", "Emergency response", "Student protection", "Incident prevention"],
      metrics: { campus_coverage: "100%", incident_prevention: "89%", emergency_response: "67% faster", safety_improvement: "156%" },
      protected_assets: "University campuses"
    },
    {
      sector: "Corporate Headquarters",
      setup: "Executive protection and corporate asset security with autonomous systems",
      features: ["Executive protection", "Asset security", "Corporate espionage prevention", "Business continuity"],
      metrics: { asset_protection: "98%", espionage_prevention: "94%", business_continuity: "99.5%", executive_safety: "100%" },
      protected_assets: "Corporate assets"
    }
  ];

  const droneCapabilities = [
    {
      type: "Surveillance Drones",
      description: "Advanced reconnaissance and monitoring capabilities",
      specifications: {
        "Flight Time": "8 hours continuous",
        "Range": "50 km radius",
        "Cameras": "4K thermal + optical",
        "AI Processing": "Real-time threat detection",
        "Coordination": "256 drone swarm network"
      },
      use_cases: ["Perimeter monitoring", "Threat tracking", "Reconnaissance", "Area surveillance"]
    },
    {
      type: "Interception Drones",
      description: "Active threat interception and neutralization systems",
      specifications: {
        "Response Time": "< 2 minutes",
        "Payload": "Non-lethal containment",
        "Speed": "120 mph maximum",
        "Precision": "< 0.5m accuracy",
        "Autonomy": "Full autonomous operation"
      },
      use_cases: ["Threat interception", "Containment deployment", "Active defense", "Emergency response"]
    },
    {
      type: "Communication Drones",
      description: "Network relay and communication infrastructure support",
      specifications: {
        "Network Range": "100 km coverage",
        "Bandwidth": "10 Gbps throughput",
        "Redundancy": "99.99% uptime",
        "Encryption": "Military-grade security",
        "Deployment": "< 5 minutes"
      },
      use_cases: ["Network extension", "Emergency communication", "Backup connectivity", "Coordination support"]
    },
    {
      type: "Intelligence Drones",
      description: "Advanced AI processing and threat intelligence gathering",
      specifications: {
        "AI Processing": "Edge computing capable",
        "Data Collection": "Multi-spectrum analysis",
        "Intelligence": "Real-time threat profiling",
        "Learning": "Adaptive behavior patterns",
        "Coordination": "Swarm intelligence sharing"
      },
      use_cases: ["Threat intelligence", "Pattern analysis", "Predictive assessment", "Behavior monitoring"]
    }
  ];

  const integrationCapabilities = [
    {
      system: "APEX Genetic AI",
      description: "Genetic algorithms for evolving autonomous defense strategies and response patterns",
      benefits: ["Evolved defense patterns", "Adaptive response genetics", "Strategic optimization", "Pattern inheritance"],
      compatibility: "99.1%"
    },
    {
      system: "ECHO Holographic",
      description: "5D visualization of autonomous operations and drone coordination in holographic space",
      benefits: ["3D operation visualization", "Holographic drone control", "Tactical planning interface", "Real-time coordination"],
      compatibility: "97.8%"
    },
    {
      system: "PULSE Location Intelligence",
      description: "Geospatial coordination of autonomous systems with location-based response optimization",
      benefits: ["Geographic response coordination", "Location-optimized deployment", "Spatial threat analysis", "Geofenced operations"],
      compatibility: "98.6%"
    },
    {
      system: "FLOW Operations",
      description: "Workflow automation for autonomous system management and operational coordination",
      benefits: ["Automated system management", "Operational workflow optimization", "Resource coordination", "Process automation"],
      compatibility: "96.7%"
    }
  ];

  const complianceFeatures = [
    {
      framework: "FISMA",
      description: "Federal information security compliance for autonomous defense systems",
      controls: ["System categorization", "Security controls", "Continuous monitoring", "Risk management"],
      compliance_score: "99.7%"
    },
    {
      framework: "NIST Cybersecurity Framework",
      description: "Cybersecurity framework integration with autonomous response capabilities",
      controls: ["Identify", "Protect", "Detect", "Respond", "Recover"],
      compliance_score: "99.5%"
    },
    {
      framework: "DoD 8570",
      description: "Department of Defense information assurance workforce standards",
      controls: ["Personnel certification", "System accreditation", "Security awareness", "Continuous training"],
      compliance_score: "99.8%"
    },
    {
      framework: "FedRAMP",
      description: "Federal Risk and Authorization Management Program compliance",
      controls: ["Cloud security", "Continuous monitoring", "Security assessment", "Authorization"],
      compliance_score: "99.6%"
    }
  ];

  const customerSuccessStories = [
    {
      organization: "Regional Power Authority",
      challenge: "Protecting critical infrastructure from physical and cyber threats with 24/7 monitoring",
      solution: "SURGE autonomous defense with drone swarm coordination and automated response",
      results: {
        uptime_improvement: "99.97%",
        threat_prevention: "94%",
        response_time_reduction: "89%",
        infrastructure_protection: "100%"
      },
      testimonial: "SURGE's autonomous defense system has revolutionized our infrastructure protection. The 8-minute drone response time and 99.1% containment rate have prevented multiple potential disasters. The automated incident response with 97.8% neutralization success has saved millions in potential damage and kept our power grid secure from emerging threats.",
      contact: "Director Robert Chen, Critical Infrastructure Security"
    },
    {
      organization: "Federal Defense Installation",
      challenge: "Perimeter security for classified facilities with immediate threat response requirements",
      solution: "Classified SURGE deployment with clearance-aware autonomous systems",
      results: {
        security_posture_improvement: "99.8%",
        breach_prevention: "100%",
        response_efficiency: "234%",
        threat_neutralization: "97.8%"
      },
      testimonial: "The SURGE autonomous defense system provides unmatched perimeter security for our classified facilities. The drone swarm coordination and strategic defense generation capabilities have created an impenetrable security layer. The 8-minute response time and automated threat neutralization have exceeded all our security requirements.",
      contact: "Colonel Sarah Martinez, Installation Security Director"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-orange-950/30 to-slate-950">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-red-900/20"></div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-3 shadow-2xl">
                <Enhanced4DZapIcon className="w-full h-full text-white" size={80} />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 geometric-text">
              SURGE
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Strategic Unified Response Generation Engine
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary autonomous defense system with drone swarm coordination, automated incident response, 
              and strategic defense generation. Achieve 99.1% containment rate with 8-minute response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/security-scanner">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-12 py-4 text-lg text-white shadow-2xl"
                  data-testid="button-surge-assessment"
                >
                  <Enhanced4DZapIcon className="mr-2 w-6 h-6" size={24} />
                  SURGE Defense Assessment
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-400 text-orange-400 hover:bg-orange-900/30 px-12 py-4 text-lg backdrop-blur-sm"
                  data-testid="button-view-solutions"
                >
                  View All POD Systems
                  <Enhanced4DArrowRightIcon className="ml-2 w-6 h-6" size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="bg-slate-800/50 border-orange-500/30 backdrop-blur-sm" data-testid="card-containment-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DShieldIcon className="w-10 h-10 text-orange-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-orange-400 mb-2">99.1%</div>
                  <div className="text-white font-semibold mb-1">Containment Rate</div>
                  <div className="text-slate-400 text-sm">Threat neutralization</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-red-500/30 backdrop-blur-sm" data-testid="card-response-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DZapIcon className="w-10 h-10 text-red-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-red-400 mb-2">8min</div>
                  <div className="text-white font-semibold mb-1">Response Time</div>
                  <div className="text-slate-400 text-sm">Drone deployment</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm" data-testid="card-neutralization-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DTargetIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-purple-400 mb-2">97.8%</div>
                  <div className="text-white font-semibold mb-1">Neutralization Success</div>
                  <div className="text-slate-400 text-sm">Automated response</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm" data-testid="card-swarm-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DNetworkIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-cyan-400 mb-2">256</div>
                  <div className="text-white font-semibold mb-1">Drone Swarm Size</div>
                  <div className="text-slate-400 text-sm">Coordinated network</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Autonomous Capabilities */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Defense Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Advanced autonomous systems with drone swarm coordination, automated incident response, 
                and strategic defense generation for unprecedented threat containment and neutralization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {autonomousCapabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
                  data-testid={`card-autonomous-capability-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {capability.icon}
                      <div>
                        <CardTitle className="text-white text-xl">{capability.title}</CardTitle>
                        <p className="text-slate-400 mt-2">{capability.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(capability.performance).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-orange-400">{value}</div>
                          <div className="text-slate-400 text-sm capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Response Workflow */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Automated Response Workflow
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive automated incident response workflow with progressive threat containment 
                and neutralization through coordinated autonomous systems and strategic defense deployment.
              </p>
            </div>

            <div className="space-y-6">
              {responseWorkflow.map((phase, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-response-phase-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{phase.phase}</h3>
                        <div className="text-2xl font-bold text-orange-400">{phase.duration}</div>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-slate-300 mb-4">{phase.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-3 h-3 text-green-400" size={12} />
                              <span className="text-slate-400 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">{phase.automation_level}</div>
                        <div className="text-slate-400 text-sm">Automation Level</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Drone Capabilities */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Drone Swarm Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Advanced drone technologies with specialized capabilities for surveillance, interception, 
                communication, and intelligence gathering through coordinated swarm operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {droneCapabilities.map((drone, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-drone-capability-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{drone.type}</CardTitle>
                    <p className="text-slate-400">{drone.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-3">Technical Specifications</h4>
                        <div className="space-y-2">
                          {Object.entries(drone.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center border-b border-slate-700/30 pb-1">
                              <span className="text-slate-400 text-sm">{key}</span>
                              <span className="text-white text-sm font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-3">Use Cases</h4>
                        <div className="space-y-1">
                          {drone.use_cases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-slate-300 text-sm">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Federal Compliance & Standards
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive compliance with federal security standards and regulations for 
                autonomous defense systems in government and critical infrastructure environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFeatures.map((compliance, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-compliance-feature-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-xl">{compliance.framework}</CardTitle>
                      <Badge variant="secondary" className="bg-green-900/50 text-green-400">
                        {compliance.compliance_score} Compliant
                      </Badge>
                    </div>
                    <p className="text-slate-400">{compliance.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {compliance.controls.map((control, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Enhanced4DShieldIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-slate-300 text-sm">{control}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* POD Intelligence Integration */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                POD Intelligence Integration
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                SURGE autonomous defense integrates seamlessly with other POD Intelligence systems 
                for comprehensive threat response coordination and enhanced operational effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationCapabilities.map((integration, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-integration-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center justify-between">
                      {integration.system}
                      <Badge variant="secondary" className="bg-orange-900/50 text-orange-400">
                        {integration.compatibility} Compatible
                      </Badge>
                    </CardTitle>
                    <p className="text-slate-400">{integration.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {integration.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Scenarios */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Deployment Scenarios
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                SURGE autonomous defense adapts to diverse security requirements with sector-specific 
                configurations and mission-critical deployment scenarios for maximum protection effectiveness.
              </p>
            </div>

            <div className="space-y-6">
              {deploymentScenarios.map((scenario, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-deployment-scenario-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{scenario.sector}</h3>
                        <p className="text-slate-400 mb-4">{scenario.setup}</p>
                        <div className="text-sm text-slate-400 mb-1">Protected Assets</div>
                        <div className="text-lg font-bold text-orange-400">
                          {scenario.protected_assets}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-orange-400 mb-3">Features</h4>
                        <div className="space-y-2">
                          {scenario.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-orange-400 mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(scenario.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-xl font-bold text-green-400">{value}</div>
                              <div className="text-slate-400 text-xs capitalize">
                                {key.replace(/_/g, ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Success Stories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Critical infrastructure and federal facilities trust SURGE autonomous defense to provide 
                unmatched protection with rapid response times and comprehensive threat neutralization.
              </p>
            </div>

            <div className="space-y-12">
              {customerSuccessStories.map((story, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-success-story-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{story.organization}</h3>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-orange-400 mb-2">Challenge</h4>
                          <p className="text-slate-300 mb-4">{story.challenge}</p>
                          <h4 className="text-lg font-semibold text-red-400 mb-2">Solution</h4>
                          <p className="text-slate-300">{story.solution}</p>
                        </div>
                        <blockquote className="border-l-4 border-orange-500 pl-4 text-slate-300 italic">
                          "{story.testimonial}"
                        </blockquote>
                        <div className="mt-4 text-slate-400">
                          — {story.contact}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-4">Results Achieved</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-green-400">{value}</div>
                              <div className="text-slate-400 text-sm capitalize">
                                {key.replace(/_/g, ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Deploy Autonomous Defense?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your security operations with SURGE's revolutionary autonomous defense system 
              and drone swarm coordination capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-12 py-4 text-lg text-white"
                  data-testid="button-schedule-demo"
                >
                  Schedule SURGE Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-400 text-orange-400 hover:bg-orange-900/30 px-12 py-4 text-lg"
                  data-testid="button-view-pricing"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
