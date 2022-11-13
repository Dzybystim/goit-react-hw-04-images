import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {AppStyled} from './App.styled'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {pixabayApi} from "../../services/pixabay.api"
import { toast } from 'react-toastify';

export default function App()  {

  let [search, setSearch] = useState(null)
  let [page, setPage] = useState(1)
  let [searchValue, setSearchValue] = useState([])
  let [status, setStatus] = useState('idle')
  let [error, setError] = useState(null)


////////////////Получаем данные с инпута и записываем в search
const onSubmit = (searchInitial, pageInitial, searchValueInitial) => {
    setSearch(searchInitial);
    setPage(pageInitial);
    setSearchValue(searchValueInitial);
}
///////////////////Получаем данные с нажатия на кнопку load more
const onClickLoadMore = (page) => {
  setPage(page)
}


useEffect(() => {
  if(search){
  setStatus('pending')

  pixabayApi(search, page)
  .then(data => {
    const total = data.totalHits
    const totalPage = total/12
  
    if(data.hits.length===0){
      return Promise.reject(new Error('По вашему запросу ничего не найдено'))}

    if(page>=totalPage) {
      setSearchValue(prevent => [...prevent, ...data.hits])
      setStatus('resolved')

      return toast.warn('Фото по вашему запросу больше нет') }

      setSearchValue(prevent => [...prevent, ...data.hits])
      setStatus('resolved')
  }
    )
  .catch(error => {
    setError(error);
    setStatus('rejected');
  })
  }
  return
}, [search, page])


  return (
    <AppStyled>
      <SearchBar onSubmit={onSubmit}/>
      <ImageGallery 
      onClickLoadMore={onClickLoadMore} 
      searchValue={searchValue}
      status={status}
      error={error}
      page={page}
      />

      <ToastContainer />

    </AppStyled>
  );
}
