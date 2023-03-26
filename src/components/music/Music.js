import { useEffect, useState } from 'react';
import MusicMap from './MusicMap';

export default function Music() {

    const [musicArr, setMusicArr] = useState([])
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}MusicAPI`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setMusicArr(Data)
    }
    useEffect(() => {

        sendReq();
    }, [setMusicArr])

    return (
        <div style={{ backgroundColor: '#4e3c3c' }}>

            
            <MusicMap  fetchRes={musicArr} />
        </div>
    )
}
