import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of calls with ultra-low latency AI agents"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and performance metrics"
    },
    {
      icon: Users,
      title: "Multi-Agent Support",
      description: "Deploy and manage multiple AI agents seamlessly"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 p-6"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AI Agent Hub
          </motion.div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="btn-hero" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            The Future of
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              AI Agents
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Deploy, manage, and scale intelligent AI agents that handle calls, 
            analyze conversations, and deliver insights in real-time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="btn-hero group" asChild>
              <Link to="/dashboard">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-card" asChild>
              <Link to="/agents">View Agents</Link>
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="glass-card p-6 h-full hover:shadow-glow-primary transition-all duration-300">
                <feature.icon className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;