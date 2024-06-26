import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'
import { TFunction } from 'i18next'
import Image from 'next/image'
import Logo from '@/public/juridi-k-logo.svg'
import Envelope from '@/public/envelope.svg'
import Telephone from '@/public/telephone.svg'
import Whatsapp from '@/public/whatsapp.svg'

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const FooterBase = ({ t, lng }: Props) => {
  return (
    <footer className='bg-darkblue text-white'>
      <div className='grid gap-4 px-8 py-4 lg:max-w-screen-xl lg:mx-auto'>
        <div className='lg:flex lg:flex-row-reverse lg:justify-evenly lg:mb-4'>
          <div className='lg:max-w-lg lg:grid lg:gap-8'>
            <ul className='flex justify-between'>
              <li className='cursor-pointer'><Image src={Envelope} width={40} height={40} alt='' /></li>
              <li className='cursor-pointer'><Image src={Telephone} width={40} height={40} alt='' /></li>
              <li className='cursor-pointer'><Image src={Whatsapp} width={40} height={40} alt='' /></li>
            </ul>
            <p>JURIDI-K: Helsinki No. 2. Colonia Monte Magno, Xalapa-Veracruz, México. C.P. 91193.</p>
          </div>
          <Image className='mx-auto lg:m-0' src={Logo} width={200} height={200} alt='' />
        </div>
        <p className='lg:text-center'>Todos los derechos reservados JURIDI-K 2024 ®</p>
      </div>
    </footer>
  )
}