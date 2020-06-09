export const isSmall = size => size === 'small';
export const isActive = ({ isCurrent }) => isCurrent ? {
  style: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black'
  }
} : {};