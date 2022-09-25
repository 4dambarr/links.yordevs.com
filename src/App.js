import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Background from './Background';
import Link from './Link';

const Card = styled.div`
  max-width: 300px;
  background-color: rgba(200,200,200,0.9);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`

const PageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const sourceMessage = {
  "qr": "If you can scan a qr code you can make a website, why not use these links to find out more about us",
  "instagram": "You've come from instagram? Why not join us and find out how we knew!",
  "twitter": "You're a twitter user, why not join us and see if you can a website in 280 charcaters",
  "facebook": "Hello facebook link clicker! Join us and we will teach you how to make your own links to click",
  "tiktok": "You clicked our link on TikTok? I didn't even know we posted there!",
  "discord": "This link was shared on discord? Good job I wrote the code for this message then!",
  "yusu": "You've visited us from the YUSU website, which is surprising cause we don't use this link on there",
  "test": "Hoping you'd catch us out and find a left over test message were you? Well you thought wrong!",
  "easteregg": "Sorry, this is the best easter egg we can do",
  "easter-egg": "Sorry, this is the best easter egg we can do"
}

function App() {
  const [source, setSource] = useState("")

  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("source")
    setSource(src)
  }, [])

  return (
    <PageHolder>
      <Background />
      <Card>
        <h1>{"<Yordevs />"}</h1>
        <p>{sourceMessage[source] ? sourceMessage[source] : ""}</p>
        <Link href="https://yordevs.com">Website</Link>
        <Link href="https://discord.gg/ywfNpWFQk3">Discord</Link>
        <Link href="mailto:yordevs@yusu.org">Email</Link>
        <Link href="https://facebook.com/yordevs">Facebook</Link>
        <Link href="https://twitter.com/yordevs">Twitter</Link>
        <Link href="https://instagram.com/yordevs">Instagram</Link>
        <Link href="https://yordle.co.uk">Yordle</Link>
      </Card>

    </PageHolder>
  );
}

export default App;
