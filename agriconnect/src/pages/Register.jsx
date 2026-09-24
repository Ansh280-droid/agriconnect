import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Backend registration API yahan connect karenge
    console.log("Registration submitted");
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

      {/* Green Glow */}
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
      <div className="absolute top-[10%] left-[8%] text-3xl opacity-50">
        🌿
      </div>

      <div className="absolute top-[20%] right-[10%] text-2xl opacity-40">
        🍃
      </div>

      <div className="absolute bottom-[20%] left-[6%] text-2xl opacity-40">
        🌱
      </div>

      <div className="absolute bottom-[25%] right-[8%] text-3xl opacity-50">
        🌿
      </div>

      {/* Version */}
      <div className="absolute top-5 right-6 text-xs text-green-800">
        v1.0.0
      </div>


      {/* ================= MAIN ================= */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">

        <div className="w-full max-w-md">


          {/* ================= LOGO ================= */}

          <div className="text-center mb-7">

            <div className="relative w-24 h-24 mx-auto mb-4">

              {/* Outer Ring */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  border border-green-500/30
                "
              />

              {/* Inner Ring */}
              <div
                className="
                  absolute inset-2
                  rounded-full
                  border border-green-400/30
                "
              />

              {/* Logo */}
              <div
                className="
                  absolute inset-5
                  rounded-full
                  bg-green-500/10
                  flex items-center justify-center
                  shadow-[0_0_40px_rgba(34,197,94,0.25)]
                "
              >
                <span className="text-4xl">
                  🌾
                </span>
              </div>

            </div>


            <h1 className="text-4xl font-extrabold">
              Agri<span className="text-green-400">Connect</span>
            </h1>

            <p className="text-green-400 mt-1">
              कृषि से समृद्धि
            </p>

          </div>


          {/* ================= REGISTER CARD ================= */}

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

            <div className="text-center mb-6">

              <h2 className="text-2xl font-bold">
                Create Account 🌱
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Join AgriConnect and grow smarter
              </p>

            </div>


            <form onSubmit={handleRegister}>


              {/* ================= NAME ================= */}

              <div className="mb-4">

                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl px-4
                    focus-within:border-green-500
                  "
                >

                  <span className="mr-3 text-xl">
                    👤
                  </span>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      w-full bg-transparent
                      py-3.5
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                </div>

              </div>


              {/* ================= EMAIL ================= */}

              <div className="mb-4">

                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl px-4
                    focus-within:border-green-500
                  "
                >

                  <span className="mr-3 text-xl">
                    ✉️
                  </span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full bg-transparent
                      py-3.5
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                </div>

              </div>


              {/* ================= MOBILE ================= */}

              <div className="mb-4">

                <label className="block text-sm text-gray-400 mb-2">
                  Mobile Number
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl px-4
                    focus-within:border-green-500
                  "
                >

                  <span className="mr-3 text-xl">
                    📱
                  </span>

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="
                      w-full bg-transparent
                      py-3.5
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                </div>

              </div>


              {/* ================= ROLE ================= */}

              <div className="mb-4">

                <label className="block text-sm text-gray-400 mb-2">
                  Register As
                </label>

                <div className="grid grid-cols-2 gap-3">

                  <label className="cursor-pointer">

                    <input
                      type="radio"
                      name="role"
                      value="farmer"
                      defaultChecked
                      className="peer hidden"
                    />

                    <div
                      className="
                        border border-green-900
                        rounded-xl p-3
                        text-center
                        bg-black/20
                        peer-checked:border-green-500
                        peer-checked:bg-green-500/10
                        transition
                      "
                    >
                      <div className="text-2xl">
                        👨‍🌾
                      </div>

                      <p className="text-sm text-green-400 mt-1">
                        Farmer
                      </p>

                    </div>

                  </label>


                  <label className="cursor-pointer">

                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      className="peer hidden"
                    />

                    <div
                      className="
                        border border-green-900
                        rounded-xl p-3
                        text-center
                        bg-black/20
                        peer-checked:border-green-500
                        peer-checked:bg-green-500/10
                        transition
                      "
                    >
                      <div className="text-2xl">
                        🛡️
                      </div>

                      <p className="text-sm text-green-400 mt-1">
                        Admin
                      </p>

                    </div>

                  </label>

                </div>

              </div>


              {/* ================= PASSWORD ================= */}

              <div className="mb-4">

                <label className="block text-sm text-gray-400 mb-2">
                  Password
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl px-4
                    focus-within:border-green-500
                  "
                >

                  <span className="mr-3 text-xl">
                    🔒
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="
                      w-full bg-transparent
                      py-3.5
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="text-gray-500 hover:text-green-400"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* ================= CONFIRM PASSWORD ================= */}

              <div className="mb-6">

                <label className="block text-sm text-gray-400 mb-2">
                  Confirm Password
                </label>

                <div
                  className="
                    flex items-center
                    bg-black/30
                    border border-green-900
                    rounded-xl px-4
                    focus-within:border-green-500
                  "
                >

                  <span className="mr-3 text-xl">
                    🔐
                  </span>

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="
                      w-full bg-transparent
                      py-3.5
                      outline-none
                      text-white
                      placeholder-gray-600
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="text-gray-500 hover:text-green-400"
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* ================= REGISTER BUTTON ================= */}

              <button
                type="submit"
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
                "
              >
                🌱 CREATE ACCOUNT →
              </button>


              {/* ================= LOGIN ================= */}

              <div className="text-center mt-6 text-sm text-gray-500">

                Already have an account?{" "}

                <Link
  to="/login"
  className="
    text-green-400
    font-semibold
    hover:text-green-300
  "
>
  Login
</Link>

              </div>

            </form>

          </div>


          {/* Footer */}

          <p className="text-center text-gray-600 text-xs mt-6">
            🌱 &nbsp; हर खेत तक, सही जानकारी &nbsp; 🌱
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;