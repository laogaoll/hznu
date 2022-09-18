import { observable, action, runInAction } from 'mobx'
import BaseActions from 'component/BaseActions'
import axios from 'axios'
import { message } from 'antd'
import {removeUser} from 'util/token'
import jwt from 'util/token.js'
import {isN} from 'util/fn.js'

const HZNU_KEY = 'HZNU_COOKIE'


class Main extends BaseActions {
  //observable用来观测一个数据
  @observable
  currUser = undefined
  //mobx推荐将修改被观测变量的行为放在action中，否则在严格模式useStrict（true）下会报错
  @action
  async post(url, params) {
    return await this.post(url,params)
  }

  @action
  saveUser(u) {
    this.currUser = u
    jwt.saveUser(u)
  }

  @action
  loadUser() {
    return this.currUser
  }

  @action
  logout() {
    this.currUser = undefined
    removeUser()
  }




}

export default new Main()