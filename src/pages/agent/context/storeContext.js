/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React from 'react'
const StoreContext = React.createContext();

export const StoreProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;