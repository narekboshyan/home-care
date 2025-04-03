"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
                Contact Us
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&apos;re here to answer your questions and help you find the
                right care solution for your loved ones.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-900">
                      Get in Touch
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and one of our care specialists
                      will contact you shortly to discuss your needs.
                    </p>
                    {isSubmitted ? (
                      <motion.div
                        className="rounded-lg bg-green-100 p-4 text-green-800"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="font-medium">
                          Thank you for contacting us!
                        </p>
                        <p>
                          We&apos;ve received your message and will get back to
                          you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(123) 456-7890"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Please tell us about your care needs..."
                            required
                            className="min-h-[120px]"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-blue-700 hover:bg-blue-800"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Phone
                      </h3>
                      <p className="text-gray-600">+1 (818) 795-2953</p>
                      <p className="text-sm text-gray-500">
                        Available Monday-Friday, 8am-6pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        Northridgeboardingcare@gmail.com
                      </p>
                      <p className="text-sm text-gray-500">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Office Location
                      </h3>
                      <p className="text-gray-600">8754 Winnetka ave</p>
                      <p className="text-gray-600">Northridge, CA 91325</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="rounded-lg overflow-hidden border border-blue-100 h-[300px] w-full">
                {/* Map placeholder - in a real app, you would integrate Google Maps or another map provider */}
                <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                  <MapContainer
                    center={[34.2299414, -118.5709483]}
                    zoom={16}
                    style={{
                      height: "100vh",
                      width: "100%",
                      position: "relative",
                      zIndex: 0,
                    }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Marker
                      position={[34.2299414, -118.5709483]}
                      icon={customIcon}
                    />
                  </MapContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
