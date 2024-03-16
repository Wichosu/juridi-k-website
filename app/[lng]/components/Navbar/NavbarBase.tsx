import Link from "next/link"
import Image from "next/image"
import LogoBig from "../../../../public/juridi-k-logo.svg"
import BurgerIcon from "../../../../public/list.svg"
import ExpandIcon from "../../../../public/caret-down-fill.svg"
import CloseIcon from "../../../../public/x-circle.svg"
import { useState } from "react"
import { LanguageSwitcher } from "./components/LanguageSwitcher/client"

interface Props {
  lng: string
}

export const NavbarBase = ({ lng }: Props) => {
  const [showServices, setShowServices] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <nav className="flex justify-between px-8 py-4 bg-darkblue">
      <Image src={LogoBig} width={100} height={100} alt="juridi-k logo" className="cursor-pointer" />
      <Image src={BurgerIcon} width={40} height={40} alt="menu button" className="cursor-pointer" onClick={() => setShowNavbar((val) => !val)}  />
      <aside className={`fixed flex flex-col gap-4 top-0 right-0 w-3/4 h-screen px-8 pt-12 bg-darkblue transition ease-in-out ${showNavbar? 'translate-x-0' : 'translate-x-full'}`}>
        <Image src={CloseIcon} width={25} height={25} alt="close button" className="cursor-pointer self-end" onClick={() => setShowNavbar((val) => !val)} />
        <Link href={'/'} className="text-white">Inicio</Link>
        <div className="flex justify-between cursor-pointer" onClick={() => setShowServices((val) => !val)}>
          <p className="text-white">Servicios</p>
          <Image src={ExpandIcon} width={20} height={20} alt="Expand list of services" className={showServices ? 'rotate-180' : 'rotate-0'} />
        </div>
        <ul className={`text-white ml-4 ${showServices ? 'block' : 'hidden'}`}>
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
        <LanguageSwitcher lng={lng} />
      </aside>
    </nav>
  )
}