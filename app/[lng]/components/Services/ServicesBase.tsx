import { TFunction } from "i18next";
import Link from "next/link";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const ServicesBase = ({ t, lng }: Props) => {
  const [services, setServices] = useState<SanityDocument[]>()

  useEffect(() => {
    let alreadyFetched = false;

    const fetchData = async () => {
      const SERVICES_QUERY = `*[_type == "service" && language == "${lng}"]{
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

      const servicesFetch = await sanityFetch<SanityDocument[]>({query: SERVICES_QUERY})

      if(!alreadyFetched) {
        setServices(servicesFetch)
      }
    }

    fetchData()
      .catch(console.error)

    return () => {
      alreadyFetched = true
    }
  }, [])

  return (
    <section className="bg-darkblue text-white">
      <div className="px-8 py-4 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-3xl py-4">{ t("title") }</h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-2">
          {
            //make proper type for desc (sanity document type service)
            services?.map((desc: any, key) => (
              <Link className="
                  uppercase my-3 px-4 py-2 text-xl hover:cursor-pointer bg-darkred
                  lg:w-fit
                "
                key={key}
                href={`/${desc.title}`}
              >
                {t(desc?.title)}
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}