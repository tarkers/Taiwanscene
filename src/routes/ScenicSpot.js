import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom'
import Spots from './components/Spots'
import disableScroll from 'disable-scroll'
import Moredata from './components/Moredata'
import Citygroup from './components/Citygroup'
const ScenicSpot = () => {
    const path = useRouteMatch().path
    const [spots, setSpots] = useState([])
    const [bottom, setBottom] = useState(false)
    const [cities, setCities] = useState([])
    const [nowcity, setNowCity] = useState("")
    const [skip, setSkip] = useState(0)

    //fetch first data
    useEffect(() => {
        //refresh route
        if (window.performance) {
            const entries = performance.getEntriesByType("navigation");
            if (entries.map(nav => nav.type) === "reload") {
                window.location.href = 'http://localhost:3000/scenicSpot';
            }
        }
        getCities()
    }, []);

    useEffect(() => {
        //fetch original task
        const addScenics = async () => {
            setSkip(0)
            setBottom(false)
            await fetchScenic()
        }
        addScenics()
    }, [nowcity])

    //set Citybtns
    const getCities = async () => {
        const res = await fetch('http://localhost:3000/json/city.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        const data = await res.json()
        setCities([...data])
    }
    const fetchScenic = async (original = true) => {
        const fetchLink = original ? `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${nowcity}?$top=30&$format=JSON`
            : `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${nowcity}?$top=30&$skip=${skip}&$format=JSON`
        const res = await fetch(fetchLink, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
       
        setSkip(skip + 30)
        var data = await res.json()
        if (data.length < 30) {
            setBottom(true)
        }
        if (original) {
            setSpots([...data])
        } else {
            setSpots([...spots, ...data])
            return data
        }

    }
    //toggleCity
    const cityToggle = async (ename) => {
        setCities(
            cities.map((city) =>
                city.city === ename ? { ...city, variant: "primary" } : { ...city, variant: "secondary" }
            )
        )
        setNowCity(ename)
    }

    //loadnewSpot
    const loadNewSpots = async () => {
        disableScroll.on()
        await fetchScenic(false)
        disableScroll.off()
    }

    return (
        <Router>
            <div>
                <Citygroup cities={cities} path={path} onToggle={cityToggle}></Citygroup>
                <Container fluid="md">
                    <Route path={path + "/" + nowcity} exact render={
                        (props) => (
                            <div>
                                <Spots spots={spots}></Spots>
                            </div>
                        )
                    } />
                    {!bottom ? <Moredata onAdd={loadNewSpots} /> : <label className="horizontal-center">已達底部</label>}
                </Container >
            </div>
        </Router>
    )
}

export default ScenicSpot
