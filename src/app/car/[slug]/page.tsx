import ProductDetail from "@/app/Components/ProductDetail";
import { client } from "@/sanity/lib/client";


type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
 
  const { slug } = await params;


  // Fetch product details based on the slug
  const query = `*[_type == "car" && slug.current == $slug][0]{
    name,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    slug,
    image {
      asset -> {
        url
      }
    }
  }`;
  const product = await client.fetch(query, { slug });

  return <ProductDetail product={product} />;
  
}
