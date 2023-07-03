'use client';

import Image from 'next/image'
import BackgroundVideo from '../components/BackgroundVideo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundVideo />
      <p>Quantify and Invest in Human Potential</p>
      <p>Have you ever believed in someone so much, you wanted to invest in them? HCX’s revolutionary equity marketplace for Human Capital allows Investors to quantify, invest and share in the future success of others. Individuals go through a standardized process that provides access to investors, value discovery for talent, and transparency and liquidity for both.</p>
    </main>
  )
}
