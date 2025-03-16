import { motion } from 'framer-motion';
import  Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import HeroSection from '../components/layout/HeroSection';
import Container from '../components/layout/Container';
import SectionWrapper from '../components/layout/SectionWrapper';
import CourseCard from '../components/courses/CourseCard';
import  Button from '../components/ui/Button';
import {featuredCourses} from '../data/courses';
import { learningObjectives } from '../data/objectives';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          title="Devenez Expert en Commerce International"
          subtitle="Formations Pratiques par des Professionnels du Secteur"
          ctaText="Découvrir les Formations"
          ctaLink="/courses"
        />

        {/* Objectifs Pédagogiques */}
        <SectionWrapper title="Ce Que Vous Allez Acquérir">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {learningObjectives.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* Formations Phares */}
        <SectionWrapper title="Nos Formations Populaires" className="bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    duration={course.duration}
                    rating={course.rating}
                    image={course.imageUrl}
                    onLearnMore={`/courses/${course.id}`}
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* CTA Final */}
        <section className="bg-blue-600 text-white py-16">
          <Container className="text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à Transformer Votre Business ?</h2>
            <Button 
              variant="secondary" 
              size="xl"
              className="mx-auto"
              link="/courses"
            >
              Commencer Maintenant
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;