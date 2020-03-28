import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: 'sun'
    },
    winter: {
        text: "It's cold outside!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig;

    return (
        <div>
            <i className={`${iconName} icon`} />
            <h3>It is currently {season} at your latitude of {props.lat}</h3>
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

