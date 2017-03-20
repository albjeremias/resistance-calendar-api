import Head from 'next/head';
import React from 'react';

export default class extends React.Component {
  render () {
    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='static/manifest.json' />
        <link rel='icon' sizes='32x32' type='image/png' href='static/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto' rel='stylesheet' />
        <title>Resistance Calendar</title>
      </Head>
    );
  }
}