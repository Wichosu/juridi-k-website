import Link from 'next/link'
import { languages } from '@/app/i18n/settings'
import { TFunction } from 'i18next'

interface Props {
  t: TFunction
  lng: string
}

export const LanguageSwitcherBase = ({ t, lng }: Props) => {
  return (
    <div className='text-white flex gap-2'>
      {languages.filter(l => l !== lng).map((l, index) => {
        return (
          <span key={l} className='flex gap-2'>
            <Link href={`/${l}`}>
              {t(l)}
            </Link>
            { index == 0 ? <div>|</div> : null}
          </span>
        )
      })}
    </div>
  )
}