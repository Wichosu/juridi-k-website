import Link from "next/link"
import Image from "next/image"
import LogoBig from "../../../../public/juridi-k-logo.svg"
import BurgerIcon from "../../../../public/list.svg"
import ExpandIcon from "../../../../public/caret-down-fill.svg"
import CloseIcon from "../../../../public/x-circle.svg"
import { useState, useEffect } from "react"
import { LanguageSwitcher } from "./components/LanguageSwitcher/client"
import { TFunction } from "i18next"
import { sanityFetch } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity"

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const NavbarBase = ({ t, lng }: Props) => {
  const [showServices, setShowServices] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [services, setServices] = useState<SanityDocument[]>()

  useEffect(() => {
    let isFetched = false

    const fetchData = async () => {
      const FETCH_QUERY = `*[_type == "service" && language == "${lng}"]{
        _id,
        title,
        slug,
        language,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          slug,
          language
        },
      }`;

      const fetchData = await sanityFetch<SanityDocument[]>({query: FETCH_QUERY})

      if(!isFetched) {
        setServices(fetchData)
      }
    }

    fetchData()
      .catch(console.error)

    return () => {
      isFetched = true
    }
  }, [])

  return (
    <nav className="bg-darkblue lg:relative">
      <div className="flex justify-between px-8 py-4 capitalize lg:max-w-screen-xl lg:mx-auto lg:relative">
        <Link href={'/'}>
          <Image src={LogoBig} width={100} height={100} alt="juridi-k logo" className="cursor-pointer" />
        </Link>
        <Image src={BurgerIcon} width={40} height={40} alt="menu button" className="cursor-pointer lg:hidden" onClick={() => setShowNavbar((val) => !val)}  />
        <aside className={`
            fixed overflow-scroll flex flex-col gap-4 top-0 right-0 w-3/4 h-screen px-8 py-12
            bg-darkblue transition ease-in-out 
            ${showNavbar? 'translate-x-0 lg:translate-x-0' : 'translate-x-full lg:translate-x-0'}
            lg:relative lg:flex-row lg:bg-none lg:h-fit lg:w-fit lg:overflow-visible
            `}>
          <Image src={CloseIcon} width={25} height={25} alt="close button" className="cursor-pointer self-end lg:hidden" onClick={() => setShowNavbar((val) => !val)} />
          <Link href={'/'} className="text-white">{ t("home") }</Link>
          <div className="flex justify-between cursor-pointer" onClick={() => setShowServices((val) => !val)}>
            <p className="text-white">{ t("services") }</p>
            <Image src={ExpandIcon} width={20} height={20} alt="Expand list of services" className={showServices ? 'rotate-180' : 'rotate-0'} />
          </div>
          <ul className={`
              grid gap-3 text-white ml-4 ${showServices ? 'block' : 'hidden'}
              lg:absolute lg:-left-0 lg:top-20 lg:bg-darkblue lg:grid-cols-2 
              `}>
            {
              services?.map((service, key) => (
                <Link 
                  key={key}
                  className="px-4 py-1 hover:bg-darkred hover:cursor-pointer"
                  href={`/${service?.slug.current}`}
                >
                  { service?.title }
                </Link>
              ))
            }
          </ul>
          <Link href={'/'} className="text-white">Nuestros Abogados</Link>
          <LanguageSwitcher lng={lng} />
        </aside>
      </div>
    </nav>
  )
}