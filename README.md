# TechStore · E-commerce Avanzado

Aplicación web de ecommerce construida con **React 19 + Vite**, diseñada para demostrar funcionalidades modernas: catálogo dinámico con filtros avanzados, carrusel de productos, wishlist, carrito con persistencia y un diseño adaptable con **Tailwind CSS**.

## 🧩 Características principales
- Home con hero prominente, carrusel de productos destacados (Swiper), promociones y categorías populares.
- Catálogo completo con filtros por categoría, rango de precio, rating y ordenamiento (más nuevo, más barato, más caro).
- Wishlist con persistencia: botón ❤️ en cada tarjeta y vista dedicada.
- Carrito con incremento/disminución de unidades, vaciado rápido y persistencia en `localStorage`.
- Página de detalle extendida con información clave y registro de productos vistos recientemente (por implementar).
- Modo oscuro listo para activarse (estructura `darkMode: "class"` en Tailwind).
- Estado global administrado con **Zustand** + `persist`.

## 🚀 Tecnologías
- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/) (carrusel)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (estado global)
- [React Router](https://reactrouter.com/) (enrutado SPA)

## 📦 Scripts disponibles
| Comando | Descripción |
| --- | --- |
| `npm install` | Instala dependencias. |
| `npm run dev` | Inicia el servidor en `http://localhost:5173`. |
| `npm run build` | Genera la build de producción en `dist/`. |
| `npm run preview` | Sirve la build para verificación local. |

> Requiere Node 18+

## 🛠️ Configuración rápida
1. Clona el repositorio y entra al directorio.
2. Instala dependencias con `npm install`.
3. Ejecuta `npm run dev` y abre el puerto indicado.

## 📁 Estructura relevante
```
src/
 ├─ components/
 │   ├─ NavBar.jsx
 │   ├─ ProductCard.jsx
 │   └─ ProductGrid.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ Catalog.jsx
 │   ├─ ProductDetail.jsx
 │   ├─ Cart.jsx
 │   └─ Favorites.jsx
 ├─ store/useStore.js
 ├─ data/products.js
 └─ App.jsx
```

## 🗺️ Roadmap
- [ ] Búsqueda global con debounce.
- [ ] Página de detalle con reviews y productos vistos recientemente.
- [ ] Dashboard de usuario (compras recientes, perfil).

¡Sugerencias y PRs son bienvenidos! Mantén los commits descriptivos y revisa ESLint/Tailwind antes de enviar cambios.
