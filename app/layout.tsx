import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor 1099 Tracker — Automated 1099 Filing for Small Businesses',
  description: 'Track contractor payments and automatically generate 1099 forms. Built for small businesses and agencies hiring multiple contractors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7d666872-67ce-4dbf-9226-faaa250e5c75"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
