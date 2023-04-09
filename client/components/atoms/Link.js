import React from 'react';

export default function Link(props) {
  const { href, title, label } = props;
  return (
    <a href={href} title={title}>
      {label}
    </a>
  );
}
