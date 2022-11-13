import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import React, { useState } from "react";

import {SearchBarStyled, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from './SearchBar.styled'

export default function SearchBar({onSubmit}) { 

  let [search, setSearch] = useState("")
  let [page] = useState(1)
  let [searchValue] = useState([])


///////////////////Функция которая записывает в стейт данные введенные в инпут
  const  handleInputChange = event => {
    setSearch(search = event.target.value)
    }
      

////////////////////////////При сабмите передает данные с инпута в АРР
const onSubmitSearch = event => {
    event.preventDefault();
if(search.trim() === ""){
    toast.warn('Введите название фото что вы ищете')
    return 
}
   onSubmit(search, page, searchValue)
   reset()
}

////////////////////Функция обновляет до начального состояния инпут ввода
const reset = () => {
  setSearch('')
  }


    return <SearchBarStyled>
    <SearchForm onSubmit={onSubmitSearch}>
      <SearchFormButton type="submit"  >
        <SearchFormButtonLabel />
      </SearchFormButton>
  
      <SearchFormInput
        className="input"
        type="text"
        name="search"
        onChange={handleInputChange}
        value={search}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchBarStyled>}



SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}