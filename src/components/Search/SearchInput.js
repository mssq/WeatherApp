import React, { Component } from 'react';

import SearchImage from '../../img/search.svg';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }
  
  render() {
    const style = {
      inputStyle: {
        width: "400px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        backgroundImage: `url(${SearchImage})`,
        backgroundColor: "white",
        backgroundPosition: "5px 3px",
        backgroundRepeat: "no-repeat",
        padding: "12px 20px 12px 40px"
      },
      buttonStyle: {
        width: "70px",
        fontSize: "16px",
        color: "white",
        padding: "12px 0px 12px 0px",
        marginLeft: "15px",
        backgroundColor: "#4b81c9",
        boxSizing: "border-box",
        border: "0px",
        borderRadius: "4px"
      }
    };

    return (
      <div className="search">
        <input 
          className="search-input"
          style={style.inputStyle}
          type="text" 
          placeholder="City name"
          onChange={event => this.setState({searchValue: event.target.value})}
          onKeyPress={(e) => {
            if (e.keyCode === 13 || e.key === 'Enter') {
              this.props.clicked(this.state.searchValue);
            }
          }} 
        />
        <button 
          style={style.buttonStyle}
          className="search-button"
          onClick={() => this.props.clicked(this.state.searchValue)}
        >
          Search
        </button>
      </div>
    )
  }
};

export default SearchInput;
