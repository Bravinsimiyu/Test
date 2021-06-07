
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import TodayScreen from './screens/TodayScreen';

function App() {
  return (
    <Router>
    <Header />
    <main>
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/today' component={TodayScreen} />
        </Container>
       
    </main>
    <Footer />    
    </Router>
  );
}

export default App;
