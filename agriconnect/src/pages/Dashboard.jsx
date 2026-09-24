import { useState } from "react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          />

          <SidebarItem
            icon="🗺️"
            text="Nearby Services"
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
                Welcome, Farmer 👨‍🌾
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
                  Ansh Yadav
                </p>

                <p className="text-xs text-gray-500">
                  Farmer Account
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

                  <h2 className="text-xl font-bold mt-1">
                    Your Farm Location 📍
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
                  value="28°C"
                />

                <WeatherItem
                  icon="💧"
                  label="Humidity"
                  value="68%"
                />

                <WeatherItem
                  icon="💨"
                  label="Wind"
                  value="12 km/h"
                />

                <WeatherItem
                  icon="🌧️"
                  label="Rain Chance"
                  value="20%"
                />

              </div>

            </div>

          </div>


          {/* ================= QUICK STATS ================= */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">

            <StatCard
              icon="🌱"
              title="My Crops"
              value="4"
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

                <button className="text-green-400 text-sm">
                  View All →
                </button>

              </div>


              <div className="space-y-4">

                <CropCard
                  name="Wheat"
                  icon="🌾"
                  progress="75%"
                  status="Growing Well"
                  days="45 Days"
                />

                <CropCard
                  name="Rice"
                  icon="🌿"
                  progress="55%"
                  status="Healthy"
                  days="30 Days"
                />

                <CropCard
                  name="Potato"
                  icon="🥔"
                  progress="85%"
                  status="Ready Soon"
                  days="60 Days"
                />

              </div>

            </div>


            {/* ================= AI ASSISTANT ================= */}

            <div
              className="
                rounded-3xl
                border border-green-500/20
                bg-gradient-to-br
                from-green-500/10
                to-black/20
                p-6
                relative
                overflow-hidden
              "
            >

              <div
                className="
                  absolute
                  right-[-40px]
                  top-[-40px]
                  w-40
                  h-40
                  rounded-full
                  bg-green-500/10
                  blur-3xl
                "
              />

              <div className="relative z-10">

                <div className="text-4xl mb-4">
                  🤖
                </div>

                <h2 className="text-xl font-bold">
                  AI Crop Assistant
                </h2>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Get smart farming advice, crop recommendations
                  and disease detection assistance.
                </p>

                <button
                  className="
                    mt-6
                    w-full
                    py-3
                    rounded-xl
                    bg-green-500
                    text-black
                    font-bold
                    hover:bg-green-400
                    transition
                  "
                >
                  Ask AI Assistant →
                </button>

              </div>

            </div>


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


              <MarketItem
                crop="Wheat"
                price="₹2,450"
                change="+4.2%"
                icon="🌾"
              />

              <MarketItem
                crop="Rice"
                price="₹3,200"
                change="+2.1%"
                icon="🌿"
              />

              <MarketItem
                crop="Potato"
                price="₹1,850"
                change="-1.3%"
                icon="🥔"
              />

              <MarketItem
                crop="Tomato"
                price="₹2,900"
                change="+6.4%"
                icon="🍅"
              />

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

                <SchemeCard
                  title="PM-KISAN"
                  description="Financial support for eligible farmers"
                />

                <SchemeCard
                  title="PM Fasal Bima Yojana"
                  description="Crop insurance and protection"
                />

              </div>

            </div>

          </div>


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


function SidebarItem({ icon, text, active }) {
  return (
    <button
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


function CropCard({ name, icon, progress, status, days }) {
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

          <div className="flex justify-between">

            <div>

              <h3 className="font-semibold">
                {name}
              </h3>

              <p className="text-xs text-green-500 mt-1">
                {status}
              </p>

            </div>

            <span className="text-xs text-gray-600">
              {days}
            </span>

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


function SchemeCard({ title, description }) {
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

    </div>
  );
}


export default Dashboard;