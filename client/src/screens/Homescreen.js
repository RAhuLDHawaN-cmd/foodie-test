import React, { useState, useEffect,useRef } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroPizza from './../images/heroPizza.png'

// import heroPizza from ""
export default function Homescreen() {
  const dispatch = useDispatch();
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()   

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>

<Container>
      <Row>
        <Col sm={6}>
        <img src={heroPizza} alt="harry potter" style={{ width: '400px', }}/>
        </Col>
        <Col sm={5} style={{paddingTop:'70px'}}>
        <h6 style={{fontSize:'50px'}}><em>Are you hungry?</em></h6>
        <div class="waviy">
          
        </div>
        {/* <span style="--i:1"> */}
          <h1 class="text-3xl md:text-6xl font-bold" style={{fontSize:'35px'}}>Don't wait !</h1> 
          <button class="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary" style={{fontSize:'16px'}} onClick={executeScroll}>Choose Now</button>
       
        </Col>
      </Row>
</Container>
 <Filter/>
      <div className="row justify-content-center" ref={myRef}>
       
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id} >
                <div style={{border:"6px solid silver"}}>
                  <Pizza pizza={pizza}  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
