'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import Header from '@/app/components/headers'
import Footer from '@/app/components/footer'
type TierName = 'VIP' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | "Ben's Bash Exclusive" | 'Friends of Ben' | "What's in Your Pocket" | 'Sustainer';

interface Tier {
  name: TierName;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: Record<string, string>;
  highlights: string[];
}

const pricing = {
  tiers: [
    {
      name: 'VIP',
      id: 'tier-vip',
      href: 'https://buy.stripe.com/3cseWg8h3e4zeeQeUV',
      featured: false,
      description: 'Maximum visibility and premium benefits',
      price: { onetime: '$10,000' },
      highlights: [
        'Maximum visibility placement on venue marquee',
        'Premium table space (two 6ft tables)',
        'Top placement on all banners and materials',
        'Exclusive logo placement on BSides Philly swag',
        'Mentioned in Opening Ceremonies',
        '10 Sponsor/Participant combo badges',
        [
          'One Signature Suite hotel room',
          'Early Bird Bonus: Get an additional deluxe room with full payment by June 30, 2025'
        ]
      ],
    },
    {
      name: 'Platinum',
      id: 'tier-platinum',
      href: 'https://buy.stripe.com/9AQ01m8h3f8DfiU4gi',
      featured: true,
      description: 'Most Popular Package',
      price: { onetime: '$7,500' },
      highlights: [
        'Premium table space (two 6ft tables)',
        'Priority banner placement',
        'Logo placement on BSides Philly swag',
        'Mentioned in Opening Ceremonies',
        '7 Sponsor/Participant combo badges',
        [
          'One deluxe hotel room',
          'Early Bird Bonus: Get an additional deluxe room with full payment by June 30, 2025'
        ]
      ],
    },
    {
      name: 'Gold',
      id: 'tier-gold',
      href: 'https://buy.stripe.com/9AQdScdBn7GbfiU6or',
      featured: false,
      description: 'Premium visibility and benefits',
      price: { onetime: '$5,000' },
      highlights: [
        'Table space (one 6ft table)',
        'Logo on website, signage, and materials',
        'Optional 5 minutes to address attendees',
        'Company profile in BSides Zine',
        '4 Sponsor/Participant combo badges'
      ],
    },
    {
      name: 'Silver',
      id: 'tier-silver',
      href: 'https://buy.stripe.com/6oE15q8h37Gb3Ac5ko',
      featured: false,
      description: 'Enhanced visibility package',
      price: { onetime: '$2,500' },
      highlights: [
        'Table space (one 6ft table)',
        'Logo on website, signage, and banners',
        'Company profile in online program',
        '3 Sponsor/Participant combo badges'
      ],
    },
    {
      name: 'Bronze',
      id: 'tier-bronze',
      href: 'https://buy.stripe.com/cN2cO840N9Oj4EgcMR',
      featured: false,
      description: 'Basic sponsorship package',
      price: { onetime: '$1,250' },
      highlights: [
        'Table space (one 6ft table)',
        'Logo on event website',
        'Company profile in online program',
        '2 Sponsor/Participant combo badges'
      ],
    },
    {
      name: "Ben's Bash Exclusive",
      id: 'tier-bens-bash',
      href: 'https://buy.stripe.com/5kAdSc68V7Gb5Ik7sy',
      featured: true,
      description: 'Exclusive after-party sponsorship',
      price: { onetime: '$6,000' },
      highlights: [
        'Exclusive Sponsor Banner at Centre Bar after-party',
        'Premium table space (two 6ft tables)',
        'Priority placement as exclusive after-party sponsor',
        'One deluxe hotel room',
        '5 Sponsor/Participant combo badges'
      ],
    },
    {
      name: 'Friends of Ben',
      id: 'tier-friends',
      href: 'https://buy.stripe.com/28o01mcxj1hNgmY3cj',
      featured: false,
      description: 'Support package with exclusive swag',
      price: { onetime: '$500' },
      highlights: [
        'Exclusive BSides Philly swag',
        '2025 BSides Philly Challenge Coin',
        'Logo on event website',
        'Verbal recognition'
      ],
    },
    {
      name: "What's in Your Pocket",
      id: 'tier-pocket',
      href: 'https://buy.stripe.com/7sIaG0fJvd0v0o0aEM',
      featured: false,
      description: 'Basic support package',
      price: { onetime: '$100' },
      highlights: [
        '2025 BSides Philly Challenge Coin',
        'Logo on event website',
        'Verbal recognition'
      ],
    },
    {
      name: 'Sustainer',
      id: 'tier-sustainer',
      href: 'https://buy.stripe.com/dR69BW7cZaSneeQcMV',
      featured: false,
      description: 'Monthly support option',
      price: { onetime: '$25', monthly: '$25' },
      highlights: [
        '1 event entry badge',
        '2025 BSides Philly Challenge Coin',
        'Logo on event website',
        'Verbal recognition'
      ],
    },
  ] as Tier[],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-[#4CBB17]">BSides Philly 2025</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Sponsorship Packages
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Choose a sponsorship package that best aligns with your goals for engaging with the BSides Philly community.
          </p>

          {/* Main tier section */}
          <div className="isolate mx-auto mt-10 grid max-w-none gap-8 lg:grid-cols-5">
            {pricing.tiers
              .filter(tier => ['VIP', 'Platinum', 'Gold', 'Silver', 'Bronze'].includes(tier.name))
              .map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? 'ring-2 ring-[#4CBB17]' : 'ring-1 ring-gray-700',
                    'rounded-3xl p-6 bg-gray-900 flex flex-col h-full relative'
                  )}
                >
                  {tier.featured && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-[#4CBB17] px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-[#4CBB17]/50">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.featured ? 'text-[#4CBB17]' : 'text-white',
                        'text-lg/8 font-semibold'
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-4 text-sm/6 text-gray-400 min-h-[48px]">{tier.description}</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-white">{tier.price.onetime}</span>
                      <span className="text-sm/6 font-semibold text-gray-400">USD</span>
                    </p>
                    {Array.isArray(tier.highlights[tier.highlights.length - 1]) && (
                      <div className="mt-4 text-[#4CBB17] text-sm font-medium border border-[#4CBB17]/30 rounded-md px-3 py-2">
                        Early Bird Bonus: Get an additional deluxe room with full payment by June 30, 2025
                      </div>
                    )}
                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300">
                      {tier.highlights.map((feature) => (
                        <li key={Array.isArray(feature) ? feature[0] : feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#4CBB17]" />
                          <span className="flex-1">
                            {Array.isArray(feature) ? feature[0] : feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby={tier.id}
                    className={classNames(
                      'bg-[#4CBB17] text-white shadow-xs hover:bg-[#3da913]',
                      'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CBB17]'
                    )}
                  >
                    Sponsor package
                  </a>
                </div>
              ))}
          </div>

          {/* Additional tiers section */}
          <div className="isolate mx-auto mt-16 grid max-w-none gap-8 lg:grid-cols-4">
            {pricing.tiers
              .filter(tier => ["Ben's Bash Exclusive", 'Friends of Ben', "What's in Your Pocket", 'Sustainer'].includes(tier.name))
              .map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? 'ring-2 ring-[#4CBB17]' : 'ring-1 ring-gray-700',
                    'rounded-3xl p-6 bg-gray-900 flex flex-col h-full relative'
                  )}
                >
                  {tier.name === "Ben's Bash Exclusive" && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-[#4CBB17] px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-[#4CBB17]/50">
                        After-Party
                      </span>
                    </div>
                  )}
                  {tier.name === 'Friends of Ben' && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-[#4CBB17] px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-[#4CBB17]/50">
                        New
                      </span>
                    </div>
                  )}
                  {tier.name === 'Sustainer' && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-[#4CBB17] px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-[#4CBB17]/50">
                        Monthly Support
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.featured ? 'text-[#4CBB17]' : 'text-white',
                        'text-lg/8 font-semibold'
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-4 text-sm/6 text-gray-400 min-h-[48px]">{tier.description}</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-white">{tier.price.onetime}</span>
                      <span className="text-sm/6 font-semibold text-gray-400">USD</span>
                    </p>
                    {Array.isArray(tier.highlights[tier.highlights.length - 1]) && (
                      <div className="mt-4 text-[#4CBB17] text-sm font-medium border border-[#4CBB17]/30 rounded-md px-3 py-2">
                        🎁 Early Bird Bonus: Get an additional deluxe room with full payment by June 30, 2025
                      </div>
                    )}
                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300">
                      {tier.highlights.map((feature) => (
                        <li key={Array.isArray(feature) ? feature[0] : feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#4CBB17]" />
                          <span className="flex-1">
                            {Array.isArray(feature) ? feature[0] : feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby={tier.id}
                    className={classNames(
                      'bg-[#4CBB17] text-white shadow-xs hover:bg-[#3da913]',
                      'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CBB17]'
                    )}
                  >
                    Sponsor package
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
