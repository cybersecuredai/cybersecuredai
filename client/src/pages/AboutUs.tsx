import { MarketingLayout } from "@/components/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Enhanced4DShieldIcon,
  Enhanced4DBrainIcon,
  Enhanced4DTargetIcon,
  Enhanced4DCheckCircleIcon,
  Enhanced4DTrendingUpIcon,
  Enhanced4DGlobeIcon,
  Enhanced4DArrowRightIcon
} from "@/components/LazyCustomIcons";
import { 
  Shield, 
  Brain, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  Users,
  Award
} from "lucide-react";
import { Link } from "wouter";

// Import professional images
import platformImg from "@assets/generated_images/Security_Analytics_Dashboard_ca1f5822.jpg";
import innovationImg from "@assets/generated_images/AI_Security_Implementation_d7886bac.jpg";
import complianceImg from "@assets/generated_images/Federal_Compliance_Certification_2faa9e41.jpg";

// POD Intelligence System Logos
import orcaLogoImg from "@assets/ORCA logo_1758558742074.png";
import apexLogoImg from "@assets/APEX logo_1758557596082.png";
import echoLogoImg from "@assets/ECHO_1758557621209.png";

export default function AboutUs() {
  const keyMetrics = [
    { value: "500+", label: "POD Intelligence Deployments", description: "Revolutionary AI systems in production" },
    { value: "99.2%", label: "APEX Detection Accuracy", description: "Genetic algorithm evolution" },
    { value: "5 Systems", label: "POD Intelligence Suite", description: "APEX, ECHO, PULSE, SURGE, FLOW" },
    { value: "1M+", label: "Lives Protected", description: "Students, citizens, and employees" }
  ];

  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-midnight-900 via-midnight-800 to-midnight-900 py-24">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <img src={orcaLogoImg} alt="ORCA Platform" className="h-10 w-auto mr-3" />
                <Badge className="bg-spring-500/20 text-spring-400 border-spring-500/30">
                  <Enhanced4DShieldIcon className="glass-icon w-4 h-4 mr-2" size={16} />
                  CyberSecured AI's ORCA Platform
                </Badge>
              </div>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Pioneers of <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-400 to-cyan-400">POD Intelligence</span>
              </h1>
              <h2 className="text-3xl font-semibold mb-6 text-gray-300">
                The Revolutionary Five-System AI Architecture That's Changing Cybersecurity Forever
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We didn't just create another cybersecurity platform - we revolutionized the entire industry with POD Intelligence. 
                Five specialized AI systems (APEX, ECHO, PULSE, SURGE, FLOW) working together as one unified ecosystem, 
                delivering capabilities that no traditional security solution can match. From genetic algorithm evolution to 
                holographic interfaces to autonomous defense, we're building the future of cybersecurity today.
              </p>
              <Link href="/about/leadership">
                <Button className="bg-spring-500 hover:bg-spring-600 text-midnight-900 font-semibold">
                  Meet Our Team
                  <Enhanced4DArrowRightIcon className="glass-icon w-4 h-4 ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-midnight-950/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="bg-midnight-800/50 border-midnight-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-spring-400 mb-2">{metric.value}</div>
                    <div className="text-white font-semibold mb-1">{metric.label}</div>
                    <div className="text-gray-400 text-sm">{metric.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="py-16 bg-midnight-900/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission: <span className="text-spring-400">POD Intelligence Revolution</span></h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  CyberSecured AI exists to revolutionize cybersecurity through POD Intelligence - the world's first five-system AI architecture. 
                  We combine genetic algorithms (APEX), holographic interfaces (ECHO), location intelligence (PULSE), autonomous defense (SURGE), 
                  and operations automation (FLOW) to create capabilities that were previously impossible. This isn't incremental improvement - 
                  it's a complete paradigm shift in how cybersecurity works.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our ORCA Platform delivers federal-grade protection with POD Intelligence systems that evolve, adapt, and learn together. 
                  From self-evolving genetic algorithms that achieve 99.2% threat detection accuracy to holographic interfaces that transform 
                  how security teams interact with threats, we're building the cybersecurity platform of tomorrow, today.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Purpose-built for educational institutions and government agencies, every POD Intelligence system includes built-in 
                  FERPA, FISMA, and NIST compliance, ensuring that revolutionary security capabilities never compromise regulatory requirements.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={platformImg} 
                  alt="CyberSecured AI Platform"
                  className="w-full h-96 object-cover rounded-lg border border-spring-500/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-16 bg-midnight-950/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-gray-400 text-lg">
                The principles that guide our cybersecurity innovation and client relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-midnight-800/50 border-midnight-700 text-center">
                <CardContent className="p-8">
                  <Enhanced4DShieldIcon className="glass-icon mx-auto mb-6" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                  <p className="text-gray-300">
                    Every decision we make prioritizes the security and privacy of our clients' data and their constituents.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-midnight-800/50 border-midnight-700 text-center">
                <CardContent className="p-8">
                  <Enhanced4DBrainIcon className="glass-icon mx-auto mb-6" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">AI Innovation</h3>
                  <p className="text-gray-300">
                    We harness the power of artificial intelligence to stay ahead of evolving cybersecurity threats.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-midnight-800/50 border-midnight-700 text-center">
                <CardContent className="p-8">
                  <Enhanced4DCheckCircleIcon className="glass-icon mx-auto mb-6" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">Compliance Excellence</h3>
                  <p className="text-gray-300">
                    We ensure our solutions meet and exceed all regulatory requirements for educational institutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 bg-midnight-900/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={innovationImg} 
                  alt="AI Security Innovation"
                  className="w-full h-96 object-cover rounded-lg border border-spring-500/30"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Why Educational Institutions Choose Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Enhanced4DCheckCircleIcon className="glass-icon w-5 h-5 mt-1 text-spring-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">AI-Powered Threat Detection</h3>
                      <p className="text-gray-300">Advanced machine learning algorithms detect and respond to threats in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Enhanced4DCheckCircleIcon className="glass-icon w-5 h-5 mt-1 text-spring-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Regulatory Compliance</h3>
                      <p className="text-gray-300">Built-in compliance with FERPA, FISMA, CIPA, and other educational standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Enhanced4DCheckCircleIcon className="glass-icon w-5 h-5 mt-1 text-spring-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">24/7 Monitoring</h3>
                      <p className="text-gray-300">Continuous monitoring and automated incident response to protect your institution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Enhanced4DCheckCircleIcon className="glass-icon w-5 h-5 mt-1 text-spring-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Educational Expertise</h3>
                      <p className="text-gray-300">Deep understanding of educational environments and their unique security challenges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 bg-midnight-950/50">
          <div className="container mx-auto px-6">
            <Card className="bg-gradient-to-r from-spring-900/20 to-cyber-blue-900/20 border-spring-500/30">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Secure Your Institution?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join hundreds of educational institutions and government agencies that trust CyberSecured AI to protect their most valuable assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-spring-500 hover:bg-spring-600 text-midnight-900 font-semibold">
                      Contact Sales
                      <Enhanced4DArrowRightIcon className="glass-icon w-4 h-4 ml-2" size={16} />
                    </Button>
                  </Link>
                  <Link href="/about/leadership">
                    <Button variant="outline" className="border-spring-400 text-spring-400 hover:bg-spring-400 hover:text-midnight-900">
                      Meet Our Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}