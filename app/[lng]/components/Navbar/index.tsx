import { useTranslation } from '../../../i18n'
import { NavbarBase } from './NavbarBase'

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "navbar")

  return (
    <NavbarBase t={t} lng={lng} />
  )
}