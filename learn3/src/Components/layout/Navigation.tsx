import { NavLink, Outlet } from 'react-router-dom'
import { Home, Info, Briefcase, Mail } from 'lucide-react'

const Layout = () => {
  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/about', label: 'À Propos', icon: Info },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barre de Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">MonSite</h1>
            </div>
            
            {/* Liens de Navigation */}
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-t-lg transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={20} />
                        <span>{item.label}</span>
                        {/* Indicateur de page active */}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-md"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Zone où les pages s'affichent */}
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 MonSite. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout