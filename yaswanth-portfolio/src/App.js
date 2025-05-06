import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Moon, Sun } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Header with theme toggle */}
      <header className={`w-full p-4 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h1 className="text-xl font-bold">Yaswanth Domala</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-300" />
          ) : (
            <Moon size={20} className="text-gray-600" />
          )}
        </button>
      </header>
      
      {/* Main content */}
      <main className="max-w-3xl mx-auto p-6 pt-8">
        {/* Profile Section */}
        <section className="text-center mb-12">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
            YD
          </div>
          <h2 className="text-3xl font-bold mb-2">Yaswanth Domala</h2>
          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Software Developer & Tech Enthusiast
          </p>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/YashDYD" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yaswanth-domala-800093233" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:dyeswanth1234@gmail.com"
              className={`hover:text-blue-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:7063155905"
              className={`hover:text-blue-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <Phone size={24} />
            </a>
          </div>
          
          <p className="text-lg max-w-2xl mx-auto">
            I'm a passionate developer focused on creating efficient, user-friendly applications. 
            I love solving problems through code and continuously learning new technologies.
          </p>
        </section>
        
        {/* Skills Section */}
        <section className={`p-6 rounded-lg mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-blue-500">Frontend</h4>
              <p className="mt-1">HTML, CSS, JavaScript, React</p>
            </div>
            
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-green-500">Backend</h4>
              <p className="mt-1">Node.js, Express, MongoDB</p>
            </div>
            
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-purple-500">Tools</h4>
              <p className="mt-1">Git, VS Code, Docker</p>
            </div>
            
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-yellow-500">Languages</h4>
              <p className="mt-1">JavaScript, Python, Java</p>
            </div>
            
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-red-500">Cloud</h4>
              <p className="mt-1">AWS, Firebase, Netlify</p>
            </div>
            
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className="font-medium text-indigo-500">Data</h4>
              <p className="mt-1">SQL, NoSQL, Data Analysis</p>
            </div>
          </div>
        </section>
        
        {/* Brief About Section */}
        <section className={`p-6 rounded-lg mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="mb-4">
            I am a dedicated software developer with a passion for creating efficient and user-friendly solutions. 
            My journey in technology started with a curiosity about how digital systems work, which led me to 
            dive into programming and software development.
          </p>
          <p>
            I enjoy tackling challenging problems and continuously expanding my knowledge in various technologies.
            When I'm not coding, I'm likely exploring new tech trends or contributing to open-source projects.
          </p>
        </section>
        
        {/* Contact Section */}
        <section className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="mr-3 text-blue-500" size={20} />
              <a href="mailto:dyeswanth1234@gmail.com" className="hover:underline">dyeswanth1234@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 text-blue-500" size={20} />
              <a href="tel:7063155905" className="hover:underline">7063155905</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-3 text-blue-500" size={20} />
              <a 
                href="https://www.linkedin.com/in/yaswanth-domala-800093233" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/yaswanth-domala-800093233
              </a>
            </div>
            <div className="flex items-center">
              <Github className="mr-3 text-blue-500" size={20} />
              <a 
                href="https://github.com/YashDYD" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/YashDYD
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className={`mt-12 py-6 text-center ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p>© {new Date().getFullYear()} Yaswanth Domala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;