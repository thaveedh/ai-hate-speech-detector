import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WarningModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 border-2 border-danger p-8 rounded-3xl max-w-md w-full relative text-center"
      >
        <div className="bg-danger/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-danger">
          <AlertCircle size={48} />
        </div>
        <h2 className="text-2xl font-black mb-2 uppercase text-danger">Action Required</h2>
        <p className="text-slate-300 mb-6">
          Your comment was detected as harmful/hateful speech. This section has been automatically closed to prevent further violations.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-danger text-white py-3 rounded-xl font-bold hover:bg-red-600 transition"
        >
          I Understand
        </button>
      </motion.div>
    </div>
  );
}