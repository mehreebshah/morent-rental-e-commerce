// import ProductDetail from "@/app/Components/ProductDetail";
// interface Iparams{
//   slug: { current: string };
// }

// export default async function SlugPage({params}: {params:Promise<Iparams>}) {
//   const {slug} = await params

//   return (
//     <ProductDetail slug={slug.current} />
//   );

// // }
// import ProductDetail from "@/app/Components/ProductDetail";

// interface Params {
//   slug: string;
// }

// export default async function SlugPage({ params }: { params: Promise<Params> }) {
//   const resolvedParams = await params; // Await the promise
//   const { slug } = resolvedParams;

//   return (
//     <div>
//       <ProductDetail slug={slug} />
//     </div>
//   );
// // }
// import { client } from "@/sanity/lib/client";
// import ProductDetail from "@/app/Components/ProductDetail";

// export async function getServerSideProps({ params }: { params: { slug: string } }) {
//   const query = `*[_type == "car" && slug.current == $slug][0]`;
//   const product = await client.fetch(query, { slug: params.slug });

//   if (!product) {
//     return { notFound: true };
//   }

//   return { props: { product } };
// }

// export default function Page({ product }: { product: any }) {
//   return <ProductDetail product={product} />;
// }
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
