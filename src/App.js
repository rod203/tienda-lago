import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="bg-grey-800 h-screen">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;