import {css} from 'goober';

export default css({
  display: 'flex',
  width: '22rem',
  maxHeight: '3rem',
  padding: '0.875rem 1rem',
  alignItems: 'flex-start',
  gap: '0.25rem',
  flexShrink: 0,
  borderRadius: '0.25rem',
  background: '#322f35',
  color: '#f5eff7',
  boxShadow: `
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15)`,
  '&.failure': {
    background: '#ff0000',
  },
  '&.success': {
    background: '#009e12',
  },
  '&.info': {
    background: '#005fd3',
  },
  '&.warning': {
    background: '#de7a00',
  },
  '& button': {
    background: 'none',
    border: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit',
    boxSizing: 'content-box',
    padding: '0.5rem',
    margin: '-0.5rem auto',
    cursor: 'pointer',
    borderRadius: '3px',
    backgroundColor: 'transparent',
    transition: '0.2s ease-in-out background-color',
    '&:focus-visible, &:hover': {
      outline: 'none',
      /* background-color: color-mix(in srgb, currentColor 20%, transparent); */
      backgroundColor: '#f5eff733' /* TODO: How to manupulate by color. */,
    },
  },
  '& button.close': {
    width: '1.25rem',
    height: '1.25rem',
    margin: '-0.5rem',
    marginLeft: 'auto',
    borderRadius: '50%',
    '> svg': {
      fill: 'currentColor',
      stroke: 'none',
    },
  },
  '& p': {
    margin: 0,
  },
  '& .message': {
    /* Layout */
    height: '1.25rem',
    flex: '1 0 0',
    /* M3/body/medium */
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.25rem',
    letterSpacing: '0.01563rem',
    color: 'inherit',
    fontFamily: 'inherit',
  },
});
