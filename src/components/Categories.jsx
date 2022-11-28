import React from 'react'
import Category from './Category'

import insideOut from "../assets/images/scale11.jpg"
import bao from "../assets/images/scale3.jpg"
import incredibles from "../assets/images/scale12.jpg"
import auntieEdna from "../assets/images/scale.jpg"
import garfield from "../assets/images/scale9.jpg"
import raya from "../assets/images/scale15.jpg"
import theFalcon from "../assets/images/scale17.jpg"
import myMusicStory from "../assets/images/scale13.jpg"
import soul from "../assets/images/scale16.jpg"
import avengers from "../assets/images/scale6.jpg"
import burrow from "../assets/images/scale19.jpg"
import legends from "../assets/images/scale18.jpg"
import tangled from "../assets/images/scale5.jpg"
import mona from "../assets/images/scale21.jpg"
import simpson from "../assets/images/scale4.jpg"
import mickey from "../assets/images/scale14.jpg"

function Categories() {
    const recemonded = [insideOut, bao, incredibles, auntieEdna];
    const newToDisney = [garfield,raya,theFalcon,myMusicStory]
    const orginals = [soul,avengers,burrow,legends]
    const trending = [tangled,mona,simpson,mickey]
    return (
        <>
            <Category title="Recommended For You" items={recemonded} />
            <Category title = "New to Disney+" items={newToDisney}/>
            <Category title = "Originals" items={orginals}/>
            <Category title = "Trending" items={trending}/> 
          
        </>
    )
}

export default Categories