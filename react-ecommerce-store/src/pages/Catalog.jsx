import { useMemo, useState } from "react";
import { useStore } from "../store/useStore";
import ProductGrid from "../components/ProductGrid";

const ORDER_OPTIONS = [
  { id: "newest", label: "Más nuevo" },
  { id: "price-asc", label: "Más barato" },
  { id: "price-desc", label: "Más caro" },
];

function Catalog() {
  const products = useStore((state) => state.products);
  const searchTerm = useStore((state) => state.searchTerm);
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState("all");
  const [order, setOrder] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...cats];
  }, [products]);

  const filtered = useMemo(() => {
    let result = [...products];

    // Búsqueda por término
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (rating !== "all") {
      result = result.filter((p) => Math.floor(p.rating) >= Number(rating));
    }

    switch (order) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [products, searchTerm, category, rating, order, priceRange]);

  return (
    <section className="space-y-10">
      <header className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-6 py-10 text-white shadow-lg md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-100 ring-1 ring-inset ring-white/20">
            Explora todo nuestro catálogo
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Encuentra la tecnología ideal para ti
          </h1>
          <p className="text-blue-100">
            Filtra por categoría, precio y rating para descubrir el producto
            perfecto en segundos.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-[280px,1fr]">
        <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Categoría
            </h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm font-medium capitalize transition ${
                    cat === category
                      ? "bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:ring-blue-500/40"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/80"
                  }`}
                >
                  {cat === "all" ? "Todas" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Rating mínimo
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {["all", 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => setRating(String(value))}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    String(value) === rating
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {value === "all" ? "Cualquiera" : `${value}+ ⭐`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Rango de precio
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <label className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  Mínimo
                </span>
                <input
                  type="number"
                  min={0}
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(event) =>
                    setPriceRange((prev) => {
                      const [, max] = prev;
                      return [Math.min(Number(event.target.value), max), max];
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/40"
                />
              </label>
              <label className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  Máximo
                </span>
                <input
                  type="number"
                  min={priceRange[0]}
                  max={2500000}
                  value={priceRange[1]}
                  onChange={(event) =>
                    setPriceRange((prev) => {
                      const [min] = prev;
                      return [min, Math.max(Number(event.target.value), min)];
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/40"
                />
              </label>
            </div>
            <input
              type="range"
              min={0}
              max={2000000}
              step={50000}
              value={priceRange[1]}
              onChange={(event) =>
                setPriceRange((prev) => {
                  const value = Number(event.target.value);
                  return [prev[0], Math.max(value, prev[0])];
                })
              }
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600 dark:bg-slate-700"
            />
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <button
                onClick={() => setPriceRange([0, 2000000])}
                className="rounded-md border border-slate-200 px-3 py-1 font-medium text-slate-600 transition hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-blue-300"
              >
                Restablecer
              </button>
              <span>Límite máximo</span>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:flex-row md:items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {filtered.length} productos disponibles
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Ordenar por
              </label>
              <select
                value={order}
                onChange={(event) => setOrder(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/40"
              >
                {ORDER_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>
    </section>
  );
}

export default Catalog;

