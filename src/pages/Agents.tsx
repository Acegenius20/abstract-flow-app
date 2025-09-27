import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Plus, 
  Search,
  Settings,
  Play,
  Pause,
  TrendingUp,
  Phone,
  Clock,
  CheckCircle
} from "lucide-react";

const Agents = () => {
  const agents = [
    {
      id: "sales-pro",
      name: "Sales Agent Pro",
      description: "High-converting sales calls with natural conversation flow",
      status: "active",
      callsToday: 47,
      successRate: 89,
      avgDuration: "4m 12s",
      category: "Sales"
    },
    {
      id: "support-helper",
      name: "Support Helper",
      description: "24/7 customer support with issue resolution capabilities",  
      status: "active",
      callsToday: 23,
      successRate: 96,
      avgDuration: "2m 45s",
      category: "Support"
    },
    {
      id: "booking-assistant",
      name: "Booking Assistant",
      description: "Automated appointment scheduling and calendar management",
      status: "paused", 
      callsToday: 0,
      successRate: 92,
      avgDuration: "3m 18s",
      category: "Scheduling"
    },
    {
      id: "lead-qualifier", 
      name: "Lead Qualifier",
      description: "Intelligent lead scoring and qualification system",
      status: "active",
      callsToday: 31,
      successRate: 78, 
      avgDuration: "5m 33s",
      category: "Sales"
    },
    {
      id: "survey-collector",
      name: "Survey Collector", 
      description: "Automated survey and feedback collection agent",
      status: "active",
      callsToday: 15,
      successRate: 85,
      avgDuration: "3m 42s", 
      category: "Research"
    },
    {
      id: "appointment-reminder",
      name: "Appointment Reminder",
      description: "Proactive appointment confirmations and reminders",
      status: "active", 
      callsToday: 12,
      successRate: 94,
      avgDuration: "1m 28s",
      category: "Scheduling"
    }
  ];

  const categories = ["All", "Sales", "Support", "Scheduling", "Research"];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Agents
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage and deploy your intelligent agents
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="glass-card">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button className="btn-hero">
              <Plus className="h-4 w-4 mr-2" />
              Create Agent
            </Button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search agents..." 
              className="pl-10 glass-card"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "btn-hero" : "glass-card"}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Agents Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="glass-card hover:shadow-glow-primary transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <Badge 
                          variant={agent.status === "active" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {agent.status === "active" ? (
                            <Play className="h-3 w-3 mr-1" />
                          ) : (
                            <Pause className="h-3 w-3 mr-1" />
                          )}
                          {agent.status}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {agent.category}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {agent.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/5 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                        <Phone className="h-3 w-3" />
                        Today
                      </div>
                      <div className="text-lg font-semibold text-primary">
                        {agent.callsToday}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted/5 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                        <CheckCircle className="h-3 w-3" />
                        Success
                      </div>
                      <div className="text-lg font-semibold text-green-500">
                        {agent.successRate}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Average Duration */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Avg Duration
                    </div>
                    <span className="font-medium">{agent.avgDuration}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 glass-card"
                      asChild
                    >
                      <Link to={`/agents/${agent.id}`}>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        View Stats
                      </Link>
                    </Button>
                    <Button 
                      variant={agent.status === "active" ? "outline" : "default"}
                      size="sm"
                      className={agent.status === "active" ? "glass-card" : "btn-hero"}
                    >
                      {agent.status === "active" ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Agents;