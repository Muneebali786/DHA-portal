import React from 'react';
import dhaOffice from '../images/dhaOffice.jpg';
import firstImg from '../images/firstImg.png';
import secondImg from '../images/secondImg.png';
import thirdImg from '../images/thirdImg.png';
import forthImg from '../images/forthImg.jpg';
import fifthImg from '../images/fifthImg.jpg';

const About = () => {
    return (
        <div>
            <div className="Dha-office">
                <h1>History About DHA</h1>
                <img className='dhaOffice' src={dhaOffice} />
                
            </div>
            <div className='aboutHeadings'>
                <h2>ABOUT DHA</h2>
                <p>Defence Housing Authority Lahore is “Nationally recognized corporate” organization that has endeavored to provide, to the people of Pakistan, an opportunity to live the innovative models of modern living.
Tuned to the latest worldwide developments in the field of Urban and Community Management, it has added the grandeur of our cities and communities.
Relying on the elements of strategic urban planning, development and sustainability it has carved out its residential and commercial projects.
By introducing modern designs in construction of houses, infrastructure and essential associated facilities it has infused a new life in “Defence Living”, that is beautifully energetic, attractively vibrant and conveniently livable.
Our emphasis continues to remain on building our communities with the essence of our socio-cultural and religious traditions & needs. We envision our future urban dwellings to be more friendly, modern and green.</p>
            </div>
            <div style={{display:'flex'}}>
                <img src={firstImg} width="240" height="150"/>
                <div className='Info' style={{marginLeft:'50px'}}>
                    <h2>IN 1973. CIVIL AND DEFENCE HOUSING</h2>
                    <p style={{paddingTop:'20px'}}>Civil and Defence Housing Society Lahore was raised in 1973.</p>
                </div>
            </div>
            <div style={{display:'flex', marginTop:'30px'}}>
                <img src={secondImg} width="240" height="150"/>
                <div className='Info' style={{marginLeft:'50px'}}>
                    <h2>IN 1975. LCCHS</h2>
                    <p style={{paddingTop:'20px'}}>It was renamed as Lahore Cantonment Co-Operative Housing Society (LCCHS) and was registered with Punjab Government in March 1975.</p>
                </div>
            </div>
            <div style={{display:'flex', marginTop:'30px'}}>
                <img src={thirdImg} width="240" height="150"/>
                <div className='Info' style={{marginLeft:'50px'}}>
                    <h2>IN 1999. CONVERTED TO DHA LAHORE</h2>
                    <p style={{paddingTop:'20px'}}>Lahore High Court entrusted all its powers to Commander Lahore Corps In 1991. The society was s subsequently converted to DHA Lahore in 1999 through a Provincial Ordinance.</p>
                </div>
            </div>
            <div style={{display:'flex', marginTop:'30px'}}>
                <img src={forthImg} width="240" height="150"/>
                <div className='Info' style={{marginLeft:'50px'}}>
                    <h2>IN 2002. DHA FEDERALIZED</h2>
                    <p style={{paddingTop:'20px'}}>DHA was federalized in 2002, which was validated by the Parliament in 2004.</p>
                </div>
            </div>
            <div style={{display:'flex', marginTop:'30px'}}>
                <img src={fifthImg} width="600" height="150"/>
                <div className='Info' style={{marginLeft:'50px'}}>
                    <h2>DHA LAHORE</h2>
                    <p style={{paddingTop:'20px'}}>Pakistan is also home to one the most resilient, charismatic and vibrant cities of the world, some call it Lahore some call it home. We at DHA represent 25% of this breathtaking enigma, initially what started on 34000 kanals has now been etched to cover a whopping 3 Lacs 12000 Kanal.</p>
                </div>
            </div>
        </div>
    );
};

export default About;