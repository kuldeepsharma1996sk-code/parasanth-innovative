import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Parasanth Innovative Industries | Premium OEM Small Appliances',
    description: 'Parasanth Innovative Industries Private Limited - Leading OEM manufacturer of premium small domestic appliances including fans, heaters, irons, kettles, and mixer grinders. Made in India excellence.',
    keywords: 'OEM manufacturer, small appliances, fans, heaters, irons, kettles, mixer grinders, Made in India',
    authors: [{ name: 'Parasanth Innovative Industries Private Limited' }],
    openGraph: {
        title: 'Parasanth Innovative Industries | Premium OEM Small Appliances',
        description: 'Leading OEM manufacturer of premium small domestic appliances',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
