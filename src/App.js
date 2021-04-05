
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Jumbotron, Container } from 'react-bootstrap'
import ScenicSpot from './routes/ScenicSpot'
function App() {
  return (
    <Router>
      <Jumbotron className="mb-1">
        <Container>
          <h1 className="horizontal-center">台灣景點</h1>
        </Container>
      </Jumbotron>
      <div className="App" style={{ padding: '5px' }}>
        <Switch>
          <Route path='/' exact component={() => {
            window.location.href = 'http://localhost:3000/scenicSpot';
            return null;
          }} />
          <Route path='/scenicSpot' component={ScenicSpot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
