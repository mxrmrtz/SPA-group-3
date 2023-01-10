import FilterCheckbox from "./FilterCheckbox";
import featureList from "../../featureList.json";

const FeatureFilter = ({changeFeatureFilter, features}) => {
	return (
		<>
			{featureList.drones.map(({ featureName, featuresAttributes }) => {
				return (
					<div key={Math.random()}>
						<h2>{featureName}</h2>
						{featuresAttributes.map((featureAtrribute) => (
							<FilterCheckbox changeFeatureFilter={changeFeatureFilter}
								checked={features.includes(featureAtrribute)}
								key={Math.random()}
								featureAtrribute={featureAtrribute}
							/>
						))}
					</div>
				);
			})}
		</>
	);
};

export default FeatureFilter;
