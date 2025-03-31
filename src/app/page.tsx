'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BSidesPhilly</span>
              {/* <Image
                alt=""
                src="/bsidesphilly_logo.png"
                className="h-8 w-auto"
                width={600}
                height={600}
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))} */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">BSidesPhilly</span>
                <Image
                  alt=""
                  src="/bsidesphilly_logo.png"
                  className="h-8 w-auto"
                  width={300}
                  height={300}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1">
              <Image
                src="/bsidesphilly_logo.png"
                alt="BSidesPhilly Logo"
                width={600}
                height={600}
                className="relative px-3 py-1"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Friday, 5 Dec 2025
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              <a href="https://philadelphia.livecasinohotel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                Live! Casino & Hotel Philadelphia
              </a>
              <br />
              900 Packer Ave, Philadelphia, PA 19148
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
