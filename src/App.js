import './App.css';

function App() {
  //given data
  const data = [
    {
     plan : 'FREE',
     price : 0,
     specification: [
       '✔ Single User',
       '✔ 5GB Storage',
       '✔ Unlimited Public Projects',
       '✔ Community Access',
       '✖ Unlimited Private Projects',
       '✖ Dedicated Phone Support',
       '✖ Free Subdomain',
       '✖ Monthly Status Reports'
     ]
    },
    {
      plan : 'PLUS',
      price : 9,
      specification: [
        '✔ 5 Users',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Free Subdomain',
        '✖ Monthly Status Reports'
      ]
     },
     {
      plan : 'PRO',
      price : 49,
      specification: [
        '✔ Unlimited Users',
        '✔ 150GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Unlimited Free Subdomain',
        '✔ Monthly Status Reports'
      ]
     }
  ];
  return (
    <div className="card-list">

   {data.map((item) => {
      return <CardBody plan={item.plan} price={item.price} specification={item.specification}/>
   })}

    </div>
  );
}

export default App;


//card plan and price details

function CardPrice({plan, price}) {
return (
  <div className="card-price">
    <h4>{plan}</h4>
    <h1>${price}<span>/month</span></h1>
  </div>
);
}

//card details 
function CardDetails({specification}) {
  return(
    <div className="card-details">

    {specification.map((element) => {
        return <p>{element}</p>
       })}

    </div>
  );
}

//card button

function Button() {
  return(
    <button><h2>Button</h2></button>
  );
}


function CardBody(props) {
  return(
    <div className="card-body">
    <CardPrice plan={props.plan} price={props.price}/>
    <CardDetails specification={props.specification}/>
    <Button />
    </div>
  );
}