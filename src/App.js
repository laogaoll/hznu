import React from 'react'
// react-router-dom是react的一个插件库，专门用来实现一个SPA应用。
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'component/Loadable'
import { inject, observer } from 'mobx-react'
import NavWrapper from 'component/NavWrapper'
import {isN,msg} from 'util/fn'
import {loadUser} from 'util/token'


@inject('mainStore')
@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.mainStore
  }

  componentDidMount() {
    let user = loadUser()
    if (!isN(user)) {
      this.store.saveUser(user)
    }
  }

  render() {
    return (
      <Router>
        {/* Switch可以提高路由匹配效率,匹配到之后不会继续往下匹配*/}
        <Switch>
          <Route exact path='/login' component={Loadable({ loader: () => import('./app/login') })}   />
          <Route path='/' render={() => (
            <div className='app-root'>
              <NavWrapper>
                 {/* 注册路由 */}
                <Switch>
                  <Route exact path='/' component={Loadable({loader:()=>import('./app/tech')})}/>
                  <Route exact path='/tech' component={Loadable({loader:()=>import('./app/tech')})}/>
                  <Route exact path='/help' component={Loadable({loader:()=>import('./app/help')})}/>
                  <Route exact path='/print' component={Loadable({loader:()=>import('./app/print')})}/>
                </Switch>
              </NavWrapper>
            </div>
          )}/>
        </Switch>
      </Router>
    )
  }
}

export default App
