import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProjectIconSrc from '@site/static/logo/project-icon.png';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <div className="row row--no-gutters margin-vert--xl">
                    <div className="col padding-vert--xl">
                        <h1 className="hero__title">{siteConfig.title}</h1>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--info button--lg"
                                to="/docs/quickstart/">
                                🚀 Quick Start
                            </Link>
                            <Link
                                className="button button--primary button--lg"
                                to="/docs/quickstart/">
                                {`🔥 Try ${siteConfig.title}`}
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.iconContainer}>
                            <div className={styles.iconBg}></div>
                            <img className={styles.iconSrc} src={ProjectIconSrc} width={180} height={180}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
