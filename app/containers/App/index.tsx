/**
 *
 * App
 *
 * This component is the entry to this App.
 */

import * as React from 'react';
import styled from 'styles/styled-components';
import { hot } from 'react-hot-loader/root';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <div>Hi Twilio App</div>
    </AppWrapper>
  );
}
export default hot(App);
