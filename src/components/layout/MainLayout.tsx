import React, { ComponentType } from 'react';
import SideBar from '@src/components/SideBar';
import '@src/css/sidebar.css';
import '@src/css/contents.css';
import Header from '@src/components/Header';
// import styled from 'styled-components';

interface Props {
}

// const StyledButton = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   color: gray;
//   background: white;
// `;

const MainLayout = <P extends Props>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  return (props: P) => (
    <>
      <SideBar open={false} />
      <div className="contents side-active">
        <Header />
        <div className="main">
          <WrappedComponent {...props} />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
