import React from 'react'
import Footer from '../components/footer';

const Thankyou = () => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <p className='display-6 d-block w-100 mt-5 text-purple'>Congratulations on taking the next steps in your personal growth journey. We look forward to meeting with you.</p>
      <p className="lead">In the meantime, we encourage you to check out our YouTube and Instagram pages for mindfulness content. Here is a FREE meditation to boost your mood for the day. </p>
      <p className="lead"><strong><a href="/" className="text-purple" style={{textDecoration: 'none'}}><i className="fas fa-chevron-left">  </i> Return Home</a></strong></p>
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
      }}>
        <iframe style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src="https://www.youtube.com/embed/80iL6vBuIxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Thankyou
