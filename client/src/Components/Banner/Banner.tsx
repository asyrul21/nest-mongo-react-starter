import React, { useState } from 'react';
import classnames from 'classnames';

// styles
import './Banner.scss';

export interface IBannerProps {
  type: 'info' | 'warning' | 'error' | 'success';
  text: string;
}

export const Banner = ({ type = 'info', text }: IBannerProps) => {
  const [show, setShow] = useState<boolean>(true);

  const containerStyles = classnames({
    banner_container: true,
    [`banner_container_${type}`]: true,
  });

  return show ? (
    <div className={containerStyles} data-testid="banner-root">
      <span>{text}</span>
      <button
        className="banner_close_button"
        onClick={() => {
          setShow(false);
        }}
      >
        X
      </button>
    </div>
  ) : (
    <></>
  );
};
