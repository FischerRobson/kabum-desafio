import { format } from "date-fns";

export const formatDate = (date: string) => {
  return Intl.DateTimeFormat("pt-BR").format(new Date(date + "T00:00:00"))
}