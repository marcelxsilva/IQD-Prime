/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from 'lodash';

export const pxToRem = (pixels: number, baseline = 16): string =>
  `${pixels / baseline}rem`;

export const getTheme =
  (themeProp: string) =>
  ({ theme }: any): string =>
    get(theme, themeProp);

export const ifStyle =
  (prop: any) =>
  (truthy: any, falsy: any = null) =>
  (props: { [x: string]: any }): any =>
    props[prop] ? truthy : falsy;

export const toOnlyNumbers = (value: string): string => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};
