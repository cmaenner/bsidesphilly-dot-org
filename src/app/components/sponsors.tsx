import Image from "next/image";
import { sponsors } from "@/app/sponsor/data";

export default function Sponsors() {
  return (
    <div className="bg-[rgba(74,187,24,0.8)] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Thank you to our 2025 Sponsors!
          </h2>
        </div>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div className="bg-black p-8 sm:p-10 flex flex-col items-center relative" key={sponsor.name}>
              <a 
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Image
                  alt={sponsor.name}
                  src={sponsor.image}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </a>
              <div className={`mt-4 w-full`}>
                <span className={`block w-full px-4 py-2 rounded-b-lg text-sm font-extrabold uppercase tracking-widest text-center shadow-md
                  ${
                    sponsor.tier === 'Gold' ? 'bg-yellow-400 text-yellow-900' :
                    sponsor.tier === 'Silver' ? 'bg-gray-300 text-gray-800' :
                    sponsor.tier === 'Bronze' ? 'bg-amber-600 text-white' :
                    'bg-[#4CBB17] text-white'
                  }
                `}>
                  {sponsor.tier}
                </span>
              </div>
              {/* <div className="mb-2 text-xs font-semibold text-center text-white opacity-80">
                {sponsor.name}
              </div> */}
            </div>
          ))}
          {/* <div className="bg-black p-6 sm:p-10">
            <Image
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="bg-black p-6 sm:p-10">
            <Image
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="bg-black p-6 sm:p-10">
            <Image
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="bg-black p-6 sm:p-10">
            <Image
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="bg-black p-6 sm:p-10">
            <Image
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
