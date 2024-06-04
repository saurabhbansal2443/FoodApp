# Class component 
- As functional component are just normal functions, similarly the class components are just JS classes and nothing else 
- Life cycle method 
- in class based componet 
- 1) the constructor is called 
- 2) after constructor the render method is called 
- 3) after constructor the component did mount is called 
- 4) 
- 5) constructor --> render --> componentDidMount---->if state is chnaged (update cycle )--> render --->  

# component did mount
- It is used to make API calls 

# controlled and uncontrolled component 
- A component is considered controlled if it does not maintain its own internal state for the form data but relies on props and state management provided by its parent component or through React state.
- A component is considered uncontrolled if it maintains its own internal state for the form data, typically using a ref to access the form element's current value.


# Redux 
- In redux we use to create a global store that will store all the data of our app 
- In the store for diffrent type of data we uses diffrent type of slices 
- you cannot directly modify the data in store 
- you have to dispatch an action it will call  the function (this function will modify the data )
- Now that function is called reducer 
- For using the data we uses the use selector , this selector will give the data (Subscribing the store )


# Building the RTK 
- Install @reduxjs/toolkit and react-redux 
- Build our store
-- Make a file in util 
--- appStore.js
---- import configure store 
-- import Provide and wrap it around app 
-- 
- connect our store to app 
- Create slice 
- dispatch (action)



 



