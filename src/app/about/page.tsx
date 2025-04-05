"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 flex justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                About Us
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn about our mission, values, and the dedicated team behind
                our elder care services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Enhancing the quality of life for seniors
              </h2>
              <p className="text-gray-600 md:text-lg">
                We are dedicated to providing exceptional care that enables
                seniors to maintain their independence, dignity, and quality of
                life in the comfort of their own homes. Our mission is to be a
                trusted partner for families seeking compassionate and reliable
                care for their loved ones.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Setting the standard in elder care
              </h2>
              <p className="text-gray-600 md:text-lg">
                We envision a world where all seniors receive the highest
                quality of care, respect, and companionship they deserve. We
                strive to be the leading provider of personalized elder care
                services, known for our exceptional caregivers, innovative
                approaches, and unwavering commitment to improving the lives of
                seniors and their families.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                The principles that guide our care
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape every aspect of our service and guide how
                we interact with clients and their families.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Compassion
                  </h3>
                  <p className="text-gray-600">
                    We approach every interaction with genuine care, empathy,
                    and understanding for the unique needs of each individual.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Respect
                  </h3>
                  <p className="text-gray-600">
                    We honor the dignity, independence, and life experiences of
                    every senior in our care.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Excellence
                  </h3>
                  <p className="text-gray-600">
                    We are committed to delivering the highest standard of care
                    through continuous improvement and professional development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Integrity
                  </h3>
                  <p className="text-gray-600">
                    We conduct ourselves with honesty, transparency, and
                    accountability in all our interactions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Reliability
                  </h3>
                  <p className="text-gray-600">
                    We are dependable and consistent, providing peace of mind to
                    seniors and their families.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Personalization
                  </h3>
                  <p className="text-gray-600">
                    We recognize that each person is unique and tailor our
                    services to meet individual preferences and needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 flex justify-center">
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
                Ready to learn more about our services?
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center">
                Contact us today to schedule a free consultation and discover
                how we can help your loved ones.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
                  Contact Us Now
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
