import React from 'react';
import PropTypes from 'prop-types';
import colors from './_colors.scss';

const filterGroup = (filter) =>
  Object.keys(colors).filter((color) => color.indexOf(filter) === 0);

export default {
  title: 'Global|Colors'
};

export const All = () => (
  <div style={{ padding: '20px' }}>
    <>
      <h3>Neutral Colors</h3>
      <ColorGroup group={filterGroup('neutral')} />
    </>
    <>
      <h3>PBR Colors</h3>
      <ColorGroup group={filterGroup('pbr')} />
    </>
    <>
      <h3>Accent Colors</h3>
      <ColorGroup group={filterGroup('accent')} />
    </>
  </div>
);

All.story = {
  name: 'all'
};

// Convert the color key to the color variable name.
const colorVariable = (color) => {
  const array = color.split('-')[1].split(/(?=[A-Z])/);
  return `$color-${array.join('-').toLowerCase()}`;
};

// Convert the color key to the color proper name.
const colorName = (color) => {
  const array = color.split('-')[1].split(/(?=[A-Z])/);
  return `${array.join(' ').toLowerCase()}`;
};

// A component for displaying individual color swatches.
const Color = ({ color }) => (
  <li
    style={{
      borderRadius: '5px',
      border: '1px solid lightgray',
      padding: '5px'
    }}
  >
    <span
      style={{
        backgroundColor: colors[color],
        display: 'block',
        height: '4em',
        marginBottom: '0.3em',
        borderRadius: '5px',
        border: '1px solid lightgray'
      }}
    />
    <span style={{ textTransform: 'capitalize' }}>{colorName(color)}</span>{' '}
    <br />
    <span>{colorVariable(color)}</span> <br />
    <span>{colors[color]}</span> <br />
  </li>
);

Color.propTypes = {
  color: PropTypes.string.isRequired
};

// A component for displaying a group of colors.
const ColorGroup = ({ group }) => (
  <ul
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 175px))',
      gridGap: '20px',
      marginBottom: '40px'
    }}
  >
    {group.map((color) => {
      return <Color color={color} key={color} />;
    })}
  </ul>
);

ColorGroup.propTypes = {
  group: PropTypes.array.isRequired
};
