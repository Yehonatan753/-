import { useEffect } from "react";
import type { Product, NurseryProduct } from "@/data/storeData";

interface ProductModalProps {
  product: Product | NurseryProduct;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-foreground/60 z-[200] flex items-center justify-center p-6 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card rounded-xl max-w-[700px] w-full max-h-[90vh] overflow-y-auto relative animate-modal-in">
        <button
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-lg hover:bg-foreground/20 transition-all z-10"
          onClick={onClose}
        >
          ✕
        </button>
        {product.img && (
          <div className="w-full min-h-[280px] max-h-[460px] overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.n}
              className="max-w-full max-h-[460px] object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-7">
          {product.b && (
            <p className="text-sm font-semibold text-primary mb-2">{product.b}</p>
          )}
          <h3 className="font-rubik text-2xl font-bold mb-3">{product.n}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{product.d}</p>
          {product.s && product.s.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {product.s.map((s) => (
                <span key={s} className="px-4 py-2 rounded-sm bg-bg-warm font-semibold text-sm">
                  {s}
                </span>
              ))}
            </div>
          )}
          <a
            href={`https://wa.me/97286556681?text=${encodeURIComponent("שלום, אשמח לשאול לגבי " + product.n)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
          >
            שאלו אותנו על המוצר
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
