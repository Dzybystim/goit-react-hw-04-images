import React, { Component } from "react";
import PropTypes from 'prop-types';

import {ImageGalleryRejectedView} from "./ImageGalleryRejectedView/ImageGalleryRejectedView"
import {ImageGalleryResolvedView} from "./ImageGalleryResolvedView/ImageGalleryResolvedView"
import {ImageGalleryPendingView} from "./ImageGalleryPendingView/ImageGalleryPendingView"
import {ButtonLoadMore} from "components/Button/Button"

export default class ImageGallery extends Component {

  
loadMore = (event) => {
    event.preventDefault();


    this.props.onClickLoadMore(this.props.page+1)
}



    render() {
    const {searchValue, error, status} = this.props

    if(status==='idle'){
     return
    }

    if(status==='pending'){
        return <ImageGalleryPendingView />
    }

    if(status==='rejected'){
        return <ImageGalleryRejectedView 
        message={error.message} />
    }

    if(status==='resolved'){
        return <>
       <ImageGalleryResolvedView 
        searchValue={searchValue} />
        <ButtonLoadMore onClick={this.loadMore} />
        </>
    }

 }
} 


ImageGallery.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    searchValue: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired

}