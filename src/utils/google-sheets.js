/**
 * Google Sheets API Utility
 * Centralized service for fetching data from Google Sheets
 */

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;

/**
 * Fetch data from Google Sheets
 * @param {string} range - The range/sheet name to fetch
 * @param {boolean} skipHeader - Whether to skip the first row (header)
 * @returns {Promise<Array>} - Array of row data
 */
export async function fetchGoogleSheetData(range, skipHeader = true) {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.error('Google Sheets API credentials not configured');
    throw new Error('Missing API credentials');
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Google Sheets API access denied. Check API key permissions.');
      } else if (response.status === 404) {
        throw new Error(`Spreadsheet or range not found: ${range}`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const result = await response.json();

    if (!result.values || result.values.length === 0) {
      return [];
    }

    // Remove header row if needed
    if (skipHeader) {
      result.values.shift();
    }

    return result.values;
  } catch (error) {
    console.error(`Error fetching Google Sheet data (${range}):`, error.message);
    throw error;
  }
}

/**
 * Fetch data with error handling and empty state
 * @param {string} range - The range/sheet name to fetch
 * @returns {Promise<{data: Array, error: string|null}>}
 */
export async function fetchWithFallback(range) {
  try {
    const data = await fetchGoogleSheetData(range);
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
}

export default {
  fetchGoogleSheetData,
  fetchWithFallback
};
