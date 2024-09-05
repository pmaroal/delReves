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
        className="flex flex-col gap-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={'/'} className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={isHovered ? back_image : front_image}
              alt={'/camiseta'}
              width={300}
              height={300}
              className="onHover flex rounded-lg object-cover hover:scale-105"
            />{' '}
          </div>
          <MulishText
            text={text}
            className="text-white underline"
            fontSize="24px"
          />
        </Link>
        <MulishText text={price} className="text-white" fontSize="20px" />
      </div>
    </div>
  )
}
