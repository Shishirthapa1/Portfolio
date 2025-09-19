import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shishir Thapa | Full Stack Developer",
  description:
    "Hi, I'm Shishir Thapa. I build modern web applications using Next.js, MERN Stack, GSAP, Framer Motion, PostgreSQL, MongoDB, and Tailwind CSS. Explore my portfolio to see my projects, animations, and web development work.",
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
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Portfolio",
    "PostgreSQL Portfolio",
    "GSAP Animations",
    "Framer Motion Portfolio",
    "Tailwind CSS Developer",
    "Web Development Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Web Applications",
    "JavaScript Developer",
    "Full Stack Web Projects",
  ],
  authors: [{ name: "Shishir Thapa" }],
  creator: "Shishir Thapa",
  publisher: "Shishir Thapa",
  metadataBase: new URL("https://shishirthapa.vercel.app/"),
  openGraph: {
    title: "Shishir Thapa | Full Stack Developer Portfolio",
    description:
      "I'm Shishir Thapa, a Full Stack Developer. Check out my portfolio featuring web applications, GSAP animations, Framer Motion effects, and projects built with Next.js, MongoDB, and Tailwind CSS.",
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
      "I'm Shishir Thapa, a Full Stack Developer. My portfolio showcases projects using Next.js, MERN Stack, GSAP animations, PostgreSQL, and Tailwind CSS. Explore my work!",
    images: ["/og-image.png"],
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
              "@type": "Website",
              name: "Shishir Thapa",
              url: "https://shishirthapa.vercel.app",
              jobTitle: "Full Stack Developer",
              author: {
                "@type": "Person",
                name: "Shishir Thapa",
              },
              sameAs: [
                "https://github.com/Shishirthapa1",
                "https://www.linkedin.com/in/shishirthapaa/",
                "https://twitter.com/StarboyPUBG1",
              ],
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://shishirthapa.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
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
