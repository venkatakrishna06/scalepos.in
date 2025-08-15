import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#demo' },
      { name: 'Integrations', href: '#integrations' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Contact Support', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-4 py-8 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 lg:mb-6"
            >
              <div className="flex items-center space-x-2 mb-3 lg:mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <ChefHat className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl lg:text-2xl font-bold">ScalePOS</span>
              </div>
              <p className="text-sm lg:text-base text-gray-400 leading-relaxed mb-4 lg:mb-6">
                India's most trusted free restaurant POS system. Streamline operations, 
                automate GST billing, and boost profitability with our cloud-based solution 
                trusted by 5,000+ restaurants.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2 lg:space-y-3"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" aria-hidden="true" />
                <span className="text-sm lg:text-base text-gray-400">support@scalepos.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" aria-hidden="true" />
                <span className="text-sm lg:text-base text-gray-400">+91 9360055204</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" aria-hidden="true" />
                <span className="text-sm lg:text-base text-gray-400">Hyderabad, Telangana, India</span>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-blue-400">Features</h3>
            <ul className="space-y-1 lg:space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={`Learn about ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-indigo-400">Support</h3>
            <ul className="space-y-1 lg:space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={`Get help with ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-1 lg:space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={`Learn about ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="w-full max-w-7xl mx-auto px-3 lg:px-4 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-xs lg:text-sm mb-3 md:mb-0 text-center md:text-left"
            >
              © 2025 ScalePOS. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap justify-center space-x-1 mb-3 md:mb-0"
            >
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs lg:text-sm"
                    aria-label={`Read our ${link.name}`}
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600 mx-1 lg:mx-2">•</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex space-x-3 lg:space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;