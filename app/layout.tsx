import "@/styles/global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { ThemeProvider, ThemeSwitch } from "@/components/theme-switch";
import { metaData } from "@/config/metadata";
import MDXLayout from "@/components/mdx-provider";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes: string[]): string => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/feed/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-100 dark:border-gray-800/40">
              <nav className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
                <Navbar />
              </nav>
            </header>

            <main className="flex-1 w-full">
              <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <MDXLayout>{children}</MDXLayout>
              </div>
            </main>

            <footer className="w-full mt-auto border-t border-gray-100 dark:border-gray-800/40 bg-white/50 dark:bg-gray-950/50">
              <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <Footer />
              </div>
            </footer>

            <ThemeSwitch />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
