import styles from "./ProductItemPage.module.css";
import favorite from "../../assets/icons/heart-icon.svg";
import arrow from "../../assets/icons/Chevron-right.svg";
import DroneModel from "../DroneModel/Drone.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import x from "../../assets/icons/x.svg"

const ProductItemPage = ({ productsData, setProductPage }) => {
	const data = productsData[0];
	const onSetProductPageHandler = () => {
		setProductPage()
	}

	return (
		<main className={styles.card}>
			<img onClick={onSetProductPageHandler} className={styles.close} src={x} alt="close product page"/>
			<section className={styles.section}>
				<div className={styles.wrapper}>
					<div className={styles.drone_imgSide}>
						<img className={styles.img_side} alt="small drone" src={data.img} />
					</div>
					<div className={styles.img_main}>
						<Canvas>
							<Stage>
								<DroneModel/>
							</Stage>
							<OrbitControls/>
						</Canvas>
					</div>

					{/* Information section */}
					<section className={styles.info_section}>
						<div className={styles.info_section_name}>
							<h2>
								{data.brand} {data.title}
							</h2>
							<h2>
								{data.units}
								{data.price}
							</h2>
						</div>
						<div>
							<h2 className={styles.features_header}>
								<b>Features</b>
							</h2>
							{data.features.map((feature, key) => {
								return <p className={styles.features} key={Math.random()}>{feature}</p>;
							})}
						</div>
						<div className={styles.info_section__buttons}>
							<button className={styles.cart}>Add to Cart</button>
							<div className={styles.flex_displayer}>
								<img alt="add to wishlist" src={favorite} />
								<button>Add to Wishlist</button>
							</div>
						</div>
						<div>
							<div className={styles.flex_displayer}>
								<img alt="open specs" src={arrow} />
								Specs
							</div>
							<div className={styles.flex_displayer}>
								<img alt="open videos" src={arrow} />
								Videos
							</div>
							<div className={styles.flex_displayer}>
								<img alt="open faq" src={arrow} />
								FAQ
							</div>
						</div>
					</section>
					{/* Information section */}
				</div>
			</section>
		</main>
	);
};

export default ProductItemPage;
