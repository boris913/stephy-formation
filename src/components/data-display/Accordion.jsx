import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Accordion = ({ title, children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
            <span className="font-medium">{title}</span>
            <ChevronDownIcon className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 py-3 bg-white">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;