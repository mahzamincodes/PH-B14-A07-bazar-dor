import CategoryProducts from "./CategoryProducts";

export const instant = false;

const CategoryPage = async ({ params }) => {
    const { slug } = await params;

    return <CategoryProducts slug={slug} />;
};

export default CategoryPage;