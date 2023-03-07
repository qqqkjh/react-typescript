import React from 'react';

interface SideBarProps {
    open : boolean
}

const SideBar = (props : SideBarProps) => {
    const { open } = props;
    console.log(open);
    return (
      <div className="side active" data-open={open}>
        <div className="side-box">
          <div className="side-header">
            <h1 className="root-title">
              <a id="logo" href="/main/index">
                <div className="logo " role="img" />
              </a>
              <p className="sub-title">사이드바</p>
            </h1>
          </div>
          <div className="side-body">
            <li>
              <a href="#" onClick={() => { console.log('머신러닝'); }} role="menuitem">
                <img src="/images/menu_icon_02.svg" alt="" />
                <span className="item-title">머신러닝</span>
              </a>
            </li>
            <ul role="menu" aria-label="머신러닝">
              <li>
                <a role="menuitem">머신러닝 예측결과 관리 </a>
              </li>
            </ul>
          </div>
          <div className="side-footer" />
        </div>
      </div>

    );
};

export default SideBar;
