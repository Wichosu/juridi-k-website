import Link from "next/link"
import { useTranslation } from "../../../i18n"
import { languages } from "@/app/i18n/settings"
import { Trans } from "react-i18next"
import Image from "next/image"
import LogoBig from "../../../../public/juridi-k-logo.svg"
import BurgerIcon from "../../../../public/list.svg"
import ExpandIcon from "../../../../public/caret-down-fill.svg"
import { useState } from "react"

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {
  const [showServices, setShowServices] = useState(false)
  const { t } = await useTranslation(lng, "navbar")

  //styles
  let show = ``

  console.log(showServices)
  if(showServices) {
    show = `hidden`
  } else {
    show = `block`
  }

  return (
    <nav className="flex justify-between px-8 py-4 bg-darkblue">
      <Image src={LogoBig} width={100} height={100} alt="juridi-k logo" className="cursor-pointer" />
      <Image src={BurgerIcon} width={40} height={40} alt="menu button" className="cursor-pointer"  />
      <aside className="absolute flex flex-col top-0 right-0 w-3/4 h-screen px-8 py-4 bg-darkblue">
        <Link href={'/'} className="text-white">Inicio</Link>
        <div className="flex justify-between" onClick={() => setShowServices((val) => !val)}>
          <p className="text-white">Servicios</p>
          <Image src={ExpandIcon} width={20} height={20} alt="Expand list of services" />
        </div>
        <ul className="text-white ml-4 hidden">
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
          <li>Amparos</li>
        </ul>
        <Link href={'/'} className="text-white">Nuestros Abogados</Link>
      </aside>
    </nav>
  )
}