import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

function Cart() {
  const cart = useStore((state) => state.cart);
  const updateQty = useStore((state) => state.updateQty);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const cartTotal = useStore((state) => state.cartTotal());

  if (cart.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="text-5xl">🛒</div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Tu carrito está vacío
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Explora nuestro catálogo y descubre ofertas increíbles para añadir a tu carrito.
          </p>
        </div>
        <Link
          to="/catalog"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-offset-slate-900"
        >
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr),320px]">
      <div className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Carrito de compras
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Revisa los productos y ajusta las cantidades antes de finalizar la compra.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm font-semibold text-slate-500 transition hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
          >
            Vaciar carrito
          </button>
        </header>

        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to={`/product/${item.id}`} className="flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="flex-1 space-y-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-lg font-semibold text-slate-900 transition hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-300"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    ${item.price.toLocaleString("es-CL")} c/u
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    ID #{item.id}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3 sm:w-40">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    Cantidad
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(event) =>
                        updateQty(item.id, Number(event.target.value))
                      }
                      className="w-20 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/40"
                    />
                  </label>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-rose-500 transition hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              <div className="flex justify-end border-t border-dashed border-slate-200 pt-3 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Subtotal:{" "}
                <span className="ml-2 font-semibold text-slate-900 dark:text-slate-100">
                  ${(item.qty * item.price).toLocaleString("es-CL")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="sticky top-24 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Resumen
        </h2>
        <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center justify-between">
            <span>Productos ({cart.length})</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              ${cartTotal.toLocaleString("es-CL")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Envío</span>
            <span className="font-semibold text-emerald-500">Gratis</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-lg font-semibold text-slate-900 dark:border-slate-700 dark:text-slate-100">
          <span>Total</span>
          <span>${cartTotal.toLocaleString("es-CL")}</span>
        </div>
        <button className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-offset-slate-900">
          Finalizar compra
        </button>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Al continuar aceptas nuestros términos y condiciones de compra.
        </p>
      </aside>
    </section>
  );
}

export default Cart;

