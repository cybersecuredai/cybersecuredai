import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain,
  Dna,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Database,
  Shield,
  Settings,
  Network,
  Activity,
  Clock,
  Star,
  Users,
  Building
} from "lucide-react";
import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

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
  Enhanced4DBuildingIcon
} from "@/components/LazyCustomIcons";

// APEX Logo
import apexLogoImg from "@assets/APEX logo_1758557596082.png";

export default function APEXSystem() {
  const geneticCapabilities = [
    {
      title: "Genetic Algorithm Evolution",
      description: "Self-evolving threat detection models that adapt through generations",
      icon: <Enhanced4DBrainIcon className="w-8 h-8 text-purple-400" size={32} />,
      features: ["PyTorch integration", "DEAP framework", "Multi-generational learning", "Autonomous evolution"],
      performance: { accuracy: "99.2%", generations: "1,247", evolution_speed: "< 15min" }
    },
    {
      title: "Pattern Recognition Matrix",
      description: "Advanced genetic pattern recognition for complex threat identification",
      icon: <Enhanced4DTargetIcon className="w-8 h-8 text-cyan-400" size={32} />,
      features: ["DNA-like pattern encoding", "Crossover optimization", "Mutation strategies", "Selection algorithms"],
      performance: { patterns: "847,293", recognition_rate: "98.7%", processing_time: "< 50ms" }
    },
    {
      title: "Adaptive Fitness Functions",
      description: "Dynamic fitness evaluation for threat detection optimization",
      icon: <Enhanced4DZapIcon className="w-8 h-8 text-orange-400" size={32} />,
      features: ["Real-time fitness scoring", "Multi-objective optimization", "Pareto front analysis", "Adaptive weighting"],
      performance: { optimization_cycles: "12,847", fitness_improvement: "347%", convergence_time: "< 8min" }
    },
    {
      title: "Compliance Genetics",
      description: "FERPA/FISMA-optimized genetic algorithms for regulatory environments",
      icon: <Enhanced4DShieldIcon className="w-8 h-8 text-green-400" size={32} />,
      features: ["FERPA-aware mutations", "FISMA compliance genes", "Policy enforcement", "Audit trail genetics"],
      performance: { compliance_rate: "99.8%", policy_violations: "0.03%", audit_readiness: "100%" }
    }
  ];

  const evolutionMetrics = [
    { generation: "Gen 1", accuracy: 78.3, threats_detected: 1247, false_positives: 12.4 },
    { generation: "Gen 25", accuracy: 89.7, threats_detected: 2893, false_positives: 6.2 },
    { generation: "Gen 50", accuracy: 95.1, threats_detected: 4156, false_positives: 2.8 },
    { generation: "Gen 100", accuracy: 98.4, threats_detected: 7234, false_positives: 1.1 },
    { generation: "Gen 200", accuracy: 99.2, threats_detected: 12847, false_positives: 0.3 }
  ];

  const deploymentScenarios = [
    {
      sector: "Higher Education",
      use_case: "Student data protection with genetic privacy algorithms",
      accuracy: 99.1,
      compliance: "FERPA",
      deployment: "Campus-wide + Cloud hybrid",
      students_protected: "847,293"
    },
    {
      sector: "Federal Agencies",
      use_case: "National security threat evolution and adaptation",
      accuracy: 99.7,
      compliance: "FISMA",
      deployment: "Air-gapped + Classified",
      assets_protected: "1.2M+"
    },
    {
      sector: "K-12 Districts",
      use_case: "Child protection with evolving threat recognition",
      accuracy: 98.8,
      compliance: "CIPA/FERPA",
      deployment: "District cloud + Edge",
      students_protected: "234,567"
    },
    {
      sector: "Municipal Government",
      use_case: "Citizen data protection through genetic learning",
      accuracy: 99.3,
      compliance: "Local/State",
      deployment: "Municipal cloud + Hybrid",
      citizens_protected: "1.8M+"
    }
  ];

  const integrationCapabilities = [
    {
      system: "ECHO Holographic",
      description: "5D visualization of genetic algorithm evolution and threat patterns",
      benefits: ["Real-time evolution visualization", "Genetic pattern exploration", "Holographic fitness landscapes"],
      compatibility: "100%"
    },
    {
      system: "PULSE Location Intelligence",
      description: "Geospatial genetic algorithms for location-based threat evolution",
      benefits: ["Geographic threat genetics", "Location-aware mutations", "Spatial pattern evolution"],
      compatibility: "98.7%"
    },
    {
      system: "SURGE Autonomous Defense",
      description: "Genetic strategies for autonomous response generation",
      benefits: ["Evolved defense patterns", "Adaptive response genetics", "Strategic evolution"],
      compatibility: "99.1%"
    },
    {
      system: "FLOW Operations",
      description: "Workflow optimization through genetic algorithm automation",
      benefits: ["Process evolution", "Workflow genetics", "Operational adaptation"],
      compatibility: "97.4%"
    }
  ];

  const customerSuccessStories = [
    {
      organization: "State University System",
      challenge: "Protecting 250,000+ student records from evolving threats",
      solution: "APEX genetic algorithms with FERPA compliance genetics",
      results: {
        threat_detection_improvement: "347%",
        false_positive_reduction: "89%",
        compliance_score: "99.8%",
        cost_savings: "$2.4M annually"
      },
      testimonial: "The APEX genetic algorithm system has revolutionized our cybersecurity posture. The self-evolving threat detection discovered attack patterns that our previous solutions completely missed. With 99.2% accuracy and autonomous policy generation, it's like having an AI security expert that evolves with every new threat.",
      contact: "Dr. Sarah Chen, Chief Information Security Officer"
    },
    {
      organization: "Federal Defense Agency",
      challenge: "Advanced persistent threats targeting classified systems",
      solution: "Air-gapped APEX deployment with FISMA-optimized genetics",
      results: {
        apt_detection_rate: "99.7%",
        classification_accuracy: "98.9%",
        response_time_improvement: "78%",
        security_posture_score: "99.4%"
      },
      testimonial: "APEX's genetic algorithms provide unprecedented threat evolution capabilities. The system's ability to adapt and evolve its detection patterns has given us a significant advantage against sophisticated nation-state actors.",
      contact: "Colonel Marcus Rodriguez, Cybersecurity Division Director"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl p-2 shadow-2xl">
                <img src={apexLogoImg} alt="APEX Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 geometric-text">
              APEX
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced Pattern Exchange
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary genetic AI engine that evolves threat detection through self-learning algorithms. 
              Powered by PyTorch and DEAP framework with 99.2% accuracy and autonomous pattern evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/security-scanner">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-12 py-4 text-lg text-white shadow-2xl"
                  data-testid="button-apex-assessment"
                >
                  <Enhanced4DTargetIcon className="mr-2 w-6 h-6" size={24} />
                  APEX Genetic Assessment
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-900/30 px-12 py-4 text-lg backdrop-blur-sm"
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
              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm" data-testid="card-accuracy-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DTargetIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-purple-400 mb-2">99.2%</div>
                  <div className="text-white font-semibold mb-1">Detection Accuracy</div>
                  <div className="text-slate-400 text-sm">Self-evolved patterns</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm" data-testid="card-generations-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DActivityIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1,247</div>
                  <div className="text-white font-semibold mb-1">Evolution Generations</div>
                  <div className="text-slate-400 text-sm">Continuous learning</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm" data-testid="card-patterns-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DNetworkIcon className="w-10 h-10 text-green-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-green-400 mb-2">847K+</div>
                  <div className="text-white font-semibold mb-1">Pattern Recognition</div>
                  <div className="text-slate-400 text-sm">Genetic encodings</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-orange-500/30 backdrop-blur-sm" data-testid="card-compliance-metric">
                <CardContent className="p-6 text-center">
                  <Enhanced4DShieldIcon className="w-10 h-10 text-orange-400 mx-auto mb-4" size={40} />
                  <div className="text-4xl font-bold text-orange-400 mb-2">99.8%</div>
                  <div className="text-white font-semibold mb-1">FERPA Compliance</div>
                  <div className="text-slate-400 text-sm">Policy enforcement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Genetic Capabilities */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Genetic AI Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Advanced genetic algorithms that evolve threat detection through natural selection, 
                mutation, and crossover operations for unprecedented cybersecurity intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {geneticCapabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                  data-testid={`card-genetic-capability-${index}`}
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
                          <div className="text-2xl font-bold text-purple-400">{value}</div>
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

        {/* Evolution Progress */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Genetic Evolution Progress
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Watch how APEX genetic algorithms evolve from basic pattern recognition to 
                sophisticated threat detection through natural selection and learning.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-slate-700 rounded-lg overflow-hidden">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Generation</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Accuracy</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Threats Detected</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">False Positives</th>
                  </tr>
                </thead>
                <tbody>
                  {evolutionMetrics.map((metric, index) => (
                    <tr 
                      key={index}
                      className="border-t border-slate-700 hover:bg-slate-800/30"
                      data-testid={`row-evolution-metric-${index}`}
                    >
                      <td className="px-6 py-4 text-slate-300 font-medium">{metric.generation}</td>
                      <td className="px-6 py-4 text-purple-400 font-bold">{metric.accuracy}%</td>
                      <td className="px-6 py-4 text-cyan-400">{metric.threats_detected.toLocaleString()}</td>
                      <td className="px-6 py-4 text-green-400">{metric.false_positives}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                APEX genetic algorithms integrate seamlessly with other POD Intelligence systems 
                for comprehensive cybersecurity evolution and enhancement.
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
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Deployment Scenarios
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                APEX genetic algorithms adapt to diverse sectors with compliance-specific evolution 
                and sector-optimized genetic patterns for maximum effectiveness.
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
                        <p className="text-slate-400 mb-4">{scenario.use_case}</p>
                        <div className="flex space-x-4">
                          <Badge variant="outline" className="border-purple-500 text-purple-400">
                            {scenario.compliance}
                          </Badge>
                          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                            {scenario.accuracy}% Accuracy
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Deployment Model</div>
                        <div className="text-white font-semibold mb-4">{scenario.deployment}</div>
                        <div className="text-sm text-slate-400 mb-1">Protected Assets</div>
                        <div className="text-2xl font-bold text-green-400">
                          {scenario.students_protected || scenario.assets_protected || scenario.citizens_protected}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Enhanced4DBuildingIcon className="w-16 h-16 text-purple-400" size={64} />
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
                Organizations worldwide trust APEX genetic algorithms to evolve their cybersecurity 
                defenses and adapt to emerging threats with unprecedented intelligence.
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
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                          <p className="text-slate-300 mb-4">{story.challenge}</p>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                          <p className="text-slate-300">{story.solution}</p>
                        </div>
                        <blockquote className="border-l-4 border-purple-500 pl-4 text-slate-300 italic">
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
              Ready to Evolve Your Cybersecurity?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Deploy APEX genetic algorithms and watch your threat detection evolve beyond traditional security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-12 py-4 text-lg text-white"
                  data-testid="button-schedule-demo"
                >
                  Schedule APEX Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-900/30 px-12 py-4 text-lg"
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