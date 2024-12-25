import { toast } from 'sonner';

/**
 * Handles errors by displaying a toast notification with the error message.
 *
 * @param {Error | string} error - The error to handle.
 */
export default function handleCatchError(error: Error | string): void {
  let message = 'Error while operation';

  if (typeof error === 'string') {
    message = error;
  } else if (error.message) {
    message = error.message;
  }

  toast(message);
}
