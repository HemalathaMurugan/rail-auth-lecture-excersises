import React from 'react';
import Home from './components/Home'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditDragon from './components/EditDragon';

// 
// const DragonIndex = () => (
//   <h1>Dragon Index!</h1>
// )

// const DragonShow = () => (
//   <h1>Dragon Show!</h1>
// )

// const DragonRouter = () => (
//   <div>
//     <Route path="/dragons/"  component={DragonIndex} />
//     <Route path="/dragons/:id" component={DragonShow} />
//   </div>
// )


class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/edit-dragon/:id" component={EditDragon} />
            <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }

}


export default App;
