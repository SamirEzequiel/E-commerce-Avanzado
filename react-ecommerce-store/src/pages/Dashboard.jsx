import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import ProductCard from "../components/ProductCard";

function Dashboard() {
  const recentViews = useStore((state) => state.recentViews);
  const favorites = useStore((state) => state.favorites);
  const cart = useStore((state) => state.cart);
  const cartTotal = useStore((state) => state.cartTotal());

  // Simular últimas compras
  const fakeOrders = [
    {
      id: "ORD-001",
      date: "15 Nov 2024",
      items: 2,
      total: 549990,
      status: "Entregado",
    },
    {
      id: "ORD-002",
      date: "10 Nov 2024",
      items: 1,
      total: 359990,
      status: "En tránsito",
    },
    {
      id: "ORD-003",
      date: "5 Nov 2024",
      items: 3,
      total: 899990,
      status: "Entregado",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Mi Cuenta
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Gestiona tus pedidos, favoritos y actividad reciente
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Perfil
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Nombre</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Usuario Demo
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                usuario@techstore.cl
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Teléfono</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                +56 9 1234 5678
              </p>
            </div>
            <button className="w-full rounded-lg border border-blue-600 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-blue-500/10">
              Editar perfil
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Últimas compras
            </h2>
            {fakeOrders.length === 0 ? (
              <p className="text-slate-500 dark:text-slate-400">
                No tienes compras realizadas
              </p>
            ) : (
              <div className="space-y-4">
                {fakeOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                  >
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        {order.id}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {order.date} · {order.items} {order.items === 1 ? "producto" : "productos"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        ${order.total.toLocaleString("es-CL")}
                      </p>
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === "Entregado"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {recentViews.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Vistos recientemente
            </h2>
            <Link
              to="/catalog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              Ver todo
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentViews.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {favorites.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Mis favoritos ({favorites.length})
            </h2>
            <Link
              to="/favorites"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              Ver todo
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Carrito actual
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cart.length} {cart.length === 1 ? "producto" : "productos"} · Total: $
                {cartTotal.toLocaleString("es-CL")}
              </p>
            </div>
            <Link
              to="/cart"
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Ver carrito
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;

