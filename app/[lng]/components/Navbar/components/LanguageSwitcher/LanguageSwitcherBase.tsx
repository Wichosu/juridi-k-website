import Link from 'next/link'
import { languages } from '@/app/i18n/settings'

export const LanguageSwitcherBase = ({ t, lng }) => {
  return (
    <div className='text-white'>
      {languages.map((l) => {
        return (
          <span key={l}>
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </div>
  )
}