// pages/berita.js
import React from 'react';
import Link from 'next/link';

const newsArticles = [
    {
        title: "Kerusakan Mangrove di Ujung Kulon Mengkhawatirkan",
        excerpt: "Belakangan ini mangrove di Ujung Kulon sering mengalami kerusakan akibat berbagai faktor, termasuk perubahan iklim dan aktivitas manusia.",
        fullArticleUrl: "https://www.kompasiana.com/bayuismayana/5e75aeeb097f365e1c42e643/ekosistem-mangrove-di-kawasan-taman-nasional-ujung-kulon-pandeglang-provinsi-banten-indonesia"
    },
    {
        title: "Penanaman Mangrove untuk Mengatasi Erosi Pantai",
        excerpt: "Penanaman pohon mangrove dianggap sebagai solusi alami untuk mengatasi erosi yang terjadi di pesisir pantai.",
        fullArticleUrl: "https://example.com/article-2"
    },
    {
        title: "Peran Mangrove dalam Mencegah Perubahan Iklim",
        excerpt: "Mangrove memiliki kemampuan untuk menyerap karbon, yang membantu mengurangi dampak perubahan iklim global.",
        fullArticleUrl: "https://example.com/article-3"
    },
    {
        title: "Mangrove Sebagai Habitat Banyak Spesies Laut",
        excerpt: "Mangrove menyediakan tempat tinggal bagi berbagai jenis spesies laut, termasuk ikan dan burung migrasi.",
        fullArticleUrl: "https://example.com/article-4"
    },
    {
        title: "Meningkatkan Kesadaran Masyarakat Tentang Mangrove",
        excerpt: "Pentingnya edukasi mengenai ekosistem mangrove untuk mendorong pelestarian di kalangan masyarakat.",
        fullArticleUrl: "https://example.com/article-5"
    },
    {
        title: "Pemulihan Ekosistem Mangrove di Kawasan Taman Nasional",
        excerpt: "Berbagai upaya dilakukan untuk memulihkan ekosistem mangrove yang rusak di kawasan taman nasional.",
        fullArticleUrl: "https://example.com/article-6"
    }
];

export default function Berita() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Berita Terkini</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:opacity-100 opacity-90">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">{article.title}</h2>
                            <p className="text-gray-700 mb-4">{article.excerpt}</p>
                            <Link href={article.fullArticleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Baca selengkapnya
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
