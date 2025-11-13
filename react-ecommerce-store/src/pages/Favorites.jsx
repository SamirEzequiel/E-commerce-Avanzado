import ProductGrid from "../components/ProductGrid";
import { useStore } from "../store/useStore";

function Favorites() {
  const favorites = useStore((state) => state.favorites);

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
          Tu lista de deseos
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Favoritos
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Mantén a mano los productos que más te gustan para revisarlos luego.
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
            💡 Aún no tienes productos en tu lista de deseos.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Explora el catálogo y añade tus favoritos con el botón ❤️.
          </p>
        </div>
      ) : (
        <ProductGrid products={favorites} />
      )}
    </section>
  );
}

export default Favorites;

