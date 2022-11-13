import {ButtonLoadMoreStyled} from './Button.styled'
import PropTypes from 'prop-types';

export const ButtonLoadMore = ({onClick}) => {
    return <ButtonLoadMoreStyled type="button" onClick={onClick} name="loadMore">Load more</ButtonLoadMoreStyled>
}

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired
}