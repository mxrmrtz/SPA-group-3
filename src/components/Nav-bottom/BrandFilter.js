import { useState } from "react";
import BrandFilterCss from "./BrandFilter.module.css";

const BrandFilter = ({ data, selected }) => {
	const [selectedBrand, setSelectedBrand] = useState(null);
	//get all the brands from data
	let brands = data.map((d) => d.brand);
	//remove duplicate brands.
	brands = [...new Set(brands)];

	const handleClick = (brand) => {
		//render navBar brand text (bold or not)
		setSelectedBrand(brand);
		//pass variable brand to handleSelect function on App.js
		selected(brand);
	};

	const handleBrands = () => {
		setSelectedBrand([]);
		selected([]);
	};

	return (
		<div className={BrandFilterCss.brandFilter}>
			<span className={BrandFilterCss.brandName} onClick={handleBrands}>
				All Brands
			</span>
			{brands.map((b, index) => (
				<div
					className={
						b === selectedBrand
							? BrandFilterCss.brandNameBold
							: BrandFilterCss.brandName
					}
					key={index}
					onClick={() => handleClick(b)}
				>
					{b}
				</div>
			))}
		</div>
	);
};

export default BrandFilter;
