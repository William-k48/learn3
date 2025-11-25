const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">À Propos</h1>
      <p className="text-gray-600 text-lg mb-6">
        Découvrez notre histoire, nos valeurs et notre équipe passionnée.
      </p>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-semibold mb-3">Notre Histoire</h2>
        <p className="text-gray-700 leading-relaxed">
          Fondée en 2020, notre entreprise s'est donnée pour mission de révolutionner 
          l'industrie avec des solutions innovantes et durables. Nous sommes une équipe 
          de professionnels dévoués qui travaillent ensemble pour atteindre l'excellence.
        </p>
      </div>
    </div>
  )
}

export default AboutPage