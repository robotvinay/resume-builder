import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineAim, AiFillDelete } from 'react-icons/ai';
import {
  MdVpnKey,
  MdVerifiedUser,
  MdWork,
  MdLocationOn,
  MdCall,
  MdMail,
  MdPermIdentity,
  MdBuild,
  MdEdit,
  MdColorLens,
  MdDragIndicator,
  MdCloudDownload,
  MdLibraryBooks,
  MdAddCircleOutline,
  MdPeople,
  MdLabel,
  MdZoomOut,
  MdZoomIn,
} from 'react-icons/md';
import {
  SiBehance,
  SiCodechef,
  SiCodeforces,
  SiDevdotto,
  SiDribbble,
  SiExpertsexchange,
  SiHackerearth,
  SiHashnode,
  SiLeetcode,
  SiSquarespace,
  SiTwitter,
} from 'react-icons/si';
import { FaAward, FaMediumM, FaUniversity, FaWordpressSimple, FaHackerrank } from 'react-icons/fa';
import { IoGitBranch } from 'react-icons/io5';
import { GoVerified } from 'react-icons/go';

const icons = new Map([
  ['mobile', <MdCall key="mobile" />],
  ['email', <MdMail key="email" />],
  ['location', <MdLocationOn key="location" />],
  ['github', <AiOutlineGithub key="github" />],
  ['linkedin', <AiFillLinkedin key="linkedin" />],
  ['hackerrank', <FaHackerrank key="hackerrank" />],
  ['hackerearth', <SiHackerearth key="hackerearth" />],
  ['twitter', <SiTwitter key="twitter" />],
  ['leetcode', <SiLeetcode key="leetcode" />],
  ['devto', <SiDevdotto key="devto" />],
  ['medium', <FaMediumM key="medium" />],
  ['wordpress', <FaWordpressSimple key="wordpress" />],
  ['codechef', <SiCodechef key="codechef" />],
  ['codeforces', <SiCodeforces key="codeforces" />],
  ['behance', <SiBehance key="behance" />],
  ['dribbble', <SiDribbble key="dribbble" />],
  ['hashnode', <SiHashnode key="hashnode" />],
  ['squarespace', <SiSquarespace key="squarespace" />],

  ['identity', <MdPermIdentity size="24" key="identity" />],
  ['expert', <SiExpertsexchange size="24" key="expert" />],
  ['work', <MdWork size="24" key="work" />],
  ['education', <FaUniversity size="24" key="education" />],
  ['tool', <MdBuild size="24" key="tool" />],
  ['key', <MdVpnKey size="24" key="key" />],
  ['certificate', <MdVerifiedUser size="24" key="certificate" />],
  ['career', <AiOutlineAim size="24" key="career" />],
  ['branch', <IoGitBranch size="24" key="branch" />],
  ['skill', <GoVerified size="24" key="skill" />],
  ['edit', <MdEdit size="24" key="edit" />],
  ['color', <MdColorLens size="24" key="color" />],
  ['download', <MdCloudDownload size="24" key="download" />],
  ['template', <MdLibraryBooks size="24" key="template" />],

  ['drag', <MdDragIndicator color="#fff" size="16" key="drag" />],
  ['delete', <AiFillDelete color="#fff" size="16" key="delete" />],
  ['add', <MdAddCircleOutline key="add" />],
  ['social', <MdPeople size="24" key="social" />],
  ['label', <MdLabel size="24" key="label" />],
  ['awards', <FaAward size="24" key="awards" />],
  ['zoomin', <MdZoomIn key="zoomin" />],
  ['zoomout', <MdZoomOut key="zoomout" />],
]);

export function getIcon(iconName: string) {
  return icons.get(iconName?.toLowerCase());
}
