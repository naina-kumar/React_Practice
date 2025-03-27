const Image=({img,captions})=>{
    return(
        <>
        <div>
            <img src={img} alt="text" />

        </div>
        <div>
            {captions}
        </div>
     </>   
    )
}
export default Image