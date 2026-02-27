import Button from './Button';

interface ConfirmModalProps {
    isOpen: boolean;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    loading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmModal({
    isOpen,
    title = 'Are you sure?',
    message = 'Please confirm this action.',
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    loading = false,
    onConfirm,
    onCancel,
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="mx-4 w-full max-w-sm rounded-xl bg-neutral-900 p-6 shadow-xl border border-white/10">
                <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/70 mb-4">
                    {message}
                </p>
                <div className="flex justify-end gap-3">
                    <Button
                        onClick={onCancel}
                        disabled={loading}
                        className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-sm"
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        onClick={onConfirm}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-sm"
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}

