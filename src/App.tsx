import { useState } from "react";
import Button from "./components/Botton";
import Input from "./components/Input";
import OrderCards from "./components/OrderCards"
import CustomerCard from "./components/CustomerCards";
function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeCardCC, setActiveCardCC] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };
  const handleCardClickCC =(index:number)=>{
    setActiveCardCC(index)
  }

  const cards = [
    {
      icon: <i className="fa-solid fa-cart-shopping text-2xl text-black"></i>,
      title: "Order placed",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-cogs text-2xl text-black"></i>,
      title: "Processing",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-industry text-2xl text-black"></i>,
      title: "Manufacturing",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
    {
      icon: <i className="fa-solid fa-truck text-2xl text-black"></i>,
      title: "Dispatch",
      description: "Lorem ipsum dolor sit amet",
      number: 8,
    },
    {
      icon: <i className="fa-solid fa-box text-2xl text-black"></i>,
      title: "Delivered",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
  ];
  const customerCardsData = [ 
    {
      icon: <i className="fa-solid fa-user-check text-xl text-black"></i>,
      title: "All clients",
      description: "Lorem ipsum dolor sit amet",
      number: 120,
    },
    {
      icon: <i className="fa-solid fa-user-check text-xl text-black"></i>,
      title: "Active",
      description: "Lorem ipsum dolor sit amet",
      number: 75,
    },
    {
      icon: <i className="fa-solid fa-user-times text-xl text-black"></i>,
      title: "Inactive",
      description: "Lorem ipsum dolor sit amet",
      number: 45,
    },
  ];
  return (
    <>
    {/* buttons */}
      <div
        className="flex items-center gap-4 font-semibold
    "
      >
        <Button variant="primary" size="sm">
          Add items
        </Button>
        <Button variant="secondary" size="md">
          Add items
        </Button>
        <Button variant="tertiary" size="lg">
          Add items
        </Button>
        <Button variant="fourthiary" size="xl">
          Add items
        </Button>
        </div>
        <br />
        {/* input */}
        <div className="ms-3">
        <Input variant="fourthiary"  style={{ backgroundColor: "#F9F7F0" }} placeholder="Search staffs"/>
        </div>
<br />
 
        {/* cards */}
<div className="flex space-x-6 justify-center">
      {cards.map((card, index) => (
        <OrderCards
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          number={card.number}
          active={activeCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>

    <br /><br />
    <div className="flex space-x-4 justify-center">
      {customerCardsData.map((card, index) => (
        <CustomerCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          number={card.number}
          active={activeCardCC === index}
          onClick={() => handleCardClickCC(index)}
        />
      ))}
    </div>
      
    </>
  );
}

export default App;
