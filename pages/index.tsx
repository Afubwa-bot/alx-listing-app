import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Featured Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Cozy Apartment in Nairobi"
            imageUrl="/assets/placeholder.png"
            description="Modern 2-bedroom in the heart of Nairobi."
          />
          <Card
            title="Beachside Bungalow"
            imageUrl="/assets/placeholder.png"
            description="Relaxing getaway near the coast."
          />
        </div>
        <div className="mt-6">
          <Button label="Explore More Listings" onClick={() => alert('Coming Soon!')} />
        </div>
      </main>
    </>
  );
}
// pages/index.tsx