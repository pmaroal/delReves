import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Image
        src={
          process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/home/logo_home.avif'
        }
        width={270}
        height={197}
        alt={''}
        className="object-cover"
      />
      <div className="flex min-h-[560px] w-full">
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/home/fondo_home.avif'
          }
          width={1920}
          height={1000}
          alt={''}
          className="w-full object-cover"
        />
      </div>
    </main>
  )
}
