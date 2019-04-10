/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, {Component} from 'react'

export default ({onClick=()=>{}, children='', type='', className=''}) => {
    return (
        <span className={`cruise-button ${type} ${className}`} onClick={onClick}>{children}</span>
    )
}