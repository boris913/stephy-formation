import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
// import { CheckIcon } from '@heroicons/react/solid';
// import { Tab } from '@headlessui/react';
import { Navbar, Footer } from '@components/navigation';
import { Accordion, RatingStars, InstructorCard, ReviewList } from '@components/data-display';
import { PriceDisplay, Button } from '@components/ui';
import { fullCourse, courseStats } from '@data/courses';
import { CheckIcon } from '@heroicons/react/24/solid';

const CourseDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contenu Principal */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{fullCourse.title}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <RatingStars rating={fullCourse.rating} />
                  <span className="text-gray-600">{fullCourse.students}+ étudiants</span>
                </div>

                {/* Objectifs */}
                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold mb-4">Ce que vous allez apprendre :</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {fullCourse.objectives.map((objective, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-600" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Navigation par Onglets */}
              <Tab.Group>
                <Tab.List className="flex space-x-8 border-b border-gray-200 mb-8">
                  {['Programme', 'Formateur', 'Avis', 'FAQ'].map((tab) => (
                    <Tab
                      key={tab}
                      className={({ selected }) => 
                        `pb-4 px-1 font-medium ${
                          selected 
                            ? 'border-b-2 border-blue-600 text-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`
                      }
                    >
                      {tab}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels className="mt-8">
                  {/* Programme */}
                  <Tab.Panel>
                    <div className="space-y-4">
                      {fullCourse.curriculum.map((section, index) => (
                        <Accordion 
                          key={index} 
                          title={`Section ${index + 1}: ${section.title}`}
                        >
                          <ul className="space-y-3">
                            {section.lessons.map((lesson, idx) => (
                              <li 
                                key={idx}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                              >
                                <span>{lesson}</span>
                                <span className="text-sm text-gray-500">{section.duration}</span>
                              </li>
                            ))}
                          </ul>
                        </Accordion>
                      ))}
                    </div>
                  </Tab.Panel>

                  {/* Formateur */}
                  <Tab.Panel>
                    <InstructorCard 
                      name={fullCourse.instructor.name}
                      bio={fullCourse.instructor.bio}
                      avatar={fullCourse.instructor.avatar}
                      experience="15+ ans d'expérience"
                      courses="12 formations créées"
                    />
                  </Tab.Panel>

                  {/* Avis */}
                  <Tab.Panel>
                    <ReviewList reviews={fullCourse.reviews} />
                  </Tab.Panel>

                  {/* FAQ */}
                  <Tab.Panel>
                    <div className="space-y-4">
                      {fullCourse.faq.map((item, index) => (
                        <Accordion key={index} title={item.question}>
                          <p className="text-gray-600">{item.answer}</p>
                        </Accordion>
                      ))}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>

            {/* Sidebar Checkout */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <PriceDisplay 
                  price={fullCourse.price} 
                  oldPrice={697}
                  currency="€" 
                  className="text-4xl mb-4"
                />

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full mb-4"
                  link="/checkout"
                >
                  Acheter Maintenant
                </Button>

                <div className="space-y-3 text-sm text-gray-600">
                  <p>✅ Accès à vie</p>
                  <p>✅ Certificat inclus</p>
                  <p>✅ Support 7j/7</p>
                  <p>✅ 30 jours satisfait ou remboursé</p>
                </div>

                <hr className="my-6" />

                <div className="text-center">
                  <p className="font-medium mb-2">Statistiques :</p>
                  <div className="flex justify-around">
                    <div>
                      <p className="text-2xl font-bold">{courseStats.successRate}</p>
                      <p className="text-sm">Taux de réussite</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{courseStats.supportResponseTime}</p>
                      <p className="text-sm">Réponse support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;