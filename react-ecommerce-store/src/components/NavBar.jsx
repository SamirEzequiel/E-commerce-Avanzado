import { Link, NavLink } from "react-router-dom";
import { useStore } from "../store/useStore";
import SearchBar from "./SearchBar";

const baseLinkClasses =
  "relative inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400";

function Navbar() {
  const cartCount = useStore((state) => state.cartCount());
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Tech
          </span>
          <span>Store</span>
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar />
        </div>

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
            to="/dashboard"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-200"}`
            }
          >
            Mi Cuenta
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

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="hidden rounded-lg border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300 md:flex"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

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
      </div>
    </header>
  );
}

export default Navbar;
