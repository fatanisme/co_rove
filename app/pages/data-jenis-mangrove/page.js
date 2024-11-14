// pages/data-jenis-mangrove.js
import React from 'react';
import Image from 'next/image';

const mangroveTypes = [
    { name: 'Rhizophora apiculata', localName: 'Bakau minyak', description: 'Pohon dengan akar tunjang yang kuat' },
    { name: 'Avicennia marina', localName: 'Api-api putih', description: 'Pohon dengan akar napas yang menonjol' },
    { name: 'Sonneratia alba', localName: 'Pedada', description: 'Pohon dengan buah berbentuk seperti apel' },
    { name: 'Bruguiera gymnorrhiza', localName: 'Tancang', description: 'Pohon dengan akar lutut yang khas' },
];

export default function DataJenisMangrove() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Jenis Mangrove di Ujung Kulon</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mangroveTypes.map((type, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={`/images/${type.name}.jpg`}
                            alt={type.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-gray-600">{type.name}</h2>
                            <p className="text-gray-600 mb-2">Nama lokal: {type.localName}</p>
                            <p className="text-gray-700">{type.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}