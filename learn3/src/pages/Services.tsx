const ServicesPage = () => {
  const services = [
    { title: 'Développement Web', desc: 'Sites et applications web modernes', icon: '💻' },
    { title: 'Design UI/UX', desc: 'Interfaces utilisateur intuitives', icon: '🎨' },
    { title: 'Consulting', desc: 'Conseils stratégiques personnalisés', icon: '📊' },
    { title: 'Support', desc: 'Assistance technique 24/7', icon: '🛠️' }
  ]

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h1>
      <p className="text-gray-600 text-lg mb-8">
        Découvrez notre gamme complète de services professionnels.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPage