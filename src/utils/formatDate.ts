export function FormatDate(date: string): string {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const datat = new Date(date);
  const datef = datat.getDate() + ", " + months[datat.getMonth()];
  return datef;
}
