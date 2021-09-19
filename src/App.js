import React from 'react';
import styled from 'styled-components'

const PageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Link = styled.a`
 text-decoration: none;
 font-size: x-large;
`;

function App() {
  return (
    <PageHolder>
      <h1>{"<Yordevs />"}</h1>
      <Link href="https://yordevs.com">Website</Link>
      <Link href="https://discord.gg/ywfNpWFQk3">Discord</Link>
      <Link href="mailto:yordevs@yusu.org">Email</Link>
      <Link href="https://facebook.com/yordevs">Facebook</Link>
      <Link href="https://twitter.com/yordevs">Twitter</Link>
      <Link href="https://instagram.com/yordevs">Instagram</Link>
    </PageHolder>
  );
}

export default App;
