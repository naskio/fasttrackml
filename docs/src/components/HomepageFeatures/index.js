import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Blazing Fast',
        Svg: require('@site/static/images/fast.svg').default,
        description: (
            <>
                FastTrackML is a rewrite of the MLFlow tracking server with a focus on
                performance and scalability.
            </>
        ),
    },
    {
        title: 'Easy to Use',
        Svg: require('@site/static/images/easy.svg').default,
        description: (
            <>
                FastTrackML is designed to be easily installed and used to get your experiments tracked quickly.
                Use the Modern UI alternative for a seamless experience.
            </>
        ),
    },
    {
        title: 'Drop-in Replacement',
        Svg: require('@site/static/images/drop-in.svg').default,
        description: (
            <>
                Use the Classic UI to get the same experience as MLFlow's tracking server. But yet much faster than
                MLFlow's.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4 margin-vert--md')}>
            <div className="card">
                <div className="card__image text--center">
                    <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="card__body text--center">
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row margin-vert--xl">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
