import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Projects from '../components/project'; 

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img src="img/favicon.png" width={100}></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { description } = customFields;

  return (
    <Layout title="Home" description={description}>
      <HomepageHeader />
      <main>
        <Projects />
      </main>
    </Layout>
  );
}