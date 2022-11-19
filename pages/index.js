import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { twoDecimals } from "../utils/format";
import { API_URL, fromImageToUrl } from "../utils/urls";
// import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
// import {faEuro} from '@fortawesome/free-regular-svg-icons'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>THE WHITE TREE</title>
        <meta
          name="description"
          content="locally grown, organic & affordable meals"
        />
      </Head>

      {products.map((product) => (
        <div className={styles.product}>
          <Link href={`/products/${product.id}`}>
            <a>
              <div className={styles.product__Rows}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} &euro;{twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`);

  console.log(product_res);
  const products = await product_res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
}
