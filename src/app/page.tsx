"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu as MenuIcon,
  X,
  User,
  Clock,
  Package,
  Home as HomeIcon,
  PhoneCall,
  UtensilsCrossed,
  Award,
  ChevronRight,
  Plus
} from "lucide-react";

export default function CrustPizzaApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1a1a] font-sans antialiased selection:bg-[#e8772e] selection:text-white">
      {/* 1. TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e8e0d8] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1a1a1a] hover:bg-stone-100"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>

          {/* Nav Left Links */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { name: "HOME", active: true },
              { name: "MENU", active: false },
              { name: "LOCATION", active: false },
              { name: "ORDER ONLINE", active: false },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`text-[11px] font-extrabold tracking-widest px-3.5 py-1.5 rounded transition-all uppercase ${
                  activeTab === item.name
                    ? "bg-[#e8772e] text-white shadow-xs"
                    : "text-[#333333] hover:text-[#e8772e] hover:bg-stone-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Brand Logo - Center Vintage Stamp */}
          <div className="flex flex-col items-center cursor-pointer select-none">
            <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border-2 border-white shadow-md flex flex-col items-center justify-center text-white px-1">
              <span className="text-[10px] font-black tracking-widest leading-none">CRUST</span>
              <span className="text-[7.5px] font-black tracking-wider text-[#e8772e] leading-tight mt-0.5">
                PIZZA CO.
              </span>
              <span className="text-[5.5px] font-bold tracking-widest text-stone-300 mt-0.5">
                EST. 2020
              </span>
            </div>
          </div>

          {/* Nav Right Links & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#about"
              className="text-[11px] font-extrabold tracking-widest text-[#333333] hover:text-[#e8772e] uppercase transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-[11px] font-extrabold tracking-widest text-[#333333] hover:text-[#e8772e] uppercase transition-colors"
            >
              CONTACT
            </a>

            {/* Profile circular icon */}
            <div className="w-7 h-7 rounded-full bg-[#e8772e] text-white flex items-center justify-center cursor-pointer hover:opacity-90 shadow-xs">
              <User size={14} />
            </div>

            {/* Twitter / X circular icon */}
            <div className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center cursor-pointer hover:opacity-90 text-[11px] font-black shadow-xs">
              𝕏
            </div>

            {/* Call Now button */}
            <a
              href="tel:555-0192"
              className="text-[11px] font-extrabold tracking-widest text-white bg-[#e8772e] hover:bg-[#d4681f] px-5 py-2 rounded-full uppercase transition-colors shadow-xs"
            >
              CALL NOW
            </a>
          </div>

          {/* Mobile Right Call Action */}
          <a
            href="tel:555-0192"
            className="md:hidden text-[10px] font-extrabold tracking-wider text-white bg-[#e8772e] px-3.5 py-1.5 rounded-full uppercase"
          >
            CALL NOW
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#e8e0d8] px-5 py-4 space-y-2.5 animate-in slide-in-from-top duration-200">
            {["HOME", "MENU", "LOCATION", "ORDER ONLINE", "ABOUT", "CONTACT"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveTab(link);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded text-xs font-extrabold tracking-wider uppercase ${
                  activeTab === link ? "bg-[#e8772e] text-white" : "text-[#333] hover:bg-stone-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-6 space-y-12">
        {/* 2. HERO BANNER SECTION */}
        <section className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300/40 bg-[#2a1d0d]">
          {/* Masking tape on top-left and bottom-right corners */}
          <div className="tape -top-2 left-8 w-20 -rotate-12 rounded-xs" />
          <div className="tape -top-2 right-8 w-20 rotate-12 rounded-xs" />

          {/* Full Banner Image */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[430px]">
            <Image
              src="/images/hero-pizza.png"
              alt="For Delicious, Made-From Scratch Pizzas"
              fill
              priority
              className="object-cover"
            />

            {/* Subtle radial shadow to ensure text punchiness */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            {/* Floating Dark Card on Left */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 max-w-[320px] sm:max-w-[360px] bg-[#1a1a1a]/95 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-white/10 text-white shadow-2xl space-y-3">
              {/* Tape on top-left of the card */}
              <div className="tape -top-2 -left-2 w-14 -rotate-45" />

              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-white">
                FOR DELICIOUS, <br />
                MADE-FROM <br />
                SCRATCH PIZZAS
              </h1>

              <p className="text-xs text-stone-300 leading-relaxed font-medium">
                Masa artesanal y fresca horneada todos los días a la piedra.
              </p>

              <div className="pt-1">
                <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-md shadow-[#e8772e]/30">
                  Order Online
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR MENU SECTION */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#1a1a1a]">
            OUR MENU
          </h2>

          {/* 4 Food Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                id: "m-1",
                name: "CHICKEN PARM",
                price: "$9",
                desc: "Pollo crocante, salsa marinara casera y mozzarella fundido.",
                image: "/images/menu-chicken-parm.png",
              },
              {
                id: "m-2",
                name: "CHICKEN ALFREDO",
                price: "$8",
                desc: "Pasta cremosa con pollo a la parrilla en salsa alfredo con parmesano.",
                image: "/images/menu-chicken-alfredo.png",
              },
              {
                id: "m-3",
                name: "SPAGHETTI & MEATBALLS",
                price: "$9",
                desc: "Espagueti tradicional con albóndigas en salsa de tomate y albahaca.",
                image: "/images/menu-spaghetti.png",
              },
              {
                id: "m-4",
                name: "BAKED MAC & CHEESE",
                price: "$10",
                desc: "Macarrones gratinados al horno con mezcla de quesos cheddar y gruyère.",
                image: "/images/menu-mac-cheese.png",
              },
            ].map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-[#e8e0d8] flex flex-col justify-between group"
              >
                {/* Image Container with Price Badge */}
                <div className="relative w-full aspect-[16/10] bg-stone-100 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Circular Orange Price Badge */}
                  <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-[#e8772e] text-white font-black text-[11px] flex items-center justify-center shadow-md">
                    {dish.price}
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-tight text-[#1a1a1a] group-hover:text-[#e8772e] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-[10px] text-stone-500 leading-relaxed line-clamp-3 mt-1">
                      {dish.desc}
                    </p>
                  </div>

                  {/* Small orange circular button in bottom-right corner as seen in the mock */}
                  <div className="pt-2 flex justify-end">
                    <button
                      className="w-5 h-5 rounded-full bg-[#e8772e] text-white flex items-center justify-center hover:bg-[#d4681f] transition-transform active:scale-90"
                      aria-label="Añadir plato"
                    >
                      <Plus size={12} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center CTA Button */}
          <div className="text-center pt-2">
            <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3 rounded-full transition-transform active:scale-95 shadow-md shadow-[#e8772e]/20">
              VIEW OUR COMPLETE MENU
            </button>
          </div>
        </section>

        {/* 4. CHICAGO-STYLE THIN CRUST PIZZA SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
          {/* Left: Text & Actions (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight text-[#1a1a1a]">
              HOME OF THE <br />
              CHICAGO-STYLE <br />
              THIN CRUST PIZZA
            </h2>

            <p className="text-xs text-stone-600 leading-relaxed">
              Nuestros ingredientes frescos y nuestra masa artesanal hacen de cada pizza una experiencia única.
              Horneada en horno de piedra a alta temperatura para lograr la textura crocante perfecta.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-xs">
                LEARN MORE
              </button>
              <button className="text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#e8772e] transition-colors">
                SEE LOCATIONS
              </button>
            </div>
          </div>

          {/* Center: 6 Service Icons in 3x2 Grid (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-3 gap-2.5">
            {[
              { icon: Clock, label: "CARRITO ONLINE" },
              { icon: Package, label: "COMIDA RÁPIDA" },
              { icon: HomeIcon, label: "MY HOME CRUST" },
              { icon: PhoneCall, label: "LLAMA AHORA" },
              { icon: UtensilsCrossed, label: "NUTRITION FACTS" },
              { icon: Award, label: "PARTNERSHIP" },
            ].map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#e8772e] hover:bg-[#d4681f] text-white rounded-xl p-3 flex flex-col items-center justify-center text-center space-y-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <IconComp size={22} strokeWidth={2.2} className="stroke-white" />
                  <span className="text-[8.5px] font-black uppercase tracking-wider leading-tight">
                    {srv.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Polaroid Photos with Tape (3 cols) */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative bg-white p-2.5 pb-6 rounded-sm shadow-xl border border-stone-200 max-w-[240px] w-full rotate-2">
              {/* Tape on corners */}
              <div className="tape -top-3 left-4 w-12 rotate-12" />
              <div className="tape -top-3 right-4 w-12 -rotate-12" />
              <div className="tape -bottom-2 right-6 w-12 rotate-6" />

              <div className="relative w-full aspect-[1.13/1] bg-stone-100 overflow-hidden">
                <Image
                  src="/images/founder.png"
                  alt="Fundadores de Crust Pizza Co."
                  fill
                  className="object-cover"
                />
              </div>

              <span className="block text-center text-[9px] font-extrabold uppercase tracking-widest text-stone-500 mt-2">
                OUR TEAM & FOUNDERS
              </span>
            </div>
          </div>
        </section>

        {/* 5. WAYS TO ENJOY SECTION */}
        <section className="space-y-6 pt-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#1a1a1a]">
            WAYS TO ENJOY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Large Pizza Stamp Card (5 cols) */}
            <div className="md:col-span-5 bg-white rounded-2xl p-2.5 border border-[#e8e0d8] shadow-sm">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-100">
                <Image
                  src="/images/pizza-stamp.png"
                  alt="Crust Pizza Co. Chicago-Style Thin Crust Pepperoni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: 2 Dark Cards + Why Choose Us Mosaic (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Top: 2 Dark Cards Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Award-Winning Card */}
                <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 text-center space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="w-12 h-12 rounded-full bg-[#e8772e] mx-auto flex items-center justify-center text-white shadow-xs">
                      <Award size={24} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-wider leading-tight">
                      AWARD-WINNING <br /> PIZZA & SERVICE
                    </h3>
                    <p className="text-[10px] text-stone-300 leading-relaxed font-normal">
                      Reconocidos por nuestra calidad excepcional y servicio cálido al cliente.
                    </p>
                  </div>
                  <div>
                    <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-[10px] uppercase tracking-wider px-5 py-2 rounded-full transition-transform active:scale-95">
                      LEARN MORE
                    </button>
                  </div>
                </div>

                {/* Kids Eat Free Card */}
                <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 text-center space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="w-12 h-12 rounded-full bg-[#e8772e] mx-auto flex items-center justify-center text-white shadow-xs">
                      <UtensilsCrossed size={22} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-wider leading-tight">
                      KIDS EAT FREE <br /> TUESDAYS!
                    </h3>
                    <p className="text-[10px] text-stone-300 leading-relaxed font-normal">
                      Todos los martes los niños comen gratis con la compra de un plato principal.
                    </p>
                  </div>
                  <div>
                    <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-[10px] uppercase tracking-wider px-5 py-2 rounded-full transition-transform active:scale-95">
                      VIEW OUR COMPLETE MENU
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom: Why Choose Us Mosaic Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#e8e0d8] shadow-sm space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]">
                  WHY CHOOSE US
                </h3>
                <div className="relative w-full aspect-[1024/626] rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src="/images/Why-Choose.png"
                    alt="Why Choose Us Mosaic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMMUNITY SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
          {/* Left: Text (7 cols) */}
          <div className="md:col-span-7 space-y-2">
            <span className="text-xs font-black text-[#e8772e] tracking-wider">
              @yourbrandhandle
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1a1a1a] leading-tight">
              LET'S WORK TOGETHER <br /> FOR OUR COMMUNITY
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed max-w-lg">
              Nos apasiona trabajar junto a nuestra comunidad para crear experiencias memorables,
              apoyar causas benéficas locales y celebrar juntos en cada mesa.
            </p>
          </div>

          {/* Right: Community Illustration / Image (5 cols) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-xl overflow-hidden bg-transparent">
              <Image
                src="/images/community.png"
                alt="Community Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* 7. FRANCHISE & REQUEST SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
          {/* Left: Franchise (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight leading-tight text-[#1a1a1a]">
              WANT TO OWN YOUR OWN <br /> CRUST PIZZA CO.?
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Descubre las oportunidades de franquicia y únete a nuestra familia de apasionados por la pizza artesanal.
            </p>
            <div>
              <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-xs">
                SUBMIT A REQUEST
              </button>
            </div>
          </div>

          {/* Center: Storefront Image (4 cols) */}
          <div className="md:col-span-4">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm border border-[#e8e0d8] bg-stone-100">
              <Image
                src="/images/storefront.png"
                alt="Crust Pizza Co. Storefront Restaurant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Submit a Request with 3 Buttons (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]">
              SUBMIT A REQUEST
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {["LOCATIONS", "GET DIRECTIONS", "FOLLOW US"].map((btn) => (
                <button
                  key={btn}
                  className="bg-[#e8772e] hover:bg-[#d4681f] text-white py-3 px-1 rounded-xl text-[9px] font-black uppercase tracking-wider shadow-xs active:scale-95 transition-transform text-center leading-tight"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="mt-12 bg-white border-t border-[#e8e0d8] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand Stamp + Headline */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-white shadow-md flex flex-col items-center justify-center text-white shrink-0">
              <span className="text-[9px] font-black tracking-widest leading-none">CRUST</span>
              <span className="text-[6.5px] font-black text-[#e8772e] leading-tight">PIZZA CO.</span>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-[#1a1a1a]">
                WANT TO PLACE AN ORDER NOW?
              </p>
            </div>
          </div>

          {/* Right: Footer Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-extrabold tracking-wider uppercase text-stone-600">
            <a href="#menu" className="hover:text-[#e8772e] transition-colors">
              MENU
            </a>
            <a href="#catering" className="hover:text-[#e8772e] transition-colors">
              CATERING
            </a>
            <a href="#ordering" className="hover:text-[#e8772e] transition-colors">
              ORDERING
            </a>
            <a href="#commissions" className="hover:text-[#e8772e] transition-colors">
              COMMISSIONS
            </a>
            <a href="#privacy" className="hover:text-[#e8772e] transition-colors">
              PRIVACY
            </a>
            <a href="#terms" className="hover:text-[#e8772e] transition-colors">
              TERMS
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
