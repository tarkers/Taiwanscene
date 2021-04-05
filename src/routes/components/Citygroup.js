import Citybtn from './Citybtn'
const Citygroup = ({cities,path,onToggle}) => {
    return (
        <div className="horizontal-center mb-3">
            {
                cities.map((city,index)=>{
                   return <Citybtn key={index} city={city} path={path} onToggle={onToggle}></Citybtn>
                })
            }
        </div>
    )
}

export default Citygroup
