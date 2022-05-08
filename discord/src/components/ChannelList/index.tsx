import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return( 
    <Container>
        <Category>
            <span>CANAIS DE TEXTO</span>
            <AddCategoryIcon/>
        </Category>

        <ChannelButton channelName="chat-livre"/>
        <ChannelButton channelName="trabalho"/>
        <ChannelButton channelName="cs-go"/>
        <ChannelButton channelName="valorant"/>
        <ChannelButton channelName="lol"/>
    </Container>
    )
}

export default ChannelList;