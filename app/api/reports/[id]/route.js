// app/api/reports/[id]/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function DELETE(req, { params }) {
    const { id } = params; // Get the 'id' parameter from the URL

    try {
        // Query to check if the report exists in the database
        const [existingReport] = await pool.query('SELECT * FROM reports WHERE id = ?', [id]);

        if (existingReport.length === 0) {
            return NextResponse.json({ message: 'Report not found' }, { status: 404 });
        }

        // Proceed with deletion if report exists
        const [result] = await pool.query('DELETE FROM reports WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ message: 'Failed to delete report' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Report deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting report:', error);
        return NextResponse.json({ message: 'Failed to delete report', error: error.message }, { status: 500 });
    }
}
