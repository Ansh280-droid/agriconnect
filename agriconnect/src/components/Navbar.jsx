import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { supabase } from "../lib/supabase.js";

function Navbar() {
  const [user, setUser] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const handleLogout = async () => {
  try {
    await supabase.auth.signOut();
    navigate("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-2xl font-bold">
        AgriConnect 🌾
      </Link>

      <div className="flex gap-6">

        <Link to="/" className="hover:text-green-200">
          Home
        </Link>

        {!user ? (
          <>
            <Link to="/login" className="hover:text-green-200">
              Login
            </Link>

            <Link to="/register" className="hover:text-green-200">
              Register
            </Link>
          </>
        ) : (
          <>
          <Link to="/dashboard" className="hover:text-green-200">
            Dashboard
          </Link>
         <button
              onClick={handleLogout}
              className="hover:text-green-200"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;