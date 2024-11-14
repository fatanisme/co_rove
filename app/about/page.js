export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">About CO-ROVE</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-lg mb-4">
                        Website Co-Rove adalah platform online yang bertujuan untuk memberikan informasi mengenai persebaran hutan
                        mangrove dari waktu ke waktu. Website ini menampilkan data spasial dan temporal terkait luas, jenis, dan
                        kondisi mangrove di Ujung Kulon.
                    </p>
                    <p className="text-lg mb-4">
                        Melalui CO-ROVE, kami berkomitmen untuk mendukung upaya konservasi dan pengelolaan berkelanjutan ekosistem
                        mangrove yang sangat penting bagi lingkungan pesisir dan kehidupan masyarakat setempat.
                    </p>
                </div>
                <div className="relative aspect-w-16 aspect-h-9">
                    <img
                        src="/images/ujung-kulon-map.jpg"
                        alt="Peta Ujung Kulon"
                        layout="fill"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}