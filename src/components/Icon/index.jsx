import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconPath from './IconsLib';

const StyledSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = ({ size, color, icon, viewBox }) => {
  return (
    <StyledSvg
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[icon]} />
    </StyledSvg>
  );
};

export default Icon;

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: '#000000',
  viewBox: '0 0 24 24',
};
