import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const IBM_PLEX_MONO = IBM_Plex_Mono({ weight: "300" })

export const metadata: Metadata = {
    title: "Personlig Hjemmeside",
    description: "Fremskridt af nye projekter",
    keywords: ["portfolio", "showcase", "IT", "robots", "AI", "machine learning"],
    authors: [
        { name: "Magnus E. Bennett", url: "https://www.linkedin.com/in/magn3144" }
    ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${IBM_PLEX_MONO.className} antialiased`}>
                <Header />
                <main children={children}/>
                <Footer />
            </body>
        </html>
    )
}
