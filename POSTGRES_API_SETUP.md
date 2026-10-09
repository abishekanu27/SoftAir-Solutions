# Managing SoftAir Products with PostgreSQL & API

This guide explains how to connect your PostgreSQL database to the SoftAir Website so that products (**SFA, Clinical software, KOT, POS**) can be updated dynamically without touching the frontend code.

---

## 1. Why Can't a Frontend Connect Directly to PostgreSQL?

A client-side website (React running in the user's browser) **cannot and should not** connect directly to a database via TCP/IP because:
1. **Security**: Storing your PostgreSQL username, password, host, and port in frontend code allows any visitor to open DevTools, extract credentials, and access your database.
2. **Architecture**: Browsers communicate via HTTP/HTTPS (REST, GraphQL), while PostgreSQL speaks a proprietary binary TCP protocol.

---

## 2. Recommended Architectures

### Architecture A: Connect to Your Existing Application (Recommended if you already have one)
If you already developed your SFA, Clinical, KOT, or POS backend with PostgreSQL:
1. Simply expose a public read-only endpoint in that application:
   ```http
   GET /api/v1/products
   ```
2. In this website project, create a `.env` file:
   ```env
   VITE_PRODUCTS_API_URL=https://your-backend-domain.com/api/v1/products
   ```
3. The website's `productsApi.js` will automatically fetch and render your live products!

---

### Architecture B: Supabase (PostgreSQL with Instant REST API — Easiest, Zero Backend)
**Supabase** provides a managed PostgreSQL database with an automatic REST API and a web admin table editor:
1. Create a free project at [supabase.com](https://supabase.com).
2. Create the `products` table using the SQL schema below.
3. Enable Row Level Security (RLS) with read-only public access (`SELECT`).
4. Set in `.env`:
   ```env
   VITE_PRODUCTS_API_URL=https://<your-project-id>.supabase.co/rest/v1/products?select=*&apikey=<your-anon-key>
   ```

---

### Architecture C: Dedicated Express.js + PostgreSQL Microservice
A lightweight Node.js/Express service that queries PostgreSQL and returns JSON:

#### Step 1: PostgreSQL SQL Schema
Run this in PostgreSQL (pgAdmin, psql, or Supabase SQL Editor):

```sql
CREATE TABLE products (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  tagline VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  badge VARCHAR(100),
  platforms TEXT[] DEFAULT ARRAY['Android', 'Cloud Web'],
  description TEXT NOT NULL,
  features TEXT[] NOT NULL,
  versions JSONB, -- Stores array of editions: Advanced, Lite, Mobile App Only
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed Initial Products (Only SFA has editions currently; others can have editions added later)
INSERT INTO products (id, name, tagline, category, badge, platforms, description, features, versions) VALUES
(
  'sfa',
  'SoftAir SFA',
  'Intelligent Sales Force Automation',
  'Sales & Field',
  'Enterprise Platform',
  ARRAY['Android Mobile', 'Cloud Web Admin'],
  'Empower field sales executives, automate retail beat visits, optimize daily route travel, and record instant paperless order booking with real-time GPS telemetry.',
  ARRAY[
    'Daily customer beat planner & sequential visit scheduler',
    'Real-time GPS route tracking & geofenced store check-in/out',
    'Instant paperless order booking with digital catalog & schemes',
    'Automated GST calculation & instant WhatsApp invoice dispatch',
    '100% offline-ready sync with central ERPs (Tally, SAP)'
  ],
  '[
    {"id": "advanced", "name": "Advanced Version", "badge": "Full Suite", "platforms": ["Android App", "Cloud Web Dashboard"]},
    {"id": "lite", "name": "Lite Version", "badge": "Essential", "platforms": ["Android App", "Basic Web Portal"]},
    {"id": "mobile", "name": "Mobile App Only", "badge": "Field Standalone", "platforms": ["Android Mobile / Tablet"]}
  ]'::jsonb
),
(
  'clinical',
  'Clinical Software',
  'Smart Clinic & Healthcare Management',
  'Healthcare',
  'Clinic & EHR ERP',
  ARRAY['Cloud Web', 'Android Tablet App'],
  'A comprehensive, paperless clinic management system designed for individual practitioners, multi-specialty polyclinics, and diagnostic centers.',
  ARRAY[
    'Multi-Doctor OPD scheduling, queue tokens & department management',
    'Electronic Medical Records (EMR) with ICD-10 codes & quick Rx prescription builder',
    'Integrated diagnostic lab investigations, sample tracking & report archive',
    'Pharmacy inventory management, expiry alerts & integrated medical billing',
    'Automated patient appointment follow-up reminders via WhatsApp'
  ],
  NULL
),
(
  'kot',
  'KOT Management System',
  'Kitchen Order Ticket & KDS Solution',
  'Hospitality',
  'Restaurant KDS',
  ARRAY['Android Touch KDS', 'Android Waiter App', 'Thermal Printer'],
  'Accelerate kitchen turnaround time and eliminate order miscommunications between service waitstaff and cooking stations with digital KOT displays.',
  ARRAY[
    'Multi-station kitchen display routing (Main Kitchen, Bar, Grill, Bakery)',
    'Real-time preparation timers, delay warnings & order priority queues',
    'Table-side captain order taking via Android phones and tablets',
    'Color-coded item status (New, Preparing, Ready, Served)',
    'Direct wireless printing to kitchen ESC/POS thermal printers via WiFi/Bluetooth'
  ],
  NULL
),
(
  'pos',
  'Retail & Restaurant POS',
  'Ultra-Fast Point of Sale & Billing',
  'Retail & POS',
  'High-Speed Billing',
  ARRAY['Windows Desktop', 'Cloud Web', 'Android Mobile POS'],
  'Engineered for high-volume retail stores, supermarkets, and restaurants needing rapid barcode scanning, inventory replenishment, and instant GST invoicing.',
  ARRAY[
    'Sub-3-second billing with barcode scanner & weighing scale sync',
    'Live stock inventory monitoring with automated low-stock reorder alerts',
    'Purchase order management, vendor ledger & warehouse transfers',
    'Complete GST billing (GSTR-1, GSTR-3B exportable reports)',
    'Integrated UPI QR code, card swipe, cash & split payments'
  ],
  NULL
);
```

#### Step 2: Minimal Node.js Server (`server.js`)
```javascript
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/softair_db',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// GET /api/products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products WHERE is_active = true ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SoftAir Products API running on port ${PORT}`);
});
```

---

## 3. Frontend Integration

In `src/services/productsApi.js`:
- If `VITE_PRODUCTS_API_URL` is set, the website performs a `fetch()` to your PostgreSQL endpoint.
- If the API is offline or not configured yet, it **automatically falls back to the default catalog**, ensuring your website remains 100% operational with zero downtime!
