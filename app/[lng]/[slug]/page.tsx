"use client"
import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Layout } from '../components/Layout/Layout'

interface Props {
  params: { lng: string}
}

export default function Page({ params: { lng } }: Props) {
  console.log(lng)

  return (
    <Layout lng={lng}>
      <div>hello</div>
    </Layout>
  )
}