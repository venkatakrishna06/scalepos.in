import { motion } from 'framer-motion';
import { ChefHat, Cloud, Smartphone, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <header className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
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

      <div className="w-full max-w-7xl mx-auto px-3 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full inline-flex"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold text-sm lg:text-base">FREE to Start • No Setup Fees</span>
            </motion.div>

            {/* Main Headline - H1 for SEO */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Free Restaurant POS That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Actually Works
              </span>
            </motion.h1>

            {/* Value Proposition Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed px-2 lg:px-0"
            >
              Start managing orders, automate GST billing, and track sales in real-time. 
              <strong className="text-gray-900"> Completely free to start</strong> - trusted by restaurants across India.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-3 text-sm lg:text-base"
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Real-time order tracking</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Automated GST calculations</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Works on any device</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Setup in under 5 minutes</span>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 px-2 lg:px-0"
            >
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openDemoPopup'))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                aria-label="Start free trial of ScalePOS restaurant management system"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openDemoPopup'))}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors w-full sm:w-auto"
                aria-label="Watch demo of ScalePOS features"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-medium">4.8/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                    alt="Restaurant owner testimonial" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                    alt="Restaurant manager testimonial" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                    alt="Chef testimonial" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                </div>
                <span>Restaurants trust us</span>
              </div>
            </motion.div>

            {/* Additional Trust Elements */}
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
                <span>Works on any device</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Real-time analytics</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
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
    </header>
  );
};

export default Hero;