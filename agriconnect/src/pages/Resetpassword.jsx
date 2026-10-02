import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        throw error;
      }

      setMessage("Password updated successfully! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(error.message || "Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030b06] text-white flex items-center justify-center px-5">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌾</div>

          <h1 className="text-4xl font-extrabold">
            Agri<span className="text-green-400">Connect</span>
          </h1>

          <p className="text-green-400 mt-2">
            कृषि से समृद्धि
          </p>
        </div>

        <div className="
          rounded-3xl
          border border-green-500/20
          bg-green-950/20
          backdrop-blur-xl
          p-7
          shadow-[0_0_60px_rgba(34,197,94,0.08)]
        ">

          <h2 className="text-2xl font-bold text-center mb-2">
            Reset Password 🔐
          </h2>

          <p className="text-gray-500 text-sm text-center mb-7">
            Enter your new password
          </p>

          <form onSubmit={handleResetPassword}>

            {/* New Password */}
            <div className="mb-5">
              <label className="block text-sm text-gray-400 mb-2">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  bg-black/30
                  border border-green-900
                  rounded-xl
                  px-4
                  py-4
                  outline-none
                  text-white
                  placeholder-gray-600
                  focus:border-green-500
                "
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label className="block text-sm text-gray-400 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="
                  w-full
                  bg-black/30
                  border border-green-900
                  rounded-xl
                  px-4
                  py-4
                  outline-none
                  text-white
                  placeholder-gray-600
                  focus:border-green-500
                "
                required
              />
            </div>

            {/* Success Message */}
            {message && (
              <div className="
                mb-4
                rounded-xl
                border border-green-500/30
                bg-green-500/10
                px-4 py-3
                text-sm
                text-green-300
              ">
                {message}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="
                mb-4
                rounded-xl
                border border-red-500/30
                bg-red-500/10
                px-4 py-3
                text-sm
                text-red-300
              ">
                {error}
              </div>
            )}

            {/* Update Password */}
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
              {loading
                ? "⏳ UPDATING..."
                : "🔐 UPDATE PASSWORD"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default ResetPassword;