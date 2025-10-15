import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye,
  Monitor,
  Layers,
  Users,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  Settings,
  Activity,
  Brain,
  Network,
  Smartphone,
  Headphones,
  Camera,
  Mic,
  Star,
  Building
} from "lucide-react";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

// Enhanced 4D Icons
import {
  Enhanced4DEyeIcon,
  Enhanced4DShieldIcon,
  Enhanced4DTargetIcon,
  Enhanced4DZapIcon,
  Enhanced4DActivityIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DStarIcon,
  Enhanced4DArrowRightIcon,
  Enhanced4DNetworkIcon,
  Enhanced4DBuildingIcon,
  Enhanced4DBrainIcon,
  Enhanced4DGlobeIcon
} from "@/components/LazyCustomIcons";

// ECHO Logo
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function ECHOSystem() {
  const holographicCapabilities = [
    {
      title: "5D Threat Visualization",
      description: "Immersive spatial computing for three-dimensional threat exploration and analysis",
      icon: <Enhanced4DEyeIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Spatial threat mapping", "Multi-dimensional analysis", "Real-time 3D rendering", "Interactive exploration"],
      performance: { dimensions: "5D", frame_rate: "120 FPS", latency: "< 5ms", resolution: "8K+" }
    },
    {
      title: "Live AI Avatar Interface",
      description: "Human-like avatars with natural expressions and contextual threat responses",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["Facial expression engine", "Natural language processing", "Contextual reactions", "Voice synthesis"],
      performance: { expressions: "247", languages: "34", response_time: "< 100ms", accuracy: "98.4%" }
    },
    {
      title: "CypherHUM Technology",
      description: "Human-machine interface optimization for intuitive cybersecurity operations",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Gesture recognition", "Eye tracking", "Voice commands", "Haptic feedback"],
      performance: { gesture_accuracy: "99.1%", eye_precision: "0.5°", voice_recognition: "97.8%", haptic_latency: "< 2ms" }
    },
    {
      title: "Holographic SOC",
      description: "Virtual security operations center with collaborative 5D environments",
      icon: <Enhanced4DGlobeIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Multi-user collaboration", "Remote access", "Virtual workspaces", "Shared threat analysis"],
      performance: { concurrent_users: "256", sync_latency: "< 10ms", bandwidth: "1 Gbps", uptime: "99.97%" }
    }
  ];

  const avatarPersonalities = [
    {
      name: "Alex - Security Analyst",
      description: "Friendly and approachable security expert for daily operations",
      personality: "Professional, helpful, detail-oriented",
      specialties: ["Threat analysis", "Report generation", "Training guidance", "System monitoring"],
      expressions: ["Focused concentration", "Concern for threats", "Satisfaction with solutions", "Alert awareness"],
      voice_traits: "Clear, confident, reassuring tone"
    },
    {
      name: "Nova - Incident Commander",
      description: "Authoritative crisis management specialist for emergency response",
      personality: "Decisive, calm under pressure, strategic",
      specialties: ["Incident response", "Crisis coordination", "Emergency protocols", "Team leadership"],
      expressions: ["Serious determination", "Tactical thinking", "Urgent alertness", "Confident command"],
      voice_traits: "Firm, authoritative, clear instructions"
    },
    {
      name: "Sage - Compliance Advisor",
      description: "Knowledgeable regulatory expert for policy and compliance guidance",
      personality: "Meticulous, knowledgeable, patient",
      specialties: ["Regulatory compliance", "Policy interpretation", "Audit preparation", "Risk assessment"],
      expressions: ["Thoughtful analysis", "Careful consideration", "Knowledge sharing", "Approval confirmation"],
      voice_traits: "Measured, precise, educational"
    },
    {
      name: "Echo - AI Researcher",
      description: "Innovative AI specialist for advanced threat research and development",
      personality: "Curious, innovative, analytical",
      specialties: ["AI research", "Algorithm development", "Pattern analysis", "Future predictions"],
      expressions: ["Curious investigation", "Eureka moments", "Deep concentration", "Innovative thinking"],
      voice_traits: "Enthusiastic, technical, forward-thinking"
    }
  ];

  const interactionModes = [
    {
      mode: "Natural Language",
      description: "Conversational interface with context-aware responses",
      capabilities: ["Multi-language support", "Technical terminology", "Contextual understanding", "Follow-up questions"],
      use_cases: ["Security briefings", "System explanations", "Training sessions", "Q&A interactions"]
    },
    {
      mode: "Gesture Control",
      description: "Hand and body gesture recognition for spatial navigation",
      capabilities: ["Hand tracking", "Gesture library", "Custom commands", "Multi-touch simulation"],
      use_cases: ["3D threat exploration", "Data manipulation", "Presentation control", "Workspace navigation"]
    },
    {
      mode: "Eye Tracking",
      description: "Gaze-based interface for hands-free threat investigation",
      capabilities: ["Gaze detection", "Focus tracking", "Attention mapping", "Eye-controlled selection"],
      use_cases: ["Threat identification", "Data highlighting", "Interface navigation", "Attention analysis"]
    },
    {
      mode: "Voice Commands",
      description: "Advanced speech recognition for hands-free operations",
      capabilities: ["Command recognition", "Natural speech", "Technical vocabulary", "Multi-speaker support"],
      use_cases: ["System control", "Data queries", "Report generation", "Emergency commands"]
    }
  ];

  const deploymentEnvironments = [
    {
      sector: "Higher Education",
      setup: "Campus-wide holographic security operations with student data protection",
      features: ["Virtual SOC deployment", "FERPA-compliant avatars", "Campus threat visualization", "Student privacy protection"],
      metrics: { response_improvement: "340%", engagement_increase: "78%", training_effectiveness: "92%", compliance_score: "99.7%" },
      avatar_specialization: "Educational security expert with campus knowledge"
    },
    {
      sector: "Federal Agencies",
      setup: "Classified holographic environments for national security operations",
      features: ["Air-gapped holographic systems", "Clearance-aware avatars", "Classified threat analysis", "Multi-agency coordination"],
      metrics: { situational_awareness: "89%", decision_speed: "67%", collaboration_efficiency: "234%", security_posture: "99.8%" },
      avatar_specialization: "Federal security specialist with clearance protocols"
    },
    {
      sector: "K-12 Districts",
      setup: "Child-safe holographic interfaces with appropriate content filtering",
      features: ["Age-appropriate avatars", "Child safety protocols", "Educational visualizations", "Parent portal integration"],
      metrics: { safety_compliance: "100%", educator_adoption: "94%", student_engagement: "156%", threat_prevention: "98.3%" },
      avatar_specialization: "Child-friendly security educator with safety focus"
    },
    {
      sector: "Municipal Government",
      setup: "Citizen-facing holographic services with public safety integration",
      features: ["Public service avatars", "Citizen data protection", "Emergency coordination", "Multi-language support"],
      metrics: { citizen_satisfaction: "87%", service_efficiency: "145%", emergency_response: "234%", accessibility_score: "96%" },
      avatar_specialization: "Public service representative with community knowledge"
    }
  ];

  const technicalSpecifications = [
    {
      component: "Holographic Display",
      specifications: {
        "Resolution": "8K+ per eye (16K combined)",
        "Field of View": "210° horizontal, 130° vertical",
        "Refresh Rate": "120Hz with motion interpolation",
        "Color Gamut": "99.9% DCI-P3, HDR10+",
        "Latency": "< 5ms motion-to-photon"
      }
    },
    {
      component: "Avatar Rendering",
      specifications: {
        "Facial Expressions": "247 unique micro-expressions",
        "Animation Quality": "Motion capture with 98.4% accuracy",
        "Voice Synthesis": "Neural network-based with emotional tone",
        "Language Support": "34 languages with regional accents",
        "Customization": "Appearance, personality, and expertise areas"
      }
    },
    {
      component: "Spatial Computing",
      specifications: {
        "Tracking Accuracy": "Sub-millimeter precision",
        "Processing Power": "NVIDIA RTX 4090 equivalent",
        "Memory": "64GB DDR5 with 2TB NVMe storage",
        "Connectivity": "Wi-Fi 6E, 5G, Fiber optic ready",
        "Power": "Wireless charging with 8-hour battery life"
      }
    },
    {
      component: "Security Features",
      specifications: {
        "Encryption": "AES-256 with quantum-resistant algorithms",
        "Authentication": "Biometric with multi-factor verification",
        "Data Protection": "Zero-trust architecture",
        "Compliance": "FERPA, FISMA, HIPAA, SOX certified",
        "Privacy": "On-device processing with encrypted cloud sync"
      }
    }
  ];

  const customerTestimonials = [
    {
      organization: "Metropolitan University System",
      challenge: "Complex cybersecurity training and threat visualization for IT staff",
      solution: "ECHO 5D holographic interface with educational security avatar",
      results: {
        training_effectiveness: "340% improvement",
        threat_identification: "89% faster",
        staff_engagement: "78% increase",
        incident_response: "67% quicker"
      },
      testimonial: "The ECHO holographic interface has revolutionized our cybersecurity training. The live avatar can explain complex threats in 5D space while we navigate around them. Our IT staff now understand threat patterns that were impossible to visualize before. The natural facial expressions and contextual reactions make it feel like having a cybersecurity expert right there with us.",
      contact: "Dr. Jennifer Walsh, Chief Information Security Officer"
    },
    {
      organization: "Department of Homeland Security",
      challenge: "Real-time threat collaboration across multiple agencies and locations",
      solution: "Classified ECHO deployment with multi-agency avatar coordination",
      results: {
        collaboration_efficiency: "234% improvement",
        situational_awareness: "89% better",
        decision_making_speed: "67% faster",
        cross_agency_coordination: "156% improvement"
      },
      testimonial: "ECHO's holographic environment allows our analysts to literally walk through cyber threats together, even when they're in different states. The avatar guides us through complex attack patterns with incredible detail. The 5D visualization helped us discover threat vectors that traditional flat screens would never reveal.",
      contact: "Director Sarah Chen, Cybersecurity Division"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-cyan-950/30 to-slate-950">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-purple-900/20"></div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-2 shadow-2xl">
                <img src={echoLogoImg} alt="ECHO Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 geometric-text">
              ECHO
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Enhanced Cybersecurity Holographic Operations
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary 5D holographic interface with live human-like AI avatars. Experience cybersecurity through 
              immersive spatial computing with CypherHUM technology and contextual avatar interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/security-scanner">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 px-12 py-4 text-lg text-white shadow-2xl"
                  data-testid="button-echo-demo"
                >
                  <Enhanced4DEyeIcon className="mr-2 w-6 h-6" size={24} />
                  Experience ECHO Demo
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-900/30 px-12 py-4 text-lg backdrop-blur-sm"
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
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm" data-testid="card-engagement-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DEyeIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-cyan-400 mb-2">340%</div>
                  <div className="text-white font-semibold mb-1">Engagement Increase</div>
                  <div className="text-slate-400 text-sm">5D visualization</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm" data-testid="card-expressions-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DBrainIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-purple-400 mb-2">247</div>
                  <div className="text-white font-semibold mb-1">Avatar Expressions</div>
                  <div className="text-slate-400 text-sm">Natural interactions</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm" data-testid="card-languages-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DGlobeIcon className="w-10 h-10 text-green-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-green-400 mb-2">34</div>
                  <div className="text-white font-semibold mb-1">Languages Supported</div>
                  <div className="text-slate-400 text-sm">Global accessibility</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-orange-500/30 backdrop-blur-sm" data-testid="card-latency-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DZapIcon className="w-10 h-10 text-orange-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-orange-400 mb-2">&lt;5ms</div>
                  <div className="text-white font-semibold mb-1">Response Latency</div>
                  <div className="text-slate-400 text-sm">Real-time interaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Holographic Capabilities */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                5D Holographic Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience cybersecurity through immersive 5D environments with live AI avatars that provide 
                natural, contextual interactions for unprecedented threat visualization and analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {holographicCapabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  data-testid={`card-holographic-capability-${index}`}
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
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
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

        {/* AI Avatar Personalities */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Live AI Avatar Personalities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Meet your cybersecurity team of AI avatars, each with unique personalities, expertise areas, 
                and natural expressions designed for specific security operations and scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {avatarPersonalities.map((avatar, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-avatar-personality-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center space-x-3">
                      <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />
                      <span>{avatar.name}</span>
                    </CardTitle>
                    <p className="text-slate-400">{avatar.description}</p>
                    <Badge variant="outline" className="border-purple-400 text-purple-400 w-fit">
                      {avatar.personality}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Specialties</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {avatar.specialties.map((specialty, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-3 h-3 text-green-400" size={12} />
                              <span className="text-slate-300 text-sm">{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expressions</h4>
                        <div className="text-slate-300 text-sm">
                          {avatar.expressions.join(" • ")}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Voice Characteristics</h4>
                        <div className="text-slate-300 text-sm">{avatar.voice_traits}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CypherHUM Interaction Modes */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CypherHUM Interaction Modes
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Advanced human-machine interface technology that enables natural, intuitive interactions 
                with holographic environments through multiple modalities and input methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interactionModes.map((mode, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-interaction-mode-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{mode.mode}</CardTitle>
                    <p className="text-slate-400">{mode.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Capabilities</h4>
                        <div className="space-y-2">
                          {mode.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-slate-300 text-sm">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases</h4>
                        <div className="space-y-2">
                          {mode.use_cases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DTargetIcon className="w-4 h-4 text-purple-400" size={16} />
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

        {/* Technical Specifications */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Enterprise-grade holographic hardware and software specifications designed for 
                mission-critical cybersecurity operations with federal compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSpecifications.map((spec, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-technical-spec-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{spec.component}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(spec.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center border-b border-slate-700/30 pb-2">
                          <span className="text-slate-400 text-sm">{key}</span>
                          <span className="text-white text-sm font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Environments */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Deployment Environments
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                ECHO holographic systems adapt to diverse organizational needs with sector-specific 
                avatar personalities and compliance-aware deployment configurations.
              </p>
            </div>

            <div className="space-y-8">
              {deploymentEnvironments.map((environment, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm"
                  data-testid={`card-deployment-environment-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{environment.sector}</h3>
                        <p className="text-slate-300 mb-4">{environment.setup}</p>
                        <div className="text-sm text-slate-400 mb-2">Avatar Specialization</div>
                        <div className="text-cyan-400">{environment.avatar_specialization}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features</h4>
                        <div className="space-y-2">
                          {environment.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(environment.metrics).map(([key, value]) => (
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
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Success Stories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Organizations worldwide are transforming their cybersecurity operations with ECHO's 
                revolutionary 5D holographic interface and live AI avatar technology.
              </p>
            </div>

            <div className="space-y-12">
              {customerTestimonials.map((story, index) => (
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
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                          <p className="text-slate-300 mb-4">{story.challenge}</p>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                          <p className="text-slate-300">{story.solution}</p>
                        </div>
                        <blockquote className="border-l-4 border-cyan-500 pl-4 text-slate-300 italic">
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
              Ready to Experience 5D Cybersecurity?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your security operations with ECHO's holographic interface and live AI avatars. 
              See threats like never before in immersive 5D environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 px-12 py-4 text-lg text-white"
                  data-testid="button-schedule-demo"
                >
                  Schedule ECHO Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-900/30 px-12 py-4 text-lg"
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
