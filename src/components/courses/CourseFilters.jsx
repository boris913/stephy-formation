import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';

const filters = [
  { id: 1, name: 'Tous les niveaux', value: '' },
  { id: 2, name: 'Débutant', value: 'beginner' },
  { id: 3, name: 'Intermédiaire', value: 'intermediate' },
  { id: 4, name: 'Avancé', value: 'advanced' }
];

const CourseFilters = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const handleChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter.value);
  };

  return (
    <Listbox value={selectedFilter} onChange={handleChange}>
      <div className="relative">
        <Listbox.Button className="w-full p-3 text-left bg-white rounded-lg border border-gray-200 flex items-center justify-between">
          {selectedFilter.name}
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
        </Listbox.Button>
        
        <Listbox.Options className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100">
          {filters.map((filter) => (
            <Listbox.Option
              key={filter.id}
              value={filter}
              className={({ active }) => 
                `p-3 cursor-pointer ${
                  active ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                }`
              }
            >
              {filter.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default CourseFilters;