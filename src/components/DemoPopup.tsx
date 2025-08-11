import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DemoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    window.addEventListener('openDemoPopup', handleOpenPopup);

    return () => {
      window.removeEventListener('openDemoPopup', handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closePopup}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors shadow-lg"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
              </motion.button>
            </div>

            {/* Form Content */}
            <div className="h-[700px] lg:h-[800px]">
              <iframe
                src="https://golden-name-f02.notion.site/ebd/24c3b9bbb13c8000aa67f1ac3ea2b63f"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="border-0"
                title="Demo Request Form"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoPopup;