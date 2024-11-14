"use client"
import React, { useState, useEffect } from 'react';
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const maintenanceTips = [
    "Lakukan penanaman bibit mangrove secara berkala",
    "Bersihkan area mangrove dari sampah plastik",
    "Pantau kualitas air secara rutin",
    "Edukasi masyarakat sekitar tentang pentingnya ekosistem mangrove",
    "Batasi akses wisatawan ke area sensitif",
];

export default function DataPemeliharaan() {
    const [reports, setReports] = useState([]);
    const [newReport, setNewReport] = useState({ title: '', description: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch existing reports when the component mounts
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch('/api/reports');
                const data = await response.json();
                if (response.ok) {
                    setReports(data.reports);
                } else {
                    setError(data.message || 'Failed to load reports');
                }
            } catch (err) {
                setError('Failed to fetch reports');
            }
        };

        fetchReports();
    }, []);

    const handleInputChange = (e) => {
        setNewReport({ ...newReport, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for empty fields
        if (!newReport.title || !newReport.description) {
            setError('Title and description are required.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Send the data to the API
            const response = await fetch('/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReport),
            });

            const result = await response.json();

            if (response.ok) {
                // On success, add the report to the local state
                setReports((prevReports) => [...prevReports, { ...newReport, id: result.reportId }]);
                setSuccess('Report added successfully!');
                setNewReport({ title: '', description: '' }); // Clear form fields
            } else {
                setError(result.message || 'Failed to add report');
            }
        } catch (err) {
            setError('Failed to submit the report');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/reports/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            if (response.ok) {
                // On successful deletion, remove the report from local state
                setReports(reports.filter(report => report.id !== id));
            } else {
                setError(result.message || 'Failed to delete report');
            }
        } catch (err) {
            setError('Failed to delete the report');
        }
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Data Pemeliharaan Mangrove</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cara Pemeliharaan Mangrove</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {maintenanceTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Laporan Kegiatan Pemeliharaan</h2>

                {/* Error or success message */}
                {error && <p className="text-red-600 mb-4">{error}</p>}
                {success && <p className="text-green-600 mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <Input
                        type="text"
                        name="title"
                        value={newReport.title}
                        onChange={handleInputChange}
                        placeholder="Judul Laporan"
                        required
                    />
                    <Textarea
                        name="description"
                        value={newReport.description}
                        onChange={handleInputChange}
                        placeholder="Deskripsi Kegiatan"
                        required
                    />
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Tambah Laporan'}
                    </Button>
                </form>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Judul</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead>Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reports.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell>{report.title}</TableCell>
                                <TableCell>{report.description}</TableCell>
                                <TableCell>
                                    <Button className='bg-red-600' variant="destructive" onClick={() => handleDelete(report.id)}>
                                        Hapus
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </div>
    );
}
