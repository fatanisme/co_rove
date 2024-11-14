// pages/berita.js
import React from 'react';
import Link from 'next/link';

const newsArticle = {
    title: "Kerusakan Mangrove di Ujung Kulon Mengkhawatirkan",
    excerpt: "Belakangan ini mangrove di Ujung Kulon sering mengalami kerusakan akibat berbagai faktor, termasuk perubahan iklim dan aktivitas manusia.",
    fullArticleUrl: "https://www.kompasiana.com/bayuismayana/5e75aeeb097f365e1c42e643/ekosistem-mangrove-di-kawasan-taman-nasional-ujung-kulon-pandeglang-provinsi-banten-indonesia"
};

export default function Berita() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Berita Terkini</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">{newsArticle.title}</h2>
                <p className="text-gray-700 mb-4">{newsArticle.excerpt}</p>
                <Link href={newsArticle.fullArticleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Baca selengkapnya
                </Link>
            </div>
        </div>
    );
}