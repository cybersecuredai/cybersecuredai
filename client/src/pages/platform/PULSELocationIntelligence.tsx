import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Shield,
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
  Map,
  Radar,
  Navigation,
  Search,
  Crosshair,
  Compass,
  Satellite,
  Radio
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

export default function PULSELocationIntelligence() {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTracking, setActiveTracking] = useState(2847);
  const [locationAccuracy, setLocationAccuracy] = useState(98.7);
  const [threatsPrevented, setThreatsPrevented] = useState(15273);
  const [responseTime, setResponseTime] = useState(15);

  // Simulate live location tracking updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() > 0.6) {
        setActiveTracking(prev => prev + Math.floor(Math.random() * 8) + 1);
        setLocationAccuracy(prev => Math.min(99.9, prev + (Math.random() * 0.1 - 0.05)));
        setThreatsPrevented(prev => prev + Math.floor(Math.random() * 3) + 1);
        setResponseTime(prev => Math.max(12, Math.min(18, prev + (Math.random() * 2 - 1))));
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const geospatialCapabilities = [
    {
      title: "Real-Time Global Threat Tracking",
      description: "Advanced geospatial intelligence with 98.7% location accuracy and 15-second response times",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Global threat monitoring", "Real-time coordinate tracking", "Multi-source data fusion", "Predictive location analysis"],
      performance: { accuracy: "98.7%", response_time: "15 seconds", coverage: "Global", data_sources: "247+" },
      compliance: ["FERPA location privacy", "FISMA geospatial security", "NIST positioning standards"]
    },
    {
      title: "Campus Security Integration",
      description: "Physical and digital security convergence for educational institutions",
      icon: <Enhanced4DShieldIcon className="w-8 h-8 text-blue-400" size={32} />,
      features: ["Access control integration", "Emergency response coordination", "Perimeter monitoring", "Campus-wide situational awareness"],
      performance: { campuses: "340+", integration_points: "12,000+", response_improvement: "76%", incidents_prevented: "94.3%" },
      compliance: ["Campus safety standards", "Emergency response protocols", "Student privacy protection"]
    },
    {
      title: "Predictive Risk Analytics",
      description: "Machine learning-powered risk prediction with 94.3% accuracy",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Risk heat mapping", "Behavioral pattern analysis", "Threat trajectory prediction", "Geofencing alerts"],
      performance: { prediction_accuracy: "94.3%", risk_models: "127", alert_precision: "97.1%", false_positives: "< 2.4%" },
      compliance: ["Privacy-preserving analytics", "Ethical AI guidelines", "Bias detection protocols"]
    },
    {
      title: "Multi-Generational Memory",
      description: "PostgreSQL + Redis hybrid storage for location intelligence persistence",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Location history tracking", "Pattern memory retention", "Behavioral learning storage", "Predictive model persistence"],
      performance: { memory_depth: "2+ years", query_speed: "< 12ms", storage_capacity: "Petabyte-scale", retention_accuracy: "99.4%" },
      compliance: ["Data retention policies", "Location data governance", "Privacy by design"]
    }
  ];

  const campusSecurityFeatures = [
    {
      title: "Emergency Coordination Center",
      description: "Centralized command and control for campus-wide emergency response",
      features: ["Real-time incident mapping", "Multi-agency coordination", "Automated notifications", "Resource deployment tracking"],
      icon: <Radio className="w-6 h-6 text-red-400" />,
      metrics: { response_time: "< 2 minutes", coordination_points: "50+", notification_reach: "99.8%" }
    },
    {
      title: "Access Control Integration", 
      description: "Smart building access with location-aware security policies",
      features: ["Badge integration", "Biometric verification", "Time-based access", "Threat-responsive lockdowns"],
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      metrics: { buildings_connected: "200+", access_points: "12,000+", security_events: "Real-time" }
    },
    {
      title: "Perimeter Monitoring",
      description: "Advanced perimeter security with intelligent threat detection",
      features: ["Fence line monitoring", "Intrusion detection", "Drone surveillance", "Environmental sensors"],
      icon: <Radar className="w-6 h-6 text-green-400" />,
      metrics: { perimeter_coverage: "100%", detection_accuracy: "97.8%", false_alarms: "< 1.2%" }
    },
    {
      title: "Student Safety Tracking",
      description: "FERPA-compliant safety monitoring for student protection",
      features: ["Safe zone verification", "Emergency location services", "Parent notifications", "Wellness check protocols"],
      icon: <Users className="w-6 h-6 text-purple-400" />,
      metrics: { students_protected: "50,000+", safety_zones: "500+", parent_satisfaction: "96.7%" }
    }
  ];

  const technicalSpecs = [
    {
      category: "Core Location Technology",
      items: [
        { label: "Location Accuracy", value: "98.7% precision within 3-meter radius" },
        { label: "Response Time", value: "15-second average with sub-5s peak performance" },
        { label: "Tracking Capacity", value: "10,000+ simultaneous location points" },
        { label: "Data Processing", value: "Real-time with 247+ integrated data sources" }
      ]
    },
    {
      category: "Geospatial Intelligence",
      items: [
        { label: "Mapping Engine", value: "Advanced GIS with satellite imagery integration" },
        { label: "Coordinate Systems", value: "GPS, GLONASS, Galileo, BeiDou support" },
        { label: "Indoor Positioning", value: "WiFi, Bluetooth, UWB triangulation" },
        { label: "Prediction Models", value: "127 ML models with 94.3% accuracy" }
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        { label: "FERPA Compliance", value: "Location privacy with educational data protection" },
        { label: "FISMA Integration", value: "Federal security standards for geospatial data" },
        { label: "Data Encryption", value: "AES-256 with end-to-end location security" },
        { label: "Audit Readiness", value: "100% compliance documentation" }
      ]
    },
    {
      category: "Integration Capabilities",
      items: [
        { label: "POD Intelligence", value: "Seamless APEX, ECHO, SURGE, FLOW integration" },
        { label: "Campus Systems", value: "Access control, fire safety, HVAC integration" },
        { label: "Emergency Services", value: "911 dispatch, first responder coordination" },
        { label: "API Standards", value: "RESTful, GraphQL, WebSocket real-time" }
      ]
    }
  ];

  const integrationSystems = [
    {
      name: "APEX - Genetic AI Evolution",
      description: "Location-aware genetic algorithm optimization for threat pattern recognition",
      integration: "Geographic genetic fitness functions with spatial learning",
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />,
      benefits: ["Geo-distributed evolution", "Location-based mutations", "Regional threat genetics"],
      location_features: ["Spatial fitness scoring", "Geographic crossover optimization", "Territory-based selection"]
    },
    {
      name: "ECHO - 5D Holographic Visualization",
      description: "Immersive geographic threat visualization in holographic space",
      integration: "3D geographic threat mapping with avatar location analysis",
      icon: <Enhanced4DEyeIcon className="w-6 h-6 text-cyan-400" size={24} />,
      benefits: ["Holographic world maps", "Avatar location briefings", "Immersive threat analysis"],
      location_features: ["5D spatial rendering", "Geographic avatar presence", "Interactive map overlays"]
    },
    {
      name: "SURGE - Autonomous Defense Response",
      description: "Location-triggered autonomous security responses",
      integration: "Geographic incident response with location-aware countermeasures",
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />,
      benefits: ["Geographic response zones", "Location-based defense", "Territorial security automation"],
      location_features: ["Geo-fenced responses", "Location-aware policies", "Proximity-based actions"]
    },
    {
      name: "FLOW - Operations Coordination",
      description: "Location-optimized operational workflow management",
      integration: "Geographic workflow optimization with spatial process mapping",
      icon: <Enhanced4DActivityIcon className="w-6 h-6 text-orange-400" size={24} />,
      benefits: ["Location-based routing", "Geographic resource optimization", "Spatial workflow design"],
      location_features: ["Route optimization", "Geographic load balancing", "Location-aware scheduling"]
    }
  ];

  const deploymentOptions = [
    {
      type: "Cloud-Native Location Intelligence",
      description: "Scalable cloud-based geospatial platform with global coverage",
      features: ["Auto-scaling tracking capacity", "Global satellite integration", "Multi-region redundancy"],
      pricing: "Starting at $12,000/month",
      icon: <Enhanced4DGlobeIcon className="w-8 h-8 text-green-400" size={32} />
    },
    {
      type: "Federal On-Premise",
      description: "Air-gapped location intelligence for classified environments", 
      features: ["SCIF-approved tracking systems", "Isolated geospatial processing", "Classified location analytics"],
      pricing: "Custom federal pricing",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-blue-400" size={32} />
    },
    {
      type: "Educational Campus",
      description: "FERPA-compliant location intelligence for educational institutions",
      features: ["Student privacy protection", "Campus-wide tracking", "Educational safety optimization"],
      pricing: "Starting at $6,500/month",
      icon: <Enhanced4DUsersIcon className="w-8 h-8 text-purple-400" size={32} />
    }
  ];

  const roiMetrics = [
    { metric: "Emergency Response Improvement", value: "76%", description: "Faster response with precise location data" },
    { metric: "Incident Prevention Rate", value: "94.3%", description: "Predictive location analytics" },
    { metric: "Campus Safety Score", value: "97.2%", description: "Comprehensive security coverage" },
    { metric: "Cost Savings", value: "$3.1M", description: "Reduced security staffing and incident costs" },
    { metric: "False Alarm Reduction", value: "87%", description: "Intelligent location verification" },
    { metric: "Student Safety Satisfaction", value: "96.7%", description: "Enhanced campus security confidence" }
  ];

  const testimonials = [
    {
      quote: "PULSE's location intelligence has transformed our campus security. We can now predict and prevent incidents before they happen, with 94.3% accuracy.",
      author: "Dr. Jennifer Walsh",
      title: "Director of Campus Safety",
      organization: "University of California System",
      compliance: "FERPA",
      results: "76% faster emergency response",
      students_protected: "280,000+ students"
    },
    {
      quote: "The geospatial tracking capabilities of PULSE provide unprecedented situational awareness for our federal facilities. Location accuracy of 98.7% is mission-critical.",
      author: "Colonel Michael Rodriguez",
      title: "Director of Physical Security",
      organization: "U.S. Department of Defense",
      compliance: "FISMA",
      results: "15-second response time achievement",
      facilities_protected: "150+ federal facilities"
    },
    {
      quote: "PULSE's campus integration has revolutionized our emergency response protocols. The system coordinates seamlessly across all our safety systems.",
      author: "Sarah Chen",
      title: "Chief Security Officer",
      organization: "Stanford University",
      compliance: "NIST & FERPA",
      results: "97.2% campus safety score",
      incidents_prevented: "2,400+ incidents prevented"
    }
  ];

  const demoScenarios = [
    {
      title: "Campus Emergency Response",
      description: "See how PULSE coordinates multi-agency response during a campus emergency",
      duration: "12 minutes",
      participants: "1-100 users",
      features: ["Real-time tracking", "Multi-agency coordination", "Automated notifications"],
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      title: "Predictive Risk Mapping",
      description: "Experience AI-powered risk prediction and geofenced threat prevention",
      duration: "15 minutes", 
      participants: "1-50 users",
      features: ["Risk heat maps", "Predictive analytics", "Geofence configuration"],
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />
    },
    {
      title: "Location Intelligence Dashboard",
      description: "Interactive demonstration of real-time geospatial threat monitoring",
      duration: "10 minutes",
      participants: "1-25 users", 
      features: ["Live tracking", "Threat visualization", "Response coordination"],
      icon: <Enhanced4DTargetIcon className="w-6 h-6 text-green-400" size={24} />
    }
  ];

  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen">
        {/* Hero Section */}
        <header className="bg-surface/90 backdrop-blur-md border-b border-surface-light p-8 cyber-glow">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-green-900/50 to-green-700/50 rounded-xl border border-green-500/50">
                <Enhanced4DTargetIcon className="w-12 h-12 text-green-400" size={48} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h1 className="text-5xl font-bold text-white" data-testid="page-title">
                    PULSE Location Intelligence
                  </h1>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-700 text-white" data-testid="badge-accuracy">
                    98.7% Location Accuracy
                  </Badge>
                </div>
                <p className="text-gray-300 text-xl mb-4" data-testid="page-description">
                  Predictive Universal Learning Security Engine • Real-Time Geospatial Tracking • Campus Security Integration
                </p>
                <p className="text-gray-400 text-lg">
                  Advanced location intelligence with multi-generational learning and 15-second response capabilities
                </p>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-green-400 font-medium" data-testid="live-status">LOCATION TRACKING ACTIVE</span>
              <span className="text-gray-400 text-sm">Active Tracking: {activeTracking.toLocaleString()} • Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-surface/50 rounded-lg p-4 border border-green-500/30 cyber-glow" data-testid="metric-accuracy">
                <div className="text-3xl font-bold text-green-400 mb-1 animate-pulse">{locationAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-400 mb-1">Location Accuracy</div>
                <div className="text-xs text-green-400 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Real-time precision
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-blue-500/30 cyber-glow" data-testid="metric-response">
                <div className="text-3xl font-bold text-blue-400 mb-1 font-mono">{Math.round(responseTime)}s</div>
                <div className="text-sm text-gray-400 mb-1">Response Time</div>
                <div className="text-xs text-blue-400 flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Average response
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-purple-500/30 cyber-glow" data-testid="metric-tracking">
                <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">{activeTracking.toLocaleString()}</div>
                <div className="text-sm text-gray-400 mb-1">Active Tracking</div>
                <div className="text-xs text-purple-400 flex items-center">
                  <Satellite className="w-3 h-3 mr-1" />
                  Live monitoring
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-orange-500/30 cyber-glow" data-testid="metric-prediction">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono">94.3%</div>
                <div className="text-sm text-gray-400 mb-1">Prediction Accuracy</div>
                <div className="text-xs text-orange-400 flex items-center">
                  <Enhanced4DBrainIcon className="w-3 h-3 mr-1" size={12} />
                  AI prediction
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-red-500/30 cyber-glow" data-testid="metric-prevented">
                <div className="text-3xl font-bold text-red-400 mb-1 font-mono">{threatsPrevented.toLocaleString()}</div>
                <div className="text-sm text-gray-400 mb-1">Threats Prevented</div>
                <div className="text-xs text-red-400 flex items-center">
                  <Enhanced4DShieldIcon className="w-3 h-3 mr-1" size={12} />
                  Proactive security
                </div>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-400/50" data-testid="badge-ferpa">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2" size={16} />
                FERPA Location Privacy
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-400/50" data-testid="badge-fisma">
                <Enhanced4DShieldIcon className="w-4 h-4 mr-2" size={16} />
                FISMA Geospatial Security
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/50" data-testid="badge-nist">
                <Enhanced4DLockIcon className="w-4 h-4 mr-2" size={16} />
                NIST Positioning Standards
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-7xl p-8 space-y-16">
          {/* Geospatial Capabilities */}
          <section data-testid="section-capabilities">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DTargetIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              Core Geospatial Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {geospatialCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300" data-testid={`capability-card-${index}`}>
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
                        <div className="grid grid-cols-1 gap-2">
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

          {/* Campus Security Integration */}
          <section data-testid="section-campus-security">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DShieldIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              Campus Security Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campusSecurityFeatures.map((feature, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-blue-500/50 transition-all duration-300" data-testid={`security-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {feature.icon}
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(feature.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-surface/30 rounded">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Features:</div>
                        <div className="space-y-1">
                          {feature.features.map((feat, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feat}</span>
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
                        <div key={itemIndex} className="flex justify-between items-start py-2 border-b border-gray-700 last:border-b-0">
                          <span className="text-gray-400 text-sm font-medium">{item.label}:</span>
                          <span className="text-white text-sm text-right max-w-xs">{item.value}</span>
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
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
              POD Intelligence System Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationSystems.map((system, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300" data-testid={`integration-card-${index}`}>
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
                        <div className="text-sm font-medium text-white mb-2">Location Features:</div>
                        <div className="space-y-1">
                          {system.location_features.map((feature, lIndex) => (
                            <div key={lIndex} className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-green-400" />
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
              <Enhanced4DBuildingIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
              Deployment & Implementation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300" data-testid={`deployment-card-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="mb-4">{option.icon}</div>
                      <CardTitle className="text-white text-xl mb-2">{option.type}</CardTitle>
                      <p className="text-gray-400 text-sm">{option.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {option.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">{option.pricing}</div>
                          <div className="text-sm text-gray-400">Enterprise pricing available</div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" data-testid={`button-contact-${index}`}>
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ROI & Performance Metrics */}
          <section data-testid="section-roi">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DTrendingUpIcon className="w-10 h-10 mr-4 text-yellow-400" size={40} />
              ROI & Performance Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiMetrics.map((roi, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light text-center" data-testid={`roi-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">{roi.value}</div>
                    <div className="text-xl font-semibold text-white mb-2">{roi.metric}</div>
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
                <Card key={index} className="bg-surface/50 border-surface-light" data-testid={`testimonial-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 text-sm italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-white font-semibold">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.title}</div>
                        <div className="text-gray-500 text-sm">{testimonial.organization}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-green-400 border-green-400/50">
                          {testimonial.compliance}
                        </Badge>
                      </div>
                      <div className="pt-3 border-t border-gray-700">
                        <div className="text-sm">
                          <div className="text-white font-medium">{testimonial.results}</div>
                          <div className="text-gray-400">{testimonial.students_protected || testimonial.facilities_protected || testimonial.incidents_prevented}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Interactive Demos */}
          <section data-testid="section-demos">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Play className="w-10 h-10 mr-4 text-green-400" />
              Interactive Demonstrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {demoScenarios.map((demo, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300" data-testid={`demo-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {demo.icon}
                      <CardTitle className="text-white text-lg">{demo.title}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{demo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-surface/30 rounded">
                          <div className="text-sm font-bold text-white">{demo.duration}</div>
                          <div className="text-xs text-gray-400">Duration</div>
                        </div>
                        <div className="text-center p-2 bg-surface/30 rounded">
                          <div className="text-sm font-bold text-white">{demo.participants}</div>
                          <div className="text-xs text-gray-400">Participants</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Features:</div>
                        <div className="space-y-1">
                          {demo.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" data-testid={`button-demo-${index}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="bg-gradient-to-r from-green-900/50 to-green-700/50 rounded-2xl border border-green-500/50 p-12 text-center" data-testid="section-cta">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Location Intelligence?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join 340+ educational institutions and federal agencies using PULSE for advanced geospatial security and emergency response coordination.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 font-semibold px-8" data-testid="button-schedule-demo">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 font-semibold px-8" data-testid="button-contact-expert">
                <Phone className="w-5 h-5 mr-2" />
                Contact Expert
              </Button>
              <Link to="/solutions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8" data-testid="button-solutions">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Solutions
                </Button>
              </Link>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                <span>30-day trial available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Enhanced4DShieldIcon className="w-4 h-4 text-blue-400" size={16} />
                <span>FERPA & FISMA compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Enhanced4DUsersIcon className="w-4 h-4 text-purple-400" size={16} />
                <span>24/7 expert support</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MarketingLayout>
  );
}