import React from 'react';

import './LoaderButton.css';

export default function LoaderButton({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}: any) {
  return (
    <button
      type="submit"
      className={`${className} LoaderButton`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading &&
        <div className="spinner-border text-primary text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {!isLoading ? text : loadingText}
    </button>
  );
}
