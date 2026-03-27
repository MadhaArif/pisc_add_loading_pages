# 🔍 DEEP DEBUGGING GUIDE - Data Loading Issue

## 🎯 Current Status

**Problem:** Homepage data is NOT loading from Google Sheets

**What I've Done:**
1. ✅ Added detailed console logging throughout the app
2. ✅ Enhanced error handling with better messages
3. ✅ Added debug logging in HomeUniversity component
4. ✅ Server is running at http://localhost:3000

---

## 📊 STEP-BY-STEP DEBUGGING INSTRUCTIONS

### **Step 1: Open Browser DevTools**

1. Go to http://localhost:3000
2. Press **F12** (or right-click → Inspect)
3. Click on **Console** tab
4. **Clear console** (trash icon) to start fresh

---

### **Step 2: Refresh the Page**

Press **Ctrl + Shift + R** (or Cmd + Shift + R on Mac) for hard refresh

---

### **Step 3: Check Console Logs**

You should see these logs in order:

#### **Log #1: Homepage Fetching Data**
```
[Homepage] Fetching data from Google Sheets...
[Homepage] API Key: Present
[Homepage] Spreadsheet ID: 1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4
[Homepage] Range: other
[Homepage] Fetching URL: https://sheets.googleapis.com/v4/spreadsheets/...
```

**✅ Expected:** All values should be present  
**❌ Problem:** If "Missing" appears, check .env.local file

---

#### **Log #2: Response Status**
```
[Homepage] Response status: 200
[Homepage] Response OK? true
```

**✅ Good:** Status 200, OK = true  
**❌ Bad:** Status 403/404, OK = false

**Common Errors:**
- `403` = API key invalid or permissions issue
- `404` = Spreadsheet ID wrong or sheet doesn't exist
- `net::ERR_CONNECTION_CLOSED` = Network/firewall blocking

---

#### **Log #3: Raw API Response**
```json
{
  "range": "other",
  "majorDimension": "ROWS",
  "values": [
    ["header1", "header2", ...],
    ["data1", "data2", ...],
    ...
  ]
}
```

**✅ Expected:** Should show actual data structure  
**❌ Problem:** Empty values array = no data in sheet

---

#### **Log #4: Data Received**
```
[Homepage] Data received: X rows
[Homepage] Data set successfully!
[Homepage] Loading complete. Error: null
```

**✅ Success:** Shows number of rows  
**❌ Failed:** Shows error message instead

---

#### **Log #5: HomeUniversity Component**
```
[HomeUniversity] Component mounted
[HomeUniversity] Data prop: [...]
[HomeUniversity] Data length: X
[HomeUniversity] Has error: false
[HomeUniversity] Display data length: X
[HomeUniversity] First row: [...]
```

**✅ Working:** Shows data flowing to component  
**❌ Broken:** Data length = 0

---

## 🔬 POSSIBLE ISSUES & SOLUTIONS

### **Issue #1: API Key Missing or Invalid**

**Symptoms:**
```
[Homepage] API Key: Missing
```
OR
```
Response status: 403
```

**Solution:**
1. Check `.env.local` file exists
2. Verify API key is correct
3. Restart server after changes:
   ```bash
   Ctrl+C
   npm run dev
   ```

---

### **Issue #2: Spreadsheet ID Wrong**

**Symptoms:**
```
[Homepage] Spreadsheet ID: Missing
```
OR
```
Response status: 404
```

**Solution:**
1. Check `.env.local` has correct spreadsheet ID
2. Verify spreadsheet is accessible
3. Check sheet name is exactly "other"

---

### **Issue #3: Network/Firewall Blocking**

**Symptoms:**
```
TypeError: Failed to fetch
net::ERR_CONNECTION_CLOSED
```

**Solution:**
1. Test internet connection:
   ```bash
   ping google.com
   ```

2. Test API directly (paste in browser):
   ```
   https://sheets.googleapis.com/v4/spreadsheets/1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4/values/other?key=AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o
   ```

3. Disable firewall/antivirus temporarily
4. Try different network (mobile hotspot)

---

### **Issue #4: Sheet Name Mismatch**

**Current Code:**
```javascript
const RANGE = "other";
```

**Check:**
1. Open your Google Sheet
2. Look at bottom tabs
3. Is there a tab named EXACTLY "other"? (case-sensitive!)
4. If it's named something else (like "Sheet1"), update code:
   ```javascript
   const RANGE = "Sheet1";
   ```

---

### **Issue #5: Empty Sheet or No Data**

**Symptoms:**
```
[Homepage] No data found in sheet
```

**Solution:**
1. Open Google Sheet
2. Make sure there's data in the "other" tab
3. Ensure data starts from Row 1 (headers) and Row 2+ (data)

---

## 🧪 MANUAL TESTING

### **Test 1: Check Environment Variables**

Create a test page at `/test-env.jsx`:
```javascript
export default function TestEnv() {
  return (
    <div>
      <h1>Environment Test</h1>
      <p>API Key: {process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY ? '✅ Present' : '❌ Missing'}</p>
      <p>Spreadsheet ID: {process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID || '❌ Missing'}</p>
    </div>
  );
}
```

Visit: http://localhost:3000/test-env

---

### **Test 2: Direct API Call**

Open browser console and paste:
```javascript
fetch('https://sheets.googleapis.com/v4/spreadsheets/1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4/values/other?key=AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

**Expected:** Should print your Google Sheet data  
**If fails:** Network or API key issue

---

## 📋 CHECKLIST - What to Report Back

After checking console, tell me:

- [ ] What does `[Homepage] API Key:` show?
- [ ] What does `[Homepage] Spreadsheet ID:` show?
- [ ] What is `[Homepage] Response status:`?
- [ ] What does `[Homepage] Raw API Response:` show? (copy first few lines)
- [ ] Any red errors in console? Copy them!
- [ ] Does page show loading spinner or content?

---

## 🎯 QUICK FIXES TO TRY

### **Fix #1: Clear Next.js Cache**
```bash
rm -rf .next
npm run dev
```

### **Fix #2: Reinstall Dependencies**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### **Fix #3: Check File Permissions**
```bash
ls -la .env.local
```
Should be readable by your user

---

## 💡 EXPECTED CONSOLE OUTPUT (Success)

```
[Homepage] Fetching data from Google Sheets...
[Homepage] API Key: Present
[Homepage] Spreadsheet ID: 1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4
[Homepage] Range: other
[Homepage] Fetching URL: https://sheets.googleapis.com/v4/spreadsheets/1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4/values/other?key=AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o
[Homepage] Response status: 200
[Homepage] Response OK? true
[Homepage] Raw API Response: {
  "range": "other",
  "majorDimension": "ROWS",
  "values": [
    ["popup_image", "background_image", "course_image", "about_img_1", "about_img_2"],
    ["some-image.jpg", "bg.png", "course.png", "about1.jpg", "about2.jpg"],
    ...more rows
  ]
}
[Homepage] Data received: 5 rows
[Homepage] Data set successfully!
[Homepage] Loading complete. Error: null
[HomeUniversity] Component mounted
[HomeUniversity] Data prop: [["some-image.jpg", ...]]
[HomeUniversity] Data length: 5
[HomeUniversity] Has error: false
[HomeUniversity] Display data length: 5
[HomeUniversity] First row: ["some-image.jpg", "bg.png", "course.png", "about1.jpg", "about2.jpg"]
```

---

## 🚨 TROUBLESHOOTING FLOWCHART

```
Start
  ↓
Check Console Logs
  ↓
Is API Key present?
  ├─ NO → Check .env.local file
  └─ YES ↓
Is Spreadsheet ID present?
  ├─ NO → Check .env.local file
  └─ YES ↓
What's the response status?
  ├─ 200 → Check if values array has data
  ├─ 403 → API key invalid or permissions
  ├─ 404 → Spreadsheet ID wrong or sheet missing
  └─ Network Error → Firewall/internet issue
```

---

## 📞 NEXT STEPS

1. **Refresh page** at http://localhost:3000
2. **Open DevTools Console** (F12)
3. **Copy ALL console logs** that start with `[Homepage]` and `[HomeUniversity]`
4. **Share them with me** so I can diagnose exact issue

---

## 🎁 BONUS: Temporary Debug Page

I can create a debug page that shows:
- Environment variables status
- Raw API response
- Data flow visualization
- Error details

Let me know if you need this!

---

**Files Modified:**
1. `/src/pages/index.jsx` - Added extensive logging
2. `/src/components/homes/home-university/index.jsx` - Added component logging

**Server Status:** Running at http://localhost:3000

---

**Ready to debug! Share your console logs and I'll pinpoint the exact issue!** 🔍✨
