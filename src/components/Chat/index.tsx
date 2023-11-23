/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import CircularProgress from '@mui/material/CircularProgress';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { Deaming, SendIcon } from '~/assets/svg';
import { colors } from '~/theme';
import { onRandomMsg } from '~/utils';
import If from '../If';
import {
  Bubble,
  ChatView,
  NameChat,
  Section,
  SectionBubble,
  SectionMessage,
  SectionTextField,
  TextField,
} from './styles';

const mockMgs: any = [{ msg: 'Olá', isMe: false, response: [] }];

const Chat: FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [msgs, setMgs] = useState(mockMgs);
  const [visible, setVisible] = useState(false);

  const scholl = React.createRef<any>();
  const refBubble = React.createRef<any>();

  const onBottom = () => scholl.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      onBottom();
    });

    if (refBubble.current) {
      observer.observe(refBubble.current);
    }

    return () => {
      if (refBubble.current) {
        observer.unobserve(refBubble.current);
      }
    };
  }, [refBubble, onBottom]);

  const onSendMsg = () => {
    if (!value.trim()) return;

    const response = onRandomMsg();

    const msg = [
      ...msgs.slice(),
      { msg: value, isMe: true },
      { msg: '', response, isMe: false },
    ];

    setMgs(msg);
    setValue('');
    setLoading(true);
  };

  const onDone = () => {
    console.log('DONE');
    setLoading(false);
  };
  return (
    <Section>
      <Deaming onPress={() => setVisible(true)} />

      <SwipeableDrawer
        anchor="right"
        open={visible}
        onClose={() => setVisible(false)}
        onOpen={() => setVisible(true)}
      >
        <ChatView>
          <Deaming size={80} onPress={() => {}} />
          <NameChat>Deaming</NameChat>

          <SectionMessage>
            {msgs.map(({ isMe = false, msg = '', response = [] }) => (
              <SectionBubble left={!isMe} key={msg}>
                <Bubble left={!isMe} ref={refBubble}>
                  {response.length > 0 ? (
                    <TypeAnimation
                      sequence={[...response, () => onDone()]}
                      wrapper="span"
                      speed={50}
                      cursor={false}
                      style={{ fontSize: '15px', display: 'inline-block' }}
                    />
                  ) : (
                    msg
                  )}
                </Bubble>
              </SectionBubble>
            ))}

            <div ref={scholl} />
          </SectionMessage>

          <SectionTextField>
            <TextField
              placeholder="Pergunte algo ao Deaming .."
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />

            <If condition={loading}>
              <CircularProgress
                disableShrink
                size={25}
                style={{ color: colors.secondary.dark }}
              />
            </If>

            <If condition={!loading}>
              <SendIcon onPress={onSendMsg} />
            </If>
          </SectionTextField>
        </ChatView>
      </SwipeableDrawer>
    </Section>
  );
};

export default Chat;
