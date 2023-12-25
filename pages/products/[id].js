import "@/styles/Product.module.css";
import Comments from '@/components/template/Product/Comments';
import ProductsDetails from '@/components/template/Product/ProductDetails';
import React from 'react';

const Product = ({products , comments }) => {
    return (
        <>
         <ProductsDetails data={products} />  
         <Comments data={comments} />
        </>
    );
};

export async function getStaticPaths(context) {
    const res = await fetch(`http://localhost:4000/menu`);
    const products = await res.json();
  
    const paths = products.map((product) => ({
      params: { id: String(product.id) },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    const { params } = context;
  
    const productResponse = await fetch(
      `http://localhost:4000/menu/${params.id}`
    );
    const productData = await productResponse.json();
  
    const commentsResponse = await fetch(`http://localhost:4000/comments`);
    const comments = await commentsResponse.json();
  
    const productComments = comments.filter(
      (comment) => comment.productID === +params.id
    );
  
    return {
      props: {
        products: productData,
        comments: productComments,
      },
      revalidate: 60 * 60 * 12, // Second
    };
  }

export default Product;