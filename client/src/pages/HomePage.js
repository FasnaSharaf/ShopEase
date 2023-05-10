import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import './../pages/Homepage.css';


const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
      <main>
  <div class="intro">
    <h1>S H O P E A S E </h1>
    <p>Shop With Ease nearby!</p>
    <button>Learn More</button>
  </div>
  <div class="achievements">
    <div class="work">
      <i class="fas fa-atom"></i>
      <p class="work-heading">Online or Offline payment!</p>
      <p class="work-text">Provision for buying items via or by direct purchase.</p>
    </div>
    <div class="work">
      <i class="fas fa-skiing"></i>
      <p class="work-heading">Debt Systems!</p>
      <p class="work-text">Allowing customers to make purchases on credit and pay later</p>
    </div>
    <div class="work">
      <i class="fas fa-ethernet"></i>
      <p class="work-heading">Shop with Ease!</p>
      <p class="work-text">Shop nearby</p>
    </div>
  </div>
  <div class="about-me">
    <div class="about-me-text">
      <h2>Our moto</h2>
      <p>We are aiming to narrow the rich poor gap by uplifting small scale retailers!</p>
    </div>
    <img src="https://media.istockphoto.com/id/1277101530/vector/asian-bazaar.jpg?s=612x612&w=0&k=20&c=3lhg6IFICXdLE-V2yLS4n8KVoC3ttBj_xmqu-eoPjqs=" alt="me"/>
  </div>
</main>
      
    </Layout>
  );
};
//h1>HomePage</h1>
 //     <pre>{JSON.stringify(auth, null, 4)}</pre>
export default HomePage;
