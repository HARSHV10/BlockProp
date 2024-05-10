import React from 'react'
import { SparklesPreview } from '../../ui_test/sparklesPreview'
import { BackgroundBeams } from '../../ui/backGroundBeams'
import { InfiniteMovingCards } from '../../ui/infinit_moving';
import Navbar from '../Navbar/Navbar';
import { StickyScroll } from '../../ui/sticky-scroll-reveal';
import { AnimatedPinDemo } from '../../ui_test/3d-Card';
const testimonials = [
    {
      quote: "The blockchain-based property registration system has revolutionized the way we manage property ownership records. The transparency and immutability of the system have instilled a newfound trust in the process.",
      name: "Emily Johnson",
      title: "Real Estate Agent",
    },
    {
      quote: "As a property owner, I'm thrilled with the efficiency and security this system provides. The user-friendly interface makes property registration and transfers seamless, and I have complete confidence in the integrity of the records.",
      name: "Michael Wong",
      title: "Property Owner",
    },
    {
      quote: "Implementing this blockchain solution has streamlined our property registration processes, reducing costs and increasing operational efficiency. The interoperability with existing land records has been a game-changer.",
      name: "Sarah Thompson",
      title: "Government Land Registry Officer",
    },
    {
      quote: "The cryptographic security and identity management features of this system have greatly simplified our title search and verification processes. We can now rely on an immutable source of property ownership information.",
      name: "David Martinez",
      title: "Title Company Executive",
    },
    {
      quote: "As a financial institution, we've gained confidence in property ownership verification thanks to the transparency and traceability provided by this blockchain-based system. It has facilitated our mortgage lending processes significantly.",
      name: "Alex Patel",
      title: "Mortgage Lender",
    },
  ];



  const content = [
    {
      title: "Decentralized Property Registry",
      description:
        "Leverage the power of blockchain technology to create a transparent and immutable property ownership registry. Our platform ensures secure, tamper-proof records and eliminates the need for intermediaries, reducing costs and increasing efficiency.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Decentralized Property Registry
        </div>
      ),
    },
    {
      title: "Real-Time Updates",
      description:
        "Experience real-time updates and stay in sync with the latest property ownership changes. Our platform ensures that all stakeholders have access to the most recent and accurate information, eliminating confusion and facilitating seamless collaboration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Real-Time Updates
        </div>
      ),
    },
    {
      title: "Immutable Records",
      description:
        "Benefit from the immutability of blockchain technology. Our platform guarantees that property ownership records are tamper-proof and cannot be altered or deleted, providing a secure and trustworthy source of information for all parties involved.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <h1>Immutable Records</h1>
        </div>
      ),
    },
    {
      title: "Streamlined Processes",
      description:
        "Simplify and streamline property registration and transfer processes through automation and smart contracts. Our platform eliminates manual tasks, reduces paperwork, and ensures efficient and secure transactions, saving time and resources for all stakeholders.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Streamlined Processes
        </div>
      ),
    },
  ];



export default function Home() {
  // <BackgroundBeams/>
  return (
    <div>
    
    <div>
    <SparklesPreview/>
    <div className='m-10'>
    <StickyScroll content={content} />
    </div>

    <div>
    <p className=" text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    Features
  </p>
    <div className='flex flex-row'>
    <AnimatedPinDemo
    props={{
      title: "Add Nominee",
      link: "http://localhost:5173/addNominee",
      heading: "Designate a Nominee for Your Property",
      text: "Ensure seamless ownership transfer by adding a nominee to your property records on the blockchain.",
    }}
  />
    <AnimatedPinDemo
  props={{
    title: "Get Property Details",
    link: "http://localhost:5173/getProperty",
    heading: "View Property Information",
    text: "Access detailed information about properties registered on the blockchain.",
  }}
/>

<AnimatedPinDemo
props={{
  title: "Change Property Status",
  link: "http://localhost:5173/changeStatus",
    heading: "Update Property Status",
    text: "Securely update the status of a property, such as marking it as sold or transferred.",
  }}
/>
</div>
</div>


<div className='text-white text-7xl bold'>
<p className=" text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Testimonials
      </p>
    </div>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

    </div>
    </div>
  )
}
