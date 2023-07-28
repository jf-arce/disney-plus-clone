import { Link } from "react-router-dom"

export const MovieDetailNav = () => {
  return (
    <nav className="mt-10 nav-movieDetail relatives">
        <ul className="flex gap-10 text-xl font-bold">
            <li>
                <Link to="">SUGERENCIAS</Link>
            </li>
            <li>
                <Link to="">EXTRAS</Link>
            </li>
            <li>
                <Link to="">VERSIONES</Link>
            </li>
            <li>
                <Link to="">DETALLES</Link>
            </li>
        </ul>
    </nav>
  )
}
