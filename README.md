# AURA Studio — Diseño de Pantalla Móvil (E-Commerce Web)

Proyecto desarrollado para la asignatura **Diseño de Interfaces** utilizando **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** y **Lucide React**.

---

## 📱 Características de la Interfaz

- **Diseño Mobile-First Optimizado:** Estructura pensada para pantallas de smartphone, con áreas seguras (`safe-area-insets`), soporte táctil y tipografía fluida.
- **Selector de Vista para Evaluación:** Botón superior para alternar entre **Modo Marco de Teléfono** (mockup de smartphone con notch y sombras) y **Pantalla Completa Responsiva**.
- **Barra de Navegación Móvil (Bottom Bar):** Acceso rápido con retroalimentación visual a *Inicio*, *Explorar*, *Deseos*, *Bolsa* y *Perfil*.
- **Catálogo y Filtro Dinámico por Categorías:** Filtros con desplazamiento horizontal fluido (*Todos*, *Sneakers*, *Relojes*, *Streetwear*, *Audio*, *Accesorios*).
- **Búsqueda Instantánea & Ordenamiento:** Búsqueda en tiempo real por palabras clave y filtro por precio o popularidad.
- **Detalle de Producto (Bottom Sheet Modal):** Hoja deslizable con selector de color, tallas interactivas, indicador de stock y selector de cantidad.
- **Bolsa de Compras (Slide-over Cart):** Control de cantidades, cálculo dinámico de subtotal, envío gratis condicional y sistema de cupones (`AURA10` para 10% OFF o `PROFE` para 25% OFF).
- **Lista de Favoritos (Wishlist):** Marcado y desmarcado de favoritos con contador en tiempo real.
- **Sistema de Notificaciones Toast:** Confirmaciones sutiles tipo píldora para acciones del usuario.

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador (o actívalo en modo dispositivo móvil en DevTools: `F12` > icono de móvil).

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📂 Estructura Principal

- [`src/app/page.tsx`](file:///home/kevin/Universidad/Diseño%20de%20interfaces/Diseñar%20pantalla%201/ejercicio_14-Octubre-2026/src/app/page.tsx): Componente principal interactivo con estados de navegación, catálogo, modal de detalles y bolsa de compra.
- [`src/app/globals.css`](file:///home/kevin/Universidad/Diseño%20de%20interfaces/Diseñar pantalla 1/ejercicio_14-Octubre-2026/src/app/globals.css): Sistema de diseño oscuro contemporáneo, clases glassmorphism y variables de tema.
- [`src/app/layout.tsx`](file:///home/kevin/Universidad/Diseño%20de%20interfaces/Diseñar pantalla 1/ejercicio_14-Octubre-2026/src/app/layout.tsx): Configuración de fuentes Geist, metadatos y viewport móvil estricto.
- [`next.config.ts`](file:///home/kevin/Universidad/Diseño%20de%20interfaces/Diseñar pantalla 1/ejercicio_14-Octubre-2026/next.config.ts): Configuración de turbopack y patrones remotos de imágenes.
