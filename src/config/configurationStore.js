import {applyMiddleware, createStore} from "redux";
import {loadState, saveState} from "../util/localStorage";
import {throttle} from "lodash/function";




const logger = store => next => action => {
    // console.log('logger1')
    // console.log(action)
    // console.log(next)
    // if(action.type === "AA")
    //     return next(action)
    // let result = next({type:"LOGGER1"})
    return next(action)

}

const logger2 = store => next => action => {

    // console.log('logger2')
    // console.log(action)
    // console.log(next)
    // if(action.type === "AA")
    //     return next(action)
    // let result = next({type:"LOGGER2"})
    return next(action)
}


const logger3 = store => next => action => {

    // console.log('logger3')
    console.log(action)
    // console.log(next)
    // if(action.type === "AA")
    //     return next(action)
    // let result = next({type:"LOGGER3"})

    return next(action)
}




const configureStore = () => {
    const persistedState = loadState();
    const store = createStore((state,action) => (state), persistedState, applyMiddleware(logger,logger2,logger3))


    store.subscribe(throttle(() => {
        // saveState({todos:store.getState().todos})
        console.log('save!')
    },1500))

    return store
}

export default configureStore