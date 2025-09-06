"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { 
  LineChart, Target, Heart, DollarSign, Users, Accessibility,
  MapPin, Calendar, Award, Smartphone
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Performance Analytics",
      description: "Real-time tracking of athletic performance with AI-powered insights and personalized recommendations.",
      icon: <LineChart className="h-6 w-6 text-yellow-400" />,
      tag: "Core Feature",
    },
    {
      title: "Personalized Training",
      description: "Customized training plans adapted to individual needs, goals, and current fitness levels.",
      icon: <Target className="h-6 w-6 text-gray-300" />,
      tag: "Training",
    },
    {
      title: "Injury Prevention",
      description: "Comprehensive health monitoring and injury prevention protocols with recovery guidance.",
      icon: <Heart className="h-6 w-6 text-red-400" />,
      tag: "Health",
    },
    {
      title: "Financial Guidance",
      description: "Career development support, sponsorship opportunities, and financial planning for athletes.",
      icon: <DollarSign className="h-6 w-6 text-yellow-300" />,
      tag: "Career",
    },
    {
      title: "Coach Management",
      description: "Powerful tools for coaches to manage multiple athletes, track progress, and allocate resources fairly.",
      icon: <Users className="h-6 w-6 text-white" />,
      tag: "Management",
    },
    {
      title: "Inclusive Support",
      description: "Specialized programs and adaptive training for athletes with disabilities and special needs.",
      icon: <Accessibility className="h-6 w-6 text-gray-200" />,
      tag: "Accessibility",
    },
    {
      title: "Rural Outreach",
      description: "Connecting rural athletes with opportunities, resources, and support systems nationwide.",
      icon: <MapPin className="h-6 w-6 text-yellow-500" />,
      tag: "Outreach",
    },
    {
      title: "Event Management",
      description: "Streamlined competition scheduling, registration, and fair selection processes.",
      icon: <Calendar className="h-6 w-6 text-gray-400" />,
      tag: "Events",
    },
    {
      title: "Achievement Tracking",
      description: "Comprehensive portfolio of achievements, certifications, and competitive history.",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      tag: "Recognition",
    },
    {
      title: "Mobile-First Design",
      description: "Fully responsive platform accessible on any device, optimized for mobile usage.",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      tag: "Technology",
    },
  ];

  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1 text-sm rounded-full bg-yellow-400 text-black font-medium">
            Platform Features
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-4 text-white">
            Comprehensive Support System
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform provides end-to-end support for athletes, coaches, and
            organizations, ensuring no one is left behind in India's sporting
            journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className="border border-gray-800 shadow-lg rounded-xl 
                bg-gray-900 hover:bg-gray-800 transition-all 
                duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-lg font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <Badge className="bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-full">
                    {feature.tag}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
