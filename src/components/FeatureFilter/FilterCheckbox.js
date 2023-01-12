
const FilterCheckbox = ({featureAtrribute, checked, changeFeatureFilter}) => {
	const id = featureAtrribute.replaceAll(" ", "-")
	return (
		<>
			<fieldset onChange={changeFeatureFilter}>
				<input id={id} value={featureAtrribute} defaultChecked={checked} type="checkbox"></input>
				<label htmlFor={id}>{featureAtrribute}</label>
			</fieldset>
		</>
	);
};
export default FilterCheckbox;
