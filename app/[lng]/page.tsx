"use client"
import Link from 'next/link'
import { useTranslation } from '../i18n/client'
import { Footer } from './components/Footer/client'
import { Navbar } from './components/Navbar/client'
import { Hero } from './components/Hero/client'

interface Props {
  params: { lng: string}
}

export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "home-page")

  return (
    <>
      <Navbar lng={lng} />
      <Hero lng={lng} />
    </>
  )
}