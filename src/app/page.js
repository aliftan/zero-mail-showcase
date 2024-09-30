'use client';

import { useRouter } from 'next/navigation';
import { useState, useMemo, useEffect } from "react";
import Header from '@/components/Header';
import { emailTemplates } from './emailTemplates';
import Footer from '@/components/Footer';

export default function Home() {
  const sortedModules = useMemo(() => Object.keys(emailTemplates).sort(), []);
  const [activeModule, setActiveModule] = useState(sortedModules[0]);
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname.slice(1);
    const matchedModule = sortedModules.find(module => emailTemplates[module].modulePath.slice(1) === path);
    if (matchedModule) {
      setActiveModule(matchedModule);
    }
  }, [sortedModules]);

  const sortedTemplates = useMemo(() => {
    return emailTemplates[activeModule].templates.sort((a, b) => a.name.localeCompare(b.name));
  }, [activeModule]);

  const handleModuleClick = (module) => {
    setActiveModule(module);
    const path = emailTemplates[module].modulePath;
    window.history.pushState(null, '', path);
  };

  const handleViewTemplate = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 font-sans bg-gray-50">
      <Header />

      <nav className="mb-6 sm:mb-8 overflow-x-auto">
        <ul className="flex flex-nowrap justify-start sm:justify-center gap-2 sm:gap-4 pb-2 sm:pb-0">
          {sortedModules.map((module) => (
            <li key={module} className="flex-shrink-0">
              <button
                onClick={() => handleModuleClick(module)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all duration-300 ease-in-out hover:shadow-md border border-gray-200
                  ${activeModule === module
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {module}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sortedTemplates.map((template) => (
          <div key={template.name} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{template.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 h-12 overflow-hidden">{template.description}</p>
            <button
              onClick={() => handleViewTemplate(template.path)}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out text-xs sm:text-sm font-medium"
            >
              View Template
            </button>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}