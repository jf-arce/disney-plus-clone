import { Link } from "react-router-dom"
import './NavSection.css'

export const NavSection = ({children,icon,url}) => {

  return (
    <li className="py-[16px] px-[25px] flex items-center justify-center gap-3 z-10">
      {icon}
      <Link to={url} className={`uppercase underline-hover text-[14px]`}>{children}</Link>
    </li>
  )
}
