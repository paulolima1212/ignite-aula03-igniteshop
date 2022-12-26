import Image from 'next/image';
import { GetStaticProps } from 'next';

import { getProducts } from '../Services/http/gets/getProducts';
import { ProductsProps } from '../interfaces/product';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer, Product } from '../Styles/Pages/Home';
import Link from 'next/link';

export default function Home({ products }: ProductsProps) {
  const [keenRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={keenRef} className='keen-slider'>
      {products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className='keen-slider__slide'>
              <Image src={product.imageUrl} width={520} height={480} alt={''} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
    revalidate: 300,
  };
};
