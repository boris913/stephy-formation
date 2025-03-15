import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const links = [
    { name: 'Formations', to: '/courses' },
    { name: 'À Propos', to: '/about' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">LearnImport</span>
              </Link>

              {/* Liens Desktop */}
              <div className="hidden md:flex items-center space-x-8">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Menu Mobile */}
              <Disclosure.Button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Panneau Mobile */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as={Link}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;