import React from 'react';
import styled, {css} from 'styled-components';

const ClubPage = () => {
    return (
        <div>
            <Move direction='up' style={{color: '#ffffff', bgcolor:'#010C1F'}}>
                <img src="/img/glandslam.png" width="50" height="814.88"></img>
            </Move>
        </div>
    );
};

const Move = styled.marquee`
    scrolldelay:5;
    width:53px;
    height:1000px;
    loop:infinite;
    overflow:hidden;
`

export default ClubPage;