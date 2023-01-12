import FeatureFilterCSS from "./FeatureFilter.module.css";
import FilterCheckbox from "./FilterCheckbox";
import featureList from "../../featureList.json";

const FeatureFilter = ({ changeFeatureFilter, features }) => {
	return (
		<div className={FeatureFilterCSS.sideMenuContainer}>
			<>
				{featureList.drones.map(({ featureName, featuresAttributes }) => {
					return (
						<div key={Math.random()}>
							<h2 className={FeatureFilterCSS.featureFilter}>{featureName}</h2>
							{featuresAttributes.map((featureAtrribute) => (
								<FilterCheckbox
									changeFeatureFilter={changeFeatureFilter}
									checked={features.includes(featureAtrribute)}
									key={Math.random()}
									featureAtrribute={featureAtrribute}
								/>
							))}
						</div>
					);
				})}
			</>
		</div>
	);
};

export default FeatureFilter;
