import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingCart, 
  BarChart3, 
  Receipt, 
  Smartphone, 
  Cloud, 
  Users,
  Clock,
  Zap
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: ShoppingCart,
      title: "Real-Time Order Tracking",
      description: "Track every order from kitchen to customer with live updates, kitchen display system, and delivery notifications.",
      color: "from-blue-500 to-blue-600",
      benefits: ["Reduce wait times", "Improve accuracy", "Happy customers"]
    },
    {
      icon: Receipt,
      title: "Automated GST Billing",
      description: "Generate GST-compliant invoices automatically with accurate tax calculations and seamless filing integration.",
      color: "from-indigo-500 to-indigo-600",
      benefits: ["Save 5+ hours daily", "100% compliance", "Error-free billing"]
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics Dashboard",
      description: "Get actionable insights on sales trends, popular items, peak hours, and customer behavior to boost profits.",
      color: "from-purple-500 to-purple-600",
      benefits: ["Increase revenue 30%", "Data-driven decisions", "Spot trends early"]
    },
    {
      icon: Cloud,
      title: "100% Cloud-Based",
      description: "Access your restaurant data from anywhere, anytime with automatic backups and real-time synchronization.",
      color: "from-cyan-500 to-cyan-600",
      benefits: ["Work from anywhere", "Never lose data", "Always up-to-date"]
    },
    {
      icon: Smartphone,
      title: "Works on Any Device",
      description: "Fully responsive design that works perfectly on tablets, phones, desktops, and dedicated POS terminals.",
      color: "from-sky-500 to-sky-600",
      benefits: ["Use existing devices", "No hardware costs", "Staff-friendly"]
    },
    {
      icon: Users,
      title: "Smart Staff Management",
      description: "Manage roles, track performance, schedule shifts, and monitor productivity with detailed staff analytics.",
      color: "from-slate-500 to-slate-600",
      benefits: ["Optimize scheduling", "Track performance", "Reduce labor costs"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <main>
      <section className="py-12 lg:py-20 bg-gray-50 mobile-section" aria-labelledby="features-heading">
        <div className="w-full max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-2">
              Everything You Need to Run Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Restaurant Efficiently
              </span>
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
              Our comprehensive restaurant management system provides all the tools you need 
              to streamline operations, increase efficiency, and boost profitability - completely free to start.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mobile-card"
              >
                <div className={`inline-flex p-3 lg:p-4 rounded-lg bg-gradient-to-r ${feature.color} mb-4 lg:mb-6`}>
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 lg:mt-20"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-8">
              Plus Many More Features
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
              {[
                { icon: Clock, title: "Real-time Updates", desc: "Live sync across all devices" },
                { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 lg:p-6 shadow-md text-center">
                  <div className="inline-flex p-3 rounded-lg bg-gray-100 mb-3">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12 lg:mt-16 px-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Ready to Transform Your Restaurant?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join restaurants already using ScalePOS to streamline operations and boost profits.
              </p>
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openDemoPopup'))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Book a demo of ScalePOS"
              >
                Book Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Features;