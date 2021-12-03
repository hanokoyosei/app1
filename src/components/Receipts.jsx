import React from 'react';

const Receipts = () => {
    const [meal, setMeal] = React.useState('');
    console.log(meal)
    
    const handleChange = (event) => {
        setMeal(event.target.value)
      } 

    return (
        <div>
            <p>please select your meal:</p>
            <input
             type="radio"
             name="meals" 
             value="pasta" 
             onChange={handleChange}
             />Pasta
         

            <input
             type="radio" 
             name="meals" 
             value="pepperoni" 
             onChange={handleChange}
             /> Pepperoni
          

            <input 
             type="radio"  
             name="meals" 
             value="miso"
             onChange={handleChange} 
             /> Miso soup
            
        </div>
    );
};

export default Receipts;