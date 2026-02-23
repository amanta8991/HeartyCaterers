# Hearty Caterers Website - Product Requirements Document

## Original Problem Statement
Build a professional website for Hearty Caterers, a catering business in Kerala, featuring:
- Sections: Home, About Us, Services, Menu, Gallery, Testimonials, Contact Form
- Goal: Generate catering bookings for weddings and large corporate events
- Services: All event types with customizable decor
- Features: Contact form + WhatsApp integration
- Theme: White and maroon (matching logo colors)

## User Personas
1. **Wedding Planners**: Looking for premium catering services for grand weddings
2. **Corporate Event Managers**: Seeking professional catering for conferences and business events
3. **Individual Customers**: Planning birthday parties, anniversaries, and celebrations
4. **Event Coordinators**: Comparing catering services and pricing

## Core Requirements (Static)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ White and maroon color theme
- ✅ Professional, conversion-optimized layout
- ✅ Smooth scrolling navigation
- ✅ High-quality images from catering industry
- ✅ Contact form with validation
- ✅ WhatsApp integration for quick contact
- ✅ Gallery with category filtering
- ✅ Testimonials carousel
- ✅ Menu showcase with pricing

## What's Been Implemented (Frontend - Mock Data)
**Date: December 2024**

### Frontend Structure
- Header with smooth scroll navigation and sticky behavior
- Hero section with compelling CTAs and trust indicators
- About section with stats and highlights
- Services section (4 cards: Wedding, Corporate, Custom Decor, All Occasions)
- Menu section with tabbed categories (Traditional Kerala, North Indian, Continental, Desserts)
- Gallery with category filters
- Testimonials carousel with auto-rotation
- Contact form with WhatsApp integration button
- Footer with quick links and contact information

### Design Implementation
- White and maroon color scheme (maroon-600, maroon-700, maroon-800)
- Shadcn UI components for consistent styling
- Micro-animations and hover effects
- Glassmorphism effects on badges
- Professional imagery from Unsplash and Pexels
- Responsive grid layouts
- Smooth transitions and scroll behavior

### Mock Data Structure
Location: `/app/frontend/src/data/mock.js`
- Hero data
- About data with statistics
- 4 service offerings with details
- Menu items across 4 categories
- 9 gallery images with categories
- 4 testimonials
- Contact information

## Prioritized Backlog

### P0 Features (Next Phase - Backend Development)
1. **Backend API Development**
   - Contact form submission endpoint
   - Email notification system for new inquiries
   - Database models for storing inquiries
   - WhatsApp API integration (optional)

2. **Gallery Management**
   - Admin panel for uploading gallery images
   - Image optimization and storage
   - Category management

3. **Menu Management**
   - Backend API for menu items
   - CRUD operations for menu categories and items
   - Pricing updates

### P1 Features (Future Enhancements)
1. **Admin Dashboard**
   - View and manage booking inquiries
   - Update menu items and pricing
   - Upload gallery images
   - Manage testimonials

2. **Enhanced Contact Features**
   - Email verification
   - Automated response emails
   - SMS notifications via WhatsApp Business API

3. **Analytics Integration**
   - Google Analytics setup
   - Conversion tracking
   - User behavior analysis

### P2 Features (Nice to Have)
1. **Blog Section** - Catering tips and event planning guides
2. **Online Quote Calculator** - Estimate pricing based on guest count
3. **Booking Calendar** - Check availability for dates
4. **Customer Portal** - Track booking status
5. **Multiple Language Support** - Malayalam, Hindi, English

## Next Action Items
1. User to review the frontend and provide feedback
2. Build backend APIs for contact form submission
3. Integrate email notification system
4. Connect frontend forms to backend endpoints
5. Remove mock data and integrate with real database
6. Testing and deployment

## Technical Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, Python (To be implemented)
- **Database**: MongoDB (To be implemented)
- **Deployment**: Emergent Platform

## API Contracts (To Be Implemented)

### POST /api/contact/inquiry
Request:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "eventDate": "date",
  "eventType": "string",
  "guestCount": "number",
  "message": "string"
}
```

Response:
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": "string"
}
```

### GET /api/menu
Response:
```json
{
  "categories": [
    {
      "name": "string",
      "items": [...]
    }
  ]
}
```

### GET /api/gallery
Response:
```json
{
  "images": [
    {
      "id": "string",
      "url": "string",
      "category": "string",
      "alt": "string"
    }
  ]
}
```
