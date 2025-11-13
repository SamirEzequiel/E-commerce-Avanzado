import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductGrid from "../components/ProductGrid";
import { useStore } from "../store/useStore";

const PROMOTIONS = [
  {
    id: 1,
    title: "🎧 Audio Premium",
    description: "Hasta 30% OFF en audífonos y parlantes bluetooth seleccionados.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "💻 Upgrade tu setup",
    description: "Combos de notebooks + monitores con despacho gratis todo Chile.",
    gradient: "from-sky-500 via-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "🔥 Smart Deals",
    description: "Los smartphones más potentes con cuotas sin interés.",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
];

const HERO_TAGS = ["Envíos 24h", "Garantía oficial", "Cuotas sin interés"];

function Home() {
  const products = useStore((state) => state.products);
  const featuredProducts = useMemo(() => products.slice(0, 8), [products]);

  const categories = useMemo(() => {
    const counter = new Map();

    products.forEach((product) => {
      counter.set(product.category, (counter.get(product.category) ?? 0) + 1);
    });

    return Array.from(counter.entries())
      .map(([category, total]) => ({ category, total }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 6);
  }, [products]);

  const heroSlides = useMemo(
    () =>
      featuredProducts.map((product) => ({
        id: product.id,
        title: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        url: `/product/${product.id}`,
      })),
    [featuredProducts]
  );

  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr),420px]">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-50 sm:text-5xl">
            La mejor tecnología para potenciar tu día a día.
          </h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Descubre productos curados por expertos, comparalos con filtros
            inteligentes y llévalos con despacho rápido en todo Chile.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/catalog"
              className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-offset-slate-900"
            >
              Ir al catálogo
            </Link>
            <Link
              to="/favorites"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              Ver mis favoritos
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/40 dark:border-slate-800 dark:bg-slate-900">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="h-full"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link
                  to={slide.url}
                  className="flex h-full flex-col gap-6"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-64 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
                      ⭐ {slide.rating}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {slide.title}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-300">
                      ${slide.price.toLocaleString("es-CL")}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-300">
                      Ver detalle →
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Promociones exclusivas
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Ahorra en tus categorías favoritas y recibe beneficios adicionales.
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Ver todas las promos →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className={`space-y-4 rounded-3xl bg-gradient-to-br ${promo.gradient} p-6 text-white shadow-lg shadow-black/10`}
            >
              <h3 className="text-xl font-semibold">{promo.title}</h3>
              <p className="text-sm text-white/90">{promo.description}</p>
              <Link
                to="/catalog"
                className="inline-flex items-center text-sm font-semibold text-white/90 transition hover:text-white"
              >
                Descubrir ofertas →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Explora por categoría
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Selecciona una categoría para ver los equipos mejor valorados.
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Ver catálogo completo →
          </Link>
        </div>

        <div className="flex flex-wrap gap-4">
          {categories.map(({ category, total }) => (
            <Link
              key={category}
              to={`/catalog?category=${encodeURIComponent(category)}`}
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-300 dark:group-hover:bg-blue-400 dark:group-hover:text-slate-900">
                {category.slice(0, 2)}
              </span>
              <span>{category}</span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                {total} productos
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Recomendados para ti
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Basados en las tendencias actuales y valoraciones de la comunidad.
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Ver más →
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}

export default Home;
