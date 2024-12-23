import { toast } from 'sonner';

export default function handleCatchError(error: unknown) {
    let message = 'Error while operation';

    if (error instanceof Error) {
        message = error.message;
    } else {
        message = String(error);
    }

    toast(message);
}
