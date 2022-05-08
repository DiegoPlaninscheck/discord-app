import React from 'react';

import { Container, Messanges, InputWrappper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    return( 
    <Container>
        <Messanges/>
        <InputWrappper>
            <Input/>
            <InputIcon/>
        </InputWrappper>
    </Container>
    )
}

export default ChannelData;