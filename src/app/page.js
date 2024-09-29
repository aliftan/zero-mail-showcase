'use client';

import { useRouter } from 'next/navigation';
import { useState, useMemo } from "react";
import Header from '@/components/Header';
import { emailTemplates } from './emailTemplates';
import Footer from '@/components/Footer';

export default function Home() {
  const sortedModules = useMemo(() => Object.keys(emailTemplates).sort(), []);
  const [activeModule, setActiveModule] = useState(sortedModules[0]);
  const router = useRouter();

  const sortedTemplates = useMemo(() => {
    return emailTemplates[activeModule].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeModule]);

  const handleViewTemplate = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen p-20 font-sans bg-gray-50">
      <Header />

      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center gap-4">
          {sortedModules.map((module) => (
            <li key={module}>
              <button
                onClick={() => setActiveModule(module)}
                className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm duration-300 ease-in-out transition hover:scale-110 border border-gray-200
                  ${activeModule === module
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  } hover:shadow-md`}
              >
                {module}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedTemplates.map((template) => (
          <div key={template.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-110">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{template.name}</h2>
            <p className="text-gray-600 mb-4 h-12 overflow-hidden">{template.description}</p>
            <button
              onClick={() => handleViewTemplate(template.path)}
              className="inline-block px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out text-sm font-medium"
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