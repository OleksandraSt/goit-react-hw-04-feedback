import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title }) => {
    return <Title>{title}</Title>;
  };
  
Section.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
export default Section;