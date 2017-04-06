import React from 'react';
import InlineForm from './inlineForm.jsx'

class SearchForm extends InlineForm {
  render() {
    var classes="search-form " + this.props.class;
    return (
      <InlineForm class={ classes } type="search" action="" method="" />
    );
  }
}

export default SearchForm;
