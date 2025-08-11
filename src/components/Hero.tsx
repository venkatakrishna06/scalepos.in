import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Cloud, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="w-full px-3 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600"
            >
              <ChefHat className="w-6 h-6" />
              <span className="font-semibold text-sm lg:text-base">Restaurant Management Made Simple</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Streamline Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Restaurant
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Operations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed px-2 lg:px-0"
            >
              Cloud-based POS system with order tracking, GST customizations, and powerful analytics. 
              Manage your restaurant from anywhere, anytime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start px-2 lg:px-0"
            >
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openDemoPopup'))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow mobile-btn"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs lg:text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4" />
                <span>100% Cloud-based</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Real-time Analytics</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-300 mx-4 lg:mx-0">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-12 rounded-t-lg flex items-center justify-center mb-6">
                <span className="text-white font-semibold text-sm lg:text-base">ScalePOS Dashboard</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-3 lg:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Today's Orders</span>
                    <span className="text-xl lg:text-2xl font-bold text-green-600">247</span>
                  </div>
                  <div className="bg-blue-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 1.2, duration: 1 }}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 lg:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Revenue</span>
                    <span className="text-xl lg:text-2xl font-bold text-indigo-600">₹45,280</span>
                  </div>
                  <div className="bg-indigo-200 rounded-full h-2">
                    <motion.div
                      className="bg-indigo-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ delay: 1.4, duration: 1 }}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 lg:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">GST Processed</span>
                    <span className="text-xl lg:text-2xl font-bold text-cyan-600">₹8,156</span>
                  </div>
                  <div className="bg-cyan-200 rounded-full h-2">
                    <motion.div
                      className="bg-cyan-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      transition={{ delay: 1.6, duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-blue-600 text-white p-2 lg:p-3 rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-indigo-600 text-white p-2 lg:p-3 rounded-full shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChefHat className="w-4 h-4 lg:w-6 lg:h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;