"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';

interface AnimatedContentWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedContentWrapper: React.FC<AnimatedContentWrapperProps> = ({
  children,
  delay = 0,
}) => {
  return <ScrollReveal delay={delay}>{children}</ScrollReveal>;
};

export default AnimatedContentWrapper;
