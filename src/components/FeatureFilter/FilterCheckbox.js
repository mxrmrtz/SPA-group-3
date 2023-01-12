import FilterCheckboxCSS from "./FilterCheckbox.module.css";

const FilterCheckbox = ({ featureAtrribute, checked, changeFeatureFilter }) => {
	const id = featureAtrribute.replaceAll(" ", "-");
	return (
		<>
			<fieldset
				onChange={changeFeatureFilter}
				className={FilterCheckboxCSS.checkboxContainer}
			>
				<input
					id={id}
					value={featureAtrribute}
					defaultChecked={checked}
					type="checkbox"
				></input>
				<label htmlFor={id} className={FilterCheckboxCSS.checkboxLabel}>
					{featureAtrribute}
				</label>
			</fieldset>
		</>
	);
};
export default FilterCheckbox;
