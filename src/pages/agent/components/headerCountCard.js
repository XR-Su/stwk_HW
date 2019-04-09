/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, {Component} from 'react'

export default ({all, physical, virtual}) => {
    return <div className="count-card">
        <div className="item">
          <p className="title">ALL</p>
          <p className="count">{all}</p>
        </div>
        <div className="item">
          <p className="title">PHYSICAL</p>
          <p className="count">{physical}</p>
        </div>
        <div className="item">
          <p className="title">VIRTUAL</p>
          <p className="count">{virtual}</p>
        </div>
      </div>;
}