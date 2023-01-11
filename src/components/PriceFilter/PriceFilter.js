import PriceFilterCss from "./PriceFilter.module.css"


const priceFilter = ({setMin, setMax}) => {

    return(      
    
    <div className={PriceFilterCss.wrapper}>
    <header> 
      <h2>Price, $</h2>
   
    </header>
    <div className = {PriceFilterCss.priceInput}>
      <div className={PriceFilterCss.field}>
        <input type="number" name="input-min" onChange={setMin}/>
      </div>
      <div className ={PriceFilterCss.field}>
        <input type="number" name="input-max" onChange={setMax}/>
      </div>
    </div>
    <div className ={PriceFilterCss.slider}>
      <div className={PriceFilterCss.progress}></div>
    </div>
  </div> )

  
}



export default priceFilter;
