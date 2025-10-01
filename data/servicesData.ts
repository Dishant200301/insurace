
import { Service } from '../types';
import { ICONS } from '../constants';

export const servicesData: Service[] = [
  {
    slug: 'life-insurance',
    title: 'Life Insurance',
    shortDescription: 'Secure your family\'s future with our comprehensive life insurance plans.',
    longDescription: 'Life insurance is a crucial step in planning for your future and the future of your loved ones. Our policies provide a financial safety net, helping to cover expenses like mortgages, college tuition, and other living costs in the event of the unexpected. We offer a variety of plans, including term life and whole life, to fit your specific needs and budget.',
    icon: ICONS.life,
    image: 'https://picsum.photos/1200/800?random=1',
  },
  {
    slug: 'health-insurance',
    title: 'Health Insurance',
    shortDescription: 'Comprehensive health coverage for you and your loved ones.',
    longDescription: 'Stay protected against medical emergencies with our health insurance plans. We offer a wide range of options, from individual plans to family floaters, covering hospitalization, preventive care, and critical illnesses. Our network of hospitals ensures you get the best care without financial worries.',
    icon: ICONS.health,
    image: 'https://picsum.photos/1200/800?random=2',
  },
  {
    slug: 'travel-insurance',
    title: 'Travel Insurance',
    shortDescription: 'Travel with peace of mind. We cover your trips, domestic and international.',
    longDescription: 'Whether you are traveling for business or pleasure, our travel insurance plans have you covered. From trip cancellations and lost baggage to medical emergencies abroad, we provide 24/7 assistance to ensure your journey is smooth and worry-free. Explore the world confidently with InsureCo.',
    icon: ICONS.travel,
    image: 'https://picsum.photos/1200/800?random=3',
  },
  {
    slug: 'business-insurance',
    title: 'Business Insurance',
    shortDescription: 'Protect your business from unforeseen risks and liabilities.',
    longDescription: 'Your business is your biggest asset. Protect it with our comprehensive business insurance solutions. We cover property damage, liability, and business interruption, tailored to the specific needs of your industry. Let us handle the risks so you can focus on growth.',
    icon: ICONS.business,
    image: 'https://picsum.photos/1200/800?random=4',
  },
  {
    slug: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    shortDescription: 'Reliable and affordable insurance for your car, bike, or commercial vehicle.',
    longDescription: 'Get on the road with confidence. Our vehicle insurance policies protect you against accidents, theft, and third-party liabilities. With features like cashless repairs and quick claim settlement, we make sure you and your vehicle are always safe.',
    icon: ICONS.vehicle,
    image: 'https://picsum.photos/1200/800?random=5',
  },
];
