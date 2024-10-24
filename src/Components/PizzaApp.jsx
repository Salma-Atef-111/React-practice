import "../Css/PizzaApp.css"

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
   export default function PizzaApp(){
      return <>
    <div className="myAppBody">
      <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    </div>  
      </>
   }
   function Header(){
    // const style = {color:"red" , fontSize:"48px" , textTransform:"uppercase"}
    const style = {}
    return <>
    <header className="header">
        <h1 style={style} >Fast React pizza Co.</h1>
    </header>
    </>
   }
   function Menu(){
    const pizzas = pizzaData ;
    // const pizzas = [] ;

    const numPizzas = pizzas.length ;

    return <>
    <div className="menu">
        <h2>Our Menu</h2>

        {/* conditional rendining عشان جوا ال jsx مينفعش نكتب js  */}
        {numPizzas > 0 ? (
          <>
            <p>Welcome to our Restaurant</p>
            <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
            </ul>
            </>
        ) : <p>We still work on our menu please come back later </p>}
         
    </div>    
    </>
   }
   function Pizza({pizzaObj}){ //Destructing props


    //  this is condation if you would not run some of the menu that is not available
    // if (pizzaObj.soldOut) return null ; //early return


    return <>

    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ''}`}> 
        {/* ده 2 كلاسز سوا وادناهم condation */}

        <img src={pizzaObj.photoName} alt="pizza"/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price} </span>
        </div>
    </li>
    </>
  }
   function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    const isOpen =hour >= openHour && hour <= closeHour ;

    return <>

    <footer className="footer"> 
      <div className="order">
        {isOpen ? (
          (<p>We're open until {closeHour}:00. come visit us or order online.</p> )
        ): (
          <p>We're happy to welcome you between {openHour}:00. and {closeHour}:00.</p>
        )}
        <button className="orderBtn">Order</button>
      </div>
         {/* {new Date().toLocaleTimeString()}.We're currently open */}
    </footer>
    </>
  
   }
  
