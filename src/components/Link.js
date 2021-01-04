import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as MUILink } from "@material-ui/core";

function Link({ href, to, ...rest }) {
  if (to) {
    return <MUILink component={GatsbyLink} to={to} {...rest} />;
  }
  return <MUILink href={href} {...rest} />;
}

export default Link;
