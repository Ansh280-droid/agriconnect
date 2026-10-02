import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser,resetPassword } from "../services/authService.js";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
 const handleLogin = async (e) => {
  e.preventDefault();

  setMessage("");
  setError("");

  try {
    setLoading(true);

    const data = await loginUser(email, password);

    console.log("Login successful:", data);

    setMessage("Login successful! Redirecting to dashboard...");

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);

  } catch (error) {
    console.error("Login error:", error);
    setError(error.message || "Login failed. Please check your email and password.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#030b06] text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#39ff14 1px, transparent 1px),
            linear-gradient(90deg, #39ff14 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Main Green Glow */}
      <div
        className="
          absolute top-[-180px] left-1/2
          -translate-x-1/2
          w-[450px] h-[450px]
          bg-green-500/20
          blur-[130px]
          rounded-full
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute bottom-[-200px] right-[-100px]
          w-[400px] h-[400px]
          bg-emerald-500/10
          blur-[120px]
          rounded-full
        "
      />

      {/* Floating Leaves */}
      <div className="absolute top-[10%] left-[8%] text-3xl opacity-60">
        🌿
      </div>

      <div className="absolute top-[18%] right-[10%] text-2xl opacity-50">
        🍃
      </div>

      <div className="absolute top-[45%] left-[5%] text-xl opacity-40">
        🌱
      </div>

      <div className="absolute bottom-[20%] right-[8%] text-3xl opacity-50">
        🌿
      </div>

      {/* Version */}
      <div className="absolute top-5 right-6 text-xs text-green-800">
        v1.0.0
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">

        <div className="w-full max-w-md">


          {/* ================= LOGO ================= */}

          <div className="text-center mb-8">

            {/* Circular Logo */}

            <div className="relative w-32 h-32 mx-auto mb-5">

              {/* Outer Circle */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  border
                  border-green-500/30
                "
              />

              {/* Middle Circle */}
              <div
                className="
                  absolute inset-3
                  rounded-full
                  border
                  border-green-400/30
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute inset-6
                  rounded-full
                  bg-green-500/10
                  shadow-[0_0_50px_rgba(34,197,94,0.3)]
                  flex items-center justify-center
                "
              >
                <span className="text-6xl">
                  🌾
                </span>
              </div>

            </div>


            {/* Brand */}

            <h1
              className="
                text-5xl
                font-extrabold
                tracking-tight
                text-white
              "
            >
              Agri<span className="text-green-400">Connect</span>
            </h1>

            <p className="text-green-400 text-lg mt-1">
              कृषि से समृद्धि
            </p>

            <p
              className="
                text-gray-500
                text-xs
                tracking-[0.25em]
                mt-4
                uppercase
              "
            >
              Smart Farming • Better Future
            </p>

          </div>


          {/* ================= LOGIN CARD ================= */}

          <div
            className="
              rounded-3xl
              border border-green-500/20
              bg-green-950/20
              backdrop-blur-xl
              p-7
              shadow-[0_0_60px_rgba(34,197,94,0.08)]
            "
          >

            {/* Heading */}

            <div className="text-center mb-7">

              <h2 className="text-2xl font-bold">
                Welcome Back 👨‍🌾
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Login to continue to AgriConnect
              </p>

            </div>


            {/* ================= FORM ================= */}

            <form onSubmit={handleLogin}>

              {/* Email */}

              <div className="mb-5">

                <label className="block text-sm text-gray-400 mb-2">
                  Email 
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl
                    px-4
                    transition
                    focus-within:border-green-500
                    focus-within:shadow-[0_0_15px_rgba(34,197,94,0.15)]
                  "
                >

                  <span className="text-xl mr-3">
                    ✉️
                  </span>

                 <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
    w-full
    bg-transparent
    py-4
    outline-none
    text-white
    placeholder-gray-600
  "
  required
/>

                </div>

              </div>


              {/* Password */}

              <div className="mb-3">

                <label className="block text-sm text-gray-400 mb-2">
                  Password
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl
                    px-4
                    transition
                    focus-within:border-green-500
                    focus-within:shadow-[0_0_15px_rgba(34,197,94,0.15)]
                  "
                >

                  <span className="text-xl mr-3">
                    🔒
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
onChange={(e) => setPassword(e.target.value)}
                    className="
                      w-full
                      bg-transparent
                      py-4
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      text-gray-500
                      hover:text-green-400
                      transition
                    "
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>
              {message && (
  <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
    {message}
  </div>
)}

{error && (
  <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
    {error}
  </div>
)}


              {/* Forgot Password */}

             <button
  type="button"
  onClick={async () => {
    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    try {
      setError("");
      setMessage("");

      await resetPassword(email);

      setMessage("Password reset link has been sent to your email.");
    } catch (error) {
      console.error("Reset password error:", error);
      setError(error.message || "Failed to send reset link.");
    }
  }}
  className="
    text-sm
    text-green-400
    hover:text-green-300
  "
>
  Forgot Password?
</button>
              {/* ================= LOGIN BUTTON ================= */}

              <button
  type="submit"
  disabled={loading}
  className="
    w-full
    py-4
    rounded-xl
    bg-gradient-to-r
    from-green-500
    to-lime-400
    text-black
    font-bold
    text-lg
    tracking-wide
    shadow-[0_0_25px_rgba(34,197,94,0.25)]
    hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]
    hover:scale-[1.01]
    transition-all
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? "⏳ LOGGING IN..." : "🌱 LOGIN →"}
</button>


              {/* ================= REGISTER ================= */}

              <div className="text-center mt-6 text-sm text-gray-500">

                Don't have an account?{" "}

               <Link
  to="/register"
  className="
    text-green-400
    font-semibold
    hover:text-green-300
  "
>
  Register
</Link>

              </div>

            </form>


            {/* ================= ROLE LOGIN ================= */}

            <div className="grid grid-cols-2 gap-4 mt-7">

              {/* Farmer */}

              <button
                className="
                  p-4
                  rounded-2xl
                  border border-green-900
                  bg-black/20
                  hover:border-green-500
                  hover:bg-green-500/5
                  transition
                "
              >

                <div className="text-3xl mb-2">
                  👨‍🌾
                </div>

                <p className="text-xs text-gray-500">
                  Login as
                </p>

                <p className="text-green-400 font-semibold">
                  Farmer →
                </p>

              </button>


              {/* Admin */}

              <button
                className="
                  p-4
                  rounded-2xl
                  border border-green-900
                  bg-black/20
                  hover:border-green-500
                  hover:bg-green-500/5
                  transition
                "
              >

                <div className="text-3xl mb-2">
                  🛡️
                </div>

                <p className="text-xs text-gray-500">
                  Login as
                </p>

                <p className="text-green-400 font-semibold">
                  Admin →
                </p>

              </button>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <p className="text-center text-gray-600 text-xs mt-7">
            🌱 &nbsp; हर खेत तक, सही जानकारी &nbsp; 🌱
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;