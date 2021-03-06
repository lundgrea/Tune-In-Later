import React from "react";
import Card from "../../containers/Card/Card";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFavorite } from "../../actions";
import PropTypes from "prop-types";
import "./CardContainer.css";

export const CardContainer = ({ albums, toggleFavorite, user }) => {
  let cards = albums.map(album => {
    return (
      <div className="card-container">
        <Card
          {...album}
          toggleFavorite={toggleFavorite}
          user={user}
          key={album.id}
        />
        <NavLink
          className="detail-button"
          key={album.album_id}
          to={`/${album.album_id}`}
        >
          Details
        </NavLink>
      </div>
    );
  });

  return <>{cards}</>;
};

export const mapStateToProps = store => ({
  albums: store.albums,
  user: store.user,
  favorites: store.favorites
});

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);

CardContainer.propTypes = {
  albums: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
