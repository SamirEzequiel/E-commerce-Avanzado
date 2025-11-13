import { Link, NavLink } from "react-router-dom";
import { useStore } from "../store/useStore";

const baseLinkClasses =
  "relative inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400";

function Navbar() {
  const cartCount = useStore((state) => state.cartCount());

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Tech
          </span>
          <span>Store</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-200"}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-200"}`
            }
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-200"}`
            }
          >
            Favoritos
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-200"}`
            }
          >
            <span className="flex items-center gap-2">
              🛒
              <span>Carrito</span>
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            </span>
          </NavLink>
        </nav>

        <Link
          to="/cart"
          className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300 md:hidden"
        >
          🛒
          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
