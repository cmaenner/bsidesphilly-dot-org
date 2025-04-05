'use client'
import Image from 'next/image'
import Header from '@/app/components/headers'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="sm:mb-8 flex justify-center">
            <div className="relative flex justify-center">
              <Image
                src="/bsidesphilly_logo.png"
                alt="BSidesPhilly Logo"
                width={600}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Friday, 5 Dec 2025
            </h1>
            <br />
            <br />
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-[#4CBB17] sm:text-4xl">
              Details coming soon!
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              <a href="https://philadelphia.livecasinohotel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                Live! Casino & Hotel Philadelphia
              </a>
              <br />
              900 Packer Ave, Philadelphia, PA 19148
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sponsor"
                className="rounded-md bg-[#4CBB17] px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#3da913] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CBB17]"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
