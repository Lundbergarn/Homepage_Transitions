import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines/index';
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'
import HeaderNav from './components/HeaderNav/HeaderNav';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <HeaderNav />
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
