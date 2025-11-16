import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore((state) => state.isFavorite);
  const addRecentView = useStore((state) => state.addRecentView);
  const recentViews = useStore((state) => state.recentViews);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      addRecentView(product);
    }
  }, [product, addRecentView]);

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Producto no encontrado
          </h1>
          <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al catálogo
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                {product.category}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
                ⭐ {product.rating}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {product.name}
            </h1>
            <p className="mt-2 text-4xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-300">{product.description}</p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Agregar al carrito
              </button>
              <button
                onClick={() => toggleFavorite(product)}
                className={`rounded-lg border-2 px-4 py-3 transition ${
                  isFavorite(product.id)
                    ? "border-red-500 bg-red-50 text-red-600 dark:border-red-400 dark:bg-red-500/10 dark:text-red-400"
                    : "border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-red-400"
                }`}
                aria-label="Agregar a favoritos"
              >
                <svg
                  className="h-6 w-6"
                  fill={isFavorite(product.id) ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Reseñas ({product.reviews.length})
          </h2>
          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                          {review.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(review.rating)
                              ? "text-amber-400"
                              : "text-slate-300 dark:text-slate-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Productos relacionados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetail;
