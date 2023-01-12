import PriceFilterCss from "./PriceFilter.module.css";

const priceFilter = ({ setMin, setMax }) => {
	return (
		<div className={PriceFilterCss.sideMenuContainer}>
			<div className={PriceFilterCss.sideMenuInnerContainer}>
				<h2 className={PriceFilterCss.header}>Price, $</h2>
				<div className={PriceFilterCss.priceInput}>
					<div className={PriceFilterCss.field}>
						<input
							type="text"
							name="input-min"
							placeholder="Min"
							onChange={setMin}
						/>
					</div>

					<div className={PriceFilterCss.field}>
						<input
							type="text"
							name="input-max"
							placeholder="Max"
							onChange={setMax}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default priceFilter;
