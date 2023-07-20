import PropTypes from 'prop-types';
import { Header } from './Section.styled';

export const Section = ({ title }) => {
  return <Header>{title}</Header>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
