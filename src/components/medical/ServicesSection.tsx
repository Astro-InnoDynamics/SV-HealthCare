import { motion } from 'framer-motion';
import { Heart, Brain, Eye, Stethoscope, Activity, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac diagnostics and treatment options.',
      features: ['ECG & Echo', 'Cardiac Surgery', 'Preventive Care']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain, spine, and nervous system disorders.',
      features: ['Brain Imaging', 'Stroke Care', 'Neurosurgery']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Vision Tests', 'Laser Surgery', 'Retinal Care']
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive primary care for adults with focus on prevention and wellness.',
      features: ['Health Checkups', 'Chronic Disease', 'Preventive Care']
    },
    {
      icon: Activity,
      title: 'Emergency Medicine',
      description: '24/7 emergency care with rapid response and advanced life support.',
      features: ['Trauma Care', 'Critical Care', 'Urgent Surgery']
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Care',
      description: 'Proactive healthcare approach focusing on disease prevention and early detection.',
      features: ['Health Screening', 'Vaccination', 'Wellness Programs']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground font-medical max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by expert medical professionals 
            using state-of-the-art technology and compassionate care approach.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-background shadow-card-medical border-0 hover:shadow-medical transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Service Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-medical mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground font-medical">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <motion.button
                      className="mt-6 text-primary font-semibold font-medical hover:text-primary-dark transition-colors flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-white/90 font-medical mb-6 text-lg">
              Our emergency department is available 24/7 with experienced medical staff ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency: (555) 911-HELP
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Appointment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;