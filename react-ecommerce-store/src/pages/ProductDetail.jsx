import { useParams } from "react-router-dom";
import { useStore } from "../store/useStore";

function ProductDetail() {
  const { id } = useParams();
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <section style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "400px", borderRadius: "8px" }}
      />
      <div>
        <h2>{product.name}</h2>
        <p>
          <strong>${product.price.toLocaleString("es-CL")}</strong>
        </p>
        <p>⭐ {product.rating}</p>
        <p>Categoría: {product.category}</p>
        <p style={{ marginTop: "1rem" }}>{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            border: "none",
            background: "#111827",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
