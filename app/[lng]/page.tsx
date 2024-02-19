import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar/Navbar'

interface Props {
  params: { lng: string}
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)

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