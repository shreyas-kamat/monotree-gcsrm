import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img 
                src="/monotree.png" 
                alt="Monotree" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Features</a></li>
              <li><a href="#targeting" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Targeting</a></li>
              <li><a href="#integrations" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#why-us" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Why us?</a></li>
              <li><a href="#about-us" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">About us</a></li>
            </ul>
          </div>

          {/* Stories Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Stories</h3>
            <ul className="space-y-3">
              <li><a href="#cases" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Cases</a></li>
              <li><a href="#blog" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@monotree.com" className="block text-gray-500 hover:text-gray-700 transition-colors text-sm">
                contact@monotree.com
              </a>
              <p className="text-gray-500 text-sm">+45 3111 0003</p>
              <p className="text-gray-500 text-sm">VAT ID 40567720</p>
              <a
                href="https://linkedin.com/company/monotree"
                className="inline-block mt-3 text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
              <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
              <span className="text-xs text-blue-600 font-medium">GDPR</span>
              <span className="text-xs text-blue-600">COMPLIANT</span>
            </div>
            <p className="text-xs text-gray-500">
              ISAE 3000 certified by BDO Denmark
            </p>
          </div>
          
          <div className="text-xs text-gray-500">
            2025 © Monotree ApS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
