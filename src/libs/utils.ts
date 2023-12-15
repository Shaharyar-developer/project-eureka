import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { toast } from "sonner";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, Type = "PPP") {
  return format(new Date(date), Type);
}

export function triggerToast(
  message: string,
  type: "success" | "error" | "warning" | "info" | "default" = "default",
  action?: () => void,
  actionLabel = "Confirm?"
) {
  if (action) {
    return toast[type === "default" ? "info" : type](message, {
      action: {
        label: actionLabel,
        onClick: () => console.log("Undo"),
      },
    });
  }
  if (type === "default") {
    toast(message);
    return;
  } else {
    toast[type](message);
  }
}