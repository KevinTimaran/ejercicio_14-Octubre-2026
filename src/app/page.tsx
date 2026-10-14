"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu as MenuIcon,
  X,
  Phone,
  User,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  Clock,
  Tv,
  Home as HomeIcon,
  PhoneCall,
  UtensilsCrossed,
  Award,
  Smile,
  ImageIcon,
  Maximize2,
  Smartphone,
  MapPin,
  ExternalLink,
  Users
} from "lucide-react";

// Helper component for Empty Image Slots as requested by the user:
// "en las partes donde van las imágenes solo pon la card vacía y después yo descargaré las imágenes y las colocaré"
interface ImageCardSlotProps {
  label: string;
  sublabel?: string;
  className?: string;
  imageSrc?: string; // Once the user downloads their images, they can pass the path here (e.g. "/images/pizza.jpg")
  alt?: string;
  aspectRatio?: string;
}

function ImageCardSlot({
  label,
  sublabel = "Colocar imagen aquí",
  className = "",
  imageSrc,
  alt = "Imagen del restaurante",
}: ImageCardSlotProps) {
  if (imageSrc) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={imageSrc} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`image-placeholder group/slot rounded-xl p-4 text-center cursor-pointer select-none transition-all duration-200 ${className}`}
      title={`Espacio reservado para: ${label}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#dfd4c3] text-[#7d7260] group-hover/slot:text-[#e8772e] group-hover/slot:bg-[#faeae0] flex items-center justify-center mb-2 transition-colors shadow-xs">
        <ImageIcon size={20} />
      </div>
      <span className="text-xs font-bold text-[#5c5344] group-hover/slot:text-[#e8772e] tracking-wide transition-colors">
        {label}
      </span>
      <span className="text-[10px] text-[#938774] mt-0.5 font-medium">
        {sublabel}
      </span>
    </div>
  );
}

export default function CrustPizzaApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <main className="min-h-screen bg-[#ede7df] text-[#1a1a1a] flex flex-col items-center justify-start">
      {/* Top Floating Evaluation Bar (Desktop / Viewport switcher) */}
      <header className="w-full bg-[#1e1e1e] border-b border-black/20 py-2.5 px-4 flex items-center justify-between text-xs text-stone-300 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e8772e] animate-pulse" />
          <span className="font-bold text-white tracking-wider uppercase">Crust Pizza Co.</span>
          <span className="hidden sm:inline text-stone-400">| Diseño de Pantalla Adaptado a Móvil Web</span>
        </div>
        <button
          onClick={() => setIsPhoneFrame(!isPhoneFrame)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8772e]/20 text-[#e8772e] hover:bg-[#e8772e]/30 border border-[#e8772e]/40 transition-all font-semibold"
        >
          {isPhoneFrame ? <Maximize2 size={13} /> : <Smartphone size={13} />}
          <span>{isPhoneFrame ? "Ver Pantalla Completa" : "Ver en Marco Móvil (410px)"}</span>
        </button>
      </header>

      {/* Main Container: Mobile Shell or Full-Width Responsive */}
      <div
        className={`w-full transition-all duration-300 relative flex flex-col ${
          isPhoneFrame
            ? "max-w-[410px] my-6 rounded-[44px] border-[8px] border-[#1e1e1e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,0,0,0.1)] overflow-hidden min-h-[850px] bg-[#f5f0eb]"
            : "max-w-4xl mx-auto min-h-screen bg-[#f5f0eb] shadow-xl"
        }`}
      >
        {/* NAV BAR */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8e0d8] px-4 py-3 flex items-center justify-between">
          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-[#f5f0eb] hover:bg-[#e8e0d8] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>

          {/* Desktop Left Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {["Home", "Menu", "Location", "Order Online"].map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded transition-colors ${
                  activeTab === link
                    ? "bg-[#e8772e] text-white"
                    : "text-[#333] hover:bg-[#f0ebe5]"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Brand Circular Stamp Logo */}
          <div className="flex flex-col items-center cursor-pointer select-none">
            <div className="w-13 h-13 rounded-full bg-[#1a1a1a] flex flex-col items-center justify-center text-white border-2 border-white shadow-md">
              <span className="text-[10px] font-black leading-none tracking-widest">CRUST</span>
              <span className="text-[7.5px] font-black leading-none tracking-wider text-[#e8772e] mt-0.5">PIZZA CO.</span>
              <span className="text-[5.5px] font-semibold text-stone-400 tracking-widest mt-0.5">EST. 2020</span>
            </div>
          </div>

          {/* Desktop Right Nav Links & Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <a href="#about" className="text-[11px] font-bold tracking-wider uppercase text-[#333] hover:text-[#e8772e]">
              About
            </a>
            <a href="#contact" className="text-[11px] font-bold tracking-wider uppercase text-[#333] hover:text-[#e8772e]">
              Contact
            </a>
            <div className="w-7 h-7 rounded-full bg-[#e8772e] flex items-center justify-center text-white text-xs">
              <User size={13} />
            </div>
            <div className="w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white text-[11px] font-bold">
              𝕏
            </div>
            <a
              href="tel:555-0192"
              className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Right Call Icon */}
          <a
            href="tel:555-0192"
            className="md:hidden w-9 h-9 rounded-full bg-[#e8772e] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
            aria-label="Llamar"
          >
            <Phone size={16} />
          </a>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#e8e0d8] px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200 z-30 shadow-lg">
            {["Home", "Menu", "Location", "Order Online", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveTab(link);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  activeTab === link
                    ? "bg-[#e8772e] text-white"
                    : "text-[#333] hover:bg-[#f5f0eb]"
                }`}
              >
                {link}
              </button>
            ))}
            <div className="pt-2 border-t border-[#e8e0d8] flex justify-between items-center">
              <a
                href="tel:555-0192"
                className="w-full text-center bg-[#e8772e] text-white py-2.5 rounded-full text-xs font-bold tracking-wider uppercase"
              >
                Call Now
              </a>
            </div>
          </div>
        )}

        {/* SCROLLABLE PAGE BODY */}
        <div className="flex-1 pb-24 space-y-8">
          {/* HERO SECTION */}
          <section className="mx-4 mt-4 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4a3510] via-[#6b4f12] to-[#2a1d08] border border-amber-950/20 shadow-md">
            {/* Washi Tape Accent on Corner */}
            <div className="tape top-[-8px] left-6 w-16 -rotate-12 rounded-xs" />
            <div className="tape bottom-[-8px] right-6 w-16 rotate-6 rounded-xs" />

            <div className="relative min-h-[380px] p-6 flex flex-col justify-between z-10">
              {/* Overlay Card on Top/Left */}
              <div className="max-w-[280px] bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white space-y-2.5">
                <span className="inline-block px-2 py-0.5 rounded bg-[#e8772e] text-white text-[9px] font-black uppercase tracking-widest">
                  Artesanal
                </span>
                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                  For Delicious, Made-From Scratch Pizzas
                </h1>
                <p className="text-xs text-stone-200 leading-relaxed font-medium">
                  Nuestro dough artesanal horneado fresco cada día a la piedra.
                </p>
                <button className="w-full sm:w-auto bg-[#e8772e] hover:bg-[#d4681f] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-lg shadow-[#e8772e]/30">
                  Order Online
                </button>
              </div>

              {/* Empty Card Slot for the Hero Pizza Image */}
              <div className="mt-4 w-full">
                <ImageCardSlot
                  label="[ Espacio: Foto Hero de Pizza Compartida en Mesa ]"
                  sublabel="Vista cenital de pizza artesanal cortada en porciones"
                  className="w-full h-44 rounded-xl border-amber-400/40 bg-amber-950/40 text-amber-200"
                />
              </div>
            </div>
          </section>

          {/* SECTION: OUR MENU */}
          <section className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#1a1a1a]">
                Our Menu
              </h2>
              <span className="text-[11px] font-bold text-[#e8772e] uppercase tracking-wider cursor-pointer hover:underline">
                Especialidades
              </span>
            </div>

            {/* Menu Cards Grid / Responsive Scroll */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
              {[
                {
                  id: "m-1",
                  title: "Chicken Parm",
                  price: "$9",
                  desc: "Pollo empanizado, salsa marinara casera y queso mozzarella fresco.",
                  imageLabel: "[ Foto: Chicken Parm ]",
                },
                {
                  id: "m-2",
                  title: "Chicken Alfredo",
                  price: "$8",
                  desc: "Pasta cremosa con pollo a la parrilla en salsa alfredo con parmesano.",
                  imageLabel: "[ Foto: Chicken Alfredo ]",
                },
                {
                  id: "m-3",
                  title: "Spaghetti & Meatballs",
                  price: "$9",
                  desc: "Espagueti con albóndigas caseras en salsa de tomate con hierbas frescas.",
                  imageLabel: "[ Foto: Spaghetti & Meatballs ]",
                },
                {
                  id: "m-4",
                  title: "Baked Mac & Cheese",
                  price: "$10",
                  desc: "Macarrones horneados con quesos cheddar y gruyère, gratinado crujiente.",
                  imageLabel: "[ Foto: Baked Mac & Cheese ]",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-xs border border-[#e8e0d8] flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  {/* Empty Image Card Slot */}
                  <div className="relative">
                    <ImageCardSlot
                      label={item.imageLabel}
                      sublabel="160x160 px"
                      className="w-full h-32 rounded-none border-0 border-b border-[#e8e0d8]"
                    />
                    {/* Price Badge */}
                    <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-[#e8772e] text-white font-black text-[11px] flex items-center justify-center shadow-md">
                      {item.price}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-3 space-y-1">
                    <h3 className="text-xs font-black uppercase tracking-tight text-[#1a1a1a] group-hover:text-[#e8772e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-stone-500 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View Complete Menu CTA */}
            <div className="text-center">
              <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md shadow-[#e8772e]/20">
                View Our Complete Menu
              </button>
            </div>
          </section>

          <div className="mx-4 h-px bg-[#e0d8d0]" />

          {/* SECTION: CHICAGO-STYLE THIN CRUST PIZZA */}
          <section className="px-4 space-y-5">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight text-[#1a1a1a]">
                Home of the Chicago-Style Thin Crust Pizza
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nuestros ingredientes frescos y nuestra masa artesanal hacen de cada pizza una experiencia única.
                Horneada en horno de piedra a alta temperatura para lograr la textura crocante perfecta.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  Learn More
                </button>
                <button className="text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#e8772e] flex items-center gap-1">
                  <span>See Listings</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>

            {/* 6 Service Icons Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { icon: Clock, title: "Carrito Online" },
                { icon: Tv, title: "Comida Rápida" },
                { icon: HomeIcon, title: "My Home Crust" },
                { icon: PhoneCall, title: "Llama Ahora" },
                { icon: UtensilsCrossed, title: "Nutrition Facts" },
                { icon: Award, title: "Partnership" },
              ].map((srv, idx) => {
                const IconComponent = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#e8772e] text-white rounded-xl p-3 flex flex-col items-center justify-center text-center space-y-1.5 shadow-sm active:scale-95 transition-transform"
                  >
                    <IconComponent size={22} className="stroke-white" />
                    <span className="text-[9px] font-bold uppercase tracking-wider leading-tight">
                      {srv.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Polaroid Photos Area (Staff / Founders) */}
            <div className="pt-2 flex justify-center items-center gap-3">
              {/* Polaroid 1 */}
              <div className="relative bg-white p-2.5 pb-6 rounded-sm shadow-md -rotate-3 border border-stone-200 max-w-[160px] flex-1">
                <div className="tape -top-2 left-6 w-12 rotate-12" />
                <ImageCardSlot
                  label="[ Polaroid 1 ]"
                  sublabel="Foto personal"
                  className="w-full h-28 rounded-none border border-stone-300"
                />
                <span className="block text-center text-[9px] font-bold text-stone-600 mt-2 tracking-wider">
                  Fundador
                </span>
              </div>

              {/* Polaroid 2 */}
              <div className="relative bg-white p-2.5 pb-6 rounded-sm shadow-md rotate-3 border border-stone-200 max-w-[160px] flex-1">
                <div className="tape -top-2 right-6 w-12 -rotate-12" />
                <ImageCardSlot
                  label="[ Polaroid 2 ]"
                  sublabel="Foto personal"
                  className="w-full h-28 rounded-none border border-stone-300"
                />
                <span className="block text-center text-[9px] font-bold text-stone-600 mt-2 tracking-wider">
                  Equipo
                </span>
              </div>
            </div>
          </section>

          <div className="mx-4 h-px bg-[#e0d8d0]" />

          {/* SECTION: WAYS TO ENJOY */}
          <section className="px-4 space-y-4">
            <h2 className="text-lg font-black uppercase tracking-wider text-[#1a1a1a]">
              Ways to Enjoy
            </h2>

            {/* Big Pizza Card Slot with Center Stamp Logo */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d8] bg-white p-2">
              <div className="relative w-full h-60 rounded-xl overflow-hidden">
                <ImageCardSlot
                  label="[ Espacio: Pizza Grande Pepperoni con Sello ]"
                  sublabel="Pizza completa horneada con el sello de la marca"
                  className="w-full h-full"
                />
                {/* Center Stamp Badge Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-black/85 border-2 border-[#e8772e] text-white flex flex-col items-center justify-center shadow-xl pointer-events-none">
                  <span className="text-xs font-black tracking-widest">CRUST</span>
                  <span className="text-[9px] font-black tracking-wider text-[#e8772e]">PIZZA CO</span>
                  <div className="flex gap-1 mt-1">
                    <span className="w-1 h-1 rounded-full bg-[#e8772e]" />
                    <span className="w-1 h-1 rounded-full bg-[#e8772e]" />
                    <span className="w-1 h-1 rounded-full bg-[#e8772e]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Dark Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#1a1a1a] text-white rounded-2xl p-5 text-center space-y-3">
                <div className="w-11 h-11 rounded-full bg-[#e8772e] mx-auto flex items-center justify-center text-white">
                  <Award size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider">
                  Award-Winning Pizza & Service
                </h3>
                <p className="text-[10px] text-stone-300 leading-relaxed">
                  Reconocidos por nuestra calidad excepcional y servicio cálido al cliente.
                </p>
                <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Learn More
                </button>
              </div>

              <div className="bg-[#1a1a1a] text-white rounded-2xl p-5 text-center space-y-3">
                <div className="w-11 h-11 rounded-full bg-[#e8772e] mx-auto flex items-center justify-center text-white">
                  <Smile size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider">
                  Kids Eat Free Tuesdays!
                </h3>
                <p className="text-[10px] text-stone-300 leading-relaxed">
                  Todos los martes los niños comen gratis con la compra de un plato principal.
                </p>
                <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  View Kids Complete Menu
                </button>
              </div>
            </div>

            {/* WHY CHOOSE US (6 Photo Mosaic Slots) */}
            <div className="pt-3 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]">
                Why Choose Us
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <ImageCardSlot
                    key={num}
                    label={`[ Foto ${num} ]`}
                    sublabel="Mosaico"
                    className="w-full h-24 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="mx-4 h-px bg-[#e0d8d0]" />

          {/* SECTION: COMMUNITY */}
          <section className="px-4 space-y-3">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#e8772e]">@yourbrandhandle</span>
              <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
                Let's Work Together For Our Community
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nos apasiona trabajar junto a nuestra comunidad para crear momentos memorables y apoyar causas locales.
              </p>
            </div>

            {/* Community Illustration / Image Slot */}
            <div className="bg-white rounded-2xl p-4 border border-[#e8e0d8] shadow-xs flex items-center justify-center">
              <ImageCardSlot
                label="[ Espacio: Ilustración o Foto de Comunidad ]"
                sublabel="Personas sosteniendo cartel comunitario"
                className="w-full h-36 rounded-xl"
              />
            </div>
          </section>

          <div className="mx-4 h-px bg-[#e0d8d0]" />

          {/* SECTION: FRANCHISE & SUBMIT A REQUEST */}
          <section className="px-4 space-y-4">
            <div className="space-y-1.5">
              <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
                Want to Own Your Own Crust Pizza Co.?
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Descubre las oportunidades de franquicia y únete a nuestra familia de apasionados por la pizza.
              </p>
              <button className="bg-[#e8772e] hover:bg-[#d4681f] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Submit a Request
              </button>
            </div>

            {/* Franchise Building Image Slot */}
            <div className="rounded-2xl overflow-hidden border border-[#e8e0d8] shadow-xs bg-white p-2">
              <ImageCardSlot
                label="[ Espacio: Foto de la Fachada del Restaurante / Local ]"
                sublabel="Foto exterior con autos y letrero luminoso"
                className="w-full h-44 rounded-xl"
              />
            </div>

            {/* Quick Action Request Buttons */}
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]">
                Submit a Request
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {["Locations", "Get Directions", "Follow Us"].map((action) => (
                  <button
                    key={action}
                    className="bg-[#e8772e] hover:bg-[#d4681f] text-white py-2.5 px-1 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-transform truncate text-center"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-[#1a1a1a] text-white px-5 py-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#2a2a2a] border border-[#e8772e] flex flex-col items-center justify-center shrink-0">
                <span className="text-[8px] font-black leading-tight text-white">CRUST</span>
                <span className="text-[6.5px] font-black text-[#e8772e] leading-tight">PIZZA</span>
                <span className="text-[6px] font-bold text-stone-400 leading-tight">CO.</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Want to Place an Order Now?
                </p>
                <p className="text-[10px] text-stone-400">
                  Llámanos o pide online con entrega a domicilio.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-400">
              <a href="#menu" className="hover:text-[#e8772e]">Menu</a>
              <a href="#catering" className="hover:text-[#e8772e]">Catering</a>
              <a href="#commissions" className="hover:text-[#e8772e]">Commissions</a>
              <a href="#privacy" className="hover:text-[#e8772e]">Privacy</a>
              <a href="#terms" className="hover:text-[#e8772e]">Terms</a>
            </div>

            <p className="text-[9px] text-stone-500 pt-1">
              © 2026 Crust Pizza Co. Todos los derechos reservados.
            </p>
          </footer>
        </div>

        {/* MOBILE FLOATING BOTTOM BAR (Accessible with thumb on phone) */}
        <aside className="fixed bottom-0 left-0 right-0 sm:absolute bg-white/95 backdrop-blur-md border-t border-[#e8e0d8] py-2 px-6 flex justify-around items-center z-50 shadow-lg">
          <button
            onClick={() => setActiveTab("Home")}
            className={`flex flex-col items-center gap-0.5 ${
              activeTab === "Home" ? "text-[#e8772e]" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <HomeIcon size={18} />
            <span className="text-[9px] font-bold uppercase">Inicio</span>
          </button>

          <button
            onClick={() => setActiveTab("Menu")}
            className={`flex flex-col items-center gap-0.5 ${
              activeTab === "Menu" ? "text-[#e8772e]" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <UtensilsCrossed size={18} />
            <span className="text-[9px] font-bold uppercase">Menú</span>
          </button>

          {/* Central Highlighted Order Button */}
          <button
            onClick={() => setActiveTab("Order Online")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e8772e] text-white shadow-md shadow-[#e8772e]/30 font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform"
          >
            <ShoppingBag size={14} />
            <span>Ordenar</span>
          </button>

          <a
            href="tel:555-0192"
            className="flex flex-col items-center gap-0.5 text-stone-500 hover:text-[#e8772e]"
          >
            <Phone size={18} />
            <span className="text-[9px] font-bold uppercase">Llamar</span>
          </a>
        </aside>
      </div>
    </main>
  );
}
