'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#181818] rounded-2xl shadow-lg w-full max-w-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Связаться с нами</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
