import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { toast } from "sonner";

/**
 * Combines multiple class names into a single string.
 * 
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a given date according to the specified format.
 * @param date - The date to be formatted.
 * @param Type - The format type. Defaults to "PPP".
 * @returns The formatted date string.
 */
export function formatDate(date: Date, Type = "PPP") {
  return format(new Date(date), Type);
}

/**
 * Displays a toast message with optional action.
 * @param message - The message to be displayed in the toast.
 * @param type - The type of the toast. Can be "success", "error", "warning", "info", or "default". Default is "default".
 * @param action - Optional callback function to be executed when the action is clicked.
 * @param actionLabel - The label for the action button. Default is "Confirm?".
 */
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
        onClick: () => action(),
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
