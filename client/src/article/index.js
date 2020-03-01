import React, { Fragment } from 'react';

export default function Article(props) {
  const createMarkup = html => ({ __html: html });
  return (
    <Fragment>
      <h1 dangerouslySetInnerHTML={createMarkup(props.title)}></h1>
      <article dangerouslySetInnerHTML={createMarkup(props.article)}></article>
    </Fragment>
  );
}
