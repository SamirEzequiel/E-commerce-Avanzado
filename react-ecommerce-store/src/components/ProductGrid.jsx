import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
          No encontramos resultados para tu búsqueda.
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Ajusta tus filtros o explora otras categorías para descubrir más
          productos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;

