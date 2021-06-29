import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
	const product =[
		{name:'Photoshop',price:'$68'},
		{name:'Illustrator',price:'$87'},
		{name:'Premier Pro',price:'$64'},
		{name:'Pdf Reader',price:'$57'},
		{name:'Canva',price:'$47'},
		{name:'Udemy',price:'$68'}
	];
	const friends = ['Arif','Josim','Pranto','Tarek','Rakib']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	  
	  <Counter></Counter>
	  <ul>{
		  friends.map(
		  fr => <li>
			  {fr}</li>
		  )
	  }
	  
	  </ul>
  
	  <My name={product[0]}></My>
	  <My name={product[1]}></My>
	  <My name={product[2]}></My>
	  <My name={product[3]}></My>
	  <My name={product[4]}></My>
	  <My name={product[5]}></My>
      </header>
    </div>
  );
}
function My(props){
	let boxStyle={
		width:"200px",
		height:"200px",
		backgroundColor:"white",
		color:"black",
		margin:"20px",
		border:"2px solid yellow",
		float:"left"
	}
	const {name,price} = props.name;
	return 	(<div style={boxStyle}>
		<h4>{name || 'name'}</h4>
		<h1>{price || 'price'}</h1>
		<button>Buy now</button>	
		</div>
	);
		
}

function Counter(){
	const [count, setCount] = useState(0);
	const clickHandalar = () => {
	let newClick = count + 1;
	setCount(newClick);
	}

return(
	<div>
	<h1>Count :{count}</h1>
	
	 <button onClick={clickHandalar}>Increse</button>
	 <button onClick={() => setCount(count -1)}>Dicrease</button>
	
	</div>
)
}

export default App;


