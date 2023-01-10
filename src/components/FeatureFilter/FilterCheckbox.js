
const FilterCheckbox = ({featureAtrribute, checked, changeFeatureFilter}) => {
	const id = featureAtrribute.replaceAll(" ", "-")
	return (
		<>
			<fieldset onChange={changeFeatureFilter}>
				<label htmlFor={id}>{featureAtrribute}</label>
				<input id={id} value={featureAtrribute} defaultChecked={checked} type="checkbox"></input>
			</fieldset>
		</>
	);
};
export default FilterCheckbox;
