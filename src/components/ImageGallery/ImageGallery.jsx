import PropTypes from 'prop-types';

import {ImageGalleryRejectedView} from "./ImageGalleryRejectedView/ImageGalleryRejectedView"
import {ImageGalleryResolvedView} from "./ImageGalleryResolvedView/ImageGalleryResolvedView"
import {ImageGalleryPendingView} from "./ImageGalleryPendingView/ImageGalleryPendingView"
import {ButtonLoadMore} from "components/Button/Button"

export default function ImageGallery({onClickLoadMore, searchValue, status, error, page}) {

  
const loadMore = (event) => {
    event.preventDefault();

    onClickLoadMore(page+1)
}


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
        <ButtonLoadMore onClick={loadMore} />
        </>
    }

 
} 


ImageGallery.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    searchValue: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired

}