import React from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';
import { sun, cloud, bird, bike, tree } from './images';

function App() {
    const sunAnimation = useWebAnimation({
        keyframes: [
            { transform: 'scale(1)' },
            { transform: 'scale(1.2) rotate(90deg)' },
            { transform: 'scale(1)' },
        ],
        timing: {
            duration: 3000,
            iterations: Infinity
        }
    })

    const cloudsAnimation = useWebAnimation({
        keyframes: [
            { transform: 'translate(0, 0) scale(0.8)' },
            { transform: 'translate(-300px, 0) scale(1.2)' },
        ],
        timing: {
            duration: 6000,
            iterations: Infinity
        }
    })

    const birdAnimation = useWebAnimation({
        keyframes: [
            { transform: 'translate(0, 0)' },
            { transform: 'translate(1040px, 0)' },
        ],
        timing: {
            duration: 6000,
            iterations: Infinity
        }
    })

    const bikeAnimation = useWebAnimation({
        keyframes: [
            { transform: 'translate(0, 0)' },
            { transform: 'translate(1040px, 0)' },
        ],
        timing: {
            duration: 3000,
            iterations: Infinity
        }
    })

    return (
        <>
            <div className="suncloudBox">
                <figure>
                    <img
                        src={sun}
                        alt=""
                        id="sun"
                        ref={sunAnimation.ref}
                        onClick={
                            sunAnimation.playState === 'running' ?
                            () => sunAnimation.getAnimation().pause()
                          : () => sunAnimation.getAnimation().play()
                        }     
                    />
                </figure>
                <p
                    id="clouds"
                    ref={cloudsAnimation.ref}
                    onClick={
                       cloudsAnimation.playState === 'running' ?
                       () => cloudsAnimation.getAnimation().pause()
                     : () => cloudsAnimation.getAnimation().play()
                    }
                >
                   <img src={cloud} alt="" id="cloud"/>
                   <img src={cloud} alt="" id="cloud"/>
                </p>
            </div>
        
            <div className="treeBox">
                <img src={tree} alt="" id="tree"/>
            </div>
        
            <div className="birdbikeBox">
                <img
                    src={bird}
                    alt=""
                    id="bird"
                    ref={birdAnimation.ref}
                    onClick={
                       birdAnimation.playState === 'running' ?
                       () => birdAnimation.getAnimation().pause()
                     : () => birdAnimation.getAnimation().play()
                    }
                />
                <br/>
                <img
                    src={bike}
                    alt=""
                    id="bike"
                    ref={bikeAnimation.ref}
                    onClick={
                        bikeAnimation.playState === 'running' ?
                        () => bikeAnimation.getAnimation().pause()
                      : () => bikeAnimation.getAnimation().play() 
                    }
                />
            </div>
        </>
    )
}

export default App;