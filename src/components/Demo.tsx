import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Smartphone, 
  Monitor,
  ChefHat,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Demo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'Order Management', icon: ChefHat },
    { id: 'analytics', label: 'Analytics', icon: Monitor },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone }
  ];

  const mockOrders = [
    {
      id: '#1247',
      customer: 'Table 12',
      items: ['Butter Chicken', 'Naan', 'Lassi'],
      status: 'preparing',
      time: '12:45 PM',
      total: '₹850'
    },
    {
      id: '#1248',
      customer: 'Online - Rahul',
      items: ['Biryani', 'Raita', 'Gulab Jamun'],
      status: 'ready',
      time: '12:50 PM',
      total: '₹1,200'
    },
    {
      id: '#1249',
      customer: 'Table 8',
      items: ['Dosa', 'Sambar', 'Chutney'],
      status: 'delivered',
      time: '1:15 PM',
      total: '₹320'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing': return 'text-orange-600 bg-orange-100';
      case 'ready': return 'text-green-600 bg-green-100';
      case 'delivered': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'preparing': return <Clock className="w-4 h-4" />;
      case 'ready': return <AlertCircle className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-white mobile-section">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-2">
            See It in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}Action
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8 px-4 lg:px-0">
            Experience the power of our restaurant management system with this interactive demo.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-2 lg:px-0">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Demo Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-4 lg:p-8 shadow-xl mobile-card"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Live Order Dashboard</h3>
                    
                    <div className="grid gap-3 lg:gap-4">
                      {mockOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-3 lg:p-4 flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="text-base lg:text-lg font-semibold text-gray-900">{order.id}</div>
                            <div>
                              <div className="text-sm lg:text-base font-medium text-gray-900">{order.customer}</div>
                              <div className="text-xs lg:text-sm text-gray-500">
                                {order.items.join(', ')}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end space-x-3 lg:space-x-4">
                            <div className="text-right">
                              <div className="text-sm lg:text-base font-semibold text-gray-900">{order.total}</div>
                              <div className="text-xs lg:text-sm text-gray-500">{order.time}</div>
                            </div>
                            
                            <div className={`flex items-center space-x-1 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                              <span className="capitalize">{order.status}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-4 lg:p-6 shadow-sm"
                >
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Analytics Dashboard</h3>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8">
                    {[
                      { label: 'Daily Revenue', value: '₹45,280', change: '+12%', color: 'green' },
                      { label: 'Orders', value: '247', change: '+8%', color: 'indigo' },
                      { label: 'Avg. Order Value', value: '₹183', change: '+5%', color: 'blue' },
                      { label: 'GST Collected', value: '₹8,156', change: '+15%', color: 'purple' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-3 lg:p-4"
                      >
                        <div className="text-xs lg:text-sm text-gray-600 mb-1">{stat.label}</div>
                        <div className="text-lg lg:text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className={`text-xs lg:text-sm font-medium text-${stat.color}-600`}>
                          {stat.change} vs yesterday
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="h-48 lg:h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl lg:text-4xl mb-2">📊</div>
                      <div className="text-sm lg:text-base text-gray-600">Interactive Charts & Graphs</div>
                      <div className="text-xs lg:text-sm text-gray-500 mt-1">Real-time data visualization</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'mobile' && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-4 lg:p-6 shadow-sm"
                >
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Mobile Experience</h3>
                  
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
                    <div className="flex space-x-2 lg:space-x-4 scale-75 lg:scale-100">
                      <div className="w-48 lg:w-64 h-80 lg:h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-3 lg:p-4 shadow-2xl">
                        <div className="bg-white rounded-2xl h-full p-3 lg:p-4 flex flex-col">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 mb-4">
                            <div className="text-white font-semibold text-center text-sm lg:text-base">ScalePOS</div>
                          </div>
                          
                          <div className="space-y-3 flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-xs lg:text-sm font-medium">Quick Actions</div>
                              <div className="grid grid-cols-2 gap-2 mt-2">
                                <div className="bg-blue-100 rounded p-1 lg:p-2 text-center text-xs">Orders</div>
                                <div className="bg-indigo-100 rounded p-1 lg:p-2 text-center text-xs">Menu</div>
                                <div className="bg-cyan-100 rounded p-1 lg:p-2 text-center text-xs">Reports</div>
                                <div className="bg-purple-100 rounded p-1 lg:p-2 text-center text-xs">Settings</div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-xs lg:text-sm font-medium mb-2">Today's Summary</div>
                              <div className="text-xs text-gray-600">
                                <div className="flex justify-between">
                                  <span>Orders:</span>
                                  <span>247</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Revenue:</span>
                                  <span>₹45,280</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-40 lg:w-48 h-64 lg:h-80 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-2 lg:p-3 shadow-2xl">
                        <div className="bg-white rounded-2xl h-full p-3 flex flex-col">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-2 mb-3">
                            <div className="text-white font-semibold text-center text-xs lg:text-sm">Kitchen Display</div>
                          </div>
                          
                          <div className="space-y-2 flex-1">
                            {['Table 12', 'Online Order', 'Table 8'].map((order, index) => (
                              <div key={index} className="bg-gray-50 rounded p-2">
                                <div className="text-xs font-medium">{order}</div>
                                <div className="text-xs text-gray-600">Ready in 5 mins</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                        Native Mobile Experience
                      </h4>
                      <ul className="space-y-2 text-sm lg:text-base text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                          <span>Responsive on all devices</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                          <span>Offline capability</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                          <span>Touch-optimized interface</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                          <span>Real-time synchronization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 30 }}*/}
        {/*  animate={inView ? { opacity: 1, y: 0 } : {}}*/}
        {/*  transition={{ delay: 0.6, duration: 0.8 }}*/}
        {/*  className="text-center mt-8 lg:mt-16 px-4"*/}
        {/*>*/}
        {/*  <motion.button*/}
        {/*    whileHover={{ scale: 1.05 }}*/}
        {/*    whileTap={{ scale: 0.95 }}*/}
        {/*    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto mobile-btn"*/}
        {/*  >*/}
        {/*    <Play className="w-4 h-4 lg:w-5 lg:h-5" />*/}
        {/*    <span>Request Live Demo</span>*/}
        {/*  </motion.button>*/}
        {/*</motion.div>*/}
      </div>
    </section>
  );
};

export default Demo;