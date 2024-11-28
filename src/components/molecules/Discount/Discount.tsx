import { MulishText } from '@/components/atoms/texts/mulish_text'
import Image from 'next/image'

export default function Discount() {
  return (
    <div className="mx-auto flex max-h-96 w-fit max-w-[550px] flex-col gap-2 border-8 border-green-300 p-3 text-center">
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
        width={150}
        height={150}
        className="onHover mx-auto flex rounded-lg object-cover hover:scale-105"
      />
      <MulishText
        text="¿NO ENCUENTRAS TU TALLA?"
        className="text-white"
        style="w700"
        fontSize="20px"
      />
      <MulishText
        text="ENVÍANOS UN WHATSAPP Y CONSULTA PROXIMA DISPONIBILIDAD"
        className="text-white"
        fontSize="20px"
      />
      <MulishText text="987654321" className="text-green-300" fontSize="20px" />
    </div>
  )
}
