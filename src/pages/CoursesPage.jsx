import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '@components/navigation';
import { CourseFilters, CourseCard } from '@components/courses';
import { Container, GridLayout, Pagination } from '@components/layout';
import { SearchInput, Button } from '@components/ui';
import { featuredCourses } from '@data/courses';

const CoursesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filtrage combiné
  const filteredCourses = featuredCourses.filter(course => {
    const matchesCategory = !categoryFilter || course.category === categoryFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 py-12">
        <Container>
          {/* En-tête avec recherche */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Catalogue des Formations</h1>
            <div className="max-w-2xl mx-auto mb-6">
              <SearchInput 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une formation..."
              />
            </div>
            <CourseFilters 
              onCategoryChange={setCategoryFilter}
              selectedCategory={categoryFilter}
            />
          </div>

          {/* Résultats */}
          {currentCourses.length > 0 ? (
            <>
              <GridLayout cols={3}>
                {currentCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard
                      {...course}
                      onLearnMore={`/courses/${course.id}`}
                    />
                  </motion.div>
                ))}
              </GridLayout>

              {/* Pagination */}
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalItems={filteredCourses.length}
                  itemsPerPage={coursesPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl text-gray-600 mb-4">
                Aucune formation trouvée pour ces critères
              </h2>
              <Button 
                variant="outline" 
                onClick={() => {
                  setCategoryFilter('');
                  setSearchQuery('');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;