// Default fallback products data
// Only SFA has editions (Advanced, Lite, Mobile App Only) currently.
// Other products (Clinical, KOT, POS) are single complete standard editions.
// Engineered for Android Mobile/Tablet, Web Application, and Windows Desktop (No iOS).

export const SFA_COMPARISON_MATRIX = [
  {
    category: 'Deployment & System Architecture',
    features: [
      {
        name: 'Web Admin Command Center',
        tooltip: 'Central web portal for managing operations, beat routes, and analyzing sales',
        lite: 'Basic Portal (Orders, Sales & Retailers)',
        advanced: 'Full Command Center + Live Sales & Stock Analytics',
        mobile: '— (Standalone Device)'
      },
      {
        name: 'Android Field Sales App',
        tooltip: 'Native Android application for field sales representatives and van drivers',
        lite: '✓ Included',
        advanced: '✓ Included',
        mobile: '✓ Included (Standalone)'
      },
      {
        name: 'Offline Operation Capability',
        tooltip: 'Record orders, spot billing, and shop visits without active cellular data',
        lite: '✓ Offline Sales & Order Capture',
        advanced: '✓ 100% Offline with Auto Cloud Sync',
        mobile: '✓ 100% Offline (Local Device DB)'
      },
      {
        name: 'Cloud Hosting & Central Database',
        tooltip: 'Cloud infrastructure hosting company database',
        lite: '✓ Standard Cloud DB',
        advanced: '✓ Dedicated High-Speed Cloud DB',
        mobile: '— (No Server Needed)'
      }
    ]
  },
  {
    category: 'Direct Spot Sales & Van Billing (Van Sales)',
    features: [
      {
        name: 'On-Spot Tax & Cash Sales Invoicing',
        tooltip: 'Issue instant official GST/tax sales invoices directly at the retail counter from van stock',
        lite: '✓ Standard Spot Billing',
        advanced: '✓ Advanced Spot Invoicing + Multi-Tax & Schemes',
        mobile: '✓ Direct Spot Invoicing (Local)'
      },
      {
        name: 'Van & Vehicle Stock Deduction',
        tooltip: 'Real-time reduction of loaded vehicle inventory as spot sales are billed to retailers',
        lite: 'Basic Van Stock Log',
        advanced: '✓ Live Van Stock Management & Re-order Alerts',
        mobile: '✓ On-Device Stock Tracking'
      },
      {
        name: 'Bluetooth Thermal Bill Printing',
        tooltip: 'Print 2-inch or 3-inch thermal sales receipts on-the-spot via portable Bluetooth printer',
        lite: '✓ Supported',
        advanced: '✓ Supported (Custom Header & QR)',
        mobile: '✓ Supported'
      },
      {
        name: 'On-Spot Payment Collection',
        tooltip: 'Collect immediate cash, dynamic UPI QR payments, or cheque entries with instant digital receipts',
        lite: '✓ Cash & Cheque Logging',
        advanced: '✓ Dynamic UPI QR Code, Cash & Multi-Mode',
        mobile: '✓ Cash & Cheque Logging'
      }
    ]
  },
  {
    category: 'Retailer Advance Order Booking (Presales)',
    features: [
      {
        name: 'Secondary Order Booking for Warehouse Dispatch',
        tooltip: 'Punch advance orders for warehouse/distributor picking, packing and subsequent dispatch',
        lite: '✓ Standard Order Booking',
        advanced: '✓ Advanced Order Pipeline & Warehouse Queue',
        mobile: '✓ Local Order Booking'
      },
      {
        name: 'Trade Schemes & Volume Discounts',
        tooltip: 'Apply Buy-X-Get-Y, percentage slabs, and promotional deals during order capture',
        lite: 'Standard Price List',
        advanced: '✓ Dynamic Trade Schemes, Slab Pricing & Free Items',
        mobile: 'Single Price List'
      },
      {
        name: 'Retailer Credit Limit & Outstanding Balance Checks',
        tooltip: 'Prevent order booking if retailer exceeds allowed credit limit or has overdue payments',
        lite: 'Outstanding Balance Alert',
        advanced: '✓ Hard Credit Lock & Manager Override Approval',
        mobile: 'Outstanding Balance Notice'
      },
      {
        name: 'Order Dispatch & Delivery Status Tracking',
        tooltip: 'Monitor order lifecycle from booked to dispatched, out-for-delivery, and delivered',
        lite: 'Basic Status (Booked/Fulfilled)',
        advanced: '✓ End-to-End Status Tracking & Dispatch Notes',
        mobile: 'Manual Fulfilled Toggle'
      }
    ]
  },
  {
    category: 'Field Operations, Route & Visit Management',
    features: [
      {
        name: 'Retailer Beat & Route Visits',
        tooltip: 'Schedule and track daily store beat visits and counter coverage',
        lite: '✓ Standard Beat Schedule',
        advanced: '✓ Optimized Beat & Geofenced Route',
        mobile: '✓ Store List & Visit Log'
      },
      {
        name: 'Digital Product Catalog & Interactive Brochure',
        tooltip: 'Mobile catalog with images, trade pricing, and category filters',
        lite: '✓ Standard Catalog',
        advanced: '✓ High-Res Catalog with Instant Search & Filters',
        mobile: '✓ On-Device Catalog'
      },
      {
        name: 'WhatsApp Invoice & Order Slip Dispatch',
        tooltip: 'Send instant digital invoices and order confirmation PDFs directly to retailer WhatsApp',
        lite: '✓ Order & Sale Confirmation',
        advanced: '✓ Automated Instant WhatsApp PDF Invoice',
        mobile: '✓ Direct PDF Share via WhatsApp'
      }
    ]
  },
  {
    category: 'Telemetry, Governance & Integrations',
    features: [
      {
        name: 'Live GPS Beat Route Tracking',
        tooltip: 'Real-time telemetry showing sales reps daily travel path and counter stops',
        lite: '—',
        advanced: '✓ Real-Time GPS Route Telemetry',
        mobile: '—'
      },
      {
        name: 'Geofenced Store Check-In / Check-Out',
        tooltip: 'Ensures reps are physically present at retailer shop to book orders or bill sales',
        lite: '—',
        advanced: '✓ Automatic Geofence Verification',
        mobile: '—'
      },
      {
        name: 'Automated Travel Allowance (TA/DA)',
        tooltip: 'Calculates daily travel allowance based on actual distance traveled',
        lite: '—',
        advanced: '✓ Automated Distance & TA/DA Calculation',
        mobile: '—'
      },
      {
        name: 'Multi-Tier Sales Hierarchy',
        tooltip: 'Rep → Area Manager → State Head reporting and approval workflows',
        lite: 'Single Admin / Rep',
        advanced: '✓ Multi-Tier Hierarchy & Role-based Approvals',
        mobile: 'Single Device User'
      },
      {
        name: 'Daily Sales Report (DSR) Analytics',
        tooltip: 'End-of-day sales summary, booking vs spot sales split, and collection metrics',
        lite: '✓ Excel & PDF Export',
        advanced: '✓ Live Executive Dashboard (Sales + Orders Breakdown)',
        mobile: '✓ Device PDF Report'
      },
      {
        name: 'Tally / ERP Accounting Integration',
        tooltip: 'Export or sync both spot sales invoices and booked orders into Tally Prime or custom ERP',
        lite: 'Optional Add-on',
        advanced: '✓ Included (Tally XML / REST API for Sales & Orders)',
        mobile: '—'
      }
    ]
  }
];

export const DEFAULT_PRODUCTS = [
  {
    id: 'sfa',
    name: 'SoftAir SFA',
    tagline: 'Direct Spot Sales & Advance Order Management',
    category: 'Sales & Orders',
    badge: 'Dual Sales & Order Engine',
    platforms: ['Android Mobile', 'Cloud Web Admin'],
    targetAudience: 'FMCG, Pharma, Wholesalers, Van Distributors & Field Sales Organizations',
    description: 'All-in-one Sales Force Automation with dual capabilities: execute Direct Spot Sales (on-the-spot van invoicing, stock deduction & cash receipts) AND punch Advance Orders (secondary retail booking for warehouse dispatch) with real-time GPS telemetry.',
    versions: [
      {
        id: 'advanced',
        name: 'Advanced Version',
        badge: 'Full Enterprise Suite',
        recommended: true,
        bestFor: 'Medium to Large Enterprise, Multi-Tier Distribution & Van Sales Fleets',
        platforms: ['Android App', 'Cloud Web Dashboard'],
        description: 'Comprehensive enterprise solution for both Direct Spot Van Sales (live billing & van stock) and Advance Secondary Order Booking with central Web Command Center and Android Sales App.',
        features: [
          'Dual Engine: Direct Spot Sales (on-the-spot van billing & stock deduction) + Advance Retailer Order Booking',
          'Full Web Admin Command Center + Executive Target vs. Achievement & Stock Analytics',
          'Android Field Sales App with offline-ready billing, order capture & digital price list catalog',
          'Live GPS Beat route tracking, automated travel allowance (TA/DA) & geofenced check-in',
          'Multi-tier sales hierarchy, instant WhatsApp invoice/receipt dispatch & Tally/ERP integration'
        ]
      },
      {
        id: 'lite',
        name: 'Lite Version',
        badge: 'Essential',
        recommended: false,
        bestFor: 'Growing Wholesalers, Independent Stockists & Teams (1-10 Reps)',
        platforms: ['Android App', 'Basic Web Portal'],
        description: 'Streamlined edition for growing wholesale and distribution businesses supporting both counter/van sales billing and field order booking.',
        features: [
          'Both Direct Spot Sales Invoicing and Advance Retailer Order Booking with digital catalogs',
          'Web Portal for daily order & sales dispatch management, stock tracking and retailer directory',
          'Android Mobile App for sales reps to record shop visits, punch orders, and collect payments',
          'Daily Sales Report (DSR) & order summaries exportable to Excel and PDF',
          'Instant WhatsApp order confirmations and sales receipts for retailers'
        ]
      },
      {
        id: 'mobile',
        name: 'Mobile App Only',
        badge: 'Field Standalone',
        recommended: false,
        bestFor: 'Independent Sales Agents, Van Drivers, Direct Field Reps & Zero-Cloud Setups',
        platforms: ['Android Mobile / Tablet'],
        description: 'Standalone Android app for independent sales agents and van distributors to issue direct spot sales and book customer orders without complex servers.',
        features: [
          'Direct Android App: issue On-the-Spot Cash/Tax Sales AND punch Customer Orders from a single app',
          'Local device database with stock tracking, price tiers, and digital product brochure',
          'Instant Bluetooth thermal receipt printing and WhatsApp PDF sales/order share',
          'Customer visit history, pending ledger tracking, and payment collection logging',
          'Works 100% offline with zero server requirements — perfect for remote rural beats'
        ]
      }
    ],
    comparisonMatrix: SFA_COMPARISON_MATRIX
  },
  {
    id: 'clinical',
    name: 'Clinical Software',
    tagline: 'Smart Clinic & Healthcare Management',
    category: 'Healthcare',
    badge: 'Clinic & EHR ERP',
    platforms: ['Cloud Web Admin', 'Android Tablet OPD App'],
    targetAudience: 'Individual Practitioners, Polyclinics, Multi-Specialty Clinics & Diagnostic Centers',
    description: 'A comprehensive, paperless clinic management system designed for individual practitioners, multi-specialty polyclinics, and diagnostic centers.',
    highlights: [
      {
        icon: '👨‍⚕️',
        title: 'Multi-Doctor OPD & Queue Tokens',
        desc: 'Live patient queue tokens, walk-in vs pre-booked appointment scheduling, and doctor availability management.'
      },
      {
        icon: '📋',
        title: 'Electronic Medical Records (EMR)',
        desc: 'Standardized ICD-10 diagnostic codes, rapid Rx drug prescription builder, and lifelong patient clinical histories.'
      },
      {
        icon: '🔬',
        title: 'Diagnostic Lab Investigations',
        desc: 'Digital test order requisition, pathology & radiology sample tracking, and automated digital report archive.'
      },
      {
        icon: '💊',
        title: 'Pharmacy & Itemized Billing',
        desc: 'Real-time medicine stock tracking, batch/expiry alerts, and fast itemized consultation invoices.'
      },
      {
        icon: '📊',
        title: 'Revenue Sharing & Accounts',
        desc: 'Doctor consultation revenue split calculation, daily cash/UPI collection audits, and tax accounting reports.'
      },
      {
        icon: '💬',
        title: 'Automated Patient WhatsApp Alerts',
        desc: 'Automated follow-up reminders, scheduled appointment alerts, and digital prescription dispatch directly to patients.'
      }
    ],
    specs: {
      deployment: 'Cloud SaaS (Web Dashboard) + Android Tablet OPD App',
      database: 'Encrypted Cloud Storage with automated daily snapshot backups',
      offline: 'Local prescription & token queue caching with automatic sync upon reconnection',
      security: 'Role-based access permissions (Doctor vs Reception vs Pharmacist) & DISHA data privacy',
      hardware: 'A4/A5 Laser & Inkjet Printers, Thermal Receipt Printers, Android Tablets (10"+)'
    },
    features: [
      'Multi-Doctor OPD scheduling, queue tokens & department management',
      'Electronic Medical Records (EMR) with ICD-10 codes & quick Rx prescription builder',
      'Integrated diagnostic lab investigations, sample tracking & report archive',
      'Pharmacy inventory management, expiry alerts & integrated medical billing',
      'Detailed daily collection summaries, tax reports & doctor revenue sharing',
      'Automated patient appointment follow-up reminders via WhatsApp'
    ]
  },
  {
    id: 'kot',
    name: 'KOT Management System',
    tagline: 'Kitchen Order Ticket & KDS Solution',
    category: 'Hospitality',
    badge: 'Restaurant KDS',
    platforms: ['Android Touch KDS', 'Android Waiter App', 'Thermal Printers'],
    targetAudience: 'Fine Dining, Cafes, Quick Service Restaurants (QSR), Cloud Kitchens & Bars',
    description: 'Accelerate kitchen turnaround time and eliminate order miscommunications between service waitstaff and cooking stations with digital KOT displays.',
    highlights: [
      {
        icon: '🍳',
        title: 'Smart Multi-Station Kitchen Routing',
        desc: 'Automatically routes food and drink items to dedicated stations (Main Kitchen, Bar, Grill, Bakery, Dessert).'
      },
      {
        icon: '⏱️',
        title: 'Real-Time Touch KDS Timers',
        desc: 'Large touch display showing color-coded urgency states (Green → Orange → Red), live timers, and priority queues.'
      },
      {
        icon: '📱',
        title: 'Handheld Captain & Waiter App',
        desc: 'Floor waitstaff book table orders on Android smartphones or tablets with instant wireless kitchen transmission.'
      },
      {
        icon: '🖨️',
        title: 'Direct ESC/POS Thermal Printing',
        desc: 'Instant wireless order printing to 80mm & 58mm thermal receipt printers over WiFi, Bluetooth, or Ethernet.'
      },
      {
        icon: '📝',
        title: 'Dish Customization & Prep Notes',
        desc: 'Pass custom preparation notes (no onions, extra spicy, allergen warnings) straight to the head chef.'
      },
      {
        icon: '📈',
        title: 'Kitchen Speed & Turnaround Telemetry',
        desc: 'Detailed station speed-of-service analytics, chef turnaround times, and peak rush-hour reports.'
      }
    ],
    specs: {
      deployment: 'Local Network Operation (Zero Cloud latency for 100ms order dispatch) + Cloud Sync',
      offline: 'Operates 100% offline on Local WiFi/LAN even when broadband internet is down',
      hardware: 'Android Commercial Touch Displays, Android Phones/Tablets, ESC/POS Thermal Printers',
      routing: 'Configurable station routing rules based on menu item, category, or station load',
      failover: 'Automatic fallback to thermal paper printing if a touch screen becomes unavailable'
    },
    features: [
      'Multi-station kitchen display routing (Main Kitchen, Bar, Grill, Bakery)',
      'Real-time preparation timers, delay warnings & order priority queues',
      'Table-side captain order taking via Android phones and tablets',
      'Color-coded item status (New, Preparing, Ready, Served)',
      'Direct wireless printing to kitchen ESC/POS thermal printers via WiFi/Bluetooth',
      'Kitchen speed-of-service analytics and chef turnaround reports'
    ]
  },
  {
    id: 'pos',
    name: 'Retail & Restaurant POS',
    tagline: 'Ultra-Fast Point of Sale & Billing',
    category: 'Retail & POS',
    badge: 'High-Speed Billing',
    platforms: ['Windows Desktop', 'Cloud Web Portal', 'Android Mobile POS'],
    targetAudience: 'Supermarkets, Grocery Stores, Fashion Boutiques, Hardware Outlets, Retail Chains & Restaurants',
    description: 'Engineered for high-volume retail stores, supermarkets, and restaurants needing rapid barcode scanning, inventory replenishment, and instant GST invoicing.',
    highlights: [
      {
        icon: '⚡',
        title: 'Sub-3-Second Rapid Billing',
        desc: 'Ultra-fast checkout flow with continuous barcode scanning, shortkeys, and direct digital weighing scale sync.'
      },
      {
        icon: '📦',
        title: 'Live Inventory & Stock Alerts',
        desc: 'Automated stock count deduction with low-stock threshold alerts, batch tracking, and warehouse transfer logs.'
      },
      {
        icon: '🧾',
        title: 'Complete Indian GST Billing',
        desc: 'Built-in Indian GST calculation, HSN code database, and one-click export for GSTR-1 and GSTR-3B filings.'
      },
      {
        icon: '💳',
        title: 'Unified Payment Integration',
        desc: 'Dynamic on-screen UPI QR code generation, card swipe machine sync, cash drawer trigger, and split payments.'
      },
      {
        icon: '📑',
        title: 'Purchase Orders & Vendor Ledger',
        desc: 'Supplier purchase orders, goods receipt notes (GRN), accounts payable ledger, and landing margin calculations.'
      },
      {
        icon: '🌐',
        title: 'Multi-Store Cloud Management',
        desc: 'Centralized catalog price management across retail branches with real-time consolidated sales reporting.'
      }
    ],
    specs: {
      deployment: 'Windows Desktop (Offline-Ready) + Cloud Web Portal + Android Mobile POS',
      hardware: 'USB/Bluetooth 1D/2D Barcode Scanners, Electronic Weighing Scales, Cash Drawers, Thermal Printers',
      database: 'High-speed local embedded database with background transactional cloud synchronization',
      taxation: 'Indian GST compliant B2B and B2C invoices, customizable 3-inch thermal and A4 printouts',
      security: 'Cashier shift opening/closing reconciliation, discrepancy tracking, manager override security'
    },
    features: [
      'Sub-3-second billing with barcode scanner & weighing scale sync',
      'Live stock inventory monitoring with automated low-stock reorder alerts',
      'Purchase order management, vendor ledger & warehouse transfers',
      'Complete GST billing (GSTR-1, GSTR-3B exportable reports)',
      'Integrated UPI QR code, card swipe, cash & split payments',
      'Centralized multi-store catalog and daily sales margin reports'
    ]
  }
];

/**
 * Fetches products from external API (PostgreSQL backed backend, Supabase, or external app)
 * Falls back to DEFAULT_PRODUCTS if API is offline or not yet configured.
 */
export async function fetchProducts() {
  const apiUrl = import.meta.env.VITE_PRODUCTS_API_URL;

  if (!apiUrl) {
    return { data: DEFAULT_PRODUCTS, source: 'default' };
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const json = await response.json();
    const productsData = Array.isArray(json) ? json : (json.data || json.products || DEFAULT_PRODUCTS);
    return { data: productsData, source: 'api' };
  } catch (err) {
    console.warn('Unable to load products from API, using fallback data:', err.message);
    return { data: DEFAULT_PRODUCTS, source: 'fallback', error: err.message };
  }
}
