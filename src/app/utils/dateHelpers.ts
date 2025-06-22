export const formatTimestamp = (date: Date): string => {
  return date.toLocaleString('en-US', { 
    weekday: 'long', 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}; 