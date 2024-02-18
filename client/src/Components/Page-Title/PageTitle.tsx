import React from 'react';

import './PageTitle.scss';

export interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="app_title" data-testid="page-title-root">
      {children}
    </h1>
  );
};

export default PageTitle;
