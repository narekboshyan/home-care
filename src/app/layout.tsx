import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/theme";
import Script from "next/script";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://carenorthridge.com"),
    title: "Northridge Boarding Care - Senior Living & Care Services",
    description:
      "Northridge Boarding Care provides exceptional senior living services with private rooms, 24/7 care, delicious meals, and personalized assistance.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://carenorthridge.com",
      siteName: "Northridge Boarding Care",
      title: "Northridge Boarding Care - Senior Living & Care Services",
      description:
        "Compassionate boarding care for seniors in Northridge with private rooms, 24/7 supervision, meals, and personal assistance.",
      images: [
        {
          url: "https://carenorthridge.com/care-northridge.png",
          width: 1200,
          height: 630,
          alt: "Northridge Boarding Care Facility",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Northridge Boarding Care - Senior Living & Care Services",
      description:
        "Compassionate boarding care for seniors in Northridge with private rooms, 24/7 supervision, meals, and personal assistance.",
      images: ["https://carenorthridge.com/care-northridge.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    alternates: {
      canonical: "https://carenorthridge.com",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KNZD8FD8');`,
        }}
      />
      {/* Google Tag Manager Script - Place in head */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KNZD8FD8');`,
        }}
      />
      <head>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="google-site-verification"
          content="2OyVOr4WxQy2a4rERyww9zpEuN0oJJ_Y_CbJtBzTwNM"
        />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager noscript - Immediately after opening body tag */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNZD8FD8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="w-full items-center justify-center">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AssistedLivingFacility",
              name: "Northridge Boarding Care",
              description:
                "Compassionate boarding care services for seniors in Northridge with private rooms, 24/7 supervision, delicious meals, and personal care assistance.",
              url: "https://carenorthridge.com",
              telephone: "+1-818-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Northridge Street",
                addressLocality: "Northridge",
                addressRegion: "CA",
                postalCode: "91324",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.2381,
                longitude: -118.5301,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: [
                "Northridge",
                "San Fernando Valley",
                "Los Angeles County",
              ],
              priceRange: "$$-$$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
