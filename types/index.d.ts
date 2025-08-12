import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  link: string;
  target?: string;
  icon?: ReactNode;
}

export interface LazySectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
