import HeroSlider from '@/components/HeroSlider'
import Image from 'next/image';

const mangroveTypes = [
  { name: 'Rhizophora apiculata', localName: 'Bakau minyak', description: 'Pohon dengan akar tunjang yang kuat' },
  { name: 'Avicennia marina', localName: 'Api-api putih', description: 'Pohon dengan akar napas yang menonjol' },
  { name: 'Sonneratia alba', localName: 'Pedada', description: 'Pohon dengan buah berbentuk seperti apel' },
  { name: 'Bruguiera gymnorrhiza', localName: 'Tancang', description: 'Pohon dengan akar lutut yang khas' },
  { name: 'Ceriops tagal', localName: 'Ceriops', description: 'Pohon mangrove dengan akar lutut yang tumbuh di air payau' },
  { name: 'Lumnitzera racemosa', localName: 'Lumnitzera', description: 'Pohon mangrove dengan akar yang tumbuh merambat, ditemukan di daerah pasang surut' },
];


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="py-12 bg-gray-100 px-4">
        <div className="container mx-auto text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-center">Jenis Mangrove di Ujung Kulon</h1>
          {/* Menampilkan Card dalam satu baris */}
          <div className="flex space-x-6 overflow-x-auto py-4">
            {mangroveTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:opacity-100 opacity-80 h-[350px] min-w-[250px]"
              >
                <Image
                  src={`/images/${type.name}.jpg`}
                  alt={type.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2 text-gray-600">{type.name}</h2>
                  <p className="text-gray-600 mb-2">Nama lokal: {type.localName}</p>
                  <p className="text-gray-700 flex-grow">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
