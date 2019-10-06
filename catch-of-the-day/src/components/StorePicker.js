import React from 'react';


class StorePicker extends React.Component {
    constructor(props) {
      super(props);
      // initialize state here
      this.state = {
        name: "erwin",
        instruction: "Please Enter A Store Name"
      }
    }
    render() {
      return (
        <React.Fragment>
            <form className="store-selector"> 
               <h2>{this.state.instruction}</h2>
               <input  type="text" required placeholder="Store Name" />
               <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
      );
    }
  };

export default StorePicker;
