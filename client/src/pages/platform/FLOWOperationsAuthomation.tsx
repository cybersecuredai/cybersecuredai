import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Users,
  Mic,
  MessageSquare, 
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
  AlertTriangle,
  Workflow,
  Video,
  Briefcase,
  Target,
  BookOpen
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

export default function FLOWOperationsAutomation() {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMeetings, setActiveMeetings] = useState(1247);
  const [processedTranscripts, setProcessedTranscripts] = useState(47839);
  const [automationRate, setAutomationRate] = useState(87);
  const [productivityGain, setProductivityGain] = useState(68);
  const [knowledgeRetention, setKnowledgeRetention] = useState(92);
  const [federatedNodes, setFederatedNodes] = useState(156);

  // Simulate live FLOW updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() > 0.7) {
        setActiveMeetings(prev => prev + Math.floor(Math.random() * 5) + 1);
        setProcessedTranscripts(prev => prev + Math.floor(Math.random() * 12) + 3);
        setAutomationRate(prev => Math.max(85, Math.min(89, prev + (Math.random() - 0.5) * 0.5)));
        setProductivityGain(prev => Math.max(65, Math.min(72, prev + (Math.random() - 0.5) * 0.8)));
        setKnowledgeRetention(prev => Math.max(90, Math.min(95, prev + (Math.random() - 0.5) * 0.3)));
        setFederatedNodes(prev => Math.max(150, Math.min(160, prev + Math.floor(Math.random() * 3) - 1)));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const flowCapabilities = [
    {
      title: "Multi-Platform Meeting Intelligence",
      description: "AI-powered meeting automation and analysis across 15+ platforms with real-time transcription",
      icon: <Enhanced4DActivityIcon className="w-8 h-8 text-blue-400" size={32} />,
      features: ["15+ platform integrations", "Real-time transcription", "Action item extraction", "Sentiment analysis"],
      performance: { platforms: "15+", accuracy: "96.7%", real_time: "< 200ms", languages: "47 supported" },
      compliance: ["FERPA meeting privacy", "FISMA secure recording", "GDPR data protection"]
    },
    {
      title: "Federated Learning Operations",
      description: "Privacy-preserving cross-institutional knowledge sharing and collaborative learning",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["Cross-institutional learning", "Privacy-preserving algorithms", "Distributed model training", "Collaborative intelligence"],
      performance: { institutions: federatedNodes.toString(), privacy: "Zero data exposure", sync: "Real-time", efficiency: "92%" },
      compliance: ["Zero data sharing", "Institutional privacy", "Federated compliance"]
    },
    {
      title: "Workflow Automation Engine",
      description: "AI-driven process optimization with 87% automation rate and adaptive workflow generation",
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Process automation", "Workflow optimization", "Task orchestration", "Performance analytics"],
      performance: { automation_rate: `${automationRate}%`, optimization: "Real-time", efficiency: "234%", savings: "$2.3M annually" },
      compliance: ["Process compliance", "Audit trail automation", "Regulatory workflows"]
    },
    {
      title: "Cross-Organizational Knowledge Hub",
      description: "Centralized knowledge management with 92% retention rate and intelligent knowledge discovery",
      icon: <Enhanced4DServerIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["Knowledge extraction", "Institutional memory", "Best practice sharing", "Expertise location"],
      performance: { retention_rate: `${knowledgeRetention}%`, organizations: "147+", discovery: "< 2 seconds", relevance: "94.3%" },
      compliance: ["Knowledge security", "IP protection", "Access control"]
    }
  ];

  const meetingPlatforms = [
    {
      name: "Microsoft Teams",
      description: "Native integration with Teams for meeting automation and intelligence",
      features: ["Real-time transcription", "Action item tracking", "Meeting summaries", "Calendar integration"],
      icon: <Enhanced4DUsersIcon className="w-6 h-6 text-blue-400" size={24} />,
      compliance: "Office 365 security"
    },
    {
      name: "Zoom Meetings",
      description: "Comprehensive Zoom integration for educational and enterprise environments",
      features: ["Auto-join meetings", "Recording analysis", "Breakout room intelligence", "Participant insights"],
      icon: <Video className="w-6 h-6 text-purple-400" />,
      compliance: "HIPAA/FERPA ready"
    },
    {
      name: "Google Meet",
      description: "Google Workspace integration with advanced meeting analytics",
      features: ["Workspace SSO", "Drive integration", "Calendar automation", "Meeting insights"],
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-green-400" size={24} />,
      compliance: "Google security standards"
    },
    {
      name: "Cisco Webex",
      description: "Enterprise-grade Webex integration for federal and educational use",
      features: ["Enterprise security", "Large meeting support", "Recording management", "Analytics dashboard"],
      icon: <Enhanced4DNetworkIcon className="w-6 h-6 text-orange-400" size={24} />,
      compliance: "FedRAMP authorized"
    },
    {
      name: "GoToMeeting",
      description: "Professional meeting platform integration with business intelligence",
      features: ["Meeting automation", "Business insights", "CRM integration", "Performance tracking"],
      icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
      compliance: "SOC 2 Type II"
    },
    {
      name: "Amazon Chime",
      description: "AWS-native meeting solution with cloud-scale intelligence",
      features: ["AWS integration", "Scalable architecture", "Voice analytics", "Cloud recording"],
      icon: <Enhanced4DServerIcon className="w-6 h-6 text-yellow-400" size={24} />,
      compliance: "AWS security model"
    }
  ];

  const technicalSpecs = [
    {
      category: "Meeting Intelligence",
      items: [
        { label: "Platform Support", value: "15+ meeting platforms with native APIs" },
        { label: "Transcription Accuracy", value: "96.7% with real-time processing" },
        { label: "Language Support", value: "47 languages with dialect recognition" },
        { label: "Processing Speed", value: "< 200ms real-time analysis" }
      ]
    },
    {
      category: "Workflow Automation",
      items: [
        { label: "Automation Rate", value: `${automationRate}% process automation coverage` },
        { label: "Productivity Gains", value: `${productivityGain}% measured improvement` },
        { label: "Response Time", value: "< 15 seconds workflow execution" },
        { label: "Integration Points", value: "500+ system connectors" }
      ]
    },
    {
      category: "Federated Learning",
      items: [
        { label: "Active Nodes", value: `${federatedNodes} institutional participants` },
        { label: "Knowledge Retention", value: `${knowledgeRetention}% organizational memory` },
        { label: "Privacy Preservation", value: "Zero raw data sharing" },
        { label: "Model Accuracy", value: "94.3% federated intelligence" }
      ]
    },
    {
      category: "Compliance & Security",
      items: [
        { label: "FERPA Compliance", value: "Educational data protection certified" },
        { label: "FISMA Integration", value: "Federal security framework aligned" },
        { label: "Privacy Standards", value: "GDPR, CCPA, COPPA compliant" },
        { label: "Audit Capabilities", value: "Complete workflow audit trails" }
      ]
    }
  ];

  const federatedLearningFeatures = [
    {
      name: "Privacy-Preserving Algorithms",
      description: "Advanced federated learning that enables collaboration without data exposure",
      capabilities: ["Differential privacy", "Secure aggregation", "Homomorphic encryption", "Zero-knowledge protocols"],
      specifications: { privacy_level: "Mathematical guarantee", data_sharing: "Zero raw data", accuracy: "94.3%", efficiency: "92%" },
      icon: <Enhanced4DLockIcon className="w-6 h-6 text-purple-400" size={24} />
    },
    {
      name: "Cross-Institutional Intelligence",
      description: "Collaborative learning across educational and government institutions",
      capabilities: ["Multi-site learning", "Institutional expertise", "Best practice sharing", "Collective intelligence"],
      specifications: { institutions: "156 active", knowledge_base: "2.3M documents", sharing: "Real-time", relevance: "96.7%" },
      icon: <Enhanced4DUsersIcon className="w-6 h-6 text-cyan-400" size={24} />
    },
    {
      name: "Adaptive Defense Optimization",
      description: "Machine learning-powered security strategy optimization across organizations",
      capabilities: ["Threat pattern sharing", "Defense strategy evolution", "Collaborative response", "Predictive modeling"],
      specifications: { accuracy: "97.1%", response_time: "< 3 minutes", threat_detection: "99.2%", false_positives: "< 0.1%" },
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />
    },
    {
      name: "Intelligent Knowledge Discovery",
      description: "AI-powered knowledge extraction and organizational learning from meetings and workflows",
      capabilities: ["Automated knowledge extraction", "Expertise mapping", "Learning path optimization", "Knowledge graph generation"],
      specifications: { extraction_rate: "89%", discovery_time: "< 2 seconds", relevance: "94.3%", retention: "92%" },
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-green-400" size={24} />
    }
  ];

  const workflowAutomationCapabilities = [
    {
      category: "Meeting Workflow Automation",
      description: "End-to-end meeting process automation from scheduling to follow-up",
      automations: [
        "Automated meeting scheduling and optimization",
        "Pre-meeting preparation and agenda generation", 
        "Real-time action item extraction and assignment",
        "Post-meeting summary and follow-up automation"
      ],
      metrics: { time_savings: "68%", accuracy: "96.7%", adoption: "94%" },
      icon: <Calendar className="w-8 h-8 text-blue-400" />
    },
    {
      category: "Process Intelligence",
      description: "AI-driven process analysis and optimization across organizational workflows",
      automations: [
        "Process bottleneck identification and resolution",
        "Workflow pattern recognition and optimization",
        "Resource allocation and task prioritization",
        "Performance analytics and improvement recommendations"
      ],
      metrics: { efficiency_gain: "87%", cost_reduction: "$2.3M", automation: "234%" },
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />
    },
    {
      category: "Knowledge Workflow Integration",
      description: "Seamless integration of knowledge management into daily workflows",
      automations: [
        "Automated knowledge capture from meetings and processes",
        "Intelligent knowledge routing and distribution", 
        "Expertise location and connection facilitation",
        "Learning path generation and skill development tracking"
      ],
      metrics: { knowledge_retention: "92%", discovery_speed: "< 2s", relevance: "94.3%" },
      icon: <BookOpen className="w-8 h-8 text-green-400" />
    }
  ];

  const integrationSystems = [
    {
      name: "APEX - Genetic AI Integration",
      description: "Genetic algorithm-powered meeting optimization and workflow evolution",
      integration: "Self-evolving meeting patterns and workflow optimization genetics",
      icon: <Enhanced4DBrainIcon className="w-6 h-6 text-purple-400" size={24} />,
      benefits: ["Meeting pattern evolution", "Workflow genetics", "Adaptive optimization"],
      flow_features: ["Genetic meeting optimization", "Evolutionary workflows", "Adaptive process improvement"]
    },
    {
      name: "ECHO - Holographic Collaboration",
      description: "Immersive 5D holographic meeting environments and avatar-based collaboration",
      integration: "Holographic meeting spaces with AI avatar facilitators and 3D collaboration",
      icon: <Enhanced4DEyeIcon className="w-6 h-6 text-cyan-400" size={24} />,
      benefits: ["Immersive meetings", "3D collaboration", "Avatar facilitation"],
      flow_features: ["Holographic meeting rooms", "Avatar-guided workflows", "3D process visualization"]
    },
    {
      name: "PULSE - Location Intelligence",
      description: "Geographic meeting optimization and location-aware workflow automation",
      integration: "Location-based meeting scheduling and geographic workflow optimization",
      icon: <Enhanced4DGlobeIcon className="w-6 h-6 text-green-400" size={24} />,
      benefits: ["Geographic optimization", "Location-aware scheduling", "Distributed coordination"],
      flow_features: ["Location-based meeting optimization", "Geographic workflow distribution", "Spatial intelligence"]
    },
    {
      name: "SURGE - Autonomous Defense",
      description: "Automated security workflow integration and threat response coordination",
      integration: "Security-aware meeting protection and automated threat response workflows",
      icon: <Enhanced4DShieldIcon className="w-6 h-6 text-red-400" size={24} />,
      benefits: ["Security automation", "Threat response workflows", "Protected collaboration"],
      flow_features: ["Secure meeting automation", "Threat-aware workflows", "Automated security responses"]
    }
  ];

  const deploymentOptions = [
    {
      type: "Federal Cloud",
      description: "FISMA-compliant cloud deployment for federal agencies and departments",
      features: ["FedRAMP authorized", "Multi-tenant isolation", "Federal compliance", "Government cloud integration"],
      pricing: "Custom federal pricing",
      icon: <Enhanced4DBuildingIcon className="w-8 h-8 text-blue-400" size={32} />,
      specifications: { compliance: "FISMA/FedRAMP", deployment: "Government cloud", security: "IL-5 ready", support: "24/7 federal" }
    },
    {
      type: "Educational Institution",
      description: "FERPA-compliant deployment for K-12 and higher education institutions",
      features: ["FERPA compliance", "Student privacy protection", "Campus-wide integration", "Educational pricing"],
      pricing: "Starting at $12,500/month",
      icon: <Enhanced4DUsersIcon className="w-8 h-8 text-green-400" size={32} />,
      specifications: { compliance: "FERPA certified", deployment: "Campus/district", privacy: "Student data protected", support: "Educational specialists" }
    },
    {
      type: "Enterprise Hybrid",
      description: "Scalable hybrid deployment for large organizations and multi-site operations",
      features: ["Hybrid cloud/on-premise", "Multi-site federation", "Enterprise security", "Custom integration"],
      pricing: "Starting at $25,000/month",
      icon: <Enhanced4DNetworkIcon className="w-8 h-8 text-purple-400" size={32} />,
      specifications: { deployment: "Hybrid cloud", scalability: "Unlimited nodes", integration: "Enterprise APIs", support: "Enterprise SLA" }
    }
  ];

  const roiMetrics = [
    { metric: "Productivity Improvement", value: `${productivityGain}%`, description: "Measured productivity gains from workflow automation" },
    { metric: "Process Automation Rate", value: `${automationRate}%`, description: "Percentage of workflows fully automated" },
    { metric: "Knowledge Retention", value: `${knowledgeRetention}%`, description: "Organizational knowledge capture and retention" },
    { metric: "Meeting Efficiency", value: "76%", description: "Improved meeting effectiveness and outcomes" },
    { metric: "Cost Savings", value: "$2.3M", description: "Annual cost reduction from automation" },
    { metric: "Time Savings", value: "847hrs", description: "Average monthly time savings per organization" }
  ];

  const testimonials = [
    {
      quote: "FLOW has revolutionized our cross-departmental collaboration. The 68% productivity gain and automated meeting intelligence has transformed how we operate across our university system.",
      author: "Dr. Maria Rodriguez",
      title: "Chief Information Officer",
      organization: "California State University System",
      compliance: "FERPA",
      results: "68% productivity improvement",
      deployment: "Educational Institution"
    },
    {
      quote: "The federated learning capabilities of FLOW allow us to share best practices across agencies without compromising sensitive data. It's exactly what federal government collaboration needed.",
      author: "Director James Patterson",
      title: "Deputy Chief Information Officer",
      organization: "Department of Education",
      compliance: "FISMA",
      results: "87% workflow automation",
      deployment: "Federal Cloud"
    },
    {
      quote: "FLOW's meeting intelligence and workflow automation has enabled our consortium of universities to collaborate more effectively while maintaining complete privacy of our research data.",
      author: "Dr. Jennifer Walsh",
      title: "Research Collaboration Director",
      organization: "Ivy League Research Consortium",
      compliance: "FERPA & IRB",
      results: "92% knowledge retention",
      deployment: "Multi-Institution"
    }
  ];

  const demoScenarios = [
    {
      title: "Multi-Platform Meeting Intelligence Demo",
      description: "See FLOW automatically join, transcribe, and analyze meetings across multiple platforms",
      duration: "15 minutes",
      participants: "1-25 viewers",
      features: ["Real-time transcription", "Action item extraction", "Meeting summaries", "Cross-platform integration"],
      icon: <Enhanced4DActivityIcon className="w-6 h-6 text-blue-400" size={24} />
    },
    {
      title: "Federated Learning Collaboration",
      description: "Experience privacy-preserving knowledge sharing across multiple institutions",
      duration: "20 minutes", 
      participants: "1-30 viewers",
      features: ["Cross-institutional learning", "Privacy preservation", "Knowledge discovery", "Collaborative intelligence"],
      icon: <Enhanced4DNetworkIcon className="w-6 h-6 text-cyan-400" size={24} />
    },
    {
      title: "Workflow Automation Showcase",
      description: "Watch FLOW automate complex organizational workflows and processes",
      duration: "18 minutes",
      participants: "1-20 viewers", 
      features: ["Process automation", "Workflow optimization", "Performance analytics", "Integration capabilities"],
      icon: <Enhanced4DZapIcon className="w-6 h-6 text-orange-400" size={24} />
    }
  ];

  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen">
        {/* Hero Section */}
        <header className="bg-surface/90 backdrop-blur-md border-b border-surface-light p-8 cyber-glow">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl flex items-center justify-center border border-blue-500/50">
                <Enhanced4DActivityIcon className="w-12 h-12 text-blue-400" size={48} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h1 className="text-5xl font-bold text-white" data-testid="page-title">
                    FLOW Operations Automation
                  </h1>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-700 text-white" data-testid="badge-productivity">
                    {productivityGain}% Productivity Gains
                  </Badge>
                </div>
                <p className="text-gray-300 text-xl mb-4" data-testid="page-description">
                  Federated Learning Operations Workflow • Meeting Intelligence • Cross-Institutional Collaboration
                </p>
                <p className="text-gray-400 text-lg">
                  Revolutionary workflow automation platform with federated learning and multi-platform meeting intelligence
                </p>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-blue-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-blue-400 font-medium" data-testid="live-status">FLOW AUTOMATION ACTIVE</span>
              <span className="text-gray-400 text-sm">Active Meetings: {activeMeetings.toLocaleString()} • Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              <div className="bg-surface/50 rounded-lg p-4 border border-blue-500/30 cyber-glow" data-testid="metric-productivity">
                <div className="text-3xl font-bold text-blue-400 mb-1 animate-pulse">{productivityGain}%</div>
                <div className="text-sm text-gray-400 mb-1">Productivity Gains</div>
                <div className="text-xs text-blue-400 flex items-center">
                  <Enhanced4DActivityIcon className="w-3 h-3 mr-1" size={12} />
                  Workflow automation
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-cyan-500/30 cyber-glow" data-testid="metric-automation">
                <div className="text-3xl font-bold text-cyan-400 mb-1 font-mono">{automationRate}%</div>
                <div className="text-sm text-gray-400 mb-1">Automation Rate</div>
                <div className="text-xs text-cyan-400 flex items-center">
                  <Enhanced4DZapIcon className="w-3 h-3 mr-1" size={12} />
                  Process efficiency
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-green-500/30 cyber-glow" data-testid="metric-retention">
                <div className="text-3xl font-bold text-green-400 mb-1 font-mono">{knowledgeRetention}%</div>
                <div className="text-sm text-gray-400 mb-1">Knowledge Retention</div>
                <div className="text-xs text-green-400 flex items-center">
                  <Enhanced4DServerIcon className="w-3 h-3 mr-1" size={12} />
                  Organizational memory
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-orange-500/30 cyber-glow" data-testid="metric-platforms">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono">15+</div>
                <div className="text-sm text-gray-400 mb-1">Meeting Platforms</div>
                <div className="text-xs text-orange-400 flex items-center">
                  <Video className="w-3 h-3 mr-1" />
                  Native integrations
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-purple-500/30 cyber-glow" data-testid="metric-nodes">
                <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">{federatedNodes}</div>
                <div className="text-sm text-gray-400 mb-1">Federated Nodes</div>
                <div className="text-xs text-purple-400 flex items-center">
                  <Enhanced4DNetworkIcon className="w-3 h-3 mr-1" size={12} />
                  Distributed learning
                </div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 border border-yellow-500/30 cyber-glow" data-testid="metric-transcripts">
                <div className="text-3xl font-bold text-yellow-400 mb-1 font-mono">{processedTranscripts.toLocaleString()}</div>
                <div className="text-sm text-gray-400 mb-1">Processed Transcripts</div>
                <div className="text-xs text-yellow-400 flex items-center">
                  <Mic className="w-3 h-3 mr-1" />
                  Real-time analysis
                </div>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-400 border-blue-400/50" data-testid="badge-ferpa">
                <Enhanced4DCheckCircleIcon className="w-4 h-4 mr-2" size={16} />
                FERPA Meeting Privacy
              </Badge>
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50" data-testid="badge-fisma">
                <Enhanced4DShieldIcon className="w-4 h-4 mr-2" size={16} />
                FISMA Workflow Security
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-400/50" data-testid="badge-gdpr">
                <Enhanced4DLockIcon className="w-4 h-4 mr-2" size={16} />
                GDPR Data Protection
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-7xl p-8 space-y-16">
          {/* Core FLOW Capabilities */}
          <section data-testid="section-capabilities">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DActivityIcon className="w-10 h-10 mr-4 text-blue-400" size={40} />
              Core FLOW Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {flowCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-blue-500/50 transition-all duration-300" data-testid={`capability-card-${index}`}>
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

          {/* Meeting Intelligence Platform Integrations */}
          <section data-testid="section-meeting-platforms">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Video className="w-10 h-10 mr-4 text-purple-400" />
              Meeting Intelligence Platform Integrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetingPlatforms.map((platform, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-purple-500/50 transition-all duration-300" data-testid={`platform-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {platform.icon}
                      <CardTitle className="text-white text-lg">{platform.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-surface/30 rounded-lg">
                        <div className="text-sm font-medium text-white mb-1">Compliance:</div>
                        <div className="text-sm text-gray-300">{platform.compliance}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Features:</div>
                        <div className="space-y-1">
                          {platform.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
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

          {/* Workflow Automation Capabilities */}
          <section data-testid="section-workflow-automation">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DZapIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
              Workflow Automation Capabilities
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workflowAutomationCapabilities.map((capability, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300" data-testid={`workflow-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">{capability.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-2">{capability.category}</CardTitle>
                        <p className="text-gray-400 text-sm">{capability.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(capability.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-2 bg-surface/30 rounded-lg">
                            <span className="text-gray-400 text-sm capitalize">{key.replace('_', ' ')}:</span>
                            <span className="text-white text-sm font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Automation Features:</h4>
                        <div className="space-y-2">
                          {capability.automations.map((automation, aIndex) => (
                            <div key={aIndex} className="flex items-start space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5" size={16} />
                              <span className="text-gray-300 text-sm">{automation}</span>
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

          {/* Federated Learning Operations */}
          <section data-testid="section-federated-learning">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-cyan-400" size={40} />
              Federated Learning Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {federatedLearningFeatures.map((feature, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300" data-testid={`federated-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {feature.icon}
                      <CardTitle className="text-white text-lg">{feature.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(feature.specifications).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-surface/30 rounded-lg">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white mb-2">Capabilities:</div>
                        <div className="space-y-1">
                          {feature.capabilities.map((capability, cIndex) => (
                            <div key={cIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
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

          {/* Technical Specifications */}
          <section data-testid="section-specifications">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DServerIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
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
              <Enhanced4DNetworkIcon className="w-10 h-10 mr-4 text-purple-400" size={40} />
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
                        <div className="text-sm font-medium text-white mb-2">FLOW Features:</div>
                        <div className="space-y-1">
                          {system.flow_features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DActivityIcon className="w-4 h-4 text-blue-400" size={16} />
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
              <Enhanced4DBuildingIcon className="w-10 h-10 mr-4 text-orange-400" size={40} />
              Deployment & Implementation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-orange-500/50 transition-all duration-300" data-testid={`deployment-card-${index}`}>
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
                        <div className="text-center">
                          <div className="text-lg font-bold text-white mb-1">{option.pricing}</div>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" data-testid={`button-deploy-${index}`}>
                            Request Deployment Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ROI Metrics & Performance */}
          <section data-testid="section-roi">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <Enhanced4DTrendingUpIcon className="w-10 h-10 mr-4 text-green-400" size={40} />
              ROI Metrics & Performance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiMetrics.map((roi, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-green-500/50 transition-all duration-300" data-testid={`roi-card-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">{roi.value}</div>
                      <div className="text-lg text-white">{roi.metric}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm text-center">{roi.description}</p>
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
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-yellow-500/50 transition-all duration-300" data-testid={`testimonial-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Enhanced4DStarIcon key={i} className="w-5 h-5 text-yellow-400" size={20} />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 text-sm italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="border-t border-gray-700 pt-3">
                        <div className="text-white font-semibold">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.title}</div>
                        <div className="text-gray-500 text-sm">{testimonial.organization}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-2 bg-surface/30 rounded-lg">
                          <div className="text-xs text-gray-400">Compliance</div>
                          <div className="text-sm text-white font-medium">{testimonial.compliance}</div>
                        </div>
                        <div className="p-2 bg-surface/30 rounded-lg">
                          <div className="text-xs text-gray-400">Results</div>
                          <div className="text-sm text-white font-medium">{testimonial.results}</div>
                        </div>
                      </div>
                      <div className="p-2 bg-surface/30 rounded-lg">
                        <div className="text-xs text-gray-400">Deployment</div>
                        <div className="text-sm text-white font-medium">{testimonial.deployment}</div>
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
              <Play className="w-10 h-10 mr-4 text-cyan-400" />
              Interactive Demonstrations
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demoScenarios.map((demo, index) => (
                <Card key={index} className="bg-surface/50 border-surface-light hover:border-cyan-500/50 transition-all duration-300" data-testid={`demo-card-${index}`}>
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
                        <div className="text-sm font-medium text-white mb-2">Demo Features:</div>
                        <div className="space-y-1">
                          {demo.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Enhanced4DCheckCircleIcon className="w-4 h-4 text-green-400" size={16} />
                              <span className="text-gray-300 text-sm">{feature}</span>
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

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-12 border border-blue-500/50" data-testid="section-cta">
            <Enhanced4DActivityIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold text-white mb-4">Transform Your Organization with FLOW</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience 68% productivity gains, 87% automation rates, and 92% knowledge retention with our revolutionary workflow automation platform
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3" data-testid="button-cta-demo">
                <Play className="w-5 h-5 mr-2" />
                Schedule Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3" data-testid="button-cta-contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Specialists
              </Button>
            </div>
            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <Link href="/solutions" className="hover:text-blue-400 transition-colors" data-testid="link-solutions">
                <Enhanced4DArrowRightIcon className="w-4 h-4 inline mr-2" size={16} />
                Explore Solutions
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors" data-testid="link-services">
                <Enhanced4DArrowRightIcon className="w-4 h-4 inline mr-2" size={16} />
                Professional Services
              </Link>
              <Link href="/pricing" className="hover:text-blue-400 transition-colors" data-testid="link-pricing">
                <Enhanced4DArrowRightIcon className="w-4 h-4 inline mr-2" size={16} />
                View Pricing
              </Link>
            </div>
          </section>
        </main>
      </div>
    </MarketingLayout>
  );
}
