import PriceFilterCss from "./PriceFilter.module.css";

const priceFilter = ({ setMin, setMax }) => {
	return (
		<div className={PriceFilterCss.sideMenuContainer}>
			<header>
				<h2 className={PriceFilterCss.header}>Price, $</h2>
			</header>
			<div className={PriceFilterCss.priceInput}>
				<div className={PriceFilterCss.field}>
					<input type="text" name="input-min" placeholder="Min" onChange={setMin} />
		
				</div>
				
				<div className={PriceFilterCss.field}>
					<input type="text" name="input-max" placeholder="Max" onChange={setMax} />
				</div>
			</div>
		</div>
	);
};

export default priceFilter;
