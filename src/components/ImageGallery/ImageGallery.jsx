import PropTypes from 'prop-types';

import {ImageGalleryRejectedView} from "./ImageGalleryRejectedView/ImageGalleryRejectedView"
import {ImageGalleryResolvedView} from "./ImageGalleryResolvedView/ImageGalleryResolvedView"
import {ImageGalleryPendingView} from "./ImageGalleryPendingView/ImageGalleryPendingView"
import {ButtonLoadMore} from "components/Button/Button"

export default function ImageGallery({onClickLoadMore, searchValue, pending, pageTotal, error, page}) {

  
const loadMore = (event) => {
    event.preventDefault();

    onClickLoadMore(page+1)
}

return ( <>
    {pending && <ImageGalleryPendingView />}
    {error && <ImageGalleryRejectedView message={error.message} />}
       
    <ImageGalleryResolvedView searchValue={searchValue} />
    {pageTotal && <ButtonLoadMore onClick={loadMore} />}
        </>
        )


 
} 


ImageGallery.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    searchValue: PropTypes.array.isRequired,
    pending: PropTypes.bool.isRequired,
    pageTotal: PropTypes.isRequired
}