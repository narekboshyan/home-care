"use client";
import { motion } from "framer-motion";
import {
  Home,
  HelpingHand,
  Pill,
  ShieldCheck,
  PartyPopper,
  BusFront,
  Stethoscope,
  ArrowRight,
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
import "keen-slider/keen-slider.min.css";

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
      title: "Housing and Meals",
      description: (
        <ul className="list-disc pl-4 text-gray-600">
          <li>Private or shared rooms</li>
          <li>2–3 meals per day, plus snacks</li>
          <li>Housekeeping and laundry services</li>
        </ul>
      ),
    },
    {
      icon: <HelpingHand className="h-6 w-6" />,
      title: "Personal Care Assistance",
      description: (
        <>
          <p>Help with activities of daily living (ADLs), such as:</p>
          <ul className="list-disc pl-4 text-gray-600">
            <li>Bathing</li>
            <li>Dressing</li>
            <li>Grooming</li>
            <li>Toileting</li>
            <li>Mobility (e.g., getting in and out of bed or chairs)</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Medication Management",
      description: (
        <ul className="list-disc pl-4 text-gray-600">
          <li>Reminders to take medications</li>
          <li>
            Assistance with administering prescribed medications (depending on
            state regulations)
          </li>
        </ul>
      ),
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "24/7 Supervision and Security",
      description: (
        <ul className="list-disc pl-4 text-gray-600">
          <li>Staff available at all times to respond to residents’ needs</li>
          <li>Basic safety and security monitoring</li>
        </ul>
      ),
    },
    {
      icon: <PartyPopper className="h-6 w-6" />,
      title: "Social and Recreational Activities",
      description: (
        <ul className="list-disc pl-4 text-gray-600">
          <li>
            Group activities such as games, crafts, outings, or light exercise
          </li>
          <li>Social interaction and mental stimulation</li>
        </ul>
      ),
    },
    {
      icon: <BusFront className="h-6 w-6" />,
      title: "Transportation (sometimes)",
      description:
        "Rides to medical appointments or errands (may be included or available for a fee)",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Coordination with Health Providers",
      description: (
        <ul className="list-disc pl-4 text-gray-600">
          <li>Communicating with doctors or outside caregivers if needed</li>
          <li>Some may assist with setting appointments</li>
        </ul>
      ),
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 flex justify-center bg-blue-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/bg-image.png')] bg-cover bg-center "
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[white]">
                Our Services
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Boarding care facilities are typically geared toward seniors or
                adults with disabilities who need some supervision and care but
                do not need nursing home-level care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
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
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff7558] text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-[#2c2a49] text-[22px]">
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 flex justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2c2a49]">
                Personalized Care Plans
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We understand that each individual has unique needs. Contact us
                to create a customized care plan for your loved one.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-[#ff7558] hover:bg-[#ff5e3a] text-white hover:text-[white] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
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
