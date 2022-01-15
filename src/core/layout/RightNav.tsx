import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Templates } from '../components/templates/Templates';
import { Themes } from '../components/themes/Themes';
import { NavContainer, NavContent, NavItem, SideNav } from '../widgets/SideNav';

const sideBarList = [
  {
    key: 0,
    title: 'Template',
    icon: 'template',
    component: <Templates />,
  },
  {
    key: 1,
    title: 'Theme',
    icon: 'color',
    component: <Themes />,
  },
];

export const RightNav = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    let _element = contentRef.current;
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target;
            setActive(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -600px 0px',
        threshold: 0,
      }
    );

    if (_element) {
      let childrens: any = _element.children;
      for (let i = 0; i < childrens.length; i++) {
        contentObserver.observe(childrens[i]);
      }
    }

    return () => {
      if (_element) {
        let childrens: any = _element.children;
        for (let i = 0; i < childrens.length; i++) {
          contentObserver.unobserve(childrens[i]);
        }
      }
    };
  }, [contentRef]);

  return (
    <NavContainer>
      <SideNav>
        {sideBarList.map((item) => (
          <NavItem key={item.key} active={active === item.title.toLocaleLowerCase()}>
            <NavItem.Icon title={item.title} icon={item.icon} />
          </NavItem>
        ))}
      </SideNav>

      <NavContent ref={contentRef}>
        {sideBarList.map((item) => (
          <Fragment key={item.key}>{item.component}</Fragment>
        ))}
      </NavContent>
    </NavContainer>
  );
};
