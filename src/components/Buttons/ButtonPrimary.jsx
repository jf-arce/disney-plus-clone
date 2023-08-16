import { Link } from "react-router-dom"

export const ButtonPrimary = ({url,text,className,onClick}) => {
  return (
    <Link to={url} className={`${className} text-[#f9f9f9] flex items-center justify-center h-full w-full rounded-[4px] text-[17px] text-center transition-colors duration-300 uppercase`}
    onClick={onClick}
    >
      {text}
    </Link>
  )
}
