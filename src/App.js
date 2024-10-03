import { useState } from 'react';
import './App.css';
import PricingCard from './components/PricingCard'

function App() {

  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="App">
      <div className='container'>

        <header>
          <h1 className='header-topic'>Our Pricing Plan</h1>
          <div className='header-row'>
            <p>Annually</p>
            <label className='price-switch'>  {/* it important to have label not div*/}
              <input 
                className='price-checkbox'
                type='checkbox'
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
              />
              <div className='switch-slider'></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>

        <div className='pricing-cards'>
          <PricingCard
            title="Essential"
            price={selectMonthly ? "20.99" : "188.9"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "34.99" : "349.9"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "79.99" : "499.9"}
            storage="90 GB Storage"
            users="20"
          />
        </div>



      </div>
    </div>
  );
}

export default App;
