const axios = require('axios');

let endp = 'http://jbusch.webhosting2.eeecs.qub.ac.uk/tvapi/?shows';

axios.get(endp).then(resp => {

    // console.log('Status Code:', resp.status);
    // console.log('Date in Response header:', resp.headers);

    const result = resp.data;

    for(show of result) {
      console.log(`Got TV show id::: ${show.id} Got TV show name:::  ${show.showname}`);
    }
  }).catch(err => {
    console.log('Error: ', err.message);
});

let singleshow = 1001;
let endps = `http://jbusch.webhosting2.eeecs.qub.ac.uk/tvapi/?id=${singleshow}`;

axios.get(endps).then(resp2 => {

    const tvshow = resp2.data.show;

    
        console.log("SHOW NAME");
        console.log(`id::: ${tvshow.id} 
                     show name:::  ${tvshow.showname} - ${tvshow.descript}`);
        console.log("\n");
    
        const showcast = resp2.data.cast;
        console.log("Cast: \n");
        showcast.forEach(item => {
            console.log(`${item.actorid}`);
        });
        console.log("\n");

  }).catch(err => {
    console.log('Error: ', err.message);
});
