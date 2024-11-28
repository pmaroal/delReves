'use client'
import { MulishText } from '@/components/atoms/texts/mulish_text'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  text: string
  price: string
  front_image: string
  back_image: string
}
export default function Product({
  text,
  price,
  front_image,
  back_image,
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <div
        className="flex flex-col gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={'/'} className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={isHovered ? back_image : front_image}
              alt={'/camiseta'}
              width={263}
              height={263}
              className="onHover flex rounded-lg object-cover hover:scale-105"
            />{' '}
          </div>
          <MulishText
            text={text}
            className="text-white hover:underline hover:underline-offset-4"
            fontSize="18px"
          />
        </Link>
        <MulishText text={price} className="text-white" fontSize="20px" />
      </div>
    </div>
  )
}
