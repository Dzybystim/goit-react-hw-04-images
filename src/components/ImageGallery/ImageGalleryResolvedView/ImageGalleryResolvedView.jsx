import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import {ImageGalleryStyled} from "components/ImageGallery/ImageGallery.styled"

export const ImageGalleryResolvedView = ({searchValue}) => {
    return <ImageGalleryStyled>
    {searchValue.map(value => {
      return <ImageGalleryItem 
       key={value.id}
       webformatURL={value.webformatURL} 
       largeImageURL= {value.largeImageURL}
       tags= {value.tags}  /> } )}
    </ImageGalleryStyled>
}

ImageGalleryResolvedView.propTypes = {
  searchValue: PropTypes.array.isRequired
}