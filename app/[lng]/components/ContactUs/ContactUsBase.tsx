import { TFunction } from "i18next";

interface Props {
  t: TFunction
  lng: string
}

export const ContactUsBase = ({ t, lng }: Props) => {
  return (
    <form className="bg-darkblue">
      <div className="grid gap-4 px-8 py-4 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-white text-3xl lg:text-center">{ t("title") }</h1>
        <div className="flex flex-col gap-4 lg:flex-row ">
          <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("name") } />
          <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("email") } />
          <input className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" placeholder={ t("phone") } />
        </div>
        <textarea className="bg-neutral-300 px-4 py-2 w-full rounded-t-sm border-b-2 border-b-neutral-400" rows={6} placeholder={ t("message") }></textarea>
        <button className="
            w-full mx-auto bg-darkred text-white px-4 py-2 uppercase 
            lg:w-fit lg:px-16
          "
        >
          { t("submit") }
        </button>
      </div>
    </form>
  )
}