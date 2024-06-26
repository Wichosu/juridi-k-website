import type { Metadata } from 'next'
import Head from 'next/head'
import { Noto_Serif_SC } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Logo from '@/public/juridi-k-logo.ico'
import '../globals.css'

const noto_serif_sc = Noto_Serif_SC({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Juridi-k',
  description: 'A lawyer firm',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng: string
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={noto_serif_sc.className}>
          {children}
      </body>
    </html>
  )
}
