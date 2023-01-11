import { useState } from "react";

const BrandFilter = ({ data, selected }) => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    // console.log('from brand filter', data);
    //get all the brands from data
    let brands = data.map(d => d.brand);
    //remove duplicate brands.
    brands = [...new Set(brands)];
    // console.log(brands);
    const handleClick = (brand) => {
        // console.log('handle Click', brand);
        //render navBar brand text (bold or not)
        setSelectedBrand(brand);
        //pass variable brand to handleSelect function on App.js
        selected(brand);
    }

    return (
        <div className="brandFilter">
            <span className="brandTitle">Brands</span>
            {brands.map((b, index) =>
                <div
                    className={b === selectedBrand ? 'brandName bold' : 'brandName'}
                    key={index}
                    onClick={
                        //(e) => handleClick(e.target.value)
                        () => handleClick(b)
                        // function () {
                        //     handleClick(b);
                        // }
                    } >{b}</div>)}
        </div>
    )
}

export default BrandFilter;