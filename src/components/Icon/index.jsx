import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconPath from './IconsLib';

const StyledSvg = styled.svg`
  display: 'inline-block', verticalAlign: 'middle'
`;
const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const Icon = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[icon]} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: '#000000',
  viewBox: '0 0 24 24',
  style: {},
  className: '',
};
