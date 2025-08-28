import React from 'react';

interface CharacterProps{
    params: Promise<{id: number}>;
}

async function Page({params}: CharacterProps) {

    // Here we would await the parameter passed to the url of the page
    // and find the corresponding character associated with that id
    // something like this:
    // const id = await params;
    // const character = characters.get(id);
    // and then use the data below to display the full character

    return (
        <div>
            <h2>Character view</h2>
        </div>
    );
}

export default Page;