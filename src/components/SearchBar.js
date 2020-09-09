import React from "react";

class SearchBar extends React.Component {
  // if we use this way with the onInputChange function, the <input /> element is uncontrolled.
  onInputChange(event) {
    console.log(event.target.value);
  }

  // to make the <input /> controlled,
  // 1. define state
  state = { term: "" };

  render() {
    // if we use onInputChange with () below, then it will be called everytime the component render
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
