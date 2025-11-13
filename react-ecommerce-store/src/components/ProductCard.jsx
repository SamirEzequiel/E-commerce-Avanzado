import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore((state) => state.isFavorite(product.id));

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <button
        onClick={() => toggleFavorite(product)}
        aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        className={`absolute right-4 top-4 z-10 rounded-full p-2 text-lg shadow-md transition ${
          isFavorite
            ? "bg-rose-500 text-white shadow-rose-500/30 hover:bg-rose-600"
            : "bg-white text-slate-600 hover:text-rose-500 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-rose-400"
        }`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <Link to={`/product/${product.id}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              {product.category}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
              ⭐ {product.rating}
            </span>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="block text-lg font-semibold text-slate-900 transition hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-300"
          >
            {product.name}
          </Link>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            ${product.price.toLocaleString("es-CL")}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-offset-slate-900"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
