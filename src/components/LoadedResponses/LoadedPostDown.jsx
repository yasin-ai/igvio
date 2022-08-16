const LoadedPostDown = (props) => {
    let responseObj = props.responseObj;
    const postArray = responseObj.items[0].carousel_media;
    // If no post found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No post found !</h1>
                <p>Make sure you've entered proper link.</p>
            </div>
        );
    }
    responseObj = responseObj.items[0];

    return (
        <>
        <div className="post-head">
            <header className="reel-header">
                <div className="reel-creator">
                    <img
                        src={"https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png"}
                        className="profile-picture"
                        alt="profile"
                    />
                    <div className="creator-info">
                        <h3>{responseObj.user.username}</h3>
                        <p>{responseObj.user.full_name}</p>
                    </div>
                </div>
               
            </header>

            <article className="post-section">
                {responseObj.media_type === 2 && (
                    <div className="postinger">
                     <img
                        src={"https://www.cheaplikes.uk/wp-content/uploads/2020/02/instagram-video-views.png"}
                        className="post-media"
                        alt="Profile"
                    />
       <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.video_versions[0].url} >Download Video!!!</a>
          </div>
                )}
                 {responseObj.media_type === 8 && (
                        <section className="story-list">
                        {postArray.map((element, index) => {
                           if (element.media_type === 2) {
                               return ( 
                                   <>
                                   <img
                        src={"https://pngimage.net/wp-content/uploads/2019/05/isntagram-icon-png-4.png"}
                        className="post-media"
                        alt="post media"
                    />
     <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.video_versions[0].url} >Download Video!!!</a>

                                   </>
                               );
                           } else {
                               return (
                                <>
                                   <div className="story-item" key={index}>
                                   <img
                        src={"https://www.clipartkey.com/mpngs/m/24-243923_instagram-splash-png-image-free-download-searchpng-splash.png"}
                        className="post-media"
                        alt="post media"
                    />

                                   </div>
                                   <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.image_versions2.candidates[0].url} >Download !!!</a>

                                   </>

                               );
                           }
                       })}
                         </section>
                )}
            
            </article>
            {(() => {
    if (responseObj.caption === "NULL") {
        return (
          <div>No Captions</div>
        )
      } else if(responseObj.caption) {
        return (
          <p className="post-caption">{responseObj.caption.text}</p>
        )
      }
    })()}
            {/* <p className="post-caption">{responseObj.caption.text}</p> */}
            </div>
        </>
    );
};

export default LoadedPostDown;
