import { TFunction } from "i18next";

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

export const ServicesBase = ({ t, lng }) => {
  return (
    <section className="bg-darkblue text-white px-8 py-4">
      <h1 className="text-3xl py-4">{ t("title") }</h1>
      {
        services.map(desc => (
          <div className="uppercase my-3 px-4 py-2 text-xl hover:cursor-pointer bg-darkred">{t(desc)}</div>
        ))
      }
    </section>
  )
}