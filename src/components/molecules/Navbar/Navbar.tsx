'use client'

import { NavbarArrow } from '@/components/atoms/svg/NavbarArrow'
import { NavbarLines } from '@/components/atoms/svg/NavbarLines'
import { Facebook } from '@/components/atoms/svg/facebook'
import { Instagram } from '@/components/atoms/svg/instagram'
import { MulishText } from '@/components/atoms/texts/mulish_text'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setisOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [contactPage, setContactPage] = useState<boolean>(false)

  useEffect(() => {
    setContactPage(pathname.split('/').includes('contacto'))
  }, [contactPage, pathname])

  useEffect(() => {
    const onScroll = () => {
      if (contactPage) {
        setScroll(true)
      } else if (window.scrollY === 0) {
        setScroll(false) // User is at the top of the page
      } else {
        setScroll(true) // User is not at the top of the page
      }
    }

    const onPageLoad = () => {
      if (contactPage) {
        setScroll(true)
      } else if (window.scrollY === 0) {
        setScroll(false) // User is at the top of the page
      } else {
        setScroll(true) // User is not at the top of the page
      }
    }

    onPageLoad() // Call onPageLoad to set initial scroll state on page load

    window.addEventListener('scroll', onScroll)
    window.addEventListener('load', onPageLoad) // Listen for page load
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', onPageLoad)
    }
  }, [contactPage])
  //Create function to block scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`onHoverLong fixed top-0 z-40 h-fit w-full px-4 sm:px-6 ${scroll ? 'bg-black py-2' : 'bg-transparent pb-1 pt-3'}`}
      >
        <section
          className={`mx-auto flex h-fit w-full max-w-8xl justify-between`}
        >
          {/* Menú  + idioma*/}
          <div className="flex flex-row items-center gap-4 sm:gap-8">
            <button
              onClick={() => setisOpen(!isOpen)}
              className="z-50 flex h-fit"
            >
              <NavbarLines />
            </button>
            {/* Lenguaje */}
          </div>
          {/* Logo */}
          <div>
            <Link href={'/'}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGES_PATH +
                  '/images/home/logo_navbar.avif'
                }
                alt="long beach club logo"
                width={25}
                height={20}
                unoptimized
              />
            </Link>
          </div>
          {/* boton de reserva */}
        </section>
      </nav>
      <div
        onClick={() => setisOpen(false)}
        className={`bg-dark-blue/50 fixed inset-0 z-40 h-screen w-full backdrop-blur-sm ${isOpen ? 'block' : 'hidden'}`}
      />
      {/* Menu */}
      <div
        className={`onHover fixed left-0 z-40 flex h-dvh w-full bg-black/90 sm:w-[504px] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Content */}
        <div className="bg-orange relative flex h-full w-full flex-col justify-between">
          {/* Close button */}
          <div className="absolute top-0 mt-10 flex w-full justify-end md:pt-10 xl:pt-16">
            <button
              onClick={() => setisOpen(!isOpen)}
              className="z-50 mr-6 flex size-4 items-center justify-center self-end sm:mr-12"
            >
              <NavbarArrow color="white" className="rotate-90" />
            </button>
          </div>
          {/* Logo */}
          <div className="flex h-full max-h-[250px] items-center justify-center pt-5">
            <Link href={'/'} className="h-fit">
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGES_PATH +
                  '/images/home/logo_home.avif'
                }
                alt="long beach club logo"
                width={144}
                height={64}
                unoptimized
              />
            </Link>
          </div>
          {/* Options */}
          <div className="flex h-full max-h-[500px] flex-col justify-between gap-3 px-8 pb-6 sm:px-16">
            <Link
              href={'/'}
              onClick={() => {
                setisOpen(false)
              }}
              className="flex justify-between"
            >
              <div className="flex w-fit flex-row gap-2">
                <MulishText
                  text={'Option'}
                  fontSize="16px"
                  style={'w400'}
                  className={'onHover text-white hover:scale-105'}
                />
              </div>
            </Link>
            <Link
              href={'/contact'}
              onClick={() => setisOpen(false)}
              className="flex justify-between"
            ></Link>
          </div>

          {/* Legal Links */}

          <div className="flex w-full px-8 pb-16 pt-6 sm:px-16">
            <div className="flex w-full flex-row items-end justify-between border-t border-white sm:border-none">
              {/* Bottom left */}
              <div className="flex flex-col gap-2 pt-4">
                <Link href={'/cookies'}>
                  <MulishText
                    text={'COOKIES'}
                    fontSize="12px"
                    className="onHover text-white underline hover:scale-105"
                  />
                </Link>
                <Link href={'/legal-terms'}>
                  <MulishText
                    text="AVISO LEGAL"
                    fontSize="12px"
                    className="onHover text-white underline hover:scale-105"
                  />
                </Link>
                <Link href={'/privaty_politics'}>
                  <MulishText
                    text="POLÍTICA DE PRIVACIDAD"
                    fontSize="12px"
                    className="onHover text-white underline hover:scale-105"
                  />
                </Link>
              </div>
              {/* Bottom right */}
              <div className="flex flex-col items-end gap-2">
                {/* facebook and instagram icon */}
                <div className="flex gap-4">
                  <Link href="https://www.facebook.com">
                    <Facebook
                      color="white"
                      className="onHover m-auto hover:scale-110"
                    />
                  </Link>
                  <Link href="https://www.instagram.com">
                    <Instagram
                      color="white"
                      className="onHover m-auto hover:scale-110"
                    />
                  </Link>
                </div>
                {/* phone and email */}
                <Link href="tel:928000000">
                  <MulishText
                    text="928 000 000"
                    fontSize="12px"
                    className="onHover text-white underline hover:scale-105"
                  />
                </Link>
                <Link href="mailto:email@email.com">
                  <MulishText
                    text="EMAIL@EMAIL.COM"
                    fontSize="12px"
                    className="onHover text-white underline hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
