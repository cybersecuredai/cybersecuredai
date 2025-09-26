import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// All icons now use Enhanced 4D versions with glass morphism effects
import {
  CustomShieldIcon,
  CustomBrainIcon,
  CustomHeadphonesIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DBrainIcon,
  CustomTargetIcon,
  CustomEyeIcon,
  CustomZapIcon,
  CustomDatabaseIcon,
  CustomFileTextIcon,
  Enhanced4DShieldIcon,
  Enhanced4DLockIcon,
  Enhanced4DTargetIcon,
  Enhanced4DEyeIcon,
  Enhanced4DBotIcon,
  Enhanced4DZapIcon,
  Enhanced4DActivityIcon,
  Enhanced4DFileIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DServerIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DUsersIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DExternalLinkIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DStarIcon
} from "@/components/LazyCustomIcons";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link, useLocation } from "wouter";

// Authority platform images
import platformOverviewImg from "@assets/generated_images/Platform_Overview_Datasheet_3d239cec.jpg";
import aiThreatImg from "@assets/generated_images/AI_Threat_Detection_Engine_58460592.jpg";
import complianceImg from "@assets/generated_images/Compliance_Dashboard_Demo_bbe28daf.jpg";
import networkSecurityImg from "@assets/generated_images/Network_Security_Demo_f519b96f.jpg";
import incidentResponseImg from "@assets/generated_images/Automated_Incident_Response_9b65f496.jpg";
import socDashboardImg from "@assets/generated_images/SOC_Dashboard_Management_23c1af0b.jpg";

// POD Intelligence System Logos
import orcaLogoImg from "@assets/ORCA logo_1758558742074.png";
import apexLogoImg from "@assets/APEX logo_1758557596082.png";
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function Platform() {
  const [, setLocation] = useLocation();
  
  // POD Intelligence Systems - Five Revolutionary AI Systems
  const podIntelligenceSystems = [
    {
      id: "apex",
      title: "APEX",
      fullName: "Advanced Pattern Exchange",
      description: "Genetic AI Engine with self-evolving threat detection algorithms powered by PyTorch & DEAP",
      icon: <img src={apexLogoImg} alt="APEX" className="w-10 h-10" />,
      color: "border-purple-500/50",
      gradient: "from-purple-900/50 to-slate-800/50",
      features: [
        "Genetic Algorithm Engine with PyTorch & DEAP Integration",
        "Multi-Generational Learning & Knowledge Inheritance",
        "Autonomous Policy Generation (99.2% accuracy)",
        "Adaptive Neural Architecture Search (NAS)",
        "Federated Genetic Learning across environments",
        "Sector-specific adaptation (FERPA/FISMA genetics)",
        "Real-time evolution against unknown threats",
        "Cross-generational threat pattern analysis"
      ],
      metrics: [
        { label: "Detection Accuracy", value: "99.2%", color: "text-purple-400" },
        { label: "False Positive Reduction", value: "-78%", color: "text-purple-400" },
        { label: "Threat Response Speed", value: "+65%", color: "text-purple-400" },
        { label: "Security Gap Reduction", value: "-82%", color: "text-purple-400" }
      ],
      technology: "TensorFlow 2.x, PyTorch, DEAP, Neural Architecture Search, Custom Genetic Operators",
      status: "Fully Operational",
      compliance: ["FERPA", "FISMA", "NIST"],
      image: aiThreatImg
    },
    {
      id: "echo",
      title: "ECHO",
      fullName: "Enhanced Cybersecurity Holographic Operations",
      description: "5D Holographic Interface with live human-like avatar for intuitive threat visualization and interaction",
      icon: <img src={echoLogoImg} alt="ECHO" className="w-10 h-10" />,
      color: "border-cyan-500/50",
      gradient: "from-cyan-900/50 to-slate-800/50",
      features: [
        "5D Holographic Threat Visualization Environment",
        "Live Human-like AI Avatar with Natural Language Processing",
        "Real-time Facial Expression & Gesture Recognition",
        "Immersive Security Operations Center (SOC) Experience",
        "Interactive Threat Exploration & Analysis",
        "Multi-dimensional Data Representation",
        "Spatial Audio for Threat Severity Indication",
        "Collaborative Virtual Security Briefings"
      ],
      metrics: [
        { label: "User Engagement", value: "+340%", color: "text-cyan-400" },
        { label: "Threat Comprehension", value: "+85%", color: "text-cyan-400" },
        { label: "Response Accuracy", value: "+92%", color: "text-cyan-400" },
        { label: "Training Efficiency", value: "+150%", color: "text-cyan-400" }
      ],
      technology: "WebGL, Three.js, AI Avatar Engine, Spatial Computing, Real-time Rendering",
      status: "Beta Release",
      compliance: ["FERPA", "Section 508", "ADA"],
      image: socDashboardImg
    },
    {
      id: "pulse",
      title: "PULSE",
      fullName: "Predictive Universal Learning Security Engine",
      description: "Location Intelligence with real-time tracking and predictive geospatial threat analysis",
      icon: <Enhanced4DTargetIcon className="w-10 h-10 text-green-400" size={40} />,
      color: "border-green-500/50",
      gradient: "from-green-900/50 to-slate-800/50",
      features: [
        "Real-time Global Threat Geolocation Tracking",
        "Predictive Location-based Risk Assessment",
        "Multi-source Geographic Intelligence Fusion",
        "Campus/Facility Physical Security Integration",
        "Emergency Response Coordination System",
        "Geofencing for Critical Infrastructure Protection",
        "Mobile Device Location Analytics",
        "Weather & Environmental Threat Correlation"
      ],
      metrics: [
        { label: "Location Accuracy", value: "98.7%", color: "text-green-400" },
        { label: "Prediction Precision", value: "94.3%", color: "text-green-400" },
        { label: "Response Time", value: "<15s", color: "text-green-400" },
        { label: "Coverage Area", value: "Global", color: "text-green-400" }
      ],
      technology: "GPS/GNSS, GIS Analytics, Machine Learning, Real-time Mapping APIs",
      status: "Production Ready",
      compliance: ["FERPA", "CIPA", "Student Privacy"],
      image: networkSecurityImg
    },
    {
      id: "surge",
      title: "SURGE",
      fullName: "Strategic Unified Response Generation Engine",
      description: "Autonomous Defense with drone swarm coordination and automated incident response",
      icon: <Enhanced4DZapIcon className="w-10 h-10 text-orange-400" size={40} />,
      color: "border-orange-500/50",
      gradient: "from-orange-900/50 to-slate-800/50",
      features: [
        "Autonomous Drone Swarm Coordination",
        "Automated Incident Response & Containment",
        "Strategic Defense Pattern Generation",
        "Multi-vector Attack Mitigation",
        "Coordinated Emergency Response Systems",
        "Intelligent Resource Allocation",
        "Threat Neutralization Protocols",
        "Cross-platform Security Orchestration"
      ],
      metrics: [
        { label: "Response Speed", value: "<8min", color: "text-orange-400" },
        { label: "Containment Rate", value: "99.1%", color: "text-orange-400" },
        { label: "Resource Efficiency", value: "+78%", color: "text-orange-400" },
        { label: "Threat Neutralization", value: "97.8%", color: "text-orange-400" }
      ],
      technology: "Drone APIs, IoT Integration, Automated Response Frameworks, ML Orchestration",
      status: "Advanced Development",
      compliance: ["FISMA", "NIST", "Federal Security"],
      image: incidentResponseImg
    },
    {
      id: "flow",
      title: "FLOW",
      fullName: "Federated Learning Operations Workflow",
      description: "Operations automation with meeting intelligence and workflow optimization",
      icon: <Enhanced4DActivityIcon className="w-10 h-10 text-blue-400" size={40} />,
      color: "border-blue-500/50",
      gradient: "from-blue-900/50 to-slate-800/50",
      features: [
        "Multi-Platform Meeting Intelligence (Teams, Zoom, Google Meet)",
        "Automated Workflow Optimization",
        "Federated Learning across Organizations",
        "Smart Calendar & Resource Management",
        "Intelligent Document Processing",
        "Cross-team Collaboration Enhancement",
        "Predictive Workload Distribution",
        "Knowledge Transfer Automation"
      ],
      metrics: [
        { label: "Productivity Gain", value: "+68%", color: "text-blue-400" },
        { label: "Meeting Efficiency", value: "+45%", color: "text-blue-400" },
        { label: "Process Automation", value: "87%", color: "text-blue-400" },
        { label: "Knowledge Retention", value: "+92%", color: "text-blue-400" }
      ],
      technology: "Federated Learning, NLP, Workflow Engines, API Orchestration",
      status: "Production Ready",
      compliance: ["FERPA", "Privacy Standards", "Data Protection"],
      image: platformOverviewImg
    }
  ];
  
  // Cypher AI Dual Intelligence Models
  const cypherAIModels = [
    {
      title: "Cypher AI Genetic Model",
      description: "Self-evolving AI with genetic algorithms and multi-generational learning",
      icon: <Enhanced4DBrainIcon className="w-10 h-10 text-purple-400" size={40} />,
      color: "border-purple-500/50",
      gradient: "from-purple-900/50 to-slate-800/50",
      features: [
        "Genetic Algorithm Engine with PyTorch & DEAP",
        "Multi-Generational Learning & Knowledge Inheritance",
        "Autonomous Policy Generation (99.2% accuracy)",
        "Adaptive Neural Architecture Search (NAS)",
        "Federated Genetic Learning across environments",
        "Sector-specific adaptation (FERPA/FISMA genetics)"
      ],
      metrics: [
        { label: "False Positive Reduction", value: "-78%", color: "text-purple-400" },
        { label: "Threat Response Speed", value: "+65%", color: "text-purple-400" },
        { label: "Security Gap Reduction", value: "-82%", color: "text-purple-400" },
        { label: "Autonomous Accuracy", value: "99.2%", color: "text-purple-400" }
      ],
      technology: "TensorFlow 2.x, PyTorch, Neural Architecture Search, Custom Genetic Operators"
    },
    {
      title: "Cypher AI Assistant",
      description: "Internal operations AI for meeting intelligence and workflow automation",
      icon: <Enhanced4DBotIcon className="w-10 h-10 text-cyan-400" size={40} />,
      color: "border-cyan-500/50", 
      gradient: "from-cyan-900/50 to-slate-800/50",
      features: [
        "Multi-Platform Meeting Intelligence (Teams, Zoom, Google Meet)",
        "95% Transcription Accuracy with Speaker Recognition",
        "Smart Calendar Management & Conflict Resolution",
        "Automated Email Processing & Lead Qualification",
        "Social Platform Management (LinkedIn, Twitter, GitHub)",
        "24/7 Website Chat Support with Technical Q&A"
      ],
      metrics: [
        { label: "Meeting Prep Time", value: "-70%", color: "text-cyan-400" },
        { label: "Team Productivity", value: "+45%", color: "text-cyan-400" },
        { label: "Client Response Time", value: "+60%", color: "text-cyan-400" },
        { label: "Transcription Accuracy", value: "95%", color: "text-cyan-400" }
      ],
      technology: "Chrome Extensions, Teams Bot API, Twilio API, SendGrid Integration, Real-time WebSockets"
    }
  ];

  const coreAIEngines = [
    {
      title: "Advanced AI-Driven Threat Hunting",
      description: "Next-generation threat detection with 99.7% accuracy",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-red-400" size={32} />,
      color: "border-red-500/30",
      features: [
        "Real-time behavioral analytics",
        "Neural network threat modeling",
        "Predictive threat intelligence",
        "8-minute mean response time"
      ],
      image: aiThreatImg,
      status: "Fully Operational"
    },
    {
      title: "AI-Enhanced Predictive Risk Analysis",
      description: "Machine learning risk assessment and vulnerability prediction",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-cyan-400" size={32} />,
      color: "border-cyan-500/30",
      features: [
        "Continuous asset discovery",
        "Vulnerability prioritization",
        "Risk scoring algorithms",
        "Executive dashboards"
      ],
      image: platformOverviewImg,
      status: "Integrated & Active"
    },
    {
      title: "AI-Based User Behavior Analytics",
      description: "Advanced insider threat detection and user monitoring",
      icon: <Enhanced4DEyeIcon className="w-8 h-8 text-purple-400" size={32} />,
      color: "border-purple-500/30",
      features: [
        "Real-time user monitoring",
        "Anomaly detection",
        "Insider threat identification",
        "Behavioral baseline analysis"
      ],
      image: socDashboardImg,
      status: "Real-time Monitoring"
    },
    {
      title: "Interactive 5D Security Visualization",
      description: "Immersive security data visualization and threat exploration",
      icon: <Enhanced4DGlobeIcon className="w-8 h-8 text-green-400" size={32} />,
      color: "border-green-500/30",
      features: [
        "5D threat visualization",
        "Interactive security dashboards",
        "Real-time threat mapping",
        "Executive-level insights"
      ],
      image: networkSecurityImg,
      status: "Deployed"
    },
    {
      title: "Cloud Integration Engine",
      description: "Multi-provider cloud security with FedRAMP compliance",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-blue-400" size={32} />,
      color: "border-blue-500/30",
      features: [
        "Multi-cloud monitoring",
        "FedRAMP High compliance",
        "AWS/Azure/GCP integration",
        "Kubernetes security"
      ],
      image: complianceImg,
      status: "Multi-Provider Support"
    },
    {
      title: "Advanced Threat Intelligence Processing",
      description: "Multi-source threat intelligence with real-time analysis",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-spring-400" size={32} />,
      color: "border-spring-500/30",
      features: [
        "VirusTotal & IBM X-Force integration",
        "PyMISP & CIRCL threat feeds",
        "Real-time threat correlation",
        "Sub-20ms intelligence processing"
      ],
      image: socDashboardImg,
      status: "Multi-Source Active"
    },
    {
      title: "AI-Based Compliance Automation",
      description: "Automated regulatory compliance with continuous monitoring",
      icon: <Enhanced4DFileIcon className="w-8 h-8 text-yellow-400" size={32} />,
      color: "border-yellow-500/30",
      features: [
        "FERPA/FISMA/CIPA automation", 
        "Automated audit reports",
        "Policy enforcement",
        "Risk assessment dashboards"
      ],
      image: complianceImg,
      status: "Regulatory Ready"
    },
    {
      title: "Multi-State Security Coalition Platform",
      description: "Inter-agency cybersecurity coordination and threat sharing",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-orange-400" size={32} />,
      color: "border-orange-500/30",
      features: [
        "Inter-state threat sharing",
        "NIEM-compliant protocols",
        "Multi-jurisdictional response",
        "Emergency coordination"
      ],
      image: incidentResponseImg,
      status: "Government Ready"
    },
    {
      title: "Smart City Security Suite",
      description: "Critical infrastructure protection for smart cities",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-pink-400" size={32} />,
      color: "border-pink-500/30",
      features: [
        "Traffic system security",
        "Utility grid monitoring",
        "Emergency services integration",
        "SCADA protection"
      ],
      image: platformOverviewImg,
      status: "Infrastructure Monitoring"
    },
    {
      title: "IT Management & Infrastructure",
      description: "Complete system administration and infrastructure oversight",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-emerald-400" size={32} />,
      color: "border-emerald-500/30",
      features: [
        "Workstation management & monitoring",
        "Server health analytics",
        "Automated patch deployment",
        "System performance optimization"
      ],
      image: socDashboardImg,
      status: "System Management Active"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-slate-900">
        
        {/* Hero Section - ORCA Platform */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-midnight-900 via-spring-900/20 to-midnight-900">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
              {/* ORCA Platform Branding */}
              <div className="flex items-center justify-center mb-8">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-12 w-auto mr-4" />
                <Badge className="bg-spring-500/20 text-spring-300 border-spring-500/30 text-lg px-6 py-3">
                  CyberSecured AI's ORCA Platform
                </Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">
                  POD Intelligence
                </span><br />
                Revolutionizes Cybersecurity
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Five revolutionary AI systems working together: APEX genetic algorithms, ECHO holographic interfaces, 
                PULSE location intelligence, SURGE autonomous defense, and FLOW operations automation. 
                <strong className="text-spring-400">The world's first comprehensive POD Intelligence platform.</strong>
              </p>
              
              {/* POD Intelligence Systems Preview */}
              <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <img src={apexLogoImg} alt="APEX" className="h-12 w-12 mx-auto mb-2" />
                  <span className="text-purple-400 text-sm font-bold">APEX</span>
                  <p className="text-xs text-gray-400">Genetic AI</p>
                </div>
                <div className="text-center">
                  <img src={echoLogoImg} alt="ECHO" className="h-12 w-12 mx-auto mb-2" />
                  <span className="text-cyan-400 text-sm font-bold">ECHO</span>
                  <p className="text-xs text-gray-400">5D Interface</p>
                </div>
                <div className="text-center">
                  <Enhanced4DTargetIcon className="h-12 w-12 mx-auto mb-2 text-green-400" size={48} />
                  <span className="text-green-400 text-sm font-bold">PULSE</span>
                  <p className="text-xs text-gray-400">Location Intel</p>
                </div>
                <div className="text-center">
                  <Enhanced4DZapIcon className="h-12 w-12 mx-auto mb-2 text-orange-400" size={48} />
                  <span className="text-orange-400 text-sm font-bold">SURGE</span>
                  <p className="text-xs text-gray-400">Auto Defense</p>
                </div>
                <div className="text-center">
                  <Enhanced4DActivityIcon className="h-12 w-12 mx-auto mb-2 text-blue-400" size={48} />
                  <span className="text-blue-400 text-sm font-bold">FLOW</span>
                  <p className="text-xs text-gray-400">Operations</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Enhanced4DStarIcon key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" size={24} />
                ))}
                <span className="ml-4 text-white font-semibold text-lg">4.9/5 from 500+ POD Intelligence Deployments</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/demo">
                  <Button 
                    size="lg" 
                    className="button-4d px-10 py-4 text-lg font-semibold"
                    onClick={() => setLocation('/platform-demo')}
                  >
                    Watch Platform Demo
                    <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                  </Button>
                </Link>
                <Link href="/trials">
                  <Button 
                    size="lg" 
                    className="button-4d px-10 py-4 text-lg font-semibold"
                    onClick={() => setLocation('/trials')}
                  >
                    Try Free for 30 Days
                  </Button>
                </Link>
              </div>
            </div>

            {/* ORCA Platform Overview Visual */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <img 
                  src={platformOverviewImg}
                  alt="CyberSecured AI's ORCA Platform with POD Intelligence Systems"
                  className="w-full rounded-2xl shadow-2xl border border-spring-500/30"
                />
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/70 rounded-lg p-3">
                  <img src={orcaLogoImg} alt="ORCA" className="h-6 w-6" />
                  <span className="text-spring-400 font-bold text-sm">ORCA Platform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POD Intelligence Systems - Revolutionary Five-System Architecture */}
        <section className="py-20 px-6 bg-gradient-to-b from-midnight-900 to-midnight-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-spring-500/20 text-spring-300 border-spring-500/30 flex items-center justify-center w-fit mx-auto">
                <img src={orcaLogoImg} alt="ORCA" className="h-5 w-5 mr-2" />
                🚀 POD Intelligence Systems
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Five Revolutionary AI Systems<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">Working as One</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                The world's first comprehensive POD Intelligence architecture. Five specialized AI systems that communicate, 
                learn, and evolve together to provide unparalleled cybersecurity protection. From genetic algorithms 
                to holographic interfaces, from location intelligence to autonomous defense - this is the future of AI security.
              </p>
            </div>

            {/* POD Intelligence Systems Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {podIntelligenceSystems.map((system, index) => (
                <Card key={system.id} className={`bg-gradient-to-br ${system.gradient} border-2 ${system.color} hover:scale-105 transition-all duration-500 group`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {system.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-white">{system.title}</h3>
                        <p className="text-sm text-gray-400">{system.fullName}</p>
                        <Badge className={`mt-2 text-xs ${system.status === 'Fully Operational' ? 'bg-green-500/20 text-green-400' : 
                          system.status === 'Production Ready' ? 'bg-blue-500/20 text-blue-400' : 
                          system.status === 'Beta Release' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-orange-500/20 text-orange-400'}`}>
                          {system.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{system.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Key Capabilities</h4>
                      <div className="space-y-2">
                        {system.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 text-spring-400 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {system.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-black/30 rounded-lg">
                          <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {system.compliance.map((comp, idx) => (
                        <Badge key={idx} className="text-xs bg-gray-800/50 text-gray-300">{comp}</Badge>
                      ))}
                    </div>

                    <Link href={`/platform/${system.id}`}>
                      <Button className="w-full group-hover:bg-spring-500 transition-colors">
                        Explore {system.title}
                        <Enhanced4DArrowRightIcon className="ml-2 w-4 h-4" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Integration Benefits */}
            <div className="bg-gradient-to-r from-spring-900/30 to-cyan-900/30 rounded-2xl p-8 border border-spring-500/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Unified POD Intelligence Integration</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  When all five POD Intelligence systems work together, they create an unprecedented level of cybersecurity protection. 
                  Each system enhances the others, creating exponential improvements in threat detection, response, and prevention.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Enhanced4DNetworkIcon className="w-12 h-12 text-spring-400 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-bold text-white mb-2">Cross-System Learning</h4>
                  <p className="text-gray-400 text-sm">Each system learns from the others, creating collective intelligence</p>
                </div>
                <div className="text-center">
                  <Enhanced4DZapIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-bold text-white mb-2">Exponential Performance</h4>
                  <p className="text-gray-400 text-sm">Combined systems deliver 10x better results than traditional solutions</p>
                </div>
                <div className="text-center">
                  <Enhanced4DShieldIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-bold text-white mb-2">Adaptive Protection</h4>
                  <p className="text-gray-400 text-sm">Continuous evolution and adaptation to emerging threats</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/platform/pod-intelligence">
                <Button size="lg" className="bg-spring-500 hover:bg-spring-600 text-midnight-900 font-bold px-8 py-4">
                  Explore Complete POD Intelligence Architecture
                  <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                </Button>
              </Link>
            </div>
            </div>

            {/* Legacy Cypher AI Models - Now Part of POD Intelligence */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                  🧬 Foundation Technologies
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-4">Cypher AI Foundation Models</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  The revolutionary dual AI architecture that powers POD Intelligence systems. These foundational models 
                  provide the genetic algorithms and operational intelligence that make APEX, ECHO, PULSE, SURGE, and FLOW possible.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {cypherAIModels.map((model, index) => (
                  <Card key={index} className={`bg-gradient-to-br ${model.gradient} border-2 ${model.color} hover:scale-105 transition-all duration-500`}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mr-6">
                        {model.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                        <p className="text-gray-300 text-sm">{model.description}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Core Capabilities</h4>
                      <ul className="space-y-2">
                        {model.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Performance Metrics */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {model.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className={`text-xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                            <div className="text-xs text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technology Stack</h4>
                      <p className="text-xs text-gray-500">{model.technology}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Architecture Overview */}
            <div className="mt-16 p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Integrated AI Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-purple-400 mb-2">Genetic Evolution</h4>
                  <p className="text-sm text-gray-300">Self-evolving algorithms that improve through genetic programming and multi-generational learning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DBotIcon className="w-8 h-8 text-cyan-400" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">Operations Intelligence</h4>
                  <p className="text-sm text-gray-300">Advanced workflow automation with meeting intelligence and communication management</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DNetworkIcon className="w-8 h-8 text-green-400" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-green-400 mb-2">Unified Platform</h4>
                  <p className="text-sm text-gray-300">Seamless integration across all security modules with cross-platform learning capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revolutionary Systems Integration Dashboard */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-blue-500/20 text-blue-300 border-blue-500/30 text-xl px-8 py-4">
                <Enhanced4DGlobeIcon className="w-6 h-6 mr-3" size={24} />
                UNIFIED DASHBOARD INTEGRATION
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Five Revolutionary Systems<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-500">
                  One Unified Platform
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed">
                Cross-system analytics and correlation across PULSE, Live Location, ECHO with live avatar, SURGE, 
                and Unified Integration - all powered by real-time WebSocket architecture
              </p>
            </div>

            {/* Unified Dashboard Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              
              {/* PULSE Dashboard */}
              <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border border-purple-500/40 hover:border-purple-400/70 transition-all duration-300 group">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/50">
                    <Enhanced4DBrainIcon className="w-6 h-6 text-purple-300" size={24} />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 text-xs w-full justify-center">
                    🧠 GENETIC AI
                  </Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">PULSE</h3>
                  <p className="text-sm text-gray-300 mb-4">Autonomous Cyber Defense</p>
                  <div className="text-2xl font-bold text-purple-400 mb-1">99.2%</div>
                  <div className="text-xs text-purple-300">AI Accuracy</div>
                </CardContent>
              </Card>

              {/* Live Location Dashboard */}
              <Card className="bg-gradient-to-br from-cyan-900/60 to-slate-800/60 border border-cyan-500/40 hover:border-cyan-400/70 transition-all duration-300 group">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-cyan-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/50">
                    <Enhanced4DGlobeIcon className="w-6 h-6 text-cyan-300" size={24} />
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs w-full justify-center">
                    📍 GEOSPATIAL
                  </Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Live Location</h3>
                  <p className="text-sm text-gray-300 mb-4">Real-Time Tracking</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-xs text-cyan-300">Monitoring</div>
                </CardContent>
              </Card>

              {/* ECHO Dashboard */}
              <Card className="bg-gradient-to-br from-blue-900/60 to-slate-800/60 border border-blue-500/40 hover:border-blue-400/70 transition-all duration-300 group">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/50">
                    <Enhanced4DEyeIcon className="w-6 h-6 text-blue-300" size={24} />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs w-full justify-center">
                    👁️ HOLOGRAPHIC
                  </Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">ECHO</h3>
                  <p className="text-sm text-gray-300 mb-4">5D Avatar Interface</p>
                  <div className="text-2xl font-bold text-blue-400 mb-1">5D</div>
                  <div className="text-xs text-blue-300">Live Human-Like Avatar</div>
                </CardContent>
              </Card>

              {/* SURGE Dashboard */}
              <Card className="bg-gradient-to-br from-red-900/60 to-slate-800/60 border border-red-500/40 hover:border-red-400/70 transition-all duration-300 group">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-red-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-400/50">
                    <Enhanced4DZapIcon className="w-6 h-6 text-red-300" size={24} />
                  </div>
                  <Badge className="bg-red-500/20 text-red-300 border-red-400/30 text-xs w-full justify-center">
                    🚁 DRONE SWARM
                  </Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">SURGE</h3>
                  <p className="text-sm text-gray-300 mb-4">Autonomous Defense</p>
                  <div className="text-2xl font-bold text-red-400 mb-1">AI</div>
                  <div className="text-xs text-red-300">Swarm Control</div>
                </CardContent>
              </Card>

              {/* Unified Integration Dashboard */}
              <Card className="bg-gradient-to-br from-green-900/60 to-slate-800/60 border border-green-500/40 hover:border-green-400/70 transition-all duration-300 group">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/50">
                    <Enhanced4DNetworkIcon className="w-6 h-6 text-green-300" size={24} />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-400/30 text-xs w-full justify-center">
                    🔄 UNIFIED
                  </Badge>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Unified</h3>
                  <p className="text-sm text-gray-300 mb-4">Integration Hub</p>
                  <div className="text-2xl font-bold text-green-400 mb-1">5</div>
                  <div className="text-xs text-green-300">Systems</div>
                </CardContent>
              </Card>
            </div>

            {/* Real-Time WebSocket Architecture */}
            <div className="bg-slate-800/60 rounded-xl border border-cyan-500/30 p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Real-Time WebSocket Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
                  <div className="text-sm text-gray-300">WebSocket Servers</div>
                  <div className="text-xs text-purple-300 mt-1">Real-Time Communication</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">JWT</div>
                  <div className="text-sm text-gray-300">Role-Based Auth</div>
                  <div className="text-xs text-cyan-300 mt-1">Multi-System Security</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">5D</div>
                  <div className="text-sm text-gray-300">Avatar-Guided Interface</div>
                  <div className="text-xs text-blue-300 mt-1">Temporal Analysis Matrix</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">AI</div>
                  <div className="text-sm text-gray-300">Genetic Evolution</div>
                  <div className="text-xs text-red-300 mt-1">99.2% Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Cross-Correlation</div>
                  <div className="text-xs text-green-300 mt-1">Federal Deployment</div>
                </div>
              </div>
              
              <p className="text-center text-gray-300 mb-8">
                All five revolutionary systems operate on a unified real-time architecture, 
                enabling instant cross-system threat correlation and response coordination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => window.location.href = '/dashboard/unified'}
                >
                  <Enhanced4DNetworkIcon className="mr-2 w-6 h-6" size={24} />
                  Access Unified Dashboard
                </Button>
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Federal Demo
                  <Enhanced4DArrowRightIcon className="ml-2 w-6 h-6" size={24} />
                </Button>
              </div>
            </div>

            {/* Holographic Interface Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                  👁️ REVOLUTIONARY INTERFACE TECHNOLOGY
                </Badge>
                <h3 className="text-4xl font-bold text-white mb-6">
                  ECHO Live Human-Like Avatar Interface
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The world's first human-like AI avatar cybersecurity interface. Experience threat visualization 
                  in revolutionary 5D space with a live avatar guide featuring natural movements, facial expressions, 
                  and contextual gestures that transform how security teams understand and respond to attacks.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-slate-700/40 rounded-lg p-6 border border-blue-500/30">
                    <h4 className="text-lg font-semibold text-blue-300 mb-4">Immersive Capabilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          5D Holographic Display Matrix
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          Real-Time Threat Projection
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          Voice-Activated Controls
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          AI Natural Language Processing
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          Multi-Dimensional Data Layers
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-blue-400" size={16} />
                          Collaborative Security Operations
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
                    Experience Live Demo
                    <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={networkSecurityImg}
                  alt="ECHO Live Avatar Interface"
                  className="w-full rounded-xl border border-blue-500/30 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-xl"></div>
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-sm px-3 py-1 rounded font-bold">
                  5D AVATAR INTERFACE
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white text-xs px-3 py-1 rounded">
                  Live Avatar with Temporal Analysis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities Grid */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
                Eight Core AI Engines - All Operational
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Enterprise AI Security<br />
                <span className="text-cyan-400">Platform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Eight integrated AI engines working together to provide 
                comprehensive protection for government and educational organizations.
              </p>
              <div className="mt-8">
                <Badge className="bg-green-500/20 text-green-300 text-lg px-6 py-2">
                  ✅ All Systems Operational
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreAIEngines.map((engine, index) => (
                <Card key={index} className={`bg-slate-700/60 border ${engine.color} hover:border-opacity-60 transition-all duration-300 group cursor-pointer`}>
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {engine.icon}
                      <Badge className="bg-green-500/20 text-green-300 text-xs">
                        ✅ {engine.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                      {engine.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {engine.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-1 mb-4">
                      {engine.features.slice(0, 3).map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-3 h-3 text-green-400" size={12} />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="button-4d w-full"
                      onClick={() => setLocation('/solutions/threat-intelligence')}
                    >
                      Learn More
                      <Enhanced4DArrowRightIcon className="ml-2 w-3 h-3" size={12} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integration */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Seamless Integration
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Integrates with Your<br />
                  <span className="text-blue-400">Existing Infrastructure</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our platform seamlessly integrates with your current systems, 
                  providing immediate protection without disrupting operations.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">300+</div>
                    <div className="text-gray-300">Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">15min</div>
                    <div className="text-gray-300">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/integrations">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => setLocation('/integrations')}
                    >
                      View Integrations
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => { setLocation('/contact'); setTimeout(() => window.scrollTo(0, 0), 100); }}
                    >
                      Talk to an Expert
                      <Enhanced4DExternalLinkIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={socDashboardImg}
                  alt="Platform Integration Dashboard"
                  className="w-full rounded-xl shadow-2xl border border-blue-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Value Proposition */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
                Platform Benefits
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Organizations Choose<br />
                <span className="text-orange-400">ORCA Federal</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
                Beyond advanced technology, we deliver measurable business outcomes that transform
                your security posture and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Cost Reduction */}
              <Card className="bg-slate-700/60 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DTrendingUpIcon className="w-8 h-8 text-green-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Reduce Security Costs</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-400 mb-2">67%</div>
                    <div className="text-gray-300">Average cost reduction</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Replace multiple point solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Reduce staffing requirements</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Automate manual processes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-slate-700/60 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DZapIcon className="w-8 h-8 text-cyan-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Faster Response Times</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">8min</div>
                    <div className="text-gray-300">Average containment time</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Automated threat response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>AI-powered decision making</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Real-time alerting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Confidence */}
              <Card className="bg-slate-700/60 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DCheckCircleIcon className="w-8 h-8 text-purple-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Compliance Confidence</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">96%</div>
                    <div className="text-gray-300">Compliance score average</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Automated reporting</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Continuous monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Audit-ready documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Threat Detection */}
              <Card className="bg-slate-700/60 border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DTargetIcon className="w-8 h-8 text-red-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Superior Detection</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
                    <div className="text-gray-300">Threat detection accuracy</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>AI-powered analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Behavioral monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Predictive intelligence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Experience */}
              <Card className="bg-slate-700/60 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DUsersIcon className="w-8 h-8 text-blue-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Enhanced Productivity</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">78%</div>
                    <div className="text-gray-300">Less false positives</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Reduced alert fatigue</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Intuitive dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Streamlined workflows</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scalability */}
              <Card className="bg-slate-700/60 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Enhanced4DGlobeIcon className="w-8 h-8 text-yellow-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">Effortless Scaling</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">2M+</div>
                    <div className="text-gray-300">Devices supported</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Cloud-native architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Auto-scaling capabilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Multi-site support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Security?</h3>
                <p className="text-gray-300 mb-6">See how these benefits apply to your organization with a personalized demo.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="button-4d px-8 py-4"
                    onClick={() => setLocation('/contact')}
                  >
                    Schedule Your Demo
                    <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-orange-500 text-orange-400 hover:bg-orange-500/10 px-8 py-4"
                    onClick={() => setLocation('/trials')}
                  >
                    Try Free for 30 Days
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Metrics */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Empowering Educational<br />
                <span className="text-cyan-400">& Government Organizations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
                ORCA Federal is purpose-built for your sector. But don't take our word for it – 
                see the results from organizations like yours.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <Card className="bg-slate-700/60 border border-cyan-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">500K+</div>
                  <div className="text-white font-semibold mb-2">Students Protected</div>
                  <div className="text-gray-400">Educational institutions secured</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700/60 border border-green-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-4">2M+</div>
                  <div className="text-white font-semibold mb-2">Endpoints Managed</div>
                  <div className="text-gray-400">Devices under protection</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700/60 border border-purple-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">1.2M+</div>
                  <div className="text-white font-semibold mb-2">Identities Protected</div>
                  <div className="text-gray-400">User accounts secured</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700/60 border border-orange-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">8min</div>
                  <div className="text-white font-semibold mb-2">Response Time</div>
                  <div className="text-gray-400">Average threat containment</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  className="button-4d px-8 py-4"
                  onClick={() => setLocation('/client-stories')}
                >
                  Learn More About Our Success
                  <Enhanced4DExternalLinkIcon className="ml-2 w-5 h-5" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Architecture */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
                Platform Architecture
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built for Scale,<br />
                <span className="text-purple-400">Designed for Security</span>
              </h2>
            </div>

            <Tabs defaultValue="security" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-700">
                <TabsTrigger value="security" className="data-[state=active]:bg-red-600 text-lg py-4">
                  <Enhanced4DShieldIcon className="w-6 h-6 mr-2" size={24} />
                  Security Core
                </TabsTrigger>
                <TabsTrigger value="intelligence" className="data-[state=active]:bg-cyan-600 text-lg py-4">
                  <Enhanced4DBrainIcon className="w-6 h-6 mr-2" size={24} />
                  AI Intelligence
                </TabsTrigger>
                <TabsTrigger value="compliance" className="data-[state=active]:bg-green-600 text-lg py-4">
                  <CustomFileTextIcon className="w-6 h-6 mr-2" size={24} />
                  Compliance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="security" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Enterprise-Grade<br />
                      <span className="text-red-400">Security Foundation</span>
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                      Military-grade encryption, zero-trust architecture, and continuous 
                      monitoring provide the security foundation your organization needs.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">AES-256 encryption at rest and in transit</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">Zero-trust network architecture</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">SOC 2 Type II certified infrastructure</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">24/7 security monitoring and response</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => setLocation('/solutions/threat-intelligence')}
                    >
                      Explore Security Features
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src={networkSecurityImg}
                      alt="Security Architecture"
                      className="w-full rounded-xl shadow-2xl border border-red-500/20"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="intelligence" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <img 
                      src={aiThreatImg}
                      alt="AI Intelligence Engine"
                      className="w-full rounded-xl shadow-2xl border border-cyan-500/20"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Advanced AI<br />
                      <span className="text-cyan-400">Threat Intelligence</span>
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                      Our proprietary AI models analyze billions of security events daily, 
                      providing predictive threat detection with industry-leading accuracy.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">99.7% threat detection accuracy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">73% reduction in false positives</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">Real-time behavioral analytics</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">Predictive vulnerability assessment</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => setLocation('/solutions/ai-security')}
                    >
                      Explore AI Features
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Automated<br />
                      <span className="text-green-400">Compliance Management</span>
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                      Built specifically for educational and government compliance requirements, 
                      with automated reporting and continuous monitoring capabilities.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">FERPA, FISMA, CIPA certified</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">FedRAMP High authorization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">Automated audit reporting</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Enhanced4DCheckCircleIcon className="w-5 h-5 text-green-400" size={20} />
                        <span className="text-gray-300">85% reduction in compliance overhead</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="button-4d px-8 py-4"
                      onClick={() => setLocation('/solutions/compliance')}
                    >
                      Explore Compliance Features
                      <Enhanced4DArrowRightIcon className="ml-2 w-5 h-5" size={20} />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src={complianceImg}
                      alt="Compliance Dashboard"
                      className="w-full rounded-xl shadow-2xl border border-green-500/20"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-6xl">
            <Card className="bg-slate-700/60 border border-cyan-500/30 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Enhanced4DStarIcon key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" size={24} />
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed italic">
                    "We pushed ORCA Federal out to four different campuses. What we found was that one site was clean, 
                    two sites had remnants, and one site had an active threat. That was eye-opening to us, 
                    and we knew we needed to install this for every one of our institutions."
                  </blockquote>
                  <div className="text-gray-300">
                    <div className="font-semibold text-lg">Dr. Michael Thompson</div>
                    <div className="text-cyan-400">Chief Information Security Officer</div>
                    <div className="text-gray-400">Major University System</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience<br />
              <span className="text-cyan-400">Enterprise Security?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of educational institutions and government agencies 
              who trust our platform for complete cybersecurity protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => { setLocation('/contact'); setTimeout(() => window.scrollTo(0, 0), 100); }}
                >
                  Schedule Platform Demo
                </Button>
              </Link>
              <Link href="/trials">
                <Button 
                  size="lg" 
                  className="button-4d px-10 py-4 text-lg"
                  onClick={() => setLocation('/trials')}
                >
                  Start Free Trial
                  <Enhanced4DArrowRightIcon className="ml-2 w-6 h-6" size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}