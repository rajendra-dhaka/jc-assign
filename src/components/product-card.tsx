import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Badge */}
      <div className="absolute right-2 top-2 z-10 bg-gray-100 rounded-xl">
        <p className="capitalize text-xs font-semibold py-1 px-2">
          {product.category}
        </p>
      </div>
      {/* Product meta Data and Image */}
      <div className="relative w-full pb-[100%]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 text-center">
          {product.title}
        </h3>
      </div>
      <div className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="mt-3 font-bold text-lg">${product.price.toFixed(2)}</p>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-50 text-sm font-medium">
          View More
        </button>
      </div>
    </div>
  );
}
