const Footer = () => {
    return (
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Section Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">contact@learnimport.com</p>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
            
            {/* Autres sections... */}
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-gray-500">
            © {new Date().getFullYear()} LearnImport - Tous droits réservés
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;