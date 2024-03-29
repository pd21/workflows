import React from "react"

const ImageComp = ({alt, role}) => {
    return (
    <div>
        <img 
            src="https://media.gettyimages.com/id/1382384512/photo/bangalore-or-bengaluru.jpg?s=612x612&w=gi&k=20&c=YeV-07x82Yx50ekTh99C4jcajCegMunBusdvIsEbW9c=" 
            alt={alt} 
            role={role} 
        />
    </div>
    )}

export default ImageComp;