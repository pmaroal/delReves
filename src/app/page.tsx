import { Buy } from '@/components/atoms/svg/buy'
import { Search } from '@/components/atoms/svg/search'
import Navbar from '@/components/molecules/Navbar/Navbar'
import Product from '@/components/molecules/Product/Product'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  const products = [
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image: '/images/camiseta_clasica/clasica_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image: '/images/camiseta_clasica/clasica_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image:
        '/images/camiseta_clasica/clasica_green_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image:
        '/images/camiseta_clasica/clasica_most_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image:
        '/images/camiseta_clasica/clasica_purple_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image: '/images/camiseta_clasica/clasica_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image: '/images/camiseta_clasica/clasica_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image:
        '/images/camiseta_clasica/clasica_purple_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image:
        '/images/camiseta_clasica/clasica_purple_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
    {
      text: 'Camiseta clásica',
      price: '20 €',
      front_image: '/images/camiseta_clasica/clasica_front_logo_green.avif',
      back_image: '/images/camiseta_clasica/clasica_back_logo_green.avif',
    },
  ]
  return (
    <main className="flex min-h-screen flex-col gap-2">
      {/* Top image */}
      <div className="flex h-20 w-full">
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/home/fondo_home.avif'
          }
          width={1920}
          height={200}
          alt={''}
          className="w-full object-cover opacity-25"
        />
      </div>
      <Navbar />
      <div className="mx-auto flex w-[1328px] justify-between border-b-2 pb-2">
        {/* Logo */}
        <Link href={'/'} className="onHover h-fit w-fit hover:scale-105">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH +
              '/images/home/logo_home.avif'
            }
            width={270}
            height={197}
            alt={''}
            className="object-cover"
          />
        </Link>
        {/* Buy and Search */}
        <div className="flex flex-row items-center gap-6">
          <Link href={'/'} className="onHover h-fit w-fit hover:scale-105">
            <Search />
          </Link>
          <Link href={'/'} className="onHover h-fit w-fit hover:scale-105">
            <Buy />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto flex max-w-[1328px] justify-center">
        {/* Products */}
        <div className="flex w-fit flex-wrap gap-8">
          {products.map((product, index) => (
            <Product
              text={product.text}
              price={product.price}
              front_image={product.front_image}
              back_image={product.back_image}
              key={index}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
