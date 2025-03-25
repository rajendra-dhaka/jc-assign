import { ProductCard } from "@/components/product-card";
import { Metadata } from "next";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Product Store | Featured Products",
  description: "Browse our collection of high-quality products",
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-center">
        Product Store | Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
