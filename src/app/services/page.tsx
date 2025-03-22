"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bath,
  Briefcase,
  Calendar,
  Clock,
  Heart,
  Home,
  MessageSquare,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "In-Home Care",
      description:
        "Personalized care in the comfort and familiarity of home, including assistance with daily activities.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Companionship",
      description:
        "Meaningful social interaction, emotional support, and engaging activities to combat loneliness.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Medication Reminders",
      description:
        "Timely medication reminders and assistance to ensure proper dosage and adherence to prescriptions.",
    },
    {
      icon: <Bath className="h-6 w-6" />,
      title: "Personal Care",
      description:
        "Assistance with bathing, grooming, dressing, and other personal hygiene needs with dignity and respect.",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Meal Preparation",
      description:
        "Nutritious meal planning and preparation according to dietary needs and preferences.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Errands & Shopping",
      description:
        "Assistance with grocery shopping, picking up prescriptions, and running other essential errands.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Light Housekeeping",
      description:
        "Maintaining a clean and safe living environment through light cleaning, laundry, and organization.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Assistance",
      description:
        "Transportation and accompaniment to medical appointments and other scheduled activities.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Family Communication",
      description:
        "Regular updates and communication with family members about care progress and any concerns.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Our Services
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive care services tailored to meet the
                unique needs of your loved ones.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-blue-100 bg-blue-50/50 transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      {service.icon}
                    </div>
                    <CardTitle className="text-blue-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Personalized Care Plans
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We understand that each individual has unique needs. Contact us
                to create a customized care plan for your loved one.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
