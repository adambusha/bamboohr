import { getPreferenceValues } from "@raycast/api";
import { getWhosOut } from "../api/bamboohr";
import { formatDateRange, isOutToday, parseBambooHRDate } from "../utils/dateUtils";
import { formatTimeOffType } from "../utils/formatters";

interface Preferences {
  subdomain: string;
  apiKey?: string;
}

/**
 * Retrieve a list of employees who are out of office today
 */
export default async function getWhosOutToday() {
  try {
    // Fetch time off data
    const allEntries = await getWhosOut();
    
    // Filter entries for people who are out today
    const outToday = allEntries.filter(entry => isOutToday(entry.start, entry.end));
    
    if (outToday.length === 0) {
      return "No one is out of the office today! Everyone is working.";
    }
    
    // Format the response
    let response = `There ${outToday.length === 1 ? 'is' : 'are'} ${outToday.length} ${outToday.length === 1 ? 'person' : 'people'} out of the office today:\n\n`;
    
    outToday.forEach((entry, index) => {
      const dateStart = parseBambooHRDate(entry.start);
      const dateEnd = parseBambooHRDate(entry.end);
      const dateRange = formatDateRange(dateStart, dateEnd);
      
      response += `${index + 1}. ${entry.name} - ${formatTimeOffType(entry.timeOffType || entry.type)} (${dateRange})\n`;
    });
    
    return response;
  } catch (error) {
    console.error("Error getting who's out today:", error);
    return "Sorry, I couldn't fetch who's out of office today due to an error.";
  }
} 