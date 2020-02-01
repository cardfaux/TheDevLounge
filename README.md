# TheDevLounge -- Node and Express Server With JavaScript and React Client!

# npm run server starts up the development server with nodemon

# npm run dev Starts Both Backend Server and Frontend Server With Concurrently Package in Root Package.Json

**In Register.jsx I brought In connect from redux also brought In The setAlert Action, At The bottom export connect set mapStateToProps to null**
**as the second argument set { setAlert } as an Object In Order To Use it. Then It Is Available In The Props of That Component. Destructured It**
**From The Props and called It When The Passwords Don't Match, sent The Message and The Alert-Type. Then setAlert in The Actions folder and the alert.jsx file. We Export the setAlert Function taking the Message and Alert-Type as arguments, generate an ID with UUID, dispatched SET_ALERT with the message, alertType, and the ID as the payload. And In The alertReducer we added the payload to the Array of the SET_ALERT. Then The Alert Componnet We Created is getting that state. In mapStateToProps we set alerts to state.alert. Then map through the alerts and ouput the message and the styling based on the alertType.**

**mapStateToProps pairs with the connect function from react-redux. connect(mapStateToProps, {actions})(component)**
**in Register.jsx We bring in the setAlert Action and export the setAlert action in order to use it and It is Available in the props of the component. When We Call It Pass in the message and the alert type as arguments. From The alert.jsx we dispatch Type: SET_ALERT with the payload of message, alertType, and the id. The message and alertType is passed in from the Register Component To The alert.jsx. In The alert Reducer we have the type and the payload from the action. and set the payload from action.payload.**

## Redux and React LifeCycles

_Reducers are a fundemental Part of Redux These reducers Represent Our State.Reducers Are slices of State and the RootReducer is A Combination of all these small reducers, To Make state be contained to One Place, The Root Reducer. The Root Reducer Is also Refered To as the Redux Store which again is a collection of all the smaller reducers. The State from The RootReducer or The Store is Passed To The Component As Props. We Update the state of one of the Reducers with Actions.An action is an Object with a type property of a String Value and an optional Payload Property of any value. Whatever We want to update the value Of the Reducer we pass that value from The Payload of The Action object.Our Components will Fire these Actions with a Name on Them.The Reducers check based on the type property of the Action type. And That updated reducer gets passed to the Component as Props. Every Reducer is Just a function.The function Takes a state and an action as arguments.State is the previous state that it was in before the action is going to update it. We use a Switch Statement to check the action.type If te case matches the action.type then we are going to return a new object where we sprea in the ...currentState and set the property to be updated to the action.payload. We retrurn a new object because we want the component to reRender.If the action.type dosen't match we fall to the default case where we return currentState and nothing reRenders. Every Reducer is just a function that takes the currentState and an action and based on the action it knows if it needs to reRender. and if it matches the action.type it returns a new Object from the action.payload property._

## Redux Flow

_Action->Middleware->RootReducer->Store->DOMChanges_

_From the React-Redux library we get a Provider Component That Wraps The Whole App Component either in the index.js file or the App.js file But it has To wrap the whole Application. Root-Reducer is the base reducer that represents all the state Of Our Application.Actions have the type and Payload properties.Each Reducer gets and INITIAL_STATE object like const INITIAL = {currentUser: null}_

**Inside of the Reducer write a SWITCH statement based on the action.type value with a case to match the action.type.**
**Every single REDUCER gets Every single ACTION that gets fired**

_If the case inside of userReducer is SET_CURRENT_USER return a new object {...state, currentUser: action.payload}_
_Bring in the userReducer into the RootReducer with combineReducers from the Redux library._
_in store.js bring in the createStore function from the Redux Library. Import RootReducer into the Store.js_
_Use createStore with The RootReducer To Create The Store. And Pass this Store To The Provider._
_We have to create the Action That will trigger The correct Case inside of the userReducer in the Switch Statement or any other Reducer for that Matter._
_SET_CURRENT_USER is the action.type we are expecting. So it sets the currentUser value in the userReducer with the payload of the action object._
_userActions are just functions that return Objects._
_export const setCurrentUser = (user) => ({type: 'SET_CURRENT_USER'}) which is THE exact STRING the userReducer is Expecting_
_and set the PAYLOAD of the setCurrentUser function to the user that gets passed into the function_
_The ACTIONS will UPDATE the REDUCERS_
_With the USER REDUCER and the USER ACTIONS we will bring the USERREDUCER currentUser value into where we need it the HEADER component._
_We want the HEADER component to pull the currentUser value from the REDUCER and not the APP component._
_To do that import CONNECT from react-redux CONNECT is a HIGHER ORDER COMPONENT that lets our component have access to things related to REDUX._
_The State is now our ROOT REDUCER we use the CONNECT component to pass the State from The ROOT REDUCER our ROOT REDUCER IS and OBJECT_
_This ROOT REDUCER OBJECT has a property called user: that has a value of our USERREDUCER_
_The USERREDUCER has an INITIAL_STATE of currentUser set to null_
_mapStateToProps is a function that has to be written inside of any component that needs access to the state of the ROOTREDUCER_
_mapStateToProps is a function that returns an OBJECT where the name of the property will be the property we want to pass in_
_The state is the ROOTREDUCER pass in a currentUser property with the value of state.user.currentUser currentUser is a property set in the USERREDUCER_
_Then when we pass mapStateToProps as the first argument to the CONNECT component and currentUser is available as props_
_Now our HEADER component recieves the currentUser value from the REDUCER._
_In the App Component import the Connect Component, Our App dosen't need currentUser anymore._
_We can pass in NULL as the FIRST argument because we don't want to mapStateToProps from our REDUCER here in the App Component_
_The SECOND argument for the CONNECT component is mapDispatchToProps that gets a dispatch property that also returns an OBJECT._
_The Object will have the Prop Name whatever we prop we want to pass in that DISPATCHES the new ACTION we are trying to PASS_
_which here is SET_CURRENT_USER_
_We need the setCurrentUser from the redux/user/userActions in the App component_
_the setCurrentUser is set to user => dispatch(setCurrentUser(user))_

## Profile Data We get from the server That Data will be put into The Redux Store Fire off an action to fetch The Data that gets put in a Store

#### From any component we can call An Action That Will Do Something. The Reducer Takes In An Action We can Dispatch an Action To the Reducer.

#### The reducer will update any componnets that use that piece of state.

# ALERT REDUCERS

**In the Store.jsx file import createStore and applyMiddleware from REDUX**
**import composeWithDevTools from redux-devtools-extension**
**import THUNK from redux-thunk**
**import the ROOTREDUCER from reducers directory**
**set initialState to an empty object**
**set store to createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))**
**Consume the store With the Provider At The App Level**
**combineReducers from redux combines all the reducers into the ROOTREDUCER**

_in alert.jsx reducer that is brought into the ROOTREDUCER initial state is an empty array_
_export the function as default_
_will take in the state = initialState and an action evaluate the action type with a SWITCH statement_

**We have and action called setAlert in the actions folder in the alert.js file. That dispatches the SET_ALERT type To the REDUCER**
**In the Register.jsx File import the CONNECT component from react-redux exported with the default export at the bottom of the file. as a HOC**
**Import the setAlert action from the ../../actions/alert**
