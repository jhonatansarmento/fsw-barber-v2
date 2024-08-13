import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import Footer from "./_components/footer"
import AuthProvider from "./_providers/auth"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FWS Barber",
  description: "App web de agendamento de barbearia",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <meta
          property="og:title"
          content="FWS Barber - App web de agendamento de barbearia"
        />
        <meta
          property="og:description"
          content="App web de agendamento de barbearia, facilitando o processo de marcar horários e gerenciar clientes."
        />
        <meta property="og:url" content="https://fsw-barber-v2.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png?v=4" />
        <link rel="shortcut icon" href="apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
