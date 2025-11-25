import { Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>
      <p className="text-gray-600 text-lg mb-8">
        N'hésitez pas à nous contacter. Nous sommes là pour vous aider !
      </p>
      
      <div className="max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@entreprise.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" size={24} />
              <div>
                <h3 className="font-semibold">Adresse</h3>
                <p className="text-gray-600">123 Rue de Paris, 75001 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage