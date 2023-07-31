import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-[#0e0b14] relative w-full z-[100]">
        <div className="max-w-[600px] flex flex-col items-center justify-center p-5 gap-3 text-[12px]">
            <div className="bg-[url('/assets/img/logo.svg')] min-h-[48px] min-w-[79px] bg-no-repeat bg-cover bg-center"></div>
            <div>
                <ul className="flex flex-wrap gap-5 items-center justify-center text-[#f9f9f9]">
                    <li>
                        <Link>Politica de privacidad</Link>
                    </li>
                    <li>
                        <Link>Acuerdo de suscripcion</Link>
                    </li>
                    <li>
                        <Link>Cancelar Suscripcion</Link>
                    </li>
                    <li>
                        <Link>Ayuda</Link>
                    </li>
                    <li>
                        <Link>Dispositivos compatibles</Link>
                    </li>
                    <li>
                        <Link>Acerca de Disney+</Link>
                    </li>
                    <li>
                        <Link>Publicidad personalizada</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-[#cacaca] text-center max-w-md">
                    Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad.
                    El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) 
                    Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1.
                </p>
            </div>
            <div>
                <p className="text-[#cacaca]">© Replica de Disney+ by Jose Francisco Arce.</p>
            </div>
        </div>
    </footer>
  )
}
