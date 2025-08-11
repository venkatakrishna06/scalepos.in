
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
  Shield,
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
      title: "Order Tracking",
      description: "Real-time order management with kitchen display system and delivery tracking.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Receipt,
      title: "GST Customizations",
      description: "Automated GST calculations, invoice generation, and tax compliance reporting.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Comprehensive insights on sales, inventory, customer behavior, and performance metrics.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Access your restaurant data from anywhere, anytime with automatic backups.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Fully responsive design works perfectly on tablets, phones, and desktop.",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Role-based access control, shift scheduling, and performance tracking.",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live synchronization across all devices and locations instantly.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee and data encryption.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for quick order processing and smooth operations.",
      color: "from-yellow-500 to-yellow-600"
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
    <section className="py-12 lg:py-20 bg-gray-50 mobile-section">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-2">
            Everything You Need to Run Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}Restaurant
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
            Our comprehensive restaurant management system provides all the tools you need 
            to streamline operations, increase efficiency, and boost profitability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mobile-card"
            >
              <div className={`inline-flex p-3 lg:p-4 rounded-lg bg-gradient-to-r ${feature.color} mb-4 lg:mb-6`}>
                <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 30 }}*/}
        {/*  animate={inView ? { opacity: 1, y: 0 } : {}}*/}
        {/*  transition={{ delay: 0.8, duration: 0.8 }}*/}
        {/*  className="text-center mt-8 lg:mt-16 px-4"*/}
        {/*>*/}
        {/*  <motion.button*/}
        {/*    whileHover={{ scale: 1.05 }}*/}
        {/*    whileTap={{ scale: 0.95 }}*/}
        {/*    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-shadow mobile-btn"*/}
        {/*  >*/}
        {/*    Explore All Features*/}
        {/*  </motion.button>*/}
        {/*</motion.div>*/}
      </div>
    </section>
  );
};

export default Features;