
import { Blog, Testimonial, TeamMember, HeroSlide } from '../types';

export const blogsData: Blog[] = [
  {
    slug: 'understanding-life-insurance',
    title: 'A Beginner\'s Guide to Understanding Life Insurance',
    author: 'John Doe',
    date: 'October 26, 2023',
    excerpt: 'Life insurance can seem complex, but it\'s a vital tool for financial planning. This guide breaks down the basics to help you make an informed decision.',
    content: `
      <p class="mb-4">Life insurance is fundamentally a contract between you and an insurance company. In exchange for your premium payments, the insurer pays a lump-sum "death benefit" to your beneficiaries upon your death. This financial protection is critical for anyone with dependents.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">Types of Life Insurance</h3>
      <p class="mb-4">There are two main types: Term Life and Whole Life. Term life insurance covers you for a specific period (the "term"), like 10, 20, or 30 years. It's generally more affordable and is a great option for covering specific financial responsibilities, like a mortgage or your children's education. Whole life insurance, on the other hand, provides lifelong coverage and includes an investment component known as "cash value," which grows over time.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">Why It Matters</h3>
      <p>Choosing the right policy ensures that your family can maintain their standard of living, pay off debts, and fund future goals even if you're no longer there to provide for them. It's not just about protecting them from loss; it's about securing their future.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=11',
  },
  {
    slug: 'top-5-health-insurance-tips',
    title: 'Top 5 Tips for Choosing the Right Health Insurance Plan',
    author: 'Jane Smith',
    date: 'October 20, 2023',
    excerpt: 'Navigating the world of health insurance can be overwhelming. Here are five essential tips to help you select a plan that fits your needs and budget.',
    content: `
      <p class="mb-4">Choosing a health insurance plan is one of the most important decisions you'll make for your well-being. Here’s how to get it right.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">1. Understand Your Needs</h3>
      <p class="mb-4">Assess your health status, how often you visit a doctor, and any prescription drugs you take. A young, healthy individual might opt for a high-deductible plan, while someone with a chronic condition may need more comprehensive coverage.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">2. Compare Premiums, Deductibles, and Out-of-Pocket Maximums</h3>
      <p class="mb-4">Don't just look at the monthly premium. Consider the deductible (what you pay before insurance kicks in) and the out-of-pocket maximum (the most you'll pay in a year). A low premium might come with a high deductible, so find a balance that works for you.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">3. Check the Network</h3>
      <p>Ensure your preferred doctors and hospitals are in the plan's network to avoid high out-of-network costs.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">4. Review Prescription Drug Coverage</h3>
      <p>Check the plan's formulary (list of covered drugs) to ensure your medications are included and affordable.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">5. Read the Fine Print</h3>
      <p>Understand the coverage for specific services, exclusions, and limitations before you enroll.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=12',
  },
  {
    slug: 'travel-insurance-myths-debunked',
    title: 'Travel Insurance Myths Debunked',
    author: 'Alex Johnson',
    date: 'October 15, 2023',
    excerpt: 'Many people skip travel insurance due to common misconceptions. We\'re here to set the record straight on why it\'s an essential part of any trip.',
    content: `
      <p class="mb-4">Let's debunk some common myths about travel insurance.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">Myth 1: "It's too expensive."</h3>
      <p class="mb-4">Fact: Travel insurance is surprisingly affordable, typically costing just a small fraction of your total trip expenses. The cost of a single medical emergency abroad can be financially devastating, making insurance a worthwhile investment.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">Myth 2: "My credit card has me covered."</h3>
      <p class="mb-4">Fact: While some credit cards offer basic travel protection, it's often limited. It may not cover medical emergencies, trip cancellations for all reasons, or provide 24/7 assistance. A dedicated travel insurance policy offers far more comprehensive protection.</p>
      <h3 class="text-2xl font-bold mb-2 mt-6">Myth 3: "I'm healthy, I don't need it."</h3>
      <p>Fact: Accidents and illnesses can happen to anyone, anywhere. Your domestic health plan may not cover you overseas. Travel insurance is for the unexpected, from a sudden illness to a canceled flight.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=13',
  },
];

export const testimonialsData: Testimonial[] = [
    {
        quote: "InsureCo made the process of getting life insurance simple and clear. Their advisors are knowledgeable and genuinely caring. I feel secure knowing my family is protected.",
        author: "Sarah L.",
        company: "Marketing Director"
    },
    {
        quote: "The claim settlement for my car insurance was incredibly fast and hassle-free. The customer support team was with me every step of the way. Highly recommended!",
        author: "Michael B.",
        company: "Software Engineer"
    },
    {
        quote: "As a frequent traveler, their travel insurance is a must-have. It's comprehensive, affordable, and gives me complete peace of mind on my journeys.",
        author: "Jessica T.",
        company: "Freelance Photographer"
    }
];

export const teamData: TeamMember[] = [
    { name: "Eleanor Vance", role: "Chief Executive Officer", imageUrl: "https://picsum.photos/400/400?random=21" },
    { name: "Marcus Thorne", role: "Chief Financial Officer", imageUrl: "https://picsum.photos/400/400?random=22" },
    { name: "Isabelle Reed", role: "Chief Operating Officer", imageUrl: "https://picsum.photos/400/400?random=23" },
    { name: "Julian Croft", role: "Head of Claims", imageUrl: "https://picsum.photos/400/400?random=24" },
];

export const heroSlidesData: HeroSlide[] = [
    {
        src: 'https://picsum.photos/1920/1080?random=31',
        title: 'Protecting Your Tomorrow, Today.',
        subtitle: 'Comprehensive insurance plans tailored to your life\'s needs. Get a quote in minutes.',
        ctaLabel: 'Explore Our Plans',
        ctaHref: '#/services'
    },
    {
        src: 'https://picsum.photos/1920/1080?random=32',
        title: 'Security You Can Rely On.',
        subtitle: 'From health to home, we provide the coverage you need with the service you deserve.',
        ctaLabel: 'Learn More',
        ctaHref: '#/about'
    },
    {
        src: 'https://picsum.photos/1920/1080?random=33',
        title: 'Your Future is Worth Protecting.',
        subtitle: 'Join thousands of satisfied customers who trust us with their most valuable assets.',
        ctaLabel: 'Get a Free Quote',
        ctaHref: '#/contact'
    }
];
