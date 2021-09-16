import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';
import { ReactComponent as AchiIcon } from './images/achi.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AchiIcon} viewBox="0 0 150 58" {...props} />;
}
