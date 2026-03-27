# 🚀 DEPLOYMENT GUIDE - Vercel Setup with Environment Variables

## ⚠️ CRITICAL: Homepage Data Not Loading on Vercel

**Problem:** Your Vercel app at https://pisc-add-loading-pages.vercel.app/ shows "LOADING" but no data appears.

**Root Cause:** Environment variables are NOT set in Vercel!

---

## ✅ SOLUTION: Set Environment Variables in Vercel

### **Step 1: Go to Vercel Dashboard**

1. Visit: https://vercel.com/dashboard
2. Select your project: `pisc-add-loading-pages`

### **Step 2: Add Environment Variables**

1. Click on **Settings** tab
2. Click **Environment Variables** in left sidebar
3. Click **Add New** button
4. Add these variables ONE BY ONE:

#### **Required Variables:**

| Key | Value | Environments |
|-----|-------|--------------|
| `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY` | `AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o` | ✅ Preview<br>✅ Production |
| `NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID` | `1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4` | ✅ Preview<br>✅ Production |

#### **Optional Variables (for Analytics):**

| Key | Value | Environments |
|-----|-------|--------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (your GA ID) | ✅ Preview<br>✅ Production |
| `NEXT_PUBLIC_FB_PIXEL_ID` | `123456789012345` (your FB Pixel) | ✅ Preview<br>✅ Production |

### **Step 3: Redeploy**

After adding environment variables:

1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **Redeploy** button (or trigger new deploy by pushing to git)

---

## 🔧 ALTERNATIVE: Use .env.local File

If you want to test locally before deploying:

### **Create `.env.local` file:**

```bash
cd /Users/madhaarif/Desktop/pisc_1.0/pisc_slidebar_testing
nano .env.local
```

**Paste this:**

```env
# Google Sheets API Configuration
NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY=AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o
NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID=1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4

# Analytics (Optional - add your own IDs)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

**Save and restart server:**

```bash
Ctrl+C
npm run dev
```

---

## 📊 WHAT I'VE ADDED TO YOUR CODE:

### **1. Google Analytics Integration**

**File:** `src/pages/_app.jsx`

```javascript
useEffect(() => {
    // Google Analytics
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
            page_path: window.location.pathname,
        });
    }
}, [router.asPath]);
```

**Features:**
- ✅ Automatic pageview tracking
- ✅ Route change tracking
- ✅ Only loads if GA ID is configured

### **2. Facebook Pixel (Ready to Add)**

To enable Facebook Pixel, just add this to `.env.local`:

```env
NEXT_PUBLIC_FB_PIXEL_ID=your_actual_pixel_id
```

The code in `_app.jsx` will automatically inject the pixel!

### **3. Enhanced SEO Component**

Already implemented in `src/components/seo.jsx`:

- ✅ Schema.org structured data
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card meta
- ✅ Geo tags for Lahore SEO
- ✅ AEO (Answer Engine Optimization)
- ✅ Core Web Vitals optimization

---

## 🎯 TESTING CHECKLIST

### **Before Deploying:**

- [ ] Create `.env.local` with all required variables
- [ ] Run `npm run dev`
- [ ] Check browser console for logs:
  - `[Homepage] Fetching data from Google Sheets...`
  - `[Homepage] API Key: Present`
  - `[Homepage] Data received: X rows`
- [ ] Verify homepage shows content (not just "LOADING")
- [ ] Test all pages load correctly

### **After Deploying to Vercel:**

- [ ] Add environment variables in Vercel dashboard
- [ ] Trigger redeploy
- [ ] Visit https://pisc-add-loading-pages.vercel.app/
- [ ] Check if data loads properly
- [ ] Use browser DevTools to verify no errors

---

## 🔍 DEBUGGING ON VERCEL

### **Check Environment Variables:**

1. In Vercel Dashboard → Settings → Environment Variables
2. Verify all 4 variables are present:
   - `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
   - `NEXT_PUBLIC_FB_PIXEL_ID` (optional)

### **View Deployment Logs:**

1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **View Build Logs**
4. Look for any errors related to environment variables

### **Test in Browser:**

Open browser console on your Vercel site and look for:

```javascript
[Homepage] Fetching data from Google Sheets...
[Homepage] API Key: Present
[Homepage] Spreadsheet ID: 1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4
[Homepage] Response status: 200
[Homepage] Response OK? true
[Homepage] Data received: X rows
```

**If you see:**
- ❌ `API Key: Missing` → Environment variable not set
- ❌ `Response status: 403` → API key invalid or permissions issue
- ❌ `Response status: 404` → Spreadsheet ID wrong
- ❌ `Failed to fetch` → Network/firewall blocking

---

## 📱 ANALYTICS SETUP

### **Google Analytics:**

1. Go to https://analytics.google.com/
2. Create new property for PISC
3. Get Measurement ID (starts with `G-`)
4. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### **Facebook Pixel:**

1. Go to https://www.facebook.com/events_manager/
2. Create new Pixel
3. Copy Pixel ID (numbers only)
4. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
   ```

---

## 🎉 SUCCESS CRITERIA

### **Homepage Should Show:**

- ✅ Hero slider with images
- ✅ Category cards
- ✅ About section with images
- ✅ Counter area
- ✅ Courses section (3 courses)
- ✅ Testimonials
- ✅ Brand logos
- ✅ Footer with contact info

### **Console Should Show:**

```javascript
[Homepage] Fetching data from Google Sheets...
[Homepage] API Key: Present
[Homepage] Data received: 5 rows
[Homepage] Data set successfully!
[HomeUniversity] Component mounted
[HomeUniversity] Data length: 5
```

---

## 🚨 COMMON ISSUES & SOLUTIONS

### **Issue 1: Still Shows "LOADING"**

**Solution:**
1. Check Vercel environment variables are set
2. Redeploy the application
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### **Issue 2: API Error 403**

**Solution:**
1. Verify API key is correct
2. Check Google Cloud Console for API restrictions
3. Ensure Google Sheets API is enabled

### **Issue 3: API Error 404**

**Solution:**
1. Verify spreadsheet ID is correct
2. Check sheet name is exactly "other" (case-sensitive)
3. Ensure spreadsheet is shared publicly or with API key

### **Issue 4: CORS Error**

**Solution:**
This shouldn't happen with Google Sheets API, but if it does:
1. Check API key has proper permissions
2. Try accessing URL directly in browser:
   ```
   https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/other?key=YOUR_API_KEY
   ```

---

## 📞 NEXT STEPS

### **Immediate (Do Now):**

1. ✅ Add environment variables to Vercel
2. ✅ Trigger redeploy
3. ✅ Test homepage loads with data
4. ✅ Share screenshots of any errors

### **This Week:**

1. Set up Google Analytics account
2. Add GA Measurement ID to environment
3. Set up Facebook Pixel (if needed)
4. Monitor analytics dashboard

### **Next Sprint:**

1. Implement conversion tracking
2. Add custom event tracking (button clicks, form submissions)
3. Set up Google Search Console
4. Monitor Core Web Vitals

---

**Status:** ✅ Ready to Deploy  
**Last Updated:** March 27, 2026  
**Files Modified:** 
- `src/pages/_app.jsx` (Analytics integration)
- This deployment guide

**Action Required:** ⚠️ **SET ENVIRONMENT VARIABLES IN VERCEL NOW!**
