/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React from 'react'
import {StoreConsumer} from '../context/storeContext'

export default Component => () => (<StoreConsumer>
    {data => <Component data={data}/>}
</StoreConsumer>)