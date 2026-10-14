"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  ShoppingBag,
  Heart,
  Star,
  SlidersHorizontal,
  ChevronRight,
  Plus,
  Minus,
  X,
  Sparkles,
  MapPin,
  Bell,
  Home,
  Compass,
  User,
  Check,
  Tag,
  ArrowRight,
  Smartphone,
  Maximize2
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Sneakers" | "Relojes" | "Streetwear" | "Audio" | "Accesorios";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Aero Matrix V2 Runners",
    category: "Sneakers",
    price: 139.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviewsCount: 142,
    badge: "HOT DROP",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    description: "Zapatillas ultraligeras con amortiguación reactiva de nitrógeno y malla transpirable de triple densidad.",
    colors: [
      { name: "Obsidian", hex: "#1f2937" },
      { name: "Pure White", hex: "#f3f4f6" },
      { name: "Neon Lime", hex: "#84cc16" },
    ],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
  },
  {
    id: "prod-2",
    name: "Apex Chrono Minimalist",
    category: "Relojes",
    price: 249.0,
    originalPrice: 299.0,
    rating: 4.8,
    reviewsCount: 89,
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Caja de titanio cepillado de 40mm con cristal de zafiro antirreflejo y maquinaria suiza de precisión.",
    colors: [
      { name: "Space Grey", hex: "#374151" },
      { name: "Rose Gold", hex: "#fb7185" },
      { name: "Silver", hex: "#cbd5e1" },
    ],
    sizes: ["40mm", "44mm"],
  },
  {
    id: "prod-3",
    name: "CyberOversize Heavy Hoodie",
    category: "Streetwear",
    price: 89.5,
    rating: 4.7,
    reviewsCount: 215,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    description: "Algodón orgánico peinado de 480 GSM con corte boxy fit holgado y capucha con forro térmico.",
    colors: [
      { name: "Washed Black", hex: "#18181b" },
      { name: "Acid Forest", hex: "#14532d" },
      { name: "Sand Ochre", hex: "#d97706" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "prod-4",
    name: "SonicPro Studio ANC",
    category: "Audio",
    price: 199.99,
    originalPrice: 239.99,
    rating: 5.0,
    reviewsCount: 310,
    badge: "TOP AUDIO",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Drivers de bio-celulosa de 45mm con cancelación activa de ruido híbrida y 40 horas de autonomía continua.",
    colors: [
      { name: "Matte Black", hex: "#0f172a" },
      { name: "Oatmeal Beige", hex: "#e2e8f0" },
    ],
    sizes: ["Estándar"],
  },
  {
    id: "prod-5",
    name: "Urban Modular Crossbody",
    category: "Accesorios",
    price: 65.0,
    rating: 4.6,
    reviewsCount: 76,
    badge: "IMPERMEABLE",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    description: "Tejido Cordura balístico 1000D con cremalleras estancas YKK Aquaguard y broche magnético Fidlock.",
    colors: [
      { name: "Stealth Black", hex: "#111827" },
      { name: "Army Green", hex: "#3f6212" },
    ],
    sizes: ["Única (3.5L)"],
  },
  {
    id: "prod-6",
    name: "Veloce Carbon Sunframe",
    category: "Accesorios",
    price: 110.0,
    originalPrice: 140.0,
    rating: 4.9,
    reviewsCount: 94,
    badge: "POLARIZADO",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Montura ultraligera de fibra de carbono real con lentes polarizadas UV400 categoría 3.",
    colors: [
      { name: "Carbon Raw", hex: "#1e293b" },
      { name: "Midnight Blue", hex: "#1e3a8a" },
    ],
    sizes: ["Ajuste Medio"],
  },
];

const CATEGORIES = ["Todos", "Sneakers", "Relojes", "Streetwear", "Audio", "Accesorios"] as const;

interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export default function MobileStoreApp() {
  // Navigation & View states
  const [activeTab, setActiveTab] = useState<"home" | "explore" | "wishlist" | "cart" | "profile">("home");
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high" | "rating">("popular");

  // Interaction states
  const [wishlist, setWishlist] = useState<string[]>(["prod-1", "prod-4"]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailColor, setDetailColor] = useState<string>("");
  const [detailSize, setDetailSize] = useState<string>("");
  const [detailQuantity, setDetailQuantity] = useState<number>(1);

  // Cart & Drawer states
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedColor: "Obsidian",
      selectedSize: "US 10",
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2400);
  };

  const toggleWishlist = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      showToast("Eliminado de tus favoritos");
    } else {
      setWishlist([...wishlist, id]);
      showToast("¡Añadido a tus favoritos!");
    }
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setDetailColor(product.colors[0]?.name || "");
    setDetailSize(product.sizes[0] || "");
    setDetailQuantity(1);
  };

  const addToCartFromCard = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const existingIndex = cartItems.findIndex((item) => item.product.id === product.id);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          selectedColor: product.colors[0]?.name || "Estándar",
          selectedSize: product.sizes[0] || "Única",
          quantity: 1,
        },
      ]);
    }
    showToast(`1x ${product.name} al carrito`);
  };

  const addToCartFromDetail = () => {
    if (!selectedProduct) return;
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === selectedProduct.id &&
        item.selectedColor === detailColor &&
        item.selectedSize === detailSize
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += detailQuantity;
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          product: selectedProduct,
          selectedColor: detailColor,
          selectedSize: detailSize,
          quantity: detailQuantity,
        },
      ]);
    }
    setSelectedProduct(null);
    showToast(`${detailQuantity}x ${selectedProduct.name} añadido`);
  };

  const updateCartQuantity = (index: number, delta: number) => {
    const updated = [...cartItems];
    const newQty = updated[index].quantity + delta;
    if (newQty <= 0) {
      updated.splice(index, 1);
    } else {
      updated[index].quantity = newQty;
    }
    setCartItems(updated);
  };

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "AURA10") {
      setDiscountPercent(10);
      showToast("¡Cupón AURA10 aplicado (-10%)!");
    } else if (couponCode.trim().toUpperCase() === "PROFE") {
      setDiscountPercent(25);
      showToast("¡Cupón PROFE aplicado (-25%)!");
    } else {
      showToast("Cupón inválido. Prueba con AURA10 o PROFE");
    }
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeTab === "wishlist") {
      list = list.filter((p) => wishlist.includes(p.id));
    }

    if (selectedCategory !== "Todos") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);

    return sorted;
  }, [selectedCategory, searchQuery, sortBy, activeTab, wishlist]);

  const cartTotalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 9.99;
  const finalTotal = subtotal - discountAmount + shipping;

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start relative">
      {/* Top Floating Evaluation Bar (Desktop / Evaluator Control) */}
      <header className="w-full bg-[#111420]/90 border-b border-white/5 py-2 px-4 flex items-center justify-between text-xs text-slate-400 z-50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-200">AURA Mobile Web UI</span>
          <span className="hidden sm:inline text-slate-500">| Diseño de Interfaces (Universidad)</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPhoneFrame(!isPhoneFrame)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all font-medium"
          >
            {isPhoneFrame ? <Maximize2 size={13} /> : <Smartphone size={13} />}
            <span>{isPhoneFrame ? "Ver Pantalla Completa" : "Ver en Marco Móvil"}</span>
          </button>
        </div>
      </header>

      {/* Main Container - Mobile Responsive Shell */}
      <div
        className={`w-full transition-all duration-300 relative flex flex-col ${
          isPhoneFrame
            ? "max-w-[410px] my-6 rounded-[44px] border-[8px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(99,102,241,0.15)] overflow-hidden min-h-[850px] bg-[#0b0e17]"
            : "max-w-md mx-auto min-h-screen bg-[#0b0e17] shadow-2xl"
        }`}
      >
        {/* Mobile Device Status Bar Mock */}
        <div className="pt-2 px-6 pb-1 flex justify-between items-center text-[11px] font-semibold text-slate-400 select-none z-40 bg-[#0b0e17]/80 backdrop-blur-md sticky top-0">
          <span>9:41</span>
          <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto hidden sm:block border border-white/5" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <div className="w-4 h-2 rounded-xs border border-slate-400 p-[1px] flex items-center">
              <div className="w-full h-full bg-slate-200 rounded-xs" />
            </div>
          </div>
        </div>

        {/* Top App Bar */}
        <div className="px-5 pt-3 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full rounded-[14px] bg-[#0b0e17] flex items-center justify-center font-black tracking-wider text-sm text-indigo-400">
                AU
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                <MapPin size={12} className="text-indigo-400" />
                <span>Bogotá D.C.</span>
                <ChevronRight size={10} />
              </div>
              <h1 className="text-base font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                AURA Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast("Tienes 2 notificaciones nuevas")}
              className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 flex items-center justify-center text-slate-300 relative transition-transform active:scale-95"
              aria-label="Notificaciones"
            >
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#0b0e17]" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 relative transition-transform active:scale-95"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={18} />
              {cartTotalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 px-1.5 min-w-[18px] h-[18px] rounded-full bg-rose-500 text-[10px] font-black flex items-center justify-center ring-2 ring-[#0b0e17] animate-bounce">
                  {cartTotalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar & Filter Button */}
        <div className="px-5 py-2 flex items-center gap-2">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar sneakers, hoodies, relojes..."
              className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => {
              const nextSort =
                sortBy === "popular"
                  ? "price-low"
                  : sortBy === "price-low"
                  ? "price-high"
                  : sortBy === "price-high"
                  ? "rating"
                  : "popular";
              setSortBy(nextSort);
              showToast(`Ordenando por: ${nextSort.replace("-", " ")}`);
            }}
            className="w-10 h-10 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 active:scale-95 transition-all"
            title="Cambiar orden"
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 pb-28 pt-2 space-y-5 no-scrollbar">
          {/* Hero Promotional Banner */}
          {activeTab === "home" && !searchQuery && (
            <div className="relative rounded-3xl overflow-hidden p-5 bg-gradient-to-br from-indigo-900/90 via-slate-900 to-[#0c0e18] border border-indigo-500/20 shadow-xl group">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-1">
                <Sparkles size={14} />
                <span>Drop Exclusivo 2026</span>
              </div>
              <h2 className="text-xl font-black text-white leading-tight max-w-[220px]">
                Nueva Colección <br />
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  Cyber Urban
                </span>
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-[200px]">
                Hasta <span className="text-indigo-400 font-bold">30% OFF</span> con el cupón{" "}
                <span className="font-mono bg-white/10 px-1 py-0.5 rounded text-white font-bold">AURA10</span>
              </p>
              <button
                onClick={() => setSelectedCategory("Sneakers")}
                className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-indigo-50 transition-transform active:scale-95 shadow-md shadow-white/10"
              >
                <span>Explorar Drop</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Categorías</h3>
              <span className="text-[11px] text-indigo-400 font-semibold cursor-pointer" onClick={() => setSelectedCategory("Todos")}>
                Ver todo
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-5 px-5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 shrink-0 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-102"
                        : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section Heading & Result Count */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white">
                {activeTab === "wishlist" ? "Tus Favoritos" : selectedCategory === "Todos" ? "Catálogo Destacado" : selectedCategory}
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-medium">
                {filteredProducts.length}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium uppercase">
              Orden: {sortBy.replace("-", " ")}
            </span>
          </div>

          {/* Product Grid (2 columns) */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center text-slate-500">
                <Search size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-300">No encontramos productos</p>
              <p className="text-xs text-slate-500">Intenta buscando con otra palabra clave o quita los filtros.</p>
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-bold text-white"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3.5">
              {filteredProducts.map((product) => {
                const isFav = wishlist.includes(product.id);
                return (
                  <article
                    key={product.id}
                    onClick={() => openProductDetail(product)}
                    className="group glass-card rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] relative"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-indigo-600/90 text-white text-[9px] font-black tracking-wide backdrop-blur-md uppercase shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className={`absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-80 ${
                        isFav
                          ? "bg-rose-500/20 text-rose-500 border border-rose-500/30"
                          : "bg-slate-900/60 text-slate-300 hover:text-white border border-white/10"
                      }`}
                      aria-label="Favorito"
                    >
                      <Heart size={14} className={isFav ? "fill-rose-500" : ""} />
                    </button>

                    {/* Product Image */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-950/60 relative mb-2.5 border border-white/5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 480px) 45vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-1 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-[10px] text-amber-400 font-semibold mb-0.5">
                          <Star size={11} className="fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
                        </div>
                        <h3 className="text-xs font-bold text-slate-100 line-clamp-1 group-hover:text-indigo-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[10px] text-slate-400">{product.category}</p>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-black text-white">
                            ${product.price.toFixed(2)}
                          </div>
                          {product.originalPrice && (
                            <span className="text-[10px] text-slate-500 line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => addToCartFromCard(product, e)}
                          className="w-7 h-7 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-transform active:scale-90 shadow-md shadow-indigo-600/20"
                          aria-label="Añadir al carrito"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Floating Navigation Bar */}
        <nav className="glass-nav absolute bottom-0 left-0 right-0 py-2.5 px-6 flex justify-between items-center z-40 select-none">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "home" ? "text-indigo-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Home size={20} />
            <span className="text-[10px] font-semibold">Inicio</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("explore");
              setSelectedCategory("Todos");
            }}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "explore" ? "text-indigo-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Compass size={20} />
            <span className="text-[10px] font-semibold">Explorar</span>
          </button>

          <button
            onClick={() => setActiveTab("wishlist")}
            className={`flex flex-col items-center gap-1 relative transition-all ${
              activeTab === "wishlist" ? "text-indigo-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Heart size={20} className={activeTab === "wishlist" ? "fill-indigo-400" : ""} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-black text-white flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
            <span className="text-[10px] font-semibold">Deseos</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center gap-1 relative text-slate-400 hover:text-slate-200 transition-all"
          >
            <ShoppingBag size={20} />
            {cartTotalCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-indigo-500 text-[9px] font-black text-white flex items-center justify-center">
                {cartTotalCount}
              </span>
            )}
            <span className="text-[10px] font-semibold">Bolsa</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("profile");
              showToast("Perfil de usuario (Demo UI)");
            }}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "profile" ? "text-indigo-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <User size={20} />
            <span className="text-[10px] font-semibold">Perfil</span>
          </button>
        </nav>

        {/* Product Details Bottom Sheet Modal */}
        {selectedProduct && (
          <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full bg-[#111422] rounded-t-[32px] border-t border-white/10 p-5 max-h-[85%] overflow-y-auto space-y-4 no-scrollbar shadow-2xl relative">
              {/* Drag bar handle */}
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-white/10"
              >
                <X size={16} />
              </button>

              {/* Image & Title */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/5 bg-slate-950">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <Star size={13} className="fill-amber-400" />
                    <span>{selectedProduct.rating}</span>
                    <span className="text-slate-400 font-normal">({selectedProduct.reviewsCount} reseñas)</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-white mt-0.5">{selectedProduct.name}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl font-black text-white">${selectedProduct.price.toFixed(2)}</span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                    En Stock
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Color Selector */}
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-1.5">
                  Color: <span className="text-indigo-400">{detailColor}</span>
                </span>
                <div className="flex items-center gap-2">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setDetailColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        detailColor === c.name
                          ? "border-indigo-500 bg-indigo-500/10 text-white"
                          : "border-white/10 bg-slate-900 text-slate-400"
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-1.5">
                  Talla / Tamaño: <span className="text-indigo-400">{detailSize}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setDetailSize(s)}
                      className={`px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                        detailSize === s
                          ? "border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                          : "border-white/10 bg-slate-900 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex items-center rounded-xl bg-slate-900 border border-white/10 px-2 py-1 gap-3">
                  <button
                    onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-xs font-bold text-white w-4 text-center">{detailQuantity}</span>
                  <button
                    onClick={() => setDetailQuantity(detailQuantity + 1)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={addToCartFromDetail}
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95 transition-all"
                >
                  <ShoppingBag size={16} />
                  <span>Añadir al Carrito (${(selectedProduct.price * detailQuantity).toFixed(2)})</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Slide-over Cart Drawer */}
        {isCartOpen && (
          <div className="absolute inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full h-full bg-[#101320] flex flex-col justify-between p-5 overflow-hidden border-l border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-indigo-400" />
                  <h3 className="text-sm font-black text-white">Tu Bolsa de Compras</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold">
                    {cartTotalCount}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto py-3 space-y-3 no-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag size={36} className="mx-auto text-slate-600" />
                    <p className="text-sm font-semibold text-slate-400">Tu carrito está vacío</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-bold text-white"
                    >
                      Explorar productos
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex gap-3 items-center"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden relative bg-slate-950 shrink-0 border border-white/5">
                        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{item.product.name}</h4>
                        <p className="text-[10px] text-slate-400">
                          {item.selectedColor} • {item.selectedSize}
                        </p>
                        <div className="text-xs font-black text-indigo-400 mt-1">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-800/80 rounded-lg p-1 border border-white/5">
                        <button
                          onClick={() => updateCartQuantity(idx, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white active:scale-90"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-white w-3 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(idx, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white active:scale-90"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Coupon & Summary Footer */}
              {cartItems.length > 0 && (
                <div className="pt-3 border-t border-white/10 space-y-3">
                  {/* Coupon Input */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Cupón (ej: AURA10)"
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white uppercase placeholder:normal-case focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <button
                      onClick={applyCoupon}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-white/10"
                    >
                      Aplicar
                    </button>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-slate-200">${subtotal.toFixed(2)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400 font-semibold">
                        <span>Descuento ({discountPercent}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Envío Express</span>
                      <span className="text-slate-200">
                        {shipping === 0 ? (
                          <span className="text-emerald-400 font-bold">GRATIS</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-white/10">
                      <span>Total</span>
                      <span className="text-indigo-400">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      showToast("¡Pedido simulado con éxito! 🎉");
                      setCartItems([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Check size={16} />
                    <span>Finalizar Pedido (${finalTotal.toFixed(2)})</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Global Toast Pill Notification */}
        {toastMessage && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900/95 border border-indigo-500/40 text-xs font-semibold text-white shadow-2xl flex items-center gap-2 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </main>
  );
}
