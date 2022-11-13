import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {AppStyled} from './App.styled'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {pixabayApi} from "../../services/pixabay.api"
import { toast } from 'react-toastify';

export default class App extends Component {
  state = {
    search: null,
    page: 1,
    searchValue: [],
    status: 'idle',
    error: null
    }



////////////////Получаем данные с инпута и записываем в search
onSubmit = (search, page, searchValue) => {
  this.setState({
    search: search,
    page: page,
    searchValue: searchValue,
  })
}
///////////////////Получаем данные с нажатия на кнопку load more
onClickLoadMore = (page) => {
  this.setState({
    page: page
  })
}

componentDidUpdate(prevProps,prevState) {
  const prevName = prevState.search
  const nextName = this.state.search

  if(prevName !== nextName || prevState.page !== this.state.page) {


      this.setState({status: 'pending' })

      pixabayApi(nextName, this.state.page)
      .then(data => {
          const total = data.totalHits
          const totalPage = total/12

          if(data.hits.length===0){
            return Promise.reject(new Error('По вашему запросу ничего не найдено'))}
  
          if(this.state.page>=totalPage) {

            this.setState(prevState => ({searchValue: [ ...prevState.searchValue, ...data.hits] , status: 'resolved'}))
            return toast.warn('Фото по вашему запросу больше нет')
            
          }



          this.setState(prevState => ({searchValue: [ ...prevState.searchValue, ...data.hits] , status: 'resolved'}))
      })
      .catch(error => this.setState({error: error, status: 'rejected'}))
     }

}




  render() {

  return (
    <AppStyled>
      <SearchBar onSubmit={this.onSubmit}/>
      <ImageGallery 
      onClickLoadMore={this.onClickLoadMore} 
      searchValue={this.state.searchValue}
      status={this.state.status}
      error={this.state.error}
      page={this.state.page}
      />

      <ToastContainer />

    </AppStyled>
  );
}}
