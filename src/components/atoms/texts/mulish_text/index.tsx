'use client'
import { Mulish } from 'next/font/google'
import { forwardRef, useEffect, useRef } from 'react'

export const mulish = Mulish({ subsets: ['latin'] })

export interface MulishTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'w400' | 'w700'
  fontSize?: '12px' | '14px' | '16px' | '18px' | '20px' | '24px' | '28px'
  className?: string
}

export const MulishText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  MulishTextProps
>(
  ({
    text,
    tag = 'p',
    style = 'w400',
    fontSize = '14px',
    className = 'text-black',
  }) => {
    const textContent = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text
      }
    }, [text])

    function getSize() {
      switch (fontSize) {
        case '12px':
          return 'text-xs'
        case '14px':
          return 'text-sm'
        case '16px':
          return 'text-base'
        case '18px':
          return 'text-lg'
        case '20px':
          return 'text-xl'
        case '24px':
          return 'text-2xl'
        case '28px':
          return 'text-3xl'
      }
    }

    function getStyle() {
      switch (style) {
        case 'w400':
          return 'font-normal'
        case 'w700':
          return 'font-bold'
      }
    }

    let globalStyle = `${
      mulish.className
    } ${getSize()} leading-normal ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          )
        case 'p':
          return (
            <p ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

MulishText.displayName = 'MulishText'
