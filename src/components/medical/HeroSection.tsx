import { motion } from 'framer-motion';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBackground from '@/assets/medical-hero-bg.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: 'Years of Excellence', value: '25+' },
    { icon: Heart, label: 'Patients Treated', value: '50K+' },
    { icon: Users, label: 'Expert Doctors', value: '200+' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-heading font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Advanced
              <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                Healthcare
              </span>
              Solutions
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 font-medical leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience world-class medical care with cutting-edge technology, 
              comprehensive treatments, and compassionate healthcare professionals 
              dedicated to your wellness journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 rounded-full group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 rounded-full"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold font-heading">{stat.value}</div>
                  <div className="text-sm text-white/80 font-medical">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* Quick Service Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-card-medical border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      24/7 Emergency Care
                    </h3>
                    <p className="text-muted-foreground font-medical">
                      Round-the-clock emergency medical services
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Appointment Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-card-medical border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Expert Specialists
                    </h3>
                    <p className="text-muted-foreground font-medical">
                      Board-certified doctors across all specialties
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Technology Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-card-medical border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Advanced Technology
                    </h3>
                    <p className="text-muted-foreground font-medical">
                      State-of-the-art medical equipment and facilities
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-medical" />
        <div className="absolute top-1/3 right-16 w-16 h-16 bg-white/10 rounded-full animate-heartbeat" />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;