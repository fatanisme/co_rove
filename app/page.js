import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to CO-ROVE</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            CO-ROVE is a platform dedicated to monitoring and preserving mangrove ecosystems in Ujung Kulon.
            Our mission is to provide comprehensive data and insights on mangrove distribution, helping in
            conservation efforts and sustainable management of these vital coastal forests.
          </p>
        </div>
      </section>
    </div>
  )
}