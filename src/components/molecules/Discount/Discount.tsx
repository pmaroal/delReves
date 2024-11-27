import { MulishText } from '@/components/atoms/texts/mulish_text'
import Image from 'next/image'

export default function Discount() {
  return (
    <div className="mx-auto flex max-h-96 w-fit max-w-[550px] flex-col gap-3 border-8 border-green-500 p-3">
      <MulishText
        text="¿POR QUÉ ELEGIR UNA, SI PUEDES LLEVAR DOS?"
        className="text-white"
        fontSize="20px"
      />
      <MulishText
        text="DESCUBRE TU DESCUENTO ELIGIENDO CAMISETA CON DISEÑO + CAMISETA SIN DISEÑO"
        className="text-white"
        fontSize="20px"
      />
      <Image
        src="/images/home/logo_home.avif"
        alt={'logo'}
        width={300}
        height={300}
        className="onHover flex rounded-lg object-cover hover:scale-105"
      />
      <MulishText
        text="¿NO ENCUENTRAS TU TALLA"
        className="text-white"
        fontSize="20px"
      />
      <MulishText
        text="ENVÍANOS UN WHATSAPP Y CONSULTA PROXIMA DISPONIBILIDAD"
        className="text-white"
        fontSize="20px"
      />
      <MulishText text="987654321" className="text-white" fontSize="20px" />
    </div>
  )
}
