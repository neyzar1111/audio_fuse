import React from "react";

const Audio = ({audio,i}) =>{
    return(
            <>
                    {audio && (
                        <div className="audio__item">
                            <div>
                                <div className="audio__name">{audio.title}</div>
                                <div className="audio__author">{audio.author}</div>
                            </div>
                            <div className="audio__description">{audio.description}</div>
                        </div>
                    )}
            </>
    )
}
export default Audio;