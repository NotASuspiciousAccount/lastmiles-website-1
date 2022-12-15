import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionCreator from './AuctionCreator.js';
import AuctionBrowser from './AuctionBrowser.js';

/*
  The Home Component - Serves as the basis for all other components and to which they all aspire.
  Different "pages" (components) can be flipped through here with currentComponent.
*/
const Home = () => {
  let [currentComponent, setCurrentComponent] = React.useState("AuctionBrowser"); //hook's currentComponent State
  
  /*
    Returns the actual component to be displayed, using the currentComponent state.
  */
  const getCurrentComponent = () => {
    let component;
    switch (currentComponent){
        case 'AuctionCreator' :
          component = <AuctionCreator setParentComponent = {changeCurrentComponent}/>;
          break;
        case 'AuctionBrowser' :
          component = <AuctionBrowser setParentComponent = {changeCurrentComponent}/>;
          break;
    }
    return component;
  }
  
  /*
    Changes the currentComponent state.
    parameter must be of the following options:
    'AuctionCreator', 'AuctionBrowser'
    @param component
  */
  const changeCurrentComponent = (component) => {
    setCurrentComponent(component);
  }
    return (
      
        <div className="App">
        {getCurrentComponent()}
      </div>
    );
}
 
export default Home;
