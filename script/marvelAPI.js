
const marvelAPI =async()=>{
    const req = await fetch('https://gateway.marvel.com:443/v1/public/characters?name=ironman&apikey=afe20a7284af32b0dc033363543a8afc');
    
    const data = await req.json();
    console.log(data);

    return data;
}

marvelAPI();