import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ProjectFilters({ initialProjects }) {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...new Set(initialProjects.flatMap(p => p.tags))];

  const filteredProjects = filter === 'Todos' 
    ? initialProjects 
    : initialProjects.filter(p => p.tags.includes(filter));

  return (
    <div className="space-y-8">
      {/* Botones de Filtro */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Animada de Proyectos */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 font-mono">#{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}