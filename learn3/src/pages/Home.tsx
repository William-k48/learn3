const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Accueil</h1>
      <p className="text-gray-600 text-lg">
        Bienvenue sur notre site ! Explorez nos différentes pages via la navigation ci-dessus.
      </p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-lg mb-2">🎯 Notre Mission</h3>
          <p className="text-gray-600">Fournir des solutions innovantes et de qualité.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg mb-2">✨ Notre Vision</h3>
          <p className="text-gray-600">Être leader dans notre domaine d'expertise.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage