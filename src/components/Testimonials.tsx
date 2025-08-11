import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner, Spice Garden",
      location: "Mumbai",
      rating: 5,
      text: "ScalePOS has completely transformed how we manage our restaurant. The order tracking and GST features have saved us countless hours every day.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Manager, Café Delight",
      location: "Delhi",
      rating: 5,
      text: "The analytics dashboard gives us incredible insights into our business. We've increased our revenue by 30% since implementing the system.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Amit Patel",
      role: "Chef & Owner, Gujarati Thali",
      location: "Ahmedabad",
      rating: 5,
      text: "Being able to manage everything from my phone while away from the restaurant is a game-changer. The cloud-based system is incredibly reliable.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sneha Reddy",
      role: "Operations Head, South Indian Express",
      location: "Bangalore",
      rating: 5,
      text: "The GST compliance features are excellent. Tax calculations are automatic and accurate, making our accounting process so much smoother.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 mobile-section">
      <div className="w-full px-3 lg:px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-2">
            Loved by Restaurant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}Owners
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
            Join thousands of satisfied restaurant owners who have transformed their operations with ScalePOS.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-4 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative mobile-card"
            >
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4 text-blue-200">
                <Quote className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4 lg:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm lg:text-base font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs lg:text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs lg:text-sm text-blue-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-8 lg:mt-16"
        >
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg max-w-2xl mx-auto mobile-card">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
              Join 5,000+ Happy Customers
            </h3>
            <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 px-2 lg:px-0">
              Start your free trial today and experience the difference ScalePOS can make for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-shadow mobile-btn"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;