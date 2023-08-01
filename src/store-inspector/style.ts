/* eslint-disable max-len */
import {CLOSE_SVG, LOGO_SVG, POSITIONS_SVG} from './svg';
import {arrayJoin, arrayMap} from '../common/array';
import {objMap, objNew} from '../common/obj';
import {UNIQUE_ID} from './common';

const FIXED = ';position:fixed';

export const TOP_RIGHT = {top: 0, right: 0};
export const BOTTOM_RIGHT = {bottom: 0, right: 0};
export const BOTTOM_LEFT = {bottom: 0, left: 0};
export const HORIZONTAL_PANEL = {width: '100vw', height: '30vh'};
export const VERTICAL_PANEL = {width: '30vw', height: '100vh'};

export const APP_STYLESHEET = arrayJoin(
  objMap(
    {
      '': 'all:initial;font-family:sans-serif;font-size:0.75rem' + FIXED,
      '*': 'all:revert',
      img: 'width:1rem;height:1rem;background:#111;border:0',

      // Nub
      '>img': `width:1.5rem;height:1.5rem;padding:0.25rem;${LOGO_SVG}` + FIXED,

      // Panel
      main:
        'display:flex;flex-direction:column;background:#111d;color:#fff' +
        FIXED,

      // Header
      header: 'display:flex;padding:0.25rem;background:#000;align-items:center',
      'header>img:nth-of-type(1)': LOGO_SVG,
      'header>img:nth-of-type(5)': CLOSE_SVG,
      ...objNew(
        arrayMap(POSITIONS_SVG, (SVG, p) => [
          `header>img[data-id='${p}']`,
          SVG,
        ]),
      ),
      'header>span':
        'flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:0.25rem',

      // Body
      article: 'padding:0.25rem 0.25rem 0.25rem 0.5rem;overflow:auto',
      details: 'margin-left:0.75rem;width:fit-content;',
      summary: 'margin-left:-0.75rem;line-height:1.25rem',

      table: 'border-collapse:collapse;table-layout:fixed;margin-bottom:0.5rem',
      thead: 'background:#222',
      'th:nth-of-type(1)': 'max-width:2rem;min-width:2rem;',
      'th.sorted': 'background:#000',
      'table caption': 'text-align:left;white-space:nowrap;line-height:1.25rem',
      button: 'width:1.5rem;border:none;background:none;color:#fff;padding:0',
      'button[disabled]': 'color:#777',
      'button.next': 'margin-right:0.5rem',
      [`th,#${UNIQUE_ID} td`]:
        'overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0.5rem;max-width:12rem;white-space:nowrap;border-width:1px 0;border-style:solid;border-color:#777;text-align:left',
    },
    (style, selector) => `#${UNIQUE_ID} ${selector}{${style}}`,
  ),
);
