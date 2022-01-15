import React, { useRef, useEffect, Fragment, useState } from 'react';
import {
  ActivitiesEditor,
  EduEditor,
  ExerienceEditor,
  ForteEditor,
  IntroEditor,
  LabelsEditor,
  SkillsEditor,
  SocialEditor,
} from '../components/editor/Editor';
import { NavContainer, NavContent, NavItem, SideNav } from '../widgets/SideNav';

const sideBarList = [
  {
    key: 0,
    title: 'Intro',
    icon: 'identity',
    component: <IntroEditor />,
  },
  {
    key: 1,
    title: 'Social',
    icon: 'social',
    component: <SocialEditor />,
  },
  {
    key: 2,
    title: 'Skills',
    icon: 'tool',
    component: <SkillsEditor />,
  },
  {
    key: 3,
    title: 'Experience',
    icon: 'work',
    component: <ExerienceEditor />,
  },
  {
    key: 4,
    title: 'Education',
    icon: 'education',
    component: <EduEditor />,
  },
  {
    key: 5,
    title: 'Awards',
    icon: 'awards',
    component: <ForteEditor />,
  },
  {
    key: 6,
    title: 'Activities',
    icon: 'certificate',
    component: <ActivitiesEditor />,
  },
  {
    key: 7,
    title: 'Label',
    icon: 'label',
    component: <LabelsEditor />,
  },
];

export const LeftNav = () => {
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
