"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Heart,
  Home,
  MessageSquare,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
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
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                  Because they deserve the best care
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Professional, compassionate care for your loved ones in the
                  comfort of their own home.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-700 hover:bg-blue-800">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <Image
                src="/care-giver.jpg"
                width={550}
                height={550}
                alt="Senior woman with caregiver"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a range of personalized care services to meet the
                unique needs of your loved ones.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-blue-50/50 transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Home className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-blue-900">In-Home Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Personalized care in the comfort and familiarity of home,
                    including assistance with daily activities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-blue-50/50 transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-blue-900">Companionship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Meaningful social interaction, emotional support, and
                    engaging activities to combat loneliness.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-blue-50/50 transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-blue-900">
                    Medication Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Timely medication reminders and assistance to ensure proper
                    dosage and adherence to prescriptions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Why Choose Us
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to excellence sets us apart in elderly care
                services.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Trusted Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our caregivers undergo rigorous background checks and
                    training to ensure the highest quality of care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Personalized Care Plans
                  </h3>
                  <p className="text-gray-600">
                    We develop customized care plans tailored to the unique
                    needs and preferences of each client.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600">
                    Our care team is available around the clock to provide
                    assistance whenever it&apos;s needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Regular Communication
                  </h3>
                  <p className="text-gray-600">
                    We maintain open lines of communication with families to
                    provide updates and address concerns.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Happy Families
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what families have to say about our compassionate care
                services.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Sarah Johnson
                      </h3>
                      <p className="text-sm text-gray-500">
                        Daughter of client
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 italic">
                      &quot;The care and compassion shown to my mother has been
                      exceptional. The caregivers have become like family to us,
                      and I have peace of mind knowing she&apos;s in good
                      hands.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full border-blue-100 bg-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="Robert Miller" />
                      <AvatarFallback>RM</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Robert Miller
                      </h3>
                      <p className="text-sm text-gray-500">Son of client</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 italic">
                      &quot;Finding quality care for my father was a priority
                      for our family. The personalized attention and
                      professional service have exceeded our expectations.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Ready to provide the best care for your loved ones?
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to schedule a free consultation and learn more
                about our services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
