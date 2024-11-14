// app/api/reports/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        // Query all reports from the database
        const [reports] = await pool.query('SELECT * FROM reports');

        if (reports.length === 0) {
            return NextResponse.json({ message: 'No reports found' }, { status: 404 });
        }

        return NextResponse.json({ reports }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to fetch reports' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { title, description } = await req.json();

        if (!title || !description) {
            return NextResponse.json({ message: 'Title and description are required.' }, { status: 400 });
        }

        const [result] = await pool.query(
            'INSERT INTO reports (title, description) VALUES (?, ?)',
            [title, description]
        );

        return NextResponse.json({ message: 'Report created successfully', reportId: result.insertId }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
