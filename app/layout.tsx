import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shishir Thapa",
  description:
    "Welcome to the portfolio of Shishir Thapa, a Full Stack Developer specializing in MERN Stack, Next.js, GSAP, Framer Motion animations, PostgreSQL, MongoDB and Tailwind CSS.",
  keywords: [
    "shishir thapa",
    "Shishir Thapa",
    "Portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GSAP",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Shishir Thapa" }],
  creator: "Shishir Thapa",
  publisher: "Shishir Thapa",
  metadataBase: new URL("https://shishirthapa.vercel.app/"),
  openGraph: {
    title: "Shishir Thapa | Full Stack Developer Portfolio",
    description:
      "Portfolio website built with Next.js, FramerMotion, Typescript, and Tailwind CSS.",
    url: "https://shishirthapa.vercel.app/",
    siteName: "Shishir Thapa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shishir Thapa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shishir Thapa | Full Stack Developer",
    description:
      "Full Stack Developer portfolio showcasing Next.js, GSAP animations, PostgreSQL, and Tailwind CSS.",
    images: ["/favicon.ico"],
    creator: "@StarboyPUBG1",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shishir Thapa",
              url: "https://shishirthapa.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/Shishirthapa1",
                "https://www.linkedin.com/in/shishirthapaa/",
              ],
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="uzMc0og-NU0FkdRTXY3HVEusQ3acfxRhkFLgVNrCty0"
        />
        <link rel="canonical" href="https://shishirthapa.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
