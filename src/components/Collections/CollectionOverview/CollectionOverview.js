import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../../store/selectors/collectionSelectors";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
