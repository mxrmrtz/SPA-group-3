import BrandFilter from './BrandFilter';
import Location from './Location';
import NavBar2Css from './Nav-bottom.module.css';

const NavBar2 = ({ data, selected }) => {
    return (
        <div className={NavBar2Css.navBar2}>
            <Location />
            <BrandFilter
                data={data}
                selected={selected}
            />
        </div>
    )
}

export default NavBar2;