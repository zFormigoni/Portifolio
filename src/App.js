import Header from './render/Header';
import Sobre from './render/Sobre';
import Habilidades from './render/Habilidades';
import Projetos from './render/Projetos';
import Footer from './render/Footer';

function App() {
    return (
        <>
            <Header></Header>
            <Sobre></Sobre>
            <Habilidades />
            <Projetos></Projetos>
            <Footer></Footer>
        </>
    );
}

export default App;
