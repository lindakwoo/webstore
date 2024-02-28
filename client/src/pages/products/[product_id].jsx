import { useRouter } from "next/router";

const productPage = () => {
  const router = useRouter();
  const { product_id } = router.query;
  return <div>hello, i'm on page {product_id}</div>;
};

export default productPage;
