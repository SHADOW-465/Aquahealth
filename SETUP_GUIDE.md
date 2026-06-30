# Aquahealth Production Setup Guide

This guide outlines the production requirements and integration steps necessary to take the Aquahealth flagship website live and automate your customer bookings, client database, and CRM workflows.

---

## 1. Domain & Web Hosting

### Deploying the Next.js App
Since the website is built on Next.js, the most optimized hosting provider is **Vercel** (or Netlify/AWS Amplify).
- **Steps**:
  1. Push the code repository to GitHub/GitLab.
  2. Import the project into Vercel.
  3. Connect your domain: `aquahealth.in` (and configure the CNAME/A records on your DNS provider).
  4. Ensure your environment variables are configured.

---

## 2. WhatsApp Business Integration

Currently, the website triggers client-side redirects to WhatsApp with formatted messages. To transition this to an enterprise system:

### Option A: WhatsApp Business App (Free / Manual)
- Best for starting out.
- Ensure the phone number `+919840275122` is registered on a dedicated phone running the WhatsApp Business App.
- You can categorize chats using labels (e.g., "Pending Service", "AMC Active", "Completed").

### Option B: WhatsApp Cloud API (Paid / Automated)
- Set up a developer account on Meta Developer Console.
- Configure Webhooks to automatically parse incoming messages.
- Implement chatbot flows that ask for pictures of purifiers, detect location, and write directly into your CRM.

---

## 3. Database & CRM Setup

To prevent losing customer inquiries, you must store bookings in a secure database instead of relying solely on manual WhatsApp redirects.

### Recommended Database: Supabase (PostgreSQL)
- Set up a free Supabase project.
- Create a `bookings` table with this schema:
```sql
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  area TEXT NOT NULL,
  service TEXT NOT NULL,
  brand TEXT,
  problem TEXT,
  preferred_time TEXT,
  status TEXT DEFAULT 'pending' -- pending, assigned, completed
);
```

### CRM Integrations
To manage technicians, dispatch schedules, and invoice histories, choose one of these CRMs:
1. **HubSpot / Zoho CRM** (Saas): Connect your booking form via a simple API call (or Zapier) to create a new "Deal" or "Lead" automatically whenever someone requests a service.
2. **Custom Dashboard** (Internal): Create a simple admin route (e.g., `/admin`) in this Next.js app to list bookings, assign technicians, and mark invoices as paid.

---

## 4. Notifications & Dispatch Alerts

### Admin Notification (When a new booking is placed)
- Use **Resend** or **SendGrid** to email `support@aquahealth.in` or trigger a WhatsApp alert to your dispatch manager whenever a booking is created in the database.

### Customer Appointment Confirmations
- Integrate **Twilio** or **Msg91** to send automated SMS confirmations:
  - *"Hi {Name}, your Aquahealth service call has been registered. Our technician will visit on {Date} ({PreferredTime})."*

---

## 5. Google Business Profile & Local SEO

Since local trust is critical in Chennai:
1. **Google Business Profile (GBP)**:
   - Create and verify a business listing for "Aquahealth" in Nanganallur, Chennai.
   - Maintain the exact name format used in your schema: `Aquahealth`.
2. **Google Maps API**:
   - Replace the mock map containers in `/contact` and `/service-areas/[slug]` with an interactive Google Map Embed iframe or JavaScript API centered on your physical service coordinates.
3. **Review Syndication**:
   - Set up an automated message that texts customers a review link 2 hours after service completion to feed your `/reviews` dashboard.
