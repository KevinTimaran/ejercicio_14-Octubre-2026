# Crust Pizza Co. — Diseño de Pantalla Móvil Web

Proyecto desarrollado para la asignatura **Diseño de Interfaces** utilizando **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** y **Lucide React**.

El diseño recrea la interfaz visual artesanal de **Crust Pizza Co.** adaptada de forma nativa a pantallas móviles para la web.

---

## 🎨 Características del Diseño Implementado

1. **Estilo Editorial & Artesanal:**
   - Paleta de colores cálida basada en tonos crema (`#F5F0EB`), terracota / naranja horneado (`#E8772E`) y negro carbón (`#1A1A1A`).
   - Efectos de cinta adhesiva (*washi tape*) en las fotos polaroid del equipo y en el banner hero.
   - Sello circular vintage de la marca (`CRUST PIZZA CO.`).

2. **Adaptación Mobile-First:**
   - Barra de navegación fija con menú desplegable para dispositivos móviles.
   - **Selector de modo evaluador (barra superior):** Permite alternar entre **Modo Marco de Teléfono (410px)** y **Pantalla Completa Responsiva**.
   - **Barra de navegación inferior flotante (Bottom Bar):** Con accesos rápidos al alcance del pulgar (*Inicio*, *Menú*, *Ordenar* y *Llamar*).

3. **Secciones recreadas:**
   - **Hero:** Titular *"For delicious, made-from scratch pizzas"*, botón *"Order Online"* y tarjeta para foto principal.
   - **Our Menu:** 4 tarjetas de especialidades (*Chicken Parm*, *Chicken Alfredo*, *Spaghetti & Meatballs*, *Baked Mac & Cheese*) con sus badges circulares de precio ($9, $8, $9, $10) y botón *"View Our Complete Menu"*.
   - **Chicago-Style Thin Crust Pizza:** Propuesta de valor con botones *"Learn More"* / *"See Listings"*, rejilla de 6 iconos de servicios en naranja y 2 fotos estilo Polaroid con efecto de cinta adhesiva.
   - **Ways to Enjoy:** Tarjeta de pizza con sello central de la marca + 2 tarjetas oscuras (*Award-Winning* y *Kids Eat Free Tuesdays!*) + mosaico de 6 fotos *"Why Choose Us"*.
   - **Community:** Sección social `@yourbrandhandle` con espacio para ilustración/foto.
   - **Franchise & Request:** Sección de franquicia con tarjeta para la fachada del local y botones de acción rápida (*Locations*, *Get Directions*, *Follow Us*).
   - **Footer:** Pie de página con sello circular, links de navegación y copyright.

---

## 🖼️ Cómo Colocar tus Imágenes Cuando las Tengas

Todas las imágenes cuentan con un componente reutilizable `ImageCardSlot` con estilos limpios y etiquetas que indican qué foto corresponde a cada lugar.

Para colocar tus imágenes:
1. Guarda tus fotos en la carpeta `public/images/` (por ejemplo: `public/images/pizza-hero.jpg`).
2. Abre [`src/app/page.tsx`](file:///home/kevin/Universidad/Diseño%20de%20interfaces/Diseñar%20pantalla%201/ejercicio_14-Octubre-2026/src/app/page.tsx).
3. En el `ImageCardSlot` correspondiente, añade la propiedad `imageSrc`, por ejemplo:
   ```tsx
   <ImageCardSlot
     label="[ Foto: Pizza Hero ]"
     imageSrc="/images/pizza-hero.jpg"
     className="w-full h-44"
   />
   ```

---

## 🚀 Cómo Ejecutar

```bash
# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
