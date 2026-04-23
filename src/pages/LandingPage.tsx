import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Shield, Zap, CheckCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    { icon: Clock, title: 'Save Time', desc: 'Skip physical queues entirely', color: 'from-blue-500 to-cyan-500' },
    { icon: MapPin, title: 'Find Nearby', desc: 'Discover services around you', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, title: 'Instant Booking', desc: 'Book tokens in seconds', color: 'from-orange-500 to-yellow-500' },
    { icon: Shield, title: 'Secure & Safe', desc: 'Your data is protected', color: 'from-green-500 to-emerald-500' },
  ];

  const benefits = [
    'Real-time queue tracking',
    'Smart notifications',
    'Digital token system',
    'Multi-location support',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden">
      {/* Premium Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 px-6 py-3 rounded-full mb-8 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Smart Queue Management Platform
            </span>
          </motion.div>
          
          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Skip the Wait.
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Join from Anywhere
            </span>
          </motion.h1>
          
          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Book appointments at hospitals, clinics, banks, and government offices. 
            Track your queue in real-time and arrive exactly when it's your turn.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => navigate('/login')}
              className="relative group bg-gradient-to-r from-purple-500 via-violet-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all border-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30" />
          <div className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-pink-900/30 rounded-3xl p-8 md:p-16 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-slate-700/50">
            <img
              src="/src/assets/hero.png"
              alt="Queue Management"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Premium Features Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MeraTurn</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience the future of queue management with our premium features
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Skip the Line?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of users who save time every day with MeraTurn
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/login')}
              className="bg-white text-purple-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-white/20 transition-all font-semibold"
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
