import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'
import Image from 'next/image'
import Logo from '@/public/juridi-k-logo.svg'
import Envelope from '@/public/envelope.svg'
import Telephone from '@/public/telephone.svg'
import Whatsapp from '@/public/whatsapp.svg'

export const FooterBase = ({ t, lng }) => {
  return (
    <footer className='grid gap-4 px-8 py-4 bg-darkblue text-white'>
      <ul className='flex justify-between'>
        <li><Image src={Envelope} width={40} height={40} alt='' /></li>
        <li><Image src={Telephone} width={40} height={40} alt='' /></li>
        <li><Image src={Whatsapp} width={40} height={40} alt='' /></li>
      </ul>
      <p>JURIDI-K: Helsinki No. 2. Colonia Monte Magno, Xalapa-Veracruz, México. C.P. 91193.</p>
      <Image className='mx-auto' src={Logo} width={200} height={200} alt='' />
      <p>Todos los derechos reservados JURIDI-K 2024 ®</p>
    </footer>
  )
}