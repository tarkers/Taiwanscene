import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
const Spot = ({ spot }) => {
    return (
        <Card border="primary" style={{marginBottom:'1em',minWidth:'15rem'}}>
            <Card.Header style={{ fontWeight: 'bold', textAlign: 'center' }}>{spot.Address}</Card.Header>
            <Card.Body style={{ height: "15rem" }}>
                <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{spot.Name}</Card.Title>
                <hr></hr>
                <Card.Text style={{ textOverflow: 'ellipsis', whiteSpace: 'pre-line', height: '75%', overflowY: 'scroll' }}>{spot.DescriptionDetail}</Card.Text>
            </Card.Body>
            <Card.Footer tag="tel">連絡電話: {spot.Phone}</Card.Footer>
        </Card>
    )
}
Spot.defaultProps = {
    spot: {
        Name: "可愛小農場",
        Address: '待更新',
        DescriptionDetail: '待更新',
        Phone: '無',
    }
}
Spot.prototype = {
    spot: {
        Address: PropTypes.string,
        Name: PropTypes.string.isRequired,
        DescriptionDetail: PropTypes.string,
        Phone: PropTypes.string,
    }
}
export default Spot

// spot Address DescriptionDetail id tel