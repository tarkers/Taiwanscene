
import Spot from './Spot'
import { CardDeck } from 'react-bootstrap'

const Spots = ({ spots }) => {
    //group Form
    const chunckData = function (array, chunkCount) {
        let chunks = [], i, j;
        for (i = 0, j = array.length; i < j; i += chunkCount) {
            let tmp = array.slice(i, i + chunkCount).map((spot, index) =>
                <Spot key={index + i} spot={spot}></Spot>)
            chunks.push(tmp)
        }
        return chunks
    }
    const groupForm = chunckData(spots, 3)
    return (
        < >
            {
                groupForm.map(function (group, index) {
                    return <CardDeck key={index}> {group}</CardDeck>
                })
            }
            
        </>
    )
}

export default Spots
