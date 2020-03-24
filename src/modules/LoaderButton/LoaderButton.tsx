import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

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
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <FontAwesomeIcon icon={faSync} className="spinning"/>}
      {!isLoading ? text : loadingText}
    </Button>
  );
}
