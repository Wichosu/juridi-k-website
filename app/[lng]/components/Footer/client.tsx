'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from '../../../i18n/client'

interface Props {
  lng: string
}

export const Footer = ({ lng }: Props) => {
  const { t } = useTranslation(lng, 'footer', undefined)
  return <FooterBase t={t} lng={lng} />
}