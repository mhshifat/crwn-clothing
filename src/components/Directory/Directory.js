import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectories } from "../../store/selectors/directorySelectors";
import MenuItem from "../Menu/MenuItem/MenuItem";
import "./Directory.scss";

const Directory = ({ directories }) => {
  return (
    <div className="directory-menu">
      {directories.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directories: selectDirectories
});

export default connect(mapStateToProps)(Directory);
