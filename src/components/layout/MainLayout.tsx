import React, { ComponentType } from 'react';

interface Props {
}

const MainLayout = <P extends Props>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  return (props: P) => (
    <div>
      <div>메인</div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default MainLayout;
