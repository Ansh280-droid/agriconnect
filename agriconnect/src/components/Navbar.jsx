import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">

      <Link to="/" className="text-2xl font-bold">
        AgriConnect 🌾
      </Link>

      <div className="flex gap-6">

        <Link to="/" className="hover:text-green-200">
          Home
        </Link>

        <Link to="/login" className="hover:text-green-200">
          Login
        </Link>

        <Link to="/register" className="hover:text-green-200">
          Register
        </Link>
        <Link to="/dashboard" className="hover:text-green-200">
                Dashboard
           </Link>

      </div>

    </nav>
  )
}

export default Navbar