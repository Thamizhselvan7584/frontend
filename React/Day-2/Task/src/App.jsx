import './App.css'
import image from './assets/images.jpg'
import Sam from './component/Sam'



const App = () => {
  

  return (
    <>
      <div class="card">

        <img src={image} alt="Card Image" />

        <h2>C. Joseph Vijay</h2>

        <div id="details" lass="details">
          <p>
            Joseph Vijay (born 22 June 1974) is an Indian politician and
            former actor.
          </p>
        </div>
        <Sam />
      </div>

   
      
    </>
    
  )
  
}

export default App



