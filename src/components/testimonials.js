export default function testimonials() {
  return (
    <div id="testimonialCarousel" className="carousel carousel-dark bg-light slide fw-light fst-italic" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 mt-3 px-2 testimonial">
            <h5>Having Tina as a life coach is an amazing experience. Her presence is very calming and loving; and we were able to create a realistic action plan that addressed all of my needs without feeling stressed or worried about executing it, but eager and excited to grow. I can't recommend her life coaching skills enough.</h5>
          </div>
          <div className="carousel-caption d-block">
            <p>-Byron, <em>Web Developer</em></p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 mt-3 px-2 testimonial">
            <h5>What a camp man! From vegan meal plans and guidance to keeping my mind sharp, focused and on point. And the mental side of things...woooh. Its hard to really get across to people how important your mental health is in general and when it comes to the added stress of fight camp! Also fueling your body properly can help you in ways that pays dividends for years to come. Make sure you check Will out, very essential part of any successful fighters camp!</h5>
          </div>
          <div className="carousel-caption d-block">
            <p>-Von, <em>Professional Boxer</em></p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 mt-3 px-2 testimonial">
            <h5>A shout out to my coach Will is not enough. This man literally took me from depressed, overweight and sick to Plant Powered Warrior in the truest sense. If you are struggling like I was... you NEED to contact him.</h5>
          </div>
          <div className="carousel-caption d-block">
            <p>-Justin, <em>Corporate Professional</em></p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 mt-3 px-2 testimonial">
            <h5>It has been such a pleasure working with Tina! For over two years I have been struggling to complete a project for myself. After a single session with Tina, not only did she help me gain confidence in myself, but with her encouragement, kindness, and an action plan, I successfully restarted and completed the project I had been struggling with for so long. Her genuine desire to help others succeed has been truly motivating.</h5>
          </div>
          <div className="carousel-caption d-block">
            <p>-Andrea, <em>Pharmacist</em></p>
          </div>
        </div>
      </div>
    </div>
  )
}
