import { TFunction } from "i18next";

interface Props {
  t: TFunction
  lng: string
}

export const ContactUsBase = ({ t, lng }: Props) => {
  return (
    <div className="bg-darkblue grid gap-4 px-8 py-4">
      <h1 className="text-white text-3xl">{ t("title") }</h1>
      <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("name") } />
      <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("email") } />
      <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("phone") } />
      <textarea className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" rows={6} placeholder={ t("message") }></textarea>
      <button className="w-full mx-auto bg-darkred text-white px-4 py-2 uppercase">{ t("submit") }</button>
    </div>
  )
}