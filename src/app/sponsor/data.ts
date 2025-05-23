export type TierName = 'VIP' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | "Ben's Bash Exclusive" | 'Friends of Ben' | "What's in Your Pocket" | 'Sustainer';

export interface Tier {
  name: TierName;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: Record<string, string>;
  highlights: string[];
}

export const pricing = {
  tiers: [
    {
      name: 'VIP',
      id: 'tier-vip',
      href: '#',
      featured: true,
      description: 'Maximum visibility and premium benefits',
      price: { onetime: '$10,000' },
      highlights: [
        'Maximum visibility placement on venue marquee',
        'Premium table space (two 6ft tables)',
        'Top placement on all banners and materials',
        'Exclusive logo placement on BSides Philly swag',
        'Mentioned in Opening Ceremonies',
        '10 Sponsor/Participant combo badges',
        'One Signature Suite hotel room'
      ],
    },
    {
      name: 'Platinum',
      id: 'tier-platinum',
      href: '#',
      featured: false,
      description: 'Most Popular Package',
      price: { onetime: '$7,500' },
      highlights: [
        'Premium table space (two 6ft tables)',
        'Priority banner placement',
        'Logo placement on BSides Philly swag',
        'Mentioned in Opening Ceremonies',
        '7 Sponsor/Participant combo badges',
        'One deluxe hotel room'
      ],
    },
    {
      name: 'Gold',
      id: 'tier-gold',
      href: '#',
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
      href: '#',
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
      href: '#',
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
      href: '#',
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
      href: '#',
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
      href: '#',
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
      href: '#',
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

export const sponsors = [
  {
    name: 'AlgoSec',
    image: '/sponsors/algosec.svg',
    url: 'https://www.algosec.com',
    tier: 'Gold',
  },
  {
    name: 'Securely Built',
    image: '/sponsors/securelybuilt.svg',
    url: 'https://www.securelybuilt.com',
    tier: 'Silver',
  },
  {
    name: 'Coursestack',
    image: '/sponsors/coursestack.svg',
    url: 'https://www.coursestack.com/',
    tier: 'Bronze',
  },
  {
    name: 'Buckhorn Consulting',
    image: '/sponsors/buckhornconsulting.svg',
    url: 'https://buckhornconsulting.com',
    tier: 'Bronze',
  },
]

export const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '/about' },
  { name: 'Sponsor', href: '/sponsor' },
  { name: 'Sponsor Kit', href: '/2025-sponsor-kit.pdf' },
]

export const companyName = 'BSides Philly'
export const companyAddress = '900 Packer Ave, Philadelphia, PA 19148'
export const companyPhone = '+1 (215) 413-4800'
export const companyEmail = 'info@bsidesphilly.com'
export const companyWebsite = 'https://bsidesphilly.com'
export const currentYear = new Date().getFullYear()