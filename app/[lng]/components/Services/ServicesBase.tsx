import { TFunction } from "i18next";
import Link from "next/link";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/client";
import { useParams } from "next/navigation";


interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

const services = [
  "protections",
  "private_equity_advisory",
  "bankruptcy_proceedings_and_restructuring",
  "administrative_law",
  "environmental_law",
  "civil_law",
  "corporate_law",
  "family_right",
  "tax_law",
  "human_rights",
  "labor_law",
  "commercial_law",
  "criminal_law",
  "fusions_and_acquisitions",
  "expertise",
  "intellectual_property",
  "trademark_registrations",
  "social_security",
  "insurance_and_insurers"
]

export const ServicesBase = async ({ t, lng }: Props) => {
  const params = useParams();

  const SERVICES_QUERY = `*[_type == "service" && language == ${params.lng}]{
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

  return (
    <section className="bg-darkblue text-white">
      <div className="px-8 py-4 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-3xl py-4">{ t("title") }</h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-2">
          {
            servicesFetch.map((desc, key) => (
              <div className="
                  uppercase my-3 px-4 py-2 text-xl hover:cursor-pointer bg-darkred
                  lg:w-fit
                "
                key={key}
              >
                {t(desc?.title)}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}