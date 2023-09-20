import './App.css';

const App = () => {
  
  const Person = (props) => {
    return (
      <>
        <h1>Name: {props.name}</h1>
        <h2>Last: {props.lastname}</h2>
        <h2>Age: {props.age}</h2>
      </>
    )
  }

  return (
    
    <div className="App">
      <Person name='Brian' lastname = 'King' Age='42' />
      <Person name='Peter' lastname = 'Parker' Age='16'/>
      <Person name='Scott' lastname = 'Summer' Age='40'/>
      <Person name='Reed'  lastname = 'Richards'Age='45'/>
      <Person name='Bruce' lastname = 'Banner'  Age='43'/>
    </div>
  );
}

export default App;
