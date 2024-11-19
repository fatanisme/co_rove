"use client"
import React, { useState, useEffect } from 'react';
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const maintenanceTips = [
    {
        title: 'Penanaman Bibit Mangrove',
        description: 'Lakukan penanaman bibit mangrove secara berkala untuk memastikan keberlanjutan ekosistem.',
        emoji: '🌱'
    },
    {
        title: 'Pembersihan Sampah',
        description: 'Bersihkan area mangrove dari sampah plastik yang dapat merusak ekosistem.',
        emoji: '🗑️'
    },
    {
        title: 'Pantau Kualitas Air',
        description: 'Pantau kualitas air secara rutin untuk menjaga kelangsungan hidup mangrove.',
        emoji: '💧'
    },
    {
        title: 'Edukasi Masyarakat',
        description: 'Edukasi masyarakat sekitar tentang pentingnya ekosistem mangrove untuk keberlanjutan lingkungan.',
        emoji: '📚'
    },
];

export default function DataPemeliharaan() {
    const [reports, setReports] = useState([]);
    const [newReport, setNewReport] = useState({ title: '', description: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editMode, setEditMode] = useState(false); // State for edit mode
    const [editReportId, setEditReportId] = useState(null); // To track the report being edited

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
            if (editMode) {
                // If editMode is true, we send a PUT request to update the report
                const response = await fetch(`/api/reports/${editReportId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newReport),
                });

                const result = await response.json();

                if (response.ok) {
                    // Update the report in the local state
                    setReports((prevReports) =>
                        prevReports.map((report) =>
                            report.id === editReportId ? { ...report, ...newReport } : report
                        )
                    );
                    setSuccess('Report updated successfully!');

                    // Reset form fields after successful update
                    setNewReport({ title: '', description: '' }); // Clear form
                    setEditMode(false); // Reset edit mode
                    setEditReportId(null); // Clear the report id
                } else {
                    setError(result.message || 'Failed to update report');
                }
            } else {
                // If editMode is false, it's a new report, send a POST request
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

                    // Clear form fields after successful addition
                    setNewReport({ title: '', description: '' }); // Reset form
                } else {
                    setError(result.message || 'Failed to add report');
                }
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

    const handleEdit = (report) => {
        setEditMode(true);
        setEditReportId(report.id);
        setNewReport({ title: report.title, description: report.description });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Data Pemeliharaan Mangrove</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Cara Pemeliharaan Mangrove</h2>
                {/* Menampilkan setiap pemeliharaan dalam bentuk card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {maintenanceTips.map((tip, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <div className="text-6xl mb-4">
                                {tip.emoji}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-black">{tip.title}</h3>
                            <p className="text-gray-700">{tip.description}</p>
                        </div>
                    ))}
                </div>
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
                        {loading ? 'Loading...' : editMode ? 'Update Laporan' : 'Tambah Laporan'}
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
                                    <Button onClick={() => handleEdit(report)} className="bg-blue-600 text-white">
                                        Edit
                                    </Button>
                                    <Button className="bg-red-600 text-white" variant="destructive" onClick={() => handleDelete(report.id)}>
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
