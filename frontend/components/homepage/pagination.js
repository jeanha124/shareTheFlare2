import React from 'react';
import ReactDOM from 'react-dom';

class Pagination extends React.Component {
  render () {
    return (
      <div class="page">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
    );
  }
}

export default Pagination;