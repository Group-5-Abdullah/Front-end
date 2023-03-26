import { useEffect, useState } from 'react';
import MusicEventMap from './MusicEventMap';


export default function MusicYourEvent (){
    const userEmail = localStorage.getItem('user_email')
    const [musicEventArr, setMusicEventArr] = useState([])
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}Music?val=${userEmail}`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setMusicEventArr(Data)
    }
    const setDELETEDArr = (Arr) => {
        setMusicEventArr(Arr)
     }
    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div style={{ backgroundColor: '#4e3c3c' }}>

            
            <MusicEventMap setDELETEDArr={setDELETEDArr}  fetchRes={musicEventArr} />
        </div>
    )
}