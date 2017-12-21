import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from "../src/app/components/header"

const stories = storiesOf ('Nav bar', module);

stories.add('Nothing Selected', ()=> {
  return <Header onClick={action('onClick')}/>
})

