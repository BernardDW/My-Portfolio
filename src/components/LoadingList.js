import React from 'react';

//While we are loading the data, am I showing this function instead of nothing.

function LoadingList(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="spinner">
        <div className="ball ball-1"></div>
        <div className="ball ball-2"></div>
        <div className="ball ball-3"></div>
        <div className="ball ball-4"></div>
      </div>
    );
  };
}
export default LoadingList;