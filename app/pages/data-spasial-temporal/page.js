// pages/data-spasial-temporal.js

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table"; // Ensure this path is correct

export default function DataSpasialTemporal() {
    const mangroveData = [
        { category: "Mangrove Sehat", percentage: 75 },
        { category: "Mangrove Tidak Sehat", percentage: 25 },
    ];

    const mangroveExplanation = [
        { condition: "Sehat", characteristics: "Daun hijau segar, akar kuat, pertumbuhan optimal" },
        { condition: "Tidak Sehat", characteristics: "Daun menguning, akar lemah, pertumbuhan terhambat" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Data Spasial Temporal Mangrove Ujung Kulon</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {mangroveData.map((data, index) => (
                    <div key={index} className="border rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">{data.category}</h2>

                        {/* Center the image */}
                        <div className="flex justify-center mb-4"> {/* Added flex and justify-center */}
                            <img
                                src={`/images/${data.category}.jpg`}
                                alt={data.category}
                                width={400}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>

                        <p className="text-lg">Persentase: {data.percentage}%</p>
                    </div>
                ))}
            </div>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Kondisi Mangrove</TableHead>
                        <TableHead>Karakteristik</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mangroveExplanation.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.condition}</TableCell>
                            <TableCell>{item.characteristics}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    );
}
