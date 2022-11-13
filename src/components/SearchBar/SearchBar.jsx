import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import React, { Component } from "react";

import {SearchBarStyled, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from './SearchBar.styled'

export default class SearchBar extends Component { 
    state = {
     search: "",
     page: 1,
     searchValue: []
    }

///////////////////Функция которая записывает в стейт данные введенные в инпут
    handleInputChange = event => {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        })
      }

////////////////////////////При сабмите передает данные с инпута в АРР
onSubmitSearch = event => {
    event.preventDefault();
if(this.state.search.trim() === ""){
    toast.warn('Введите название фото что вы ищете')
    return 
}
    this.props.onSubmit(this.state.search, this.state.page, this.state.searchValue)
    this.reset()
}

////////////////////Функция обновляет до начального состояния инпут ввода
reset = () => {
    this.setState({
        search: "",
    })
  }

    render() {

    return <SearchBarStyled>
    <SearchForm onSubmit={this.onSubmitSearch}>
      <SearchFormButton type="submit"  >
        <SearchFormButtonLabel />
      </SearchFormButton>
  
      <SearchFormInput
        className="input"
        type="text"
        name="search"
        onChange={this.handleInputChange}
        value={this.state.search}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchBarStyled>}
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}