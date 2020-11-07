import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './Textarea.css';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={classNames('textarea', className)}>
      <textarea {...props} ref={ref} className="textarea-input" />
    </div>
  );
});

Textarea.propTypes = {
  className: T.string,
};

export default Textarea;
