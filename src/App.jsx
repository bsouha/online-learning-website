import styles from "./style";
import React from 'react'
import {Navbar,Hero,SignUp} from "./components";
const App= () => {
  return (
     <div>
      <div className="bg-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
    
        <div className={`bg-white ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        
        <button class="px-6 py-2 text-white rounded bg-gradient-to-r from-purple-600 to-pink-400">Sign Up</button>
        
          </div>
          </div>
      </div>
     
        <div>
       <SignUp />
        
          </div>
       
    
     
      </div>
  )
}

export default App;
      

  