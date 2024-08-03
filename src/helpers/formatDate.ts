type formatDateType = {
  weekday: "long";
  year: "numeric";
  month: "long";
  day: "numeric";
};

export const formatDate = (date: Date) => {
  const options: formatDateType = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-Us", options);
};

export const formatTimeAgo = (dateStr: string) => {
  const now = new Date()
  const date = new Date(dateStr)
  const secondPast = (now.getTime() - date.getTime())

  if (secondPast < 60) return `${Math.floor(secondPast)}s ago`
  if (secondPast < 3660) return `${Math.floor(secondPast / 60)}m ago`
  if (secondPast <= 86400) return `${Math.floor(secondPast / 3600)}h ago`
  if (secondPast > 86400) {
    const day = Math.floor(secondPast / 86400)
    return day === 1 ? `${day} day ago` : `${day} days ago`
  }
}