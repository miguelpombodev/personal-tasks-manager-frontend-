export function stringfiedDateFormat(dateStringInput: string): string {
  const formattedDate = new Date(dateStringInput).toISOString().split("T")[0];

  return formattedDate;
}
