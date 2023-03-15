import './App.css';

function App() {
  //given data
  const data = [
    {
     plan : 'FREE',
     price : 0,

     specification: [
      {
        title:'✔ Single User',
        title1:'✔ 5GB Storage',
        title2:'✔ Unlimited Public Projects',
        title3:'✔ Community Access',
        
      },
      {
        tit:'✖ Unlimited Private Projects',
        tit1:'✖ Dedicated Phone Support',
        tit2:'✖ Free Subdomain',
        tit3: '✖ Monthly Status Reports',
        ratio:0.4,
      
      }
       
       
     ]
    },
    {
      plan : 'PLUS',
      price : 9,
      specification: [

        {
          title:'✔ Single User',
          title1:'✔ 50GB Storage',
          title2:'✔ Unlimited Public Projects',
          title3:'✔ Community Access',
          title4:'✔ Unlimited Private Projects',
          title5:'✔ Dedicated Phone Support',
          title6:'✔ Free Subdomain',
        
        },
      {
        tit:'✖ Monthly Status Reports',
        ratio:0.4,
      }
        
        
      ]
     },
     {
      plan : 'PRO',
      price : 49,
      specification: [

       {


        title:'✔ Unlimited Users',
        title1:'✔ 150GB Storage',
        title2:'✔ Unlimited Public Projects',
        title3:'✔ Community Access',
        title4:'✔ Unlimited Private Projects',
        title5:  '✔ Unlimited Free Subdomain',
        title6:'✔ Monthly Status Reports',
        title7:'✔ Free Subdomain',
      },
    
     
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

    {specification.map((prod,idx) => {
        return (
        <div>

        <p>{prod.title}</p>
        <p>{prod.title1}</p>
        <p>{prod.title2}</p>
        <p>{prod.title3}</p>
        <p>{prod.title4}</p>
        <p>{prod.title5}</p>
        <p>{prod.title6}</p>
        <p>{prod.title7}</p>
        <p style={{opacity:prod.ratio}}>{prod.tit}</p>
        <p style={{opacity:prod.ratio}}>{prod.tit1}</p>
        <p style={{opacity:prod.ratio}}>{prod.tit2}</p>
        <p style={{opacity:prod.ratio}}>{prod.tit3}</p>

        </div>
        )
       })}

    </div>
  );
}

//card button

function Button() {
  return(
  <div>
<button>Button</button>
  </div>
    
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