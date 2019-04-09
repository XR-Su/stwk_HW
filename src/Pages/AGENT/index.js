/**
 * @Name:
 * @Description: 
 * @author RiSusss
 * @date 2019/4/9
 */

import React, { Component } from 'react'
import Header from './components/agentHeader'
import Content from './components/agentContent'

export default class extends Component {
    render() {
        return (
          <div className="agent">
              <Header/>
              <Content/>
          </div>
        )
    }
}