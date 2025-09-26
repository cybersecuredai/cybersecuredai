import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, 
  Bot,
  Headphones, 
  Activity, 
  CheckCircle, 
  TrendingUp,
  Database,
  Network,
  Cpu,
  Zap,
  Settings,
  BarChart3,
  Clock,
  Star,
  Users,
  Building,
  Shield,
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
  Camera,
  Volume2,
  Monitor,
  Layers,
  MousePointer,
  Mic,
  Video,
  Palette,
  Gamepad2,
  VolumeX,
  Radio,
  Wifi,
  Headset
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

// ECHO Logo
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function ECHOHolographic() {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeAvatars, setActiveAvatars] = useState(12);
  const [holographicSessions, setHolographicSessions] = useState(47);
  const [engagementRate, setEngagementRate] = useState(340);
  const [virtualSOCs, setVirtualSOCs] = useState(8);

  // Simulate live holographic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() > 0.7) {
        setActiveAvatars(prev => prev + Math.floor(Math.random() * 2) + 1);
        setHolographicSessions(prev => prev + Math.floor(Math.random() * 3) + 1);
        setEngagementRate(prev => prev + Math.floor(Math.random() * 5) + 1);
        setVirtualSOCs(prev => prev + Math.floor(Math.random() * 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const holographicCapabilities = [
    {
      title: "5D Holographic Interface",
      description: "Revolutionary spatial computing with WebGL and real-time holographic rendering",
      icon: <Enhanced4DEyeIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Real-time 5D visualization", "Spatial threat mapping", "Immersive data exploration", "360° security awareness"],
      performance: { dimensions: "5D Space", refresh_rate: "120Hz", latency: "< 16ms", resolution: "8K HDR" },
      compliance: ["FERPA spatial privacy", "FISMA holographic security", "ADA accessibility compliant"]
    },
    {
      title: "Live Human-like Avatars",
      description: "AI-powered avatars with facial expression analysis and natural interaction",
      icon: <Enhanced4DBotIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Facial expression synthesis", "Real-time emotion analysis", "Natural language processing", "Contextual avatar reactions"],
      performance: { accuracy: "97.8%", expressions: "247 types", languages: "34 supported", response_time: "< 150ms" },
      compliance: ["Biometric data protection", "Privacy-preserving AI", "Consent-based interactions"]
    },
    {
      title: "Virtual SOC Experience",
      description: "Immersive security operations center with collaborative holographic workspaces",
      icon: <Enhanced4DShieldIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Collaborative holospaces", "Real-time threat briefings", "Interactive incident response", "Virtual training scenarios"],
      performance: { concurrent_users: "500+", latency: "< 50ms", uptime: "99.97%", collaboration_rooms: "unlimited" },
      compliance: ["SOC 2 Type II", "NIST framework aligned", "ISO 27001 certified"]
    },
    {
      title: "Spatial Computing Engine",
      description: "Advanced WebGL and Three.js powered spatial computing for immersive experiences",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["WebGL acceleration", "Three.js integration", "Spatial audio processing", "Gesture recognition"],
      performance: { fps: "120+ FPS", polygons: "10M+ rendered", audio_channels: "64 spatial", gestures: "127 recognized" },
      compliance: ["Web standards compliant", "Cross-platform compatibility", "Accessibility optimized"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Core Holographic Technology",
      items: [
        { label: "Rendering Engine", value: "WebGL 2.0 + Three.js with spatial computing" },
        { label: "Holographic Display", value: "5D spatial visualization with 8K HDR support" },
        { label: "Avatar System", value: "AI-powered facial synthesis with 247 expressions" },
        { label: "Audio Processing", value: "64-channel spatial audio with binaural rendering" }
      ]
    },
    {
      category: "Performance Metrics",
      items: [
        { label: "Engagement Rate", value: "340% improvement over traditional interfaces" },
        { label: "Frame Rate", value: "120+ FPS with 16ms latency" },
        { label: "Concurrent Users", value: "500+ users per virtual SOC session" },
        { label: "Avatar Response", value: "< 150ms natural language processing" }
      ]
    },
    {
      category: "AI Avatar Intelligence",
      items: [
        { label: "Expression Analysis", value: "97.8% facial emotion recognition accuracy" },
        { label: "Language Support", value: "34 languages with cultural context awareness" },
        { label: "Personality Models", value: "12 specialized security expert personas" },
        { label: "Learning Rate", value: "Real-time adaptation to user preferences" }
      ]
    },
    {
      category: "Integration Capabilities",
      items: [
        { label: "POD Intelligence", value: "Seamless APEX, PULSE, SURGE, FLOW integration" },
        { label: "VR/AR Platforms", value: "HoloLens, Oculus, PICO native support" },
        { label: "Collaboration Tools", value: "Teams, Zoom, WebEx holographic overlays" },
        { label: "Security Systems", value: "SIEM, SOAR, XDR holographic dashboards" }
      ]
    }
  ];

  const avatarPersonalities = [
    {
      name: "Commander Sarah",
      specialty: "Incident Response Leadership",
      description: "Former military cybersecurity officer specializing in crisis management",
      avatar: "👩‍💼",
      expressions: ["Authoritative", "Analytical", "Confident", "Strategic"],
      languages: ["English", "Spanish", "French"],
      expertise: "Zero-day threat response, team coordination, strategic planning"
    },
    {
      name: "Dr. Chen",
      specialty: "AI Security Research",
      description: "PhD in Machine Learning with cybersecurity applications expertise",
      avatar: "👨‍🔬",
      expressions: ["Analytical", "Curious", "Precise", "Innovative"],
      languages: ["English", "Mandarin", "Japanese"],
      expertise: "Machine learning threats, AI model security, research methodologies"
    },
    {
      name: "Agent Rodriguez",
      specialty: "Federal Compliance",
      description: "Government cybersecurity specialist with FISMA expertise",
      avatar: "👨‍💻",
      expressions: ["Professional", "Thorough", "Compliant", "Detail-oriented"],
      languages: ["English", "Spanish"],
      expertise: "FISMA compliance, government regulations, federal security standards"
    },
    {
      name: "Professor Walsh",
      specialty: "Educational Security",
      description: "University CISO with FERPA and student data protection focus",
      avatar: "👩‍🏫",
      expressions: ["Educational", "Patient", "Comprehensive", "Protective"],
      languages: ["English", "German"],
      expertise: "FERPA compliance, student privacy, educational cybersecurity"
    }
  ];

  const integrationSystems = [
    {
      name: "APEX - Genetic AI Integration",
      description: "Visualize genetic algorithm evolution in holographic 5D space",
      integration: "Real-time genetic evolution holographic rendering",
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />,
      benefits: ["5D genetic visualization", "Avatar-guided evolution", "Interactive algorithm tuning"],
      holographic_features: ["Genetic tree visualization", "Mutation path mapping", "Fitness landscape rendering"]
    },
    {
      name: "PULSE - Location Intelligence", 
      description: "Geographic threat visualization in immersive holographic maps",
      integration: "3D geographic threat mapping with avatar analysis",
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-green-400" size={24} />,
      benefits: ["Holographic world maps", "Avatar location briefings", "Immersive threat analysis"],
      holographic_features: ["3D globe rendering", "Real-time threat overlays", "Geographic avatar presence"]
    },
    {
      name: "SURGE - Autonomous Defense",
      description: "Holographic incident response with avatar-guided remediation",
      integration: "Real-time incident visualization with AI avatar assistance",
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />,
      benefits: ["Immersive incident rooms", "Avatar incident commanders", "Holographic playbooks"],
      holographic_features: ["Incident timeline visualization", "Response strategy mapping", "Avatar-guided actions"]
    },
    {
      name: "FLOW - Operations Automation",
      description: "Workflow visualization in collaborative holographic workspaces",
      integration: "Process optimization with holographic workflow mapping",
      icon: <Enhanced4DActivityIcon className="w-6 h-6 text-orange-400" size={24} />,
      benefits: ["Process flow visualization", "Avatar workflow guidance", "Collaborative optimization"],
      holographic_features: ["Workflow pipeline rendering", "Process bottleneck highlighting", "Avatar recommendations"]
    }
  ];

  const virtualSOCCapabilities = [
    {
      title: "Immersive Command Center",
      description: "360° holographic security operations center with collaborative workspaces",
      features: ["360° threat awareness", "Holographic dashboards", "Multi-user collaboration", "Real-time briefings"],
      capacity: "500+ concurrent users",
      icon: <Monitor className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Avatar Security Analysts",
      description: "AI avatars acting as specialized security analysts with domain expertise",
      features: ["Expert knowledge base", "Real-time threat analysis", "Interactive Q&A", "Contextual recommendations"],
      capacity: "24/7 availability",
      icon: <Enhanced4DBotIcon className="w-6 h-6 text-purple-400" size={24} />
    },
    {
      title: "Holographic Training",
      description: "Immersive cybersecurity training scenarios with realistic threat simulations",
      features: ["Scenario-based learning", "Avatar instructors", "Performance tracking", "Certification paths"],
      capacity: "Unlimited scenarios",
      icon: <Enhanced4DUsersIcon className="w-6 h-6 text-green-400" size={24} />
    },
    {
      title: "Remote Collaboration",
      description: "Cross-institutional collaboration in shared holographic environments",
      features: ["Secure data sharing", "Cross-platform compatibility", "Real-time translation", "Audit trails"],
      capacity: "Global accessibility",
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-orange-400" size={24} />
    }
  ];

  const deploymentOptions = [
    {
      type: "Cloud Holographic",
      description: "Scalable cloud-based holographic platform with global CDN",
      features: ["Auto-scaling holographic rendering", "Global avatar distribution", "WebRTC optimization"],
      pricing: "Starting at $25,000/month",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-cyan-400" size={32} />
    },
    {
      type: "Federal On-Premise",
      description: "Air-gapped holographic system for classified environments", 
      features: ["SCIF-approved holographic rendering", "Isolated avatar systems", "Classified data visualization"],
      pricing: "Custom federal pricing",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-green-400" size={32} />
    },
    {
      type: "Educational Hybrid",
      description: "FERPA-compliant holographic learning for educational institutions",
      features: ["Student privacy protection", "Campus-wide holographic access", "Educational avatars"],
      pricing: "Starting at $18,000/month",
      icon: <Enhanced4DUsersIcon className="w-8 h-8 text-purple-400" size={32} />
    }
  ];

  const roiMetrics = [
    { metric: "User Engagement Increase", value: "340%", description: "Holographic interface vs traditional 2D" },
    { metric: "Training Retention Rate", value: "89%", description: "Avatar-guided immersive training" },
    { metric: "Collaboration Efficiency", value: "67%", description: "Virtual SOC response times" },
    { metric: "Cost Reduction", value: "$1.8M", description: "Reduced travel and facility costs" },
    { metric: "Incident Response Time", value: "56%", description: "Faster with holographic visualization" },
    { metric: "Knowledge Transfer", value: "78%", description: "Improved with avatar instructors" }
  ];

  const testimonials = [
    {
      quote: "ECHO's holographic avatars have revolutionized our security training. Students are 340% more engaged and retain information far better than traditional methods.",
      author: "Dr. Michael Chen",
      title: "Director of Cybersecurity Education",
      organization: "MIT Computer Science Department",
      compliance: "FERPA",
      results: "89% training retention rate",
      avatar_used: "Professor Walsh"
    },
    {
      quote: "The virtual SOC capabilities of ECHO enable our distributed security team to collaborate as if they're in the same room. It's transformed our incident response.",
      author: "Colonel Sarah Martinez",
      title: "Chief Information Security Officer",
      organization: "U.S. Air Force Cyber Command",
      compliance: "FISMA",
      results: "56% faster incident response",
      avatar_used: "Commander Sarah"
    },
    {
      quote: "ECHO's 5D holographic threat visualization gives us unprecedented situational awareness. Our analysts can literally walk through attack vectors.",
      author: "Dr. Jennifer Park",
      title: "Lead Security Researcher",
      organization: "Stanford Research Institute",
      compliance: "NIST",
      results: "67% improved threat analysis",
      avatar_used: "Dr. Chen"
    }
  ];

  const demoScenarios = [
    {
      title: "Ransomware Attack Briefing",
      description: "Watch Commander Sarah guide you through a live ransomware incident in holographic space",
      duration: "8 minutes",
      participants: "1-50 users",
      features: ["Real attack visualization", "Step-by-step response", "Interactive Q&A"],
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      title: "5D Network Topology",
      description: "Explore your network infrastructure in immersive 5D with avatar guidance",
      duration: "12 minutes",
      participants: "1-25 users",
      features: ["Interactive network map", "Vulnerability highlights", "Security recommendations"],
      icon: <Enhanced4DNetworkIcon className="w-6 h-6 text-cyan-400" size={24} />
    },
    {
      title: "Compliance Training Session",
      description: "FERPA/FISMA compliance training with Professor Walsh in virtual classroom",
      duration: "45 minutes",
      participants: "1-100 users",
      features: ["Interactive scenarios", "Real-time assessments", "Certification tracking"],
      icon: <Enhanced4DUsersIcon className="w-6 h-6 text-green-400" size={24} />
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
                  src={echoLogoImg} 
                  alt="ECHO - Enhanced Cybersecurity Holographic Operations" 
                  className="w-full h-full object-contain"
                  data-testid="echo-logo"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h1 className="text-5xl font-bold text-white" data-testid="page-title">
                    ECHO Holographic Platform
                  </h1>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white" data-testid="badge-engagement">
                    340% Engagement Increase
                  </Badge>
                </div>
                <p className="text-gray-300 text-xl mb-4" data-testid="page-description">
                  Enhanced Cybersecurity Holographic Operations • 5D Spatial Visualization • Live AI Avatars
                </p>
                <p className="text-gray-400 text-lg">
                  Revolutionary holographic interface with WebGL spatial computing and human-like avatar interactions
                </p>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-cyan-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-cyan-400 font-medium" data-testid="live-status">HOLOGRAPHIC SYSTEMS ACTIVE</span>
              <span className="text-gray-400 text-sm">Active Avatars: {activeAvatars} • Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-surface/50 rounded-lg p-4 border border-cyan-500/30 cyber-glow" data-testid="metric-engagement">
                <div className="text-3xl font-bold text-cyan-400 mb-1 animate-pulse">340%</div>
                <div className="text-sm text-gray-400 mb-1">Engagement Rate</div>
                <div className="text-xs text-cyan-400 flex items-center">
                  <Enhanced4DEyeIcon className="w-3 h-3 mr-1" size={12} />
                  Holographic interface
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-purple-500/30 cyber-glow" data-testid="metric-avatars">
                <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">{activeAvatars}</div>
                <div className="text-sm text-gray-400 mb-1">Active Avatars</div>
                <div className="text-xs text-purple-400 flex items-center">
                  <Enhanced4DBotIcon className="w-3 h-3 mr-1" size={12} />
                  Live interactions
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-green-500/30 cyber-glow" data-testid="metric-sessions">
                <div className="text-3xl font-bold text-green-400 mb-1 font-mono">{holographicSessions}</div>
                <div className="text-sm text-gray-400 mb-1">Holo Sessions</div>
                <div className="text-xs text-green-400 flex items-center">
                  <Enhanced4DNetworkIcon className="w-3 h-3 mr-1" size={12} />
                  5D immersion
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-orange-500/30 cyber-glow" data-testid="metric-socs">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono">{virtualSOCs}</div>
                <div className="text-sm text-gray-400 mb-1">Virtual SOCs</div>
                <div className="text-xs text-orange-400 flex items-center">
                  <Enhanced4DShieldIcon className="w-3 h-3 mr-1" size={12} />
                  Collaborative spaces
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-red-500/30 cyber-glow" data-testid="metric-response">
                <div className="text-3xl font-bold text-red-400 mb-1 font-mono">&lt; 150ms</div>
                <div className="text-sm text-gray-400 mb-1">Avatar Response</div>
                <div className="text-xs text-red-400 flex items-center">
                  <Enhanced4DZapIcon className="w-3 h-3 mr-1" size={12} />
                  Natural language
                </div>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50" data-testid="badge-ferpa">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2" size={16} />
                FERPA Holographic Privacy
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-400/50" data-testid="badge-fisma">
                <Enhanced4DShieldIcon className="w-4 h-4 mr-2" size={16} />
                FISMA Secure Rendering
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/50" data-testid="badge-ada">
                <Enhanced4DUsersIcon className="w-4 h-4 mr-2" size={16} />
                ADA Accessibility Compliant
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-7xl p-8 space-y-16">
          {/* 5D Holographic Capabilities */}
          <section data-testid="section-capabilities">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DEyeIcon className="w-10 h-10 mr-4 text-cyan-400" size={40} />
              5D Holographic Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {holographicCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300" data-testid={`capability-card-${index}`}>
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
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-cyan-400" size={16} />
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
                              <Enhanced4DShieldIcon className="w-4 h-4 text-green-400" size={16} />
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

          {/* AI Avatar Integration */}
          <section data-testid="section-avatars">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DBotIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
              AI Avatar Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avatarPersonalities.map((avatar, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300" data-testid={`avatar-card-${index}`}>
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-3">{avatar.avatar}</div>
                    <CardTitle className="text-white text-lg">{avatar.name}</CardTitle>
                    <p className="text-purple-400 text-sm font-medium">{avatar.specialty}</p>
                    <p className="text-gray-400 text-xs">{avatar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Expressions:</div>
                        <div className="flex flex-wrap gap-1">
                          {avatar.expressions.map((expr, eIndex) => (
                            <Badge key={eIndex} variant="outline" className="text-xs text-purple-400 border-purple-400/50">
                              {expr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Languages:</div>
                        <div className="text-sm text-gray-300">{avatar.languages.join(", ")}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Expertise:</div>
                        <div className="text-sm text-gray-300">{avatar.expertise}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Virtual SOC Capabilities */}
          <section data-testid="section-virtual-soc">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DShieldIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              Virtual SOC Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {virtualSOCCapabilities.map((soc, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300" data-testid={`soc-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {soc.icon}
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{soc.title}</CardTitle>
                        <Badge className="bg-green-500/20 text-green-400 text-xs mt-1">{soc.capacity}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{soc.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="text-sm font-medium text-white mb-2">Features:</div>
                      <div className="space-y-1">
                        {soc.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
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
              <Enhanced4DServerIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
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
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              POD Intelligence System Integration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationSystems.map((system, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-blue-500/50 transition-all duration-300" data-testid={`integration-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {system.icon}
                      <CardTitle className="text-white text-lg">{system.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{system.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-surface/30 rounded-lg">
                        <div className="text-sm font-medium text-white mb-1">Integration:</div>
                        <div className="text-sm text-gray-300">{system.integration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Benefits:</div>
                        <div className="space-y-1">
                          {system.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-blue-400" size={16} />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Holographic Features:</div>
                        <div className="space-y-1">
                          {system.holographic_features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DEyeIcon className="w-4 h-4 text-cyan-400" size={16} />
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

          {/* Interactive Demo Scenarios */}
          <section data-testid="section-demos">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Play className="w-10 h-10 mr-4 text-yellow-400" />
              Interactive Demonstration Scenarios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demoScenarios.map((demo, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-yellow-500/50 transition-all duration-300" data-testid={`demo-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {demo.icon}
                      <CardTitle className="text-white text-lg">{demo.title}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{demo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-2 bg-surface/30 rounded">
                          <div className="text-white font-bold">{demo.duration}</div>
                          <div className="text-xs text-gray-400">Duration</div>
                        </div>
                        <div className="p-2 bg-surface/30 rounded">
                          <div className="text-white font-bold">{demo.participants}</div>
                          <div className="text-xs text-gray-400">Participants</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Features:</div>
                        <div className="space-y-1">
                          {demo.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-yellow-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700" data-testid={`demo-button-${index}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Deployment Options */}
          <section data-testid="section-deployment">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DBuildingIcon className="w-10 h-10 mr-4 text-indigo-400" size={40} />
              Deployment & Implementation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-indigo-500/50 transition-all duration-300" data-testid={`deployment-card-${index}`}>
                  <CardHeader className="text-center">
                    <div className="mb-4">{option.icon}</div>
                    <CardTitle className="text-white text-xl mb-2">{option.type}</CardTitle>
                    <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                    <Badge className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white">
                      {option.pricing}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-white mb-2">Features:</div>
                      {option.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                          <Enhanced4DCheckCircleIcon className="w-4 h-4 text-indigo-400" size={16} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700" data-testid={`deployment-button-${index}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Request Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ROI Metrics */}
          <section data-testid="section-roi">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DTrendingUpIcon className="w-10 h-10 mr-4 text-emerald-400" size={40} />
              ROI Metrics & Performance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiMetrics.map((roi, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light text-center" data-testid={`roi-card-${index}`}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">{roi.value}</div>
                    <CardTitle className="text-white text-lg">{roi.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{roi.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Customer Testimonials */}
          <section data-testid="section-testimonials">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DStarIcon className="w-10 h-10 mr-4 text-yellow-400" size={40} />
              Customer Testimonials
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light" data-testid={`testimonial-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Enhanced4DStarIcon key={i} className="w-4 h-4 text-yellow-400" size={16} />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-green-400 border-green-400/50 text-xs">
                        {testimonial.compliance}
                      </Badge>
                    </div>
                    <blockquote className="text-gray-300 text-sm italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="border-t border-gray-700 pt-3">
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">{testimonial.title}</div>
                        <div className="text-sm text-gray-500">{testimonial.organization}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-surface/30 rounded text-center">
                          <div className="text-cyan-400 font-bold">{testimonial.results}</div>
                          <div className="text-gray-400">Results</div>
                        </div>
                        <div className="p-2 bg-surface/30 rounded text-center">
                          <div className="text-purple-400 font-bold">{testimonial.avatar_used}</div>
                          <div className="text-gray-400">Avatar Used</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/30" data-testid="section-cta">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Future of Cybersecurity
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Transform your security operations with ECHO's revolutionary 5D holographic interface and AI avatars. 
              Join leading federal agencies and educational institutions in the next generation of cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8" data-testid="button-demo">
                <Play className="w-5 h-5 mr-2" />
                Schedule Holographic Demo
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8" data-testid="button-consultation">
                <Phone className="w-5 h-5 mr-2" />
                Request Consultation
              </Button>
            </div>
            <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                30-day pilot program
              </span>
              <span className="flex items-center">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                Custom implementation
              </span>
              <span className="flex items-center">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" size={16} />
                24/7 avatar support
              </span>
            </div>
          </section>
        </main>
      </div>
    </MarketingLayout>
  );
}