"use client"
import Link from 'next/link'
import { useTranslation } from '../i18n/client'
import { Footer } from './components/Footer/client'
import { Navbar } from './components/Navbar/client'

interface Props {
  params: { lng: string}
}

export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng)

  return (
    <>
      <Navbar lng={lng} />
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <Footer lng={lng} />
    </>
  )
}