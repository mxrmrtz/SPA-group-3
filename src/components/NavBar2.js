import BrandFilter from './BrandFilter';
import Location from './Location';



const NavBar2 = ({ data, selected }) => {
    return (
        <div className='navBar2'>
            <Location />
            <BrandFilter
                data={data}
                selected={selected}
            />

        </div>
    )
}

export default NavBar2;