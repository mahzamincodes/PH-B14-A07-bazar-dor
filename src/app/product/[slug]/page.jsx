
import ProductDetails from "./ProductDetails";

export const instant = false; 

const ProductPage = async ({ params }) => {
    const { slug } = await params;

    return <ProductDetails slug={slug} />;
};

export default ProductPage;