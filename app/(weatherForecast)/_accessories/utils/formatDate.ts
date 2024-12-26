/**
 * Utility function to format a date string.
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dayName = date.toLocaleString('default', { weekday: 'long' });
  const monthName = date.toLocaleString('default', { month: 'long' });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  return `${dayName}, ${monthName} ${dayOfMonth}, ${year}`;
};

export default formatDate;
