import logo from './logo.svg';
import './App.css';
import MyList from './MyList';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App">
      <MyList items={items} />
    </div>
  );
}



export default App;
