import { MainLayoutContainer } from './main-layout.styled';
import { MainLayoutProps } from './main-layout.types';
import React from 'react';

// mainlayout je sa headerom
function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID,backgroundColor } = props;

  return (
    <MainLayoutContainer>
      {children}
    </MainLayoutContainer>
  );
}

export default React.memo(MainLayout);
