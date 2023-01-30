# HashUp Store preview sample
React-implemented HashUp store example app.

Uses npm [@hashup-it/hashup-react-sdk](https://www.npmjs.com/package/@hashup-it/hashup-react-sdk) package to get HashUp Store functionality, paired alongside with [HashUp API](https://wiki.hashup.it/get-started/the-hashup-api) to fetch any Store's game & analytics data.

User's-point-of-view flow:\
**Fetch** licences (https://open-api.hashup.it:3000/v1/tokens) --> **display** licenses --> **purchase** a licence.

Example use:
```js
import { useHashup } from '@hashup-it/hashup-react-sdk'

function App() {
  const { buyGame } = useHashup()
  
  /** Address of license you wish to buy. 
	  Fetched from https://open-api.hashup.it/ OpenAPI. */
  const licenseAddress = '0x123…abc'
  
  /** Amount of licenses you wish to buy. */
  const licenseAmount = 2

  function handleLicenseBuy() { 
      buyGame(licenseAddress, licenseAmount)
  }

  return (
    <div className="App">
       <button onClick={handleLicenseBuy}>Buy 2 copies of game</button>
    </div>
  );
}
```

## Further reading
- [How to Create Your Own Store on HashUp?](https://wiki.hashup.it/get-started/how-to-create-your-own-store-on-hashup)
- [The HashUp API](https://wiki.hashup.it/get-started/the-hashup-api)
<hr>
<div><a href="https://hashup.it">HashUp Foundation</a> | 2023</div>
