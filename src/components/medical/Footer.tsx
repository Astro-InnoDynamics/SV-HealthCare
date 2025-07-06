import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import medicalLogo from '@/assets/medical-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
    { name: 'Patient Portal', href: '#portal' },
    { name: 'Careers', href: '#careers' }
  ];

  const services = [
    { name: 'Emergency Care', href: '#emergency' },
    { name: 'Cardiology', href: '#cardiology' },
    { name: 'Neurology', href: '#neurology' },
    { name: 'Pediatrics', href: '#pediatrics' },
    { name: 'Orthopedics', href: '#orthopedics' },
    { name: 'Women\'s Health', href: '#womens-health' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img
                src={medicalLogo}
                alt="SV Healthcare"
                className="w-12 h-12 brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-heading font-bold">SV Healthcare</h3>
                <p className="text-primary-foreground/80 font-medical text-sm">
                  Advanced Medical Solutions
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/90 font-medical leading-relaxed">
              Providing exceptional healthcare services for over 25 years with 
              cutting-edge technology and compassionate care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground font-medical transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground font-medical transition-colors hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-heading font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/90 font-medical">
                  123 Medical Center Drive<br />
                  Healthcare City, HC 12345<br />
                  United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-light flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 font-medical">
                    General: (555) 123-4567
                  </p>
                  <p className="text-primary-foreground/90 font-medical">
                    Emergency: (555) 911-HELP
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light flex-shrink-0" />
                <p className="text-primary-foreground/90 font-medical">
                  info@svhealthcare.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/90 font-medical">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
                  <p className="text-primary-light font-semibold">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 font-medical text-sm text-center md:text-left">
              © 2024 SV Healthcare. All rights reserved. | 
              <a href="#privacy" className="hover:text-primary-foreground transition-colors ml-1">
                Privacy Policy
              </a> | 
              <a href="#terms" className="hover:text-primary-foreground transition-colors ml-1">
                Terms of Service
              </a>
            </p>
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/70 font-medical">
              <span>Accredited by Joint Commission</span>
              <span>•</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <motion.div
        className="bg-destructive text-destructive-foreground py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4">
          <p className="text-center font-medical text-sm">
            <span className="font-semibold">Medical Emergency?</span> Call 911 or visit our Emergency Department immediately
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;