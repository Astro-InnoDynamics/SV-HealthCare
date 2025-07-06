import { motion } from 'framer-motion';
import { Star, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15+ years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Cardiology', 'FACC', 'Board Certified'],
      about: 'Specialized in preventive cardiology and advanced cardiac interventions.'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12+ years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Neurology', 'FAAN', 'Fellowship Trained'],
      about: 'Expert in stroke care, epilepsy treatment, and neurological disorders.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '10+ years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1594824226989-dc2e4e88c3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Pediatrics', 'ABP Certified', 'Child Health Specialist'],
      about: 'Dedicated to comprehensive child healthcare and development.'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1582750433179-e8db6d90ed4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Orthopedics', 'FAAOS', 'Sports Medicine'],
      about: 'Specializing in joint replacement and sports injury rehabilitation.'
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Gynecologist',
      experience: '14+ years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824226989-dc2e4e88c3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Gynecology', 'FACOG', 'Minimally Invasive Surgery'],
      about: 'Comprehensive womens health care with advanced surgical techniques.'
    },
    {
      name: 'Dr. Robert Taylor',
      specialty: 'Emergency Medicine',
      experience: '16+ years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['MD Emergency Medicine', 'ABEM Certified', 'Trauma Specialist'],
      about: 'Critical care specialist with expertise in emergency trauma management.'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gradient-card">
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
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-muted-foreground font-medical max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of experience and expertise 
            to provide you with the highest quality healthcare services.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-background shadow-card-medical border-0 hover:shadow-medical transition-all duration-300 overflow-hidden">
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Doctor Info */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-semibold font-medical mb-1">
                        {doctor.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground font-medical">
                        {doctor.experience}
                      </p>
                    </div>

                    {/* Qualifications */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {doctor.qualifications.map((qual, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medical"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* About */}
                    <p className="text-muted-foreground font-medical text-sm mb-6 leading-relaxed">
                      {doctor.about}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <Button className="w-full bg-gradient-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Doctor
                      </Button>
                    </div>
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
          <div className="bg-background rounded-2xl p-8 shadow-medical">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Schedule Your Appointment?
            </h3>
            <p className="text-muted-foreground font-medical mb-6 text-lg max-w-2xl mx-auto">
              Our medical professionals are ready to provide you with personalized care. 
              Schedule your consultation today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;