import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../services/authService.js";
import { getCrops,addCrop,updateCrop,
  deleteCrop } from "../services/cropService.js";
  import { getMarketPrices } from "../services/marketprice.js";
  import { getGovernmentSchemes } from "../services/schemeService.js";
  import { getNearbyServices } from "../services/nearbyService.js";
  import {
  getWeather,
  getLocationName,
} from "../services/weatherService.js";


function getCropIcon(cropName) {
  const icons = {
    wheat: "🌾",
    rice: "🌿",
    potato: "🥔",
    tomato: "🍅",
    maize: "🌽",
    corn: "🌽",
  };

  return icons[cropName?.toLowerCase()] || "🌱";
}
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [crops, setCrops] = useState([]);
const [marketPrices, setMarketPrices] = useState([]);
const [governmentSchemes, setGovernmentSchemes] = useState([]);
const [schemesLoading, setSchemesLoading] = useState(true);
const [nearbyServices, setNearbyServices] = useState([]);
const [activeSection, setActiveSection] = useState("");
const [nearbyServicesLoading, setNearbyServicesLoading] = useState(true);
const [marketPricesLoading, setMarketPricesLoading] = useState(true);
const [cropsLoading, setCropsLoading] = useState(true);
const [showAddCrop, setShowAddCrop] = useState(false);
const [cropName, setCropName] = useState("");
const [cropStatus, setCropStatus] = useState("");
const [cropProgress, setCropProgress] = useState("");
const [cropDays, setCropDays] = useState("");
const [addingCrop, setAddingCrop] = useState(false);
const [editingCrop, setEditingCrop] = useState(null);
const [updatingCrop, setUpdatingCrop] = useState(false);
const [weather, setWeather] = useState(null);
const [weatherLoading, setWeatherLoading] = useState(true);
const [showAI, setShowAI] = useState(true);
const [locationName, setLocationName] = useState(
  "Kanpur, Uttar Pradesh"
);
const [aiMessage, setAiMessage] = useState("");

const [aiMessages, setAiMessages] = useState([
  {
    role: "assistant",
    content:
      "Namaste! 👋 Main AgriConnect AI Assistant hoon. Aap crops, farming, weather, market prices ya government schemes ke baare mein mujhse pooch sakte hain.",
  },
]);

const [aiLoading, setAiLoading] = useState(false);
const [location, setLocation] = useState({
  latitude: 26.4499,
  longitude: 80.3319,
});

  const navigate = useNavigate();
  useEffect(() => {
  const checkAuth = async () => {
    try {
      await getCurrentUser();
    } catch (error) {
      navigate("/login");
    }
  };

  checkAuth();
}, [navigate]);
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
  useEffect(() => {
  const loadDashboardData = async () => {
    try {
      const userLocation = await getUserLocation();
       setLocation(userLocation);
       const place = await getLocationName(
  userLocation.latitude,
  userLocation.longitude
);

setLocationName(
  place.state
    ? `${place.city}, ${place.state}`
    : place.city
);
      const currentUser = await getCurrentUser();
      setUser(currentUser);

      const cropData = await getCrops();
      setCrops(cropData);
      const marketData = await getMarketPrices();
setMarketPrices(marketData);
const schemeData = await getGovernmentSchemes();
setGovernmentSchemes(schemeData);
const servicesData = await getNearbyServices();
setNearbyServices(servicesData);
const weatherData = await getWeather(
  userLocation.latitude,
  userLocation.longitude
);
setWeather(weatherData);
    } catch (error) {
      console.error("Dashboard data error:", error);
    } finally {
      setLoading(false);
      setCropsLoading(false);
      setMarketPricesLoading(false);
      setSchemesLoading(false);
      setNearbyServicesLoading(false);
      setWeatherLoading(false);
    }
  };

  loadDashboardData();
}, []);
const closeCropModal = () => {
  setShowAddCrop(false);
  setEditingCrop(null);
  setCropName("");
  setCropStatus("");
  setCropProgress("");
  setCropDays("");
};
const handleAISend = async () => {
  const message = aiMessage.trim();

  if (!message || aiLoading) {
    return;
  }

  // User message chat me add karo
  setAiMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: message,
    },
  ]);

  // Input clear
  setAiMessage("");

  // Loading start
  setAiLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get AI response.");
    }

    // AI response chat me add karo
    setAiMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.reply,
      },
    ]);
  } catch (error) {
    console.error("AI Assistant Error:", error);

    setAiMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Sorry, AI response nahi aa paaya. Please try again.",
      },
    ]);
  } finally {
    setAiLoading(false);
  }
};
const handleAddCrop = async () => {
  if (!cropName || !cropStatus || !cropProgress || !cropDays) {
    alert("Please fill all fields.");
    return;
  }

  try {
    setAddingCrop(true);

    const newCrop = await addCrop({
      crop_name: cropName,
      status: cropStatus,
      progress: Number(cropProgress),
      days: Number(cropDays),
    });

    setCrops((prevCrops) => [newCrop, ...prevCrops]);

    setCropName("");
    setCropStatus("");
    setCropProgress("");
    setCropDays("");

    setShowAddCrop(false);

  } catch (error) {
    console.error("Add crop error:", error);
    alert(error.message);
  } finally {
    setAddingCrop(false);
  }
};
const handleEditCrop = (crop) => {
  setEditingCrop(crop);

  setCropName(crop.crop_name);
  setCropStatus(crop.status || "");
  setCropProgress(crop.progress ?? "");
  setCropDays(crop.days ?? "");

  setShowAddCrop(true);
};
const handleUpdateCrop = async () => {
  if (!cropName || !cropStatus || !cropProgress || !cropDays) {
    alert("Please fill all fields.");
    return;
  }

  try {
    setUpdatingCrop(true);

    const updatedCrop = await updateCrop(editingCrop.id, {
      crop_name: cropName,
      status: cropStatus,
      progress: Number(cropProgress),
      days: Number(cropDays),
    });

    setCrops((prevCrops) =>
      prevCrops.map((crop) =>
        crop.id === updatedCrop.id ? updatedCrop : crop
      )
    );

    setCropName("");
    setCropStatus("");
    setCropProgress("");
    setCropDays("");

    setEditingCrop(null);
    setShowAddCrop(false);

  } catch (error) {
    console.error("Update crop error:", error);
    alert(error.message);

  } finally {
    setUpdatingCrop(false);
  }
};
const handleDeleteCrop = async (cropId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this crop?"
  );

  if (!confirmDelete) return;

  try {
    await deleteCrop(cropId);

    setCrops((prevCrops) =>
      prevCrops.filter((crop) => crop.id !== cropId)
    );

  } catch (error) {
    console.error("Delete crop error:", error);
    alert(error.message);
  }
};

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#030b06] text-white">
      

      {/* ================= BACKGROUND ================= */}

      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none"
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
          fixed top-[-200px] right-[-100px]
          w-[450px] h-[450px]
          bg-green-500/10
          blur-[130px]
          rounded-full
          pointer-events-none
        "
      />

      {/* ================= MOBILE HEADER ================= */}

      <header
        className="
          lg:hidden
          fixed top-0 left-0 right-0
          z-40
          h-16
          bg-[#07140b]/95
          backdrop-blur-xl
          border-b border-green-900/50
          flex items-center justify-between
          px-5
        "
      >

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl text-green-400"
        >
          ☰
        </button>

        <h1 className="font-bold text-xl">
          Agri<span className="text-green-400">Connect</span>
        </h1>

        <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center">
          👨‍🌾
        </div>

      </header>


      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-64
          z-50
          bg-[#06100a]/95
          backdrop-blur-xl
          border-r border-green-900/40
          p-5
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >

        {/* Logo */}

        <div className="flex items-center gap-3 mb-10">

          <div
            className="
              w-11 h-11
              rounded-full
              bg-green-500/10
              border border-green-500/30
              flex items-center justify-center
              text-2xl
            "
          >
            🌾
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Agri<span className="text-green-400">Connect</span>
            </h1>

            <p className="text-[10px] text-gray-600 tracking-widest">
              SMART FARMING
            </p>
          </div>

        </div>


        {/* Navigation */}

        <nav className="space-y-2">

          <SidebarItem
            icon="🏠"
            text="Dashboard"
            active
          />

          <SidebarItem
            icon="🌦️"
            text="Weather"
          />

          <SidebarItem
            icon="🌱"
            text="My Crops"
          />

          <SidebarItem
            icon="💰"
            text="Market Prices"
          />

          <SidebarItem
            icon="📋"
            text="Government Schemes"
          />

          <SidebarItem
  icon="🤖"
  text="AI Assistant"
  active={showAI}
  onClick={() => setShowAI(!showAI)}
/>

          <SidebarItem
  icon="🗺️"
  text="Nearby Services"
  active={activeSection === "nearby"}
  onClick={() =>
  setActiveSection(
    activeSection === "nearby" ? "" : "nearby"
  )
}
/>

        </nav>


        {/* Bottom */}

        <div className="absolute bottom-5 left-5 right-5">

          <div
            className="
              p-4
              rounded-2xl
              bg-green-500/5
              border border-green-900/40
              mb-3
            "
          >

            <p className="text-xs text-gray-500">
              Need Help?
            </p>

            <p className="text-green-400 text-sm mt-1">
              🤖 Ask AI Assistant
            </p>

          </div>

          <button
            className="
              w-full
              text-left
              p-3
              rounded-xl
              hover:bg-green-500/5
              text-gray-400
            "
          >
            ⚙️ Settings
          </button>

          <button
          onClick={handleLogout}
            className="
              w-full
              text-left
              p-3
              rounded-xl
              hover:bg-red-500/5
              text-gray-400
            "
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="lg:ml-64 pt-20 lg:pt-0">

        <div className="p-5 md:p-8 max-w-[1600px] mx-auto">


          {/* ================= TOP BAR ================= */}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

            <div>

              <p className="text-green-500 text-sm">
                Good Morning 🌱
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-1">
  Welcome, {user?.user_metadata?.full_name || "Farmer"} 👨‍🌾
</h1>

              <p className="text-gray-500 mt-2">
                Here's what's happening with your farm today.
              </p>

            </div>


            {/* Profile */}

            <div
              className="
                flex items-center gap-3
                p-2 pr-4
                rounded-2xl
                bg-green-950/20
                border border-green-900/40
              "
            >

              <div
                className="
                  w-11 h-11
                  rounded-xl
                  bg-green-500/10
                  flex items-center justify-center
                  text-2xl
                "
              >
                👨‍🌾
              </div>

              <div>

                <p className="font-semibold">
  {loading
    ? "Loading..."
    : user?.user_metadata?.full_name || "Farmer"}
</p>

<p className="text-xs text-gray-500">
  {user?.user_metadata?.role === "admin"
    ? "Admin Account"
    : "Farmer Account"}
</p>
<p className="text-xs text-gray-500">
  {user?.email || "No email"}
</p>
<p className="text-xs text-green-400">
  {user?.email_confirmed_at
    ? "🟢 Verified Account"
    : "🟡 Email Not Verified"}
</p>
<p className="text-xs text-gray-500">
  📅 Member Since:{" "}
  {user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-IN")
    : "N/A"}
</p>


              </div>

            </div>

          </div>


          {/* ================= WEATHER ================= */}

          <div
            className="
              rounded-3xl
              border border-green-500/20
              bg-gradient-to-br
              from-green-950/40
              to-black/30
              backdrop-blur-xl
              p-6
              mb-7
              relative
              overflow-hidden
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                right-[-80px]
                top-[-80px]
                w-60
                h-60
                bg-green-500/10
                blur-[80px]
                rounded-full
              "
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <p className="text-gray-500 text-sm">
                    Current Weather
                  </p>

  <h2 className="text-2xl font-bold">
  {locationName} 📍
</h2>

                </div>

                <span className="text-4xl">
                  ☀️
                </span>

              </div>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<WeatherItem
  icon="🌡️"
  label="Temperature"
  value={
    weatherLoading
      ? "Loading..."
      : `${weather?.temperature ?? "--"}°C`
  }
/>

<WeatherItem
  icon="💧"
  label="Humidity"
  value={
    weatherLoading
      ? "Loading..."
      : `${weather?.humidity ?? "--"}%`
  }
/>

<WeatherItem
  icon="💨"
  label="Wind"
  value={
    weatherLoading
      ? "Loading..."
      : `${weather?.windSpeed ?? "--"} km/h`
  }
/>

<WeatherItem
  icon="🌧️"
  label="Rain Chance"
  value={
    weatherLoading
      ? "Loading..."
      : `${weather?.precipitationProbability ?? "--"}%`
  }
/>
              </div>

            </div>

          </div>


          {/* ================= QUICK STATS ================= */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">

            <StatCard
              icon="🌱"
              title="My Crops"
              value={crops.length}
              subtitle="Active crops"
            />

            <StatCard
              icon="💰"
              title="Market Price"
              value="₹2,450"
              subtitle="Wheat / Quintal"
            />

            <StatCard
              icon="📋"
              title="Schemes"
              value="12"
              subtitle="Available for you"
            />

            <StatCard
              icon="🔔"
              title="Alerts"
              value="3"
              subtitle="Need attention"
            />

          </div>


          {/* ================= CONTENT GRID ================= */}

          <div className="grid lg:grid-cols-3 gap-6">


            {/* ================= MY CROPS ================= */}

            <div
              className="
                lg:col-span-2
                rounded-3xl
                border border-green-900/40
                bg-green-950/10
                backdrop-blur-xl
                p-6
              "
            >
<div className="flex justify-between items-center mb-6">

  <div>
    <h2 className="text-xl font-bold">
      My Crops 🌱
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Monitor your crops
    </p>
  </div>

  <div className="flex items-center gap-4">
    <button
      onClick={() => setShowAddCrop(true)}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
    >
      + Add Crop
    </button>

    <button className="text-green-400 text-sm">
      View All →
    </button>
  </div>
  </div>


              <div className="space-y-4">

                {cropsLoading ? (
  <p className="text-gray-500 text-sm">Loading crops...</p>
) : crops.length === 0 ? (
  <p className="text-gray-500 text-sm">
    No crops added yet.
  </p>
) : (
  crops.map((crop) => (
    <CropCard
      key={crop.id}
      id={crop.id}
      name={crop.crop_name}
      icon={getCropIcon(crop.crop_name)}
      progress={`${crop.progress ?? 0}%`}
      status={crop.status || "Healthy"}
      days={`${crop.days ?? 0} Days`}
       onEdit={handleEditCrop}
  onDelete={handleDeleteCrop}
    />
  ))
)}

              </div>

            </div>
            {showAddCrop && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

    <div className="w-full max-w-md rounded-3xl bg-[#07140b] border border-green-500/20 p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
  {editingCrop ? "Edit Crop ✏️" : "Add New Crop 🌱"}
</h2>

        <button
  onClick={closeCropModal}
  className="text-gray-400 hover:text-white text-xl"
>
  ✕
</button>
      </div>

      {/* Crop Name */}
      <label className="text-sm text-gray-400">
        Crop Name
      </label>

      <input
        type="text"
        placeholder="e.g. Wheat"
        value={cropName}
        onChange={(e) => setCropName(e.target.value)}
        className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-green-900/40 text-white outline-none focus:border-green-500"
      />

      {/* Status */}
      <label className="block text-sm text-gray-400 mt-4">
        Status
      </label>

      <input
        type="text"
        placeholder="e.g. Growing Well"
        value={cropStatus}
        onChange={(e) => setCropStatus(e.target.value)}
        className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-green-900/40 text-white outline-none focus:border-green-500"
      />

      {/* Progress */}
      <label className="block text-sm text-gray-400 mt-4">
        Progress (%)
      </label>

      <input
        type="number"
        placeholder="e.g. 75"
        value={cropProgress}
        onChange={(e) => setCropProgress(e.target.value)}
        className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-green-900/40 text-white outline-none focus:border-green-500"
      />

      {/* Days */}
      <label className="block text-sm text-gray-400 mt-4">
        Days
      </label>

      <input
        type="number"
        placeholder="e.g. 45"
        value={cropDays}
        onChange={(e) => setCropDays(e.target.value)}
        className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-green-900/40 text-white outline-none focus:border-green-500"
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-6">

        <button
  onClick={closeCropModal}
  className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-400 hover:text-white"
>
  Cancel
</button>

        <button
          onClick={editingCrop ? handleUpdateCrop : handleAddCrop}
         disabled={addingCrop || updatingCrop}
          className="flex-1 py-3 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 disabled:opacity-50"
        >
         {editingCrop
  ? updatingCrop
    ? "Updating..."
    : "Update Crop"
  : addingCrop
    ? "Adding..."
    : "Add Crop"}
        </button>

      </div>

    </div>

  </div>
)}



            {/* ================= AI ASSISTANT ================= */}

          {showAI && (
  <div className="mt-7 rounded-3xl border border-green-900/40 bg-green-950/10 backdrop-blur-xl p-6">

    {/* Header */}
    <div className="flex items-center justify-between mb-6">

      <div>
        <h2 className="text-xl font-bold">
          AI Assistant 🤖
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Ask anything about farming, crops, weather and schemes
        </p>
      </div>

      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
        🤖
      </div>

    </div>


    {/* Chat messages */}
    <div className="min-h-[250px] max-h-[350px] overflow-y-auto space-y-4 mb-4">

      {aiMessages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 ${
            message.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          {/* AI icon */}
          {message.role === "assistant" && (
            <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
              🤖
            </div>
          )}


          {/* Message */}
          <div
            className={`max-w-[80%] rounded-2xl p-4 ${
              message.role === "user"
                ? "bg-green-600 text-white rounded-tr-none"
                : "bg-black/20 border border-green-900/30 text-gray-300 rounded-tl-none"
            }`}
          >
            <p className="text-sm whitespace-pre-wrap">
              {message.content}
            </p>
          </div>

        </div>
      ))}


      {/* AI loading */}
      {aiLoading && (
        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center">
            🤖
          </div>

          <div className="bg-black/20 border border-green-900/30 rounded-2xl rounded-tl-none p-4">
            <p className="text-sm text-gray-400">
              Thinking... 🤔
            </p>
          </div>

        </div>
      )}

    </div>


    {/* Input */}
    <div className="flex gap-3">

      <input
        type="text"
        value={aiMessage}
        onChange={(e) => setAiMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAISend();
          }
        }}
        placeholder="Ask something about farming..."
        disabled={aiLoading}
        className="
          flex-1
          px-4
          py-3
          rounded-xl
          bg-black/30
          border border-green-900/40
          text-white
          outline-none
          focus:border-green-500
          disabled:opacity-50
        "
      />


      <button
        onClick={handleAISend}
        disabled={aiLoading || !aiMessage.trim()}
        className="
          px-5
          py-3
          rounded-xl
          bg-green-500
          text-black
          font-bold
          hover:bg-green-400
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {aiLoading ? "..." : "Send"}
      </button>

    </div>

  </div>
)}
            {/* ================= MARKET ================= */}

            <div
              className="
                rounded-3xl
                border border-green-900/40
                bg-green-950/10
                p-6
              "
            >

              <div className="flex justify-between mb-5">

                <div>

                  <h2 className="text-xl font-bold">
                    Market Prices 💰
                  </h2>

                  <p className="text-sm text-gray-500">
                    Today's prices
                  </p>

                </div>

                <button className="text-green-400 text-sm">
                  More →
                </button>

              </div>


              {marketPricesLoading ? (
  <p className="text-gray-500 text-sm">
    Loading market prices...
  </p>
) : marketPrices.length === 0 ? (
  <p className="text-gray-500 text-sm">
    No market prices available.
  </p>
) : (
  marketPrices.map((item) => (
    <MarketItem
      key={item.id}
      crop={item.crop_name}
      price={`₹${Number(item.price).toLocaleString("en-IN")}`}
      change="Today"
      icon={getCropIcon(item.crop_name)}
    />
  ))
)}
            </div>


            {/* ================= SCHEMES ================= */}

            <div
              className="
                lg:col-span-2
                rounded-3xl
                border border-green-900/40
                bg-green-950/10
                p-6
              "
            >

              <div className="flex justify-between items-center mb-5">

                <div>

                  <h2 className="text-xl font-bold">
                    Government Schemes 📋
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Schemes that may benefit you
                  </p>

                </div>

                <button className="text-green-400 text-sm">
                  View All →
                </button>

              </div>


             <div className="grid md:grid-cols-2 gap-4">

  {schemesLoading ? (
    <p className="text-gray-500 text-sm">
      Loading government schemes...
    </p>
  ) : governmentSchemes.length === 0 ? (
    <p className="text-gray-500 text-sm">
      No government schemes available.
    </p>
  ) : (
    governmentSchemes.map((scheme) => (
      <SchemeCard
        key={scheme.id}
        title={scheme.scheme_name}
        description={scheme.description}
         benefit={scheme.benefit}
  eligibility={scheme.eligibility}
  applicationLink={scheme.application_link}
      />
    ))
  )}

</div>

            </div>

          </div>
          {/* ================= NEARBY SERVICES ================= */}
{/* ================= NEARBY SERVICES ================= */}
{activeSection === "nearby" && (
  <div className="mt-7 rounded-3xl border border-green-900/40 bg-green-950/10 p-6">
    
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
      <div>
        <h2 className="text-xl font-bold">
          Nearby Services 🗺️
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Useful agricultural services near you
        </p>
      </div>

      <span className="text-green-400 text-sm">
        📍 {locationName}
      </span>
    </div>

    {nearbyServicesLoading ? (
      <p className="text-gray-500 text-sm">
        Loading nearby services...
      </p>
    ) : nearbyServices.length === 0 ? (
      <p className="text-gray-500 text-sm">
        No nearby services available.
      </p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nearbyServices.map((service) => (
          <ServiceCard
            key={service.id}
            serviceName={service.service_name}
            serviceType={service.service_type}
            location={service.location}
            phone={service.phone}
            address={service.address}
          />
        ))}
      </div>
    )}

  </div>
)}

          {/* ================= EMERGENCY ================= */}

          <div
            className="
              mt-7
              rounded-2xl
              border border-red-900/30
              bg-red-950/10
              p-5
              flex flex-col md:flex-row
              items-start md:items-center
              justify-between
              gap-4
            "
          >

            <div className="flex gap-4">

              <div className="text-3xl">
                🚨
              </div>

              <div>

                <h3 className="font-bold">
                  Need Immediate Help?
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Contact nearby agricultural emergency services.
                </p>

              </div>

            </div>

            <button
              className="
                px-5
                py-3
                rounded-xl
                border border-red-500/30
                text-red-400
                hover:bg-red-500/10
                transition
              "
            >
              Get Help
            </button>

          </div>


          {/* ================= FOOTER ================= */}

          <div className="text-center py-8">

            <p className="text-xs text-gray-600">
              🌱 हर खेत तक, सही जानकारी • AgriConnect © 2026
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}


/* ================================================= */
/* COMPONENTS */
/* ================================================= */


function SidebarItem({ icon, text, active ,onClick}) {
  return (
    <button
    onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        text-left
        transition

        ${
          active
            ? "bg-green-500/10 text-green-400 border border-green-900/40"
            : "text-gray-500 hover:text-green-400 hover:bg-green-500/5"
        }
      `}
    >
      <span className="text-lg">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {text}
      </span>
    </button>
  );
}


function WeatherItem({ icon, label, value }) {
  return (
    <div
      className="
        p-4
        rounded-2xl
        bg-black/20
        border border-green-900/30
      "
    >

      <div className="text-xl mb-2">
        {icon}
      </div>

      <p className="text-xs text-gray-600">
        {label}
      </p>

      <p className="text-lg font-semibold mt-1">
        {value}
      </p>

    </div>
  );
}


function StatCard({ icon, title, value, subtitle }) {
  return (
    <div
      className="
        p-5
        rounded-2xl
        border border-green-900/40
        bg-green-950/10
        hover:border-green-500/30
        transition
      "
    >

      <div className="flex justify-between">

        <span className="text-2xl">
          {icon}
        </span>

        <span className="text-green-500">
          ↗
        </span>

      </div>

      <p className="text-gray-500 text-sm mt-4">
        {title}
      </p>

      <p className="text-2xl font-bold mt-1">
        {value}
      </p>

      <p className="text-xs text-gray-600 mt-1">
        {subtitle}
      </p>

    </div>
  );
}


function CropCard({
  id,
  name,
  icon,
  progress,
  status,
  days,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="
        p-4
        rounded-2xl
        bg-black/20
        border border-green-900/30
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            w-12 h-12
            rounded-xl
            bg-green-500/10
            flex items-center
            justify-center
            text-2xl
          "
        >
          {icon}
        </div>

        <div className="flex-1">

          <div className="flex justify-between items-start">

  <div>
    <h3 className="font-semibold">
      {name}
    </h3>

    <p className="text-xs text-green-500 mt-1">
      {status}
    </p>
  </div>

  <div className="flex items-center gap-3">

    <span className="text-xs text-gray-600">
      {days}
    </span>

    <button
      onClick={() =>
        onEdit({
          id,
          crop_name: name,
          status,
          progress: parseInt(progress),
          days: parseInt(days),
        })
      }
      className="text-blue-400 hover:text-blue-300 text-sm"
    >
      ✏️
    </button>

    <button
      onClick={() => onDelete(id)}
      className="text-red-400 hover:text-red-300 text-sm"
    >
      🗑️
    </button>

  </div>

</div>

          <div className="mt-3">

            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: progress }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


function MarketItem({ crop, price, change, icon }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-3
        border-b border-green-900/20
        last:border-0
      "
    >

      <div className="flex items-center gap-3">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-sm">
          {crop}
        </span>

      </div>

      <div className="text-right">

        <p className="font-semibold text-sm">
          {price}
        </p>

        <p
          className={`
            text-xs
            ${change.startsWith("+")
              ? "text-green-400"
              : "text-red-400"}
          `}
        >
          {change}
        </p>

      </div>

    </div>
  );
}


function SchemeCard({
  title,
  description,
  benefit,
  eligibility,
  applicationLink,
}) {
  return (
    <div
      className="
        p-4
        rounded-2xl
        bg-black/20
        border border-green-900/30
        hover:border-green-500/30
        transition
      "
    >
      <div className="flex justify-between">
        <div className="text-2xl">
          📋
        </div>

        <span className="text-green-400">
          →
        </span>
      </div>

      <h3 className="font-semibold mt-4">
        {title}
      </h3>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>

      {benefit && (
        <p className="text-xs text-green-400 mt-2">
          💰 Benefit: {benefit}
        </p>
      )}

      {eligibility && (
        <p className="text-xs text-gray-400 mt-2">
          👤 Eligibility: {eligibility}
        </p>
      )}

      {applicationLink && (
        <a
          href={applicationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-green-400 hover:text-green-300"
        >
          Apply / Learn More →
        </a>
      )}
    </div>
  );
}
function ServiceCard({
  serviceName,
  serviceType,
  location,
  phone,
  address,
}) {
  return (
    <div className="p-4 rounded-2xl bg-black/20 border border-green-900/30 hover:border-green-500/30 transition">
      
      <div className="flex justify-between items-start">
        <div className="text-2xl">🛠️</div>

        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
          {serviceType}
        </span>
      </div>

      <h3 className="font-semibold mt-4">
        {serviceName}
      </h3>

      <p className="text-xs text-gray-400 mt-2">
        📍 {location}
      </p>

      {address && (
        <p className="text-xs text-gray-500 mt-2">
          🏠 {address}
        </p>
      )}

      {phone && (
        <p className="text-xs text-gray-400 mt-2">
          📞 {phone}
        </p>
      )}
    </div>
  );
}

export default Dashboard;