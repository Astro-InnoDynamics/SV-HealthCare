import { motion } from 'framer-motion';
import { Award, Clock, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Excellence Awards',
      value: '15+',
      description: 'National healthcare excellence awards'
    },
    {
      icon: Clock,
      title: 'Years of Service',
      value: '25+',
      description: 'Serving the community with dedication'
    },
    {
      icon: Users,
      title: 'Patients Served',
      value: '50K+',
      description: 'Lives touched and improved'
    },
    {
      icon: Heart,
      title: 'Success Rate',
      value: '98%',
      description: 'Patient satisfaction and recovery'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                About SV Healthcare
              </h2>
              <p className="text-xl text-muted-foreground font-medical leading-relaxed mb-6">
                For over 25 years, SV Healthcare has been at the forefront of medical excellence, 
                providing comprehensive healthcare services with a patient-centered approach. Our 
                commitment to innovation, compassion, and clinical excellence has made us a trusted 
                name in healthcare.
              </p>
              <p className="text-lg text-muted-foreground font-medical leading-relaxed">
                We combine advanced medical technology with personalized care to deliver the best 
                possible outcomes for our patients. Our multidisciplinary team of experts works 
                collaboratively to ensure every patient receives the highest standard of care.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground font-medical">
                  To provide exceptional healthcare services that improve the quality of life 
                  for our patients and communities through innovative treatments, compassionate 
                  care, and medical excellence.
                </p>
              </div>
              <div className="border-l-4 border-primary-light pl-6">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground font-medical">
                  To be the leading healthcare provider recognized for our commitment to 
                  patient care, medical innovation, and community health advancement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-gradient-card shadow-card-medical border-0 hover:shadow-medical transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-heading font-bold text-primary mb-2">
                        {achievement.value}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medical">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground font-medical max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compassion',
                description: 'We treat every patient with empathy, respect, and understanding.'
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in medical care and service delivery.'
              },
              {
                title: 'Innovation',
                description: 'We embrace cutting-edge technology and advanced medical practices.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-heading font-semibold text-primary mb-4">
                  {value.title}
                </h4>
                <p className="text-muted-foreground font-medical">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;