# TheDevLounge -- Node and Express Server With JavaScript and React Client!

# npm run server starts up the development server with nodemon

# npm run dev Starts Both Backend Server and Frontend Server With Concurrently Package in Root Package.Json

**In Register.jsx I brought In connect from redux also brought In The setAlert Action, At The bottom export connect set mapStateToProps to null**
**as the second argument set { setAlert } as an Object In Order To Use it. Then It Is Available In The Props of That Component. Destructured It**
**From The Props and called It When The Passwords Don't Match, sent The Message and The Alert-Type. Then setAlert in The Actions folder and the alert.jsx file. We Export the setAlert Function taking the Message and Alert-Type as arguments, generate an ID with UUID, dispatched SET_ALERT with the message, alertType, and the ID as the payload. And In The alertReducer we added the payload to the Array of the SET_ALERT. Then The Alert Componnet We Created is getting that state. In mapStateToProps we set alerts to state.alert. Then map through the alerts and ouput the message and the styling based on the alertType.**

**mapStateToProps pairs with the connect function from react-redux. connect(mapStateToProps, {actions})(component)**
**in Register.jsx We bring in the setAlert Action and export the setAlert action in order to use it and It is Available in the props of the component. When We Call It Pass in the message and the alert type as arguments. From The alert.jsx we dispatch Type: SET_ALERT with the payload of message, alertType, and the id. The message and alertType is passed in from the Register Component To The alert.jsx. In The alert Reducer we have the type and the payload from the action. and set the payload from action.payload.**
