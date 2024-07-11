"use client"
import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Layout } from '../components/Layout/Layout'
import { sanityFetch } from '@/sanity/lib/client'
import { SanityDocument } from 'next-sanity'
import { useEffect, useState } from 'react'
import { PortableText } from 'next-sanity'
import { Accordion } from './components/Accordion/client'

interface Props {
  params: { lng: string, slug: string}
}

export default function Page({ params: { lng, slug } }: Props) {
  const [service, setService] = useState<SanityDocument[]>()

  useEffect(() => {
    let isFetched = false

    const fetchData = async () => {
      const FETCH_QUERY = `*[_type == "service" && language == "${lng}" && slug.current == "${slug}"]{
        _id,
        title,
        description,
        details,
        slug,
        language,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          description,
          details,
          slug,
          language
        },
      }`;

      const fetchService = await sanityFetch<SanityDocument[]>({query: FETCH_QUERY})

      if(!isFetched) {
        setService(fetchService)
      }
    }

    fetchData()
      .catch(console.error)

    return () => {
      isFetched = true
    }
  }, [])

  return (
    <Layout lng={lng}>
      {
        service?.map((service, key) => (
          //wrapper
          <div key={key} className='px-8 py-4 grid gap-6 lg:max-w-3xl lg:mx-auto'>
            <div className='grid gap-4'>
              <h1 className='text-4xl font-bold lg:text-center'>{service?.title}</h1>
              <PortableText value={service?.description} />
            </div>
            <h2 className='text-4xl font-bold lg:text-center'>Ofrecemos</h2>
            {
              service?.details.map((detail: any, key: number) => (
                <Accordion name={detail?.title} portableText={detail?.description} key={key} />
              ))
            }
          </div>
        ))
      }
    </Layout>
  )
}