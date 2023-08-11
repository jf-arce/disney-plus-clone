import { Link } from "react-router-dom"

export const ButtonPrimary = ({url,text}) => {
  return (
    <Link to={url} className={`text-[#f9f9f9] bg-[#6421ff] flex items-center justify-center py-5 w-full rounded-[4px] text-[18px] text-center hover:bg-[#783eff] transition-colors`}>
        {text}
    </Link>
  )
}
