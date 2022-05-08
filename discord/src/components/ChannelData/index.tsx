import React, {useRef, useEffect} from 'react';
import { CalendarDate } from 'styled-icons/bootstrap';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrappper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return( 
    <Container>
        <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage
                    key={n}
                    author='FRST'
                    date="08/05/2022"
                    content="Today is my birthday!"
                />
            ))}
            <ChannelMessage
                author="Fulano"
                date= "08/05/2022"
                content={
                    <>
                        <Mention>@GK</Mention>, me carrega no LoL
                    </>
                }
                hasMention
                isBot
                />
        </Messages>
        <InputWrappper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon/>
        </InputWrappper>
    </Container>
    )
}

export default ChannelData;