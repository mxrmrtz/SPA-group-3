import { useState } from "react";

const BrandFilter = ({ data, selected }) => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    // console.log('from brand filter', data);
    let brands = data.map(d => d.brand);
    brands = [...new Set(brands)];
    // console.log(brands);
    const handleClick = (brand) => {
        // console.log('handle Click', brand);
        setSelectedBrand(brand);
        selected(brand);
    }

    return (
        <div className="brandFilter">
            <span className="brandTitle">Brands</span>
            {brands.map((b, index) =>
                <div
                    className={b === selectedBrand ? 'brandName bold' : 'brandName'}
                    key={index}
                    onClick={() => handleClick(b)} >{b}</div>)}
        </div>
    )
}

export default BrandFilter;