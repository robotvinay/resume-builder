import styled from 'styled-components';

export const IconWrapper = styled.div`
  outline-color: transparent;
  margin-bottom: 1rem;
`;

export const IconButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 40px;
  background: transparent;
  border: 0;
  border-radius: 2px;
  padding: 0;
  color: rgb(230, 230, 230);
`;

export const NavContainer = styled.div`
  width: 440px;
  background: #222;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const NavItem = styled.div<{ active: boolean }>`
  ${(props) => {
    if (props.active) {
      return `border-right: 2px solid #cc0000;`;
    }
    return `border-right: 2px solid #0000;`;
  }}
`;

export const SideNav = styled.div`
  flex: 0 0 40px;
`;

export const NavContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ContentItem = styled.div`
  padding: 0.5rem;
  height: 100%;
`;
