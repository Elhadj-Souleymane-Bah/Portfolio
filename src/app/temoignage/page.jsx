'use client'
import { useState, useEffect } from 'react'

const Temoignages = () => {
  const [temoignages, setTemoignages] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    auteur: '',
    contenu: '',
    poste: '',
    entreprise: '',
    date: new Date().toISOString()
  })
  const [isEditing, setIsEditing] = useState(false)

  // Charger les témoignages depuis le localStorage
  useEffect(() => {
    const savedTemoignages = localStorage.getItem('temoignages')
    if (savedTemoignages) {
      setTemoignages(JSON.parse(savedTemoignages))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('temoignages', JSON.stringify(temoignages))
  }, [temoignages])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isEditing) {
      setTemoignages(prev => 
        prev.map(t => 
          t.id === formData.id ? { ...formData } : t
        )
      )
    } else {
      // Ajout
      const newTemoignage = {
        ...formData,
        id: Date.now().toString()
      }
      setTemoignages(prev => [...prev, newTemoignage])
    }
    
    resetForm()
  }

  const handleEdit = (temoignage) => {
    setFormData(temoignage)
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    if (confirm('Supprimer ce témoignage ?')) {
      setTemoignages(prev => prev.filter(t => t.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({
      id: '',
      auteur: '',
      contenu: '',
      poste: '',
      entreprise: '',
      date: new Date().toISOString()
    })
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[70px]">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Témoignages</h1>
      
      {/* Formulaire */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          {isEditing ? 'Modifier' : 'Ajouter'} un témoignage
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Auteur*
              </label>
              <input
                type="text"
                name="auteur"
                value={formData.auteur}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Poste*
              </label>
              <input
                type="text"
                name="poste"
                value={formData.poste}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Entreprise*
            </label>
            <input
              type="text"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Témoignage*
            </label>
            <textarea
              name="contenu"
              value={formData.contenu}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            ></textarea>
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              {isEditing ? 'Mettre à jour' : 'Ajouter'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all"
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Liste des témoignages ({temoignages.length})</h2>
        
        {temoignages.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <p className="text-gray-500">Aucun témoignage disponible</p>
          </div>
        ) : (
          [...temoignages].reverse().map((temoignage) => (
            <div 
              key={temoignage.id} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-all duration-300
                        hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center 
                                  text-blue-600 font-bold group-hover:bg-blue-200 transition-colors">
                      {temoignage.auteur.charAt(0)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                      {temoignage.auteur}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {temoignage.poste}, {temoignage.entreprise}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(temoignage)}
                    className="p-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                    title="Modifier"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(temoignage.id)}
                    className="p-1.5 text-red-500 hover:text-red-700 transition-colors"
                    title="Supprimer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mt-4 pl-2 border-l-4 border-blue-200 group-hover:border-blue-400 transition-colors">
                <p className="text-gray-700 italic">"{temoignage.contenu}"</p>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
                  {new Date(temoignage.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Temoignages  