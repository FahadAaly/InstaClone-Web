import React from "react";

function NotFound({ className, children }) {
    const classes = `not-found ${className}`;
    return <div className={classes}>{children}</div>;
}

export default NotFound;
