import { useState } from 'react'

import styles from "./style.js"
import './App.css'
import  {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./Components"

function App() {
  return (
    <div className=' bg-primary overflow-hidden w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={ `${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
    
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
