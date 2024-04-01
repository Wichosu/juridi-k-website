"use client"
import Link from 'next/link'
import { useTranslation } from '../i18n/client'
import { Footer } from './components/Footer/client'
import { Navbar } from './components/Navbar/client'
import { Hero } from './components/Hero/client'
import { AboutUs } from './components/AboutUs/client'
import { Services } from './components/Services/client'

interface Props {
  params: { lng: string}
}

export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "home-page")

  return (
    <>
      <Navbar lng={lng} />
      <Hero lng={lng} />
      <AboutUs lng={lng} />
      <Services lng={lng} />
    </>
  )
}