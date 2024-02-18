import type { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const noto_serif_sc = Noto_Serif_SC({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
