import React, { forwardRef, Fragment } from 'react';
import * as Styled from './SideNav.styled';
import { Tooltip } from 'antd';
import { getIcon } from 'src/styles/icons';

const context = React.createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return { ...state, open: true };
    case 'close':
      return { ...state, open: false };
    default:
      return state;
  }
}

export const SideNav = (props) => {
  return <Styled.SideNav {...props}>{props.children}</Styled.SideNav>;
};

export const NavContainer = (props) => {
  return (
    <context.Provider value={React.useReducer(reducer, { open: false })}>
      <Styled.NavContainer {...props}>{props.children}</Styled.NavContainer>
    </context.Provider>
  );
};

export const NavItem = (props) => {
  return <Styled.NavItem {...props} />;
};

const NavItemIcon = ({ title, icon: Icon, ...props }) => {
  return (
    <Styled.IconWrapper {...props}>
      <Tooltip placement="left" title={title}>
        <Styled.IconButton>{getIcon(Icon)}</Styled.IconButton>
      </Tooltip>
    </Styled.IconWrapper>
  );
};

NavItem.Icon = NavItemIcon;

interface NavContentProps {
  children?: React.ReactNode;
}

export const NavContent = forwardRef<HTMLDivElement, NavContentProps>(function Content(
  { children },
  ref
) {
  return (
    <Styled.NavContent id="navcontent" ref={ref}>
      {children}
    </Styled.NavContent>
  );
});

export const ContentItem = ({ children, ...props }) => {
  return <Styled.ContentItem {...props}>{children}</Styled.ContentItem>;
};

NavContent.Item = ContentItem;
