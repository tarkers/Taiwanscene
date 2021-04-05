import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Citybtn = ({ city, path,onToggle }) => {
    return (
        <Link to={`${path}/${city.city}`} onClick={()=>onToggle(city.city)}>
            <Button variant={city.variant} className="mr-2 mb-2" size="md" >
                {city.name}
            </Button>
        </Link>
    )
}

export default Citybtn
