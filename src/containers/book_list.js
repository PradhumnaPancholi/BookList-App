import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever we return here, goes to rops in booklist//
  return{
    books: state.books
  };
}

//Everthing that returns from this function will be available as props on book_list container//
function mapDispatchToProps(dispatch) {
  //when selectBook is called, result is passes to all reducer
  return bindActionCreators({ selectBook :  selectBook}, dispatch);
}

//Promotes book_list from a Component to container, it needs to know about mapStateToProps and mapDispatchToProps in order to make them available as props//
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
