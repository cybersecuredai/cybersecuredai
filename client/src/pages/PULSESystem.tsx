import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin,
  Globe,
  Target,
  Navigation,
  Radar,
  Satellite,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Activity,
  TrendingUp,
  Users,
  Building,
  Zap,
  Eye
} from "lucide-react";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

// Enhanced 4D Icons
import {
  Enhanced4DTargetIcon,
  Enhanced4DShieldIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DZapIcon,
  Enhanced4DActivityIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DStarIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DBrainIcon,
  Enhanced4DEyeIcon
} from "@/components/LazyCustomIcons";

export default function PULSESystem() {
  const locationCapabilities = [
    {
      title: "Real-Time Geospatial Tracking",
      description: "Global threat location monitoring with 98.7% accuracy and 15-second response",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["GPS precision tracking", "Multi-source location fusion", "Real-time threat mapping", "Global coverage network"],
      performance: { accuracy: "98.7%", response_time: "15s", coverage: "Global", precision: "< 3m" }
    },
    {
      title: "Predictive Location Intelligence",
      description: "AI-powered prediction of threat movement and location-based risk assessment",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-blue-400" size={32} />,
      features: ["Movement prediction", "Risk zone mapping", "Pattern analysis", "Threat forecasting"],
      performance: { prediction_accuracy: "94.3%", forecast_horizon: "72hrs", risk_zones: "1,247", patterns: "89,432" }
    },
    {
      title: "Genetic Pattern Recognition",
      description: "Location-based genetic algorithms for evolving threat pattern detection",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Spatial genetics", "Location mutations", "Geographic evolution", "Pattern inheritance"],
      performance: { genetic_generations: "847", spatial_patterns: "23,567", evolution_rate: "92%", accuracy_improvement: "156%" }
    },
    {
      title: "Multi-Generational Memory",
      description: "Long-term location intelligence with historical pattern learning and adaptation",
      icon: <Enhanced4DActivityIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Historical analysis", "Memory retention", "Pattern evolution", "Learning adaptation"],
      performance: { memory_span: "24 months", retention_rate: "98.9%", pattern_evolution: "347%", learning_speed: "< 8min" }
    }
  ];

  const campusIntegration = [
    {
      feature: "Perimeter Security",
      description: "Real-time monitoring of campus boundaries with intelligent threat detection",
      capabilities: ["Fence line monitoring", "Entry point tracking", "Unauthorized access detection", "Emergency lockdown coordination"],
      metrics: { detection_rate: "99.1%", false_positives: "0.3%", response_time: "12s" }
    },
    {
      feature: "Emergency Response Coordination",
      description: "Integrated emergency management with location-aware response protocols",
      capabilities: ["Mass notification", "Evacuation routing", "First responder coordination", "Safe zone identification"],
      metrics: { coordination_efficiency: "89%", evacuation_time: "67% faster", notification_reach: "99.8%" }
    },
    {
      feature: "Student Safety Tracking",
      description: "FERPA-compliant student location services for safety and emergency situations",
      capabilities: ["Emergency location sharing", "Safe arrival notifications", "Missing person alerts", "Parent communication"],
      metrics: { privacy_compliance: "100%", safety_improvement: "234%", parent_satisfaction: "96%" }
    },
    {
      feature: "Asset Protection",
      description: "Location-based tracking and protection of valuable campus equipment and resources",
      capabilities: ["Equipment tracking", "Theft prevention", "Asset optimization", "Maintenance scheduling"],
      metrics: { theft_reduction: "78%", asset_utilization: "145%", maintenance_efficiency: "67%" }
    }
  ];

  const deploymentScenarios = [
    {
      sector: "Higher Education",
      setup: "Campus-wide location intelligence with student privacy protection",
      features: ["FERPA-compliant tracking", "Emergency coordination", "Research facility security", "Visitor management"],
      metrics: { campus_coverage: "100%", student_safety: "89% improvement", emergency_response: "67% faster", compliance_score: "99.8%" },
      protected_assets: "847,293 students"
    },
    {
      sector: "Federal Agencies",
      setup: "Classified location intelligence for national security operations",
      features: ["Clearance-aware tracking", "Secure facility monitoring", "Personnel accountability", "Threat interdiction"],
      metrics: { security_posture: "99.7%", threat_prevention: "94%", accountability: "100%", response_efficiency: "234%" },
      protected_assets: "1.2M+ personnel"
    },
    {
      sector: "K-12 Districts",
      setup: "Child-safe location services with parent notification integration",
      features: ["Child protection protocols", "Parent notifications", "Bus tracking", "After-school safety"],
      metrics: { child_safety: "99.3%", parent_satisfaction: "94%", incident_prevention: "87%", communication_effectiveness: "96%" },
      protected_assets: "234,567 students"
    },
    {
      sector: "Municipal Government",
      setup: "City-wide location intelligence for public safety and emergency management",
      features: ["Public safety coordination", "Emergency management", "Infrastructure monitoring", "Citizen services"],
      metrics: { public_safety: "78% improvement", emergency_response: "156% faster", service_efficiency: "145%", citizen_satisfaction: "91%" },
      protected_assets: "1.8M+ citizens"
    }
  ];

  const complianceFeatures = [
    {
      framework: "FERPA",
      description: "Educational privacy protection with location data safeguards",
      protections: ["Student location privacy", "Educational record protection", "Parental consent management", "Data retention policies"],
      compliance_score: "99.8%"
    },
    {
      framework: "FISMA",
      description: "Federal information security with location intelligence compliance",
      protections: ["Classified location data", "Security categorization", "Risk management", "Continuous monitoring"],
      compliance_score: "99.7%"
    },
    {
      framework: "NIST",
      description: "Cybersecurity framework integration with location-based security controls",
      protections: ["Location-based access control", "Geofencing policies", "Threat detection", "Incident response"],
      compliance_score: "99.6%"
    },
    {
      framework: "GDPR",
      description: "European privacy regulation compliance for international deployments",
      protections: ["Location data consent", "Right to erasure", "Data portability", "Privacy by design"],
      compliance_score: "99.4%"
    }
  ];

  const integrationCapabilities = [
    {
      system: "APEX Genetic AI",
      description: "Genetic algorithms enhanced with location-based pattern evolution",
      benefits: ["Geographic threat genetics", "Location-aware mutations", "Spatial pattern evolution", "Geospatial fitness functions"],
      compatibility: "99.2%"
    },
    {
      system: "ECHO Holographic",
      description: "5D visualization of location intelligence and geospatial threat patterns",
      benefits: ["3D location mapping", "Holographic threat visualization", "Spatial threat navigation", "Geographic avatar guidance"],
      compatibility: "98.8%"
    },
    {
      system: "SURGE Autonomous Defense",
      description: "Location-coordinated autonomous response with geospatial intelligence",
      benefits: ["Geographic response coordination", "Location-based defense strategies", "Spatial incident management", "Geofenced containment"],
      compatibility: "97.6%"
    },
    {
      system: "FLOW Operations",
      description: "Location-aware workflow automation and geospatial process optimization",
      benefits: ["Geographic workflow routing", "Location-based task assignment", "Spatial process optimization", "Geospatial analytics"],
      compatibility: "96.3%"
    }
  ];

  const customerSuccessStories = [
    {
      organization: "State University System",
      challenge: "Campus safety coordination across 15 campuses with 250,000+ students",
      solution: "PULSE location intelligence with FERPA-compliant student tracking",
      results: {
        emergency_response_improvement: "67% faster",
        student_safety_increase: "89%",
        incident_prevention: "78%",
        parent_satisfaction: "96%"
      },
      testimonial: "PULSE location intelligence has transformed our campus safety operations. The real-time tracking with 98.7% accuracy and genetic pattern recognition helped us identify and prevent incidents before they escalated. The FERPA compliance ensures student privacy while maintaining safety, and the 15-second response time has been life-saving during emergencies.",
      contact: "Dr. Michael Thompson, Director of Campus Safety"
    },
    {
      organization: "Federal Emergency Management Agency",
      challenge: "Coordinating emergency response across multiple states with real-time location intelligence",
      solution: "Classified PULSE deployment with federal-grade location tracking",
      results: {
        coordination_efficiency: "234% improvement",
        response_time_reduction: "156% faster",
        resource_optimization: "89%",
        situational_awareness: "94% better"
      },
      testimonial: "PULSE's predictive location intelligence with genetic pattern recognition gives us unprecedented situational awareness during disasters. The multi-generational memory helps us learn from past emergencies and adapt our response strategies. The 94.3% prediction accuracy has saved countless lives.",
      contact: "Director Lisa Rodriguez, Emergency Response Coordination"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-green-950/30 to-slate-950">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-blue-900/20"></div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-3 shadow-2xl">
                <Enhanced4DTargetIcon className="w-full h-full text-white" size={80} />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 geometric-text">
              PULSE
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Predictive Universal Learning Security Engine
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary location intelligence system with real-time geospatial tracking, genetic pattern recognition, 
              and multi-generational memory. Achieve 98.7% location accuracy with 15-second response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/security-scanner">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-12 py-4 text-lg text-white shadow-2xl"
                  data-testid="button-pulse-assessment"
                >
                  <Enhanced4DTargetIcon className="mr-2 w-6 h-6" size={24} />
                  PULSE Location Assessment
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-400 text-green-400 hover:bg-green-900/30 px-12 py-4 text-lg backdrop-blur-sm"
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
              <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm" data-testid="card-accuracy-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DTargetIcon className="w-10 h-10 text-green-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-green-400 mb-2">98.7%</div>
                  <div className="text-white font-semibold mb-1">Location Accuracy</div>
                  <div className="text-slate-400 text-sm">Global precision</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-sm" data-testid="card-response-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DZapIcon className="w-10 h-10 text-blue-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-blue-400 mb-2">15s</div>
                  <div className="text-white font-semibold mb-1">Response Time</div>
                  <div className="text-slate-400 text-sm">Real-time tracking</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm" data-testid="card-prediction-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DBrainIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-purple-400 mb-2">94.3%</div>
                  <div className="text-white font-semibold mb-1">Prediction Accuracy</div>
                  <div className="text-slate-400 text-sm">Threat forecasting</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm" data-testid="card-coverage-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DGlobeIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-cyan-400 mb-2">Global</div>
                  <div className="text-white font-semibold mb-1">Coverage Network</div>
                  <div className="text-slate-400 text-sm">Worldwide reach</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Intelligence Capabilities */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Location Intelligence Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Advanced geospatial intelligence with AI-powered threat prediction, genetic pattern recognition, 
                and multi-generational learning for unprecedented location-based security awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locationCapabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
                  data-testid={`card-location-capability-${index}`}
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
                          <div className="text-2xl font-bold text-green-400">{value}</div>
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

        {/* Campus Integration */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Campus Security Integration
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive physical and digital security convergence for educational institutions 
                with FERPA-compliant location services and emergency response coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campusIntegration.map((integration, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-campus-integration-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{integration.feature}</CardTitle>
                    <p className="text-slate-400">{integration.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-3">Capabilities</h4>
                        <div className="space-y-2">
                          {integration.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-slate-300 text-sm">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(integration.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-blue-400">{value}</div>
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

        {/* Compliance Features */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compliance & Privacy Protection
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Industry-leading compliance with major regulatory frameworks while maintaining 
                location intelligence capabilities and privacy protection standards.
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
                      {compliance.protections.map((protection, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Enhanced4DShieldIcon className="w-4 h-4 text-green-400" size={16} />
                          <span className="text-slate-300 text-sm">{protection}</span>
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
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                POD Intelligence Integration
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                PULSE location intelligence seamlessly integrates with other POD Intelligence systems 
                for comprehensive geospatial security enhancement and location-aware operations.
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
                      <Badge variant="secondary" className="bg-green-900/50 text-green-400">
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
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Deployment Scenarios
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                PULSE location intelligence adapts to diverse organizational needs with sector-specific 
                privacy controls and compliance-aware location tracking capabilities.
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
                        <div className="text-2xl font-bold text-green-400">
                          {scenario.protected_assets}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Features</h4>
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
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(scenario.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-xl font-bold text-blue-400">{value}</div>
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
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Success Stories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Organizations worldwide rely on PULSE location intelligence to enhance safety, 
                improve response times, and protect their most valuable assets through advanced geospatial security.
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
                          <h4 className="text-lg font-semibold text-green-400 mb-2">Challenge</h4>
                          <p className="text-slate-300 mb-4">{story.challenge}</p>
                          <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution</h4>
                          <p className="text-slate-300">{story.solution}</p>
                        </div>
                        <blockquote className="border-l-4 border-green-500 pl-4 text-slate-300 italic">
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
              Ready to Deploy Location Intelligence?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your security operations with PULSE's advanced geospatial intelligence and 
              predictive location tracking capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-12 py-4 text-lg text-white"
                  data-testid="button-schedule-demo"
                >
                  Schedule PULSE Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-400 text-green-400 hover:bg-green-900/30 px-12 py-4 text-lg"
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
