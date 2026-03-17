import React, { useState } from "react";
import {
  LayoutDashboard,
  Lightbulb,
  Map,
  Rocket,
  Wallet,
  Zap,
  Radio,
  Megaphone,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  X,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);

  // Navegación lateral
  const navItems = [
    { id: "overview", label: "Visión General", icon: LayoutDashboard },
    { id: "strategy", label: "Estrategia", icon: Lightbulb },
    { id: "roadmap", label: "Roadmap & Ejecución", icon: Map },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7] font-sans text-[#111111] flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#111111] text-white flex flex-col justify-between hidden md:flex h-screen sticky top-0">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-12">
            <img
              src="./LP_ISO_B.png"
              alt="La Proa ISO"
              className="w-12 h-12 object-contain"
            />
            <img
              src="./LP_H_B.png"
              alt="La Proa Logo"
              className="h-8 object-contain"
            />
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-[#9D00FF] text-white shadow-lg shadow-purple-900/50"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-8">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-400 mb-2">Estado de Campaña</p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-semibold">Lista para activar</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="md:hidden bg-[#111111] text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src="./LP_ISO_B.png"
            alt="La Proa ISO"
            className="w-10 h-10 object-contain"
          />
          <img
            src="./LP_H_B.png"
            alt="La Proa Logo"
            className="h-6 object-contain"
          />
        </div>
        <div className="flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-2 rounded-lg ${
                  activeTab === item.id
                    ? "bg-[#9D00FF] text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase">
              {navItems.find((t) => t.id === activeTab)?.label}
            </h2>
            <p className="text-gray-500 mt-1">Propuesta de Campaña Express</p>
          </div>
          <button className="hidden md:flex bg-[#9D00FF] hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-semibold items-center gap-2 transition-colors shadow-lg shadow-purple-200">
            <Rocket size={18} />
            Activar Ahora
          </button>
        </header>

        <div className="transition-all duration-500">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "strategy" && (
            <StrategyTab setSelectedImage={setSelectedImage} />
          )}
          {activeTab === "roadmap" && <RoadmapTab />}
        </div>
      </main>

      {/* MODAL DE IMAGEN COMPLETA */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Vista completa"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   TAB 1: VISIÓN GENERAL (Hero & Context)
   ========================================= */
function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Hero Card */}
      <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9D00FF] opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <span className="bg-[#9D00FF] text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-6 uppercase tracking-wider">
          Campaña Express
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-4 text-[#111]">
          ADELANTE,
          <br />
          SIEMPRE
          <br />
          ADELANTE <span className="text-[#9D00FF] font-light ml-2">↗</span>
        </h1>
        <p className="text-gray-500 max-w-md text-lg">
          En momentos de crisis las marcas no pueden frenar. Tienen que salir a
          buscar el mercado.
        </p>
      </div>

      {/* 24H Stat Card */}
      <div className="bg-[#111111] text-white rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group hover:scale-[1.02] transition-transform">
        <div className="absolute inset-0 bg-gradient-to-t from-[#9D00FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <h2 className="text-7xl font-bold mb-2">
          24<span className="text-3xl text-[#9D00FF]">H</span>
        </h2>
        <div className="w-12 h-1 bg-[#9D00FF] rounded-full mb-4"></div>
        <p className="text-gray-400 font-medium">
          Tu campaña de alto impacto lista para salir al mercado.
        </p>
      </div>

      {/* Strategy Summary */}
      <div className="md:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs font-bold text-[#9D00FF] uppercase tracking-widest mb-2">
            Nuestra Estrategia
          </p>
          <h3 className="text-3xl font-extrabold mb-4 tracking-tight">
            CALLE + RADIO + ADS
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Desde La Proa desarrollamos campañas rápidas que combinan impacto
            masivo para <strong>generar leads y ventas</strong>. Tres medios
            trabajando coordinados para dominar tu sector.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <Target size={16} className="text-[#9D00FF]" /> Alta Conversión
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <Users size={16} className="text-[#9D00FF]" /> Alcance Masivo
            </div>
          </div>
        </div>

        {/* Mock Dashboard Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <TrendingUp size={24} className="text-green-500 mb-3" />
            <p className="text-sm text-gray-500 font-medium mb-1">
              Impacto Estimado
            </p>
            <p className="text-2xl font-bold text-[#111]">+1.2M</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <Megaphone size={24} className="text-[#9D00FF] mb-3" />
            <p className="text-sm text-purple-700 font-medium mb-1">
              Spots Radiales
            </p>
            <p className="text-2xl font-bold text-[#9D00FF]">120/sem</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 col-span-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                Velocidad de Retorno (ROI)
              </p>
              <p className="text-xl font-bold text-[#111]">Inmediato</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-[#9D00FF] border-r-transparent flex items-center justify-center rotate-45">
              <Zap size={20} className="text-[#111] -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   TAB 2: ESTRATEGIA (Por qué & Fórmula)
   ========================================= */
function StrategyTab({ setSelectedImage }) {
  return (
    <div className="space-y-8">
      {/* Factores Clave */}
      <div>
        <div className="mb-6">
          <span className="text-xs font-bold text-[#9D00FF] uppercase tracking-widest mb-1 block">
            El Por Qué
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">
            FACTORES CLAVE DEL ÉXITO
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-purple-100 text-[#9D00FF] rounded-2xl flex items-center justify-center mb-6">
              <Wallet size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">
              BAJO COSTO
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Inversión optimizada inteligentemente para maximizar el retorno de
              cada centavo en el menor tiempo posible.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-[#111111] text-white rounded-2xl flex items-center justify-center mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">
              ALTÍSIMO IMPACTO
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Presencia destacada en puntos neurálgicos que asegura que la marca
              no pase desapercibida bajo ninguna circunstancia.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#9D00FF] to-purple-800 text-white rounded-3xl p-8 shadow-md hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Zap size={120} />
            </div>
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">
              RESULTADOS INMEDIATOS
            </h3>
            <p className="text-purple-100 leading-relaxed">
              Estrategia táctica orientada puramente a la conversión rápida y la
              generación de oportunidades.
            </p>
          </div>
        </div>
      </div>

      {/* La Fórmula */}
      <div>
        <div className="mb-6 mt-12">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
            El Ecosistema
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">
            LA FÓRMULA GANADORA
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormulaCard
            imgUrl="./Piramide%20calle.jpg"
            tag="Presencia"
            title="CALLE"
            desc="Cartelería en puntos estratégicos de alto tránsito de la ciudad para posicionamiento mental."
            onClick={() => setSelectedImage("./Piramide%20calle.jpg")}
          />
          <FormulaCard
            imgUrl="./Radio.jpg"
            tag="Alcance"
            title="RADIO"
            desc="Spots en radios cuidadosamente seleccionadas según tu audiencia para repetición constante."
            onClick={() => setSelectedImage("./Radio.jpg")}
          />
          <FormulaCard
            imgUrl="./Mockup%20Ads%20La%20Piramide.jpg"
            tag="Conversión"
            title="ADS (REDES)"
            desc="Campañas digitales estrictamente orientadas a captar leads, consultas y ventas directas."
            onClick={() =>
              setSelectedImage("./Mockup%20Ads%20La%20Piramide.jpg")
            }
          />
        </div>
      </div>
    </div>
  );
}

function FormulaCard({ imgUrl, tag, title, desc, onClick }) {
  return (
    <div
      className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="h-48 rounded-2xl bg-cover bg-center mb-6 relative overflow-hidden"
        style={{ backgroundImage: `url('${imgUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="px-2 pb-2">
        <p className="text-xs font-bold text-[#9D00FF] uppercase tracking-widest mb-2">
          {tag}
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* =========================================
   TAB 3: ROADMAP & EJECUCIÓN
   ========================================= */
function RoadmapTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-[#111111] text-white flex items-center justify-center text-2xl font-bold shrink-0">
              01
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#9D00FF] mb-2 tracking-tight">
                CAMPAÑA CREATIVA
              </h3>
              <p className="text-gray-600">
                Concepto, mensaje y diseño que ordena y da sentido a toda la
                comunicación de la marca. Directo al punto.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 text-[#111] flex items-center justify-center text-2xl font-bold shrink-0">
              02
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111] mb-2 tracking-tight">
                PRESUPUESTO DE MEDIOS
              </h3>
              <p className="text-gray-600">
                Planificación precisa: Cartelería en zonas clave + radios
                segmentadas + ads configurados para captar demanda.
              </p>
            </div>
          </div>

          <div className="bg-[#9D00FF] text-white p-6 rounded-3xl flex items-center gap-6 shadow-lg shadow-purple-200">
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold shrink-0 backdrop-blur-sm">
              03
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                ACTIVACIÓN EXPRESS
              </h3>
              <p className="text-purple-100">
                Implementación rápida, coordinada y precisa para salir al
                mercado e impactar inmediatamente.
              </p>
            </div>
          </div>
        </div>

        {/* The Differential Box */}
        <div className="bg-[#111111] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9D00FF] opacity-20 rounded-full blur-[80px] -mr-20 -mt-20"></div>

          <div>
            <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">
              El Diferencial
            </span>
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">
              VELOCIDAD DE EJECUCIÓN
            </h3>

            <ul className="space-y-4 mb-8">
              {[
                "Concepto y Mensaje",
                "Diseño Integral",
                "Piezas de Campaña",
                "Configuración de Ads",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#9D00FF] shrink-0" />
                  <span className="font-medium text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center relative z-10">
            <p className="text-sm text-gray-400 mb-2">
              Una vez aprobado el plan:
            </p>
            <p className="text-xl font-bold leading-tight">
              La campaña puede estar instalada en menos de{" "}
              <span className="text-[#9D00FF]">3 días</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
