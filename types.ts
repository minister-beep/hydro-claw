import React from 'react';

export interface AnatomyPart {
  name: string;
  alias: string;
  description: string;
  icon: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}