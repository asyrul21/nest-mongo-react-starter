import React from 'react';
import classnames from 'classnames';

import './Modal.scss';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  layer?: number;
  title: string;
}

// parent of this container needs to be position-relative
const Modal = ({
  children,
  onClose,
  isOpen = false,
  layer = 1,
  title = 'Poppup',
}: IModalProps) => {
  const innerClasses = classnames({
    Modal_inner_container: true,
  });

  const closeButtonClasses = classnames({
    button: true,
    no_select: true,
    Modal_closeButton: true,
  });

  const computedZIndex = layer + 10;
  return (
    <div
      className="Modal_backdrop"
      style={{
        zIndex: computedZIndex,
      }}
    >
      <div
        className={'Modal_container'}
        style={{
          zIndex: computedZIndex + 1,
        }}
      >
        <div className="Modal_heading">
          <span style={{ fontWeight: 'bold', marginRight: '25px' }}>
            {title}
          </span>
          <div className={closeButtonClasses} onClick={onClose} role="button">
            Close
          </div>
        </div>
        <div className={innerClasses}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
