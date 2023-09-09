import React from 'react';

const SectionLayout = ({
  title,
  description,
  children,
  color,
  align,
} = defaultProps) => {
  const centerAlign = {
    textAlign: align,
  };
  const Background = {
    backgroundColor: color,
  };
  return (
    <>
      <div className='section-container' style={Background}>
        <div className='section'>
          <div className='header'>
            <h1 className='title' style={centerAlign}>
              {title}
            </h1>
            <p className='description' style={centerAlign}>
              {description}
            </p>
          </div>
          <div className='section-body'>{children}</div>
        </div>
      </div>
    </>
  );
};

SectionLayout.defaultProps = {
  title: 'Section Title',
  description: 'This works as a paragraph for a section description',
};

export default SectionLayout;
