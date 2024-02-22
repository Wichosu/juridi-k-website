import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

interface Props {
  lng: string
}

export const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'footer')

  return (
    <FooterBase t={t} lng={lng} />
  )
}