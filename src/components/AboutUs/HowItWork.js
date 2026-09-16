import React from "react"
import starIcon from "../../images/star-icon.png"
import process1 from "../../images/process/step1.jpg"
import process2 from "../../images/process/step2.jpg"
import process3 from "../../images/process/step3.jpg"
import process4 from "../../images/process/step4.jpg"
import process5 from "../../images/process/step5.jpg"
import process6 from "../../images/process/step6.jpg"
import shape from "../../images/shape/circle-shape1.png"

const HowItWork = () => {
  return (
    <>
      <section className="process-area pb-70 process-area-photo">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              How It Works
            </span>
            <h2>How Online Saathi Works</h2>
            <p>
              From connecting with a Saathi to accessing essential services —
              our simple process empowers workers at every step.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">1</div>
                <div className="image">
                  <img src={process1} alt="about" />
                </div>
                <h3>Connect with a Saathi</h3>
                <p>
                  A trained local Saathi agent introduces workers to the
                  platform and understands their needs and goals.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">2</div>
                <div className="image">
                  <img src={process2} alt="about" />
                </div>
                <h3>Skill Assessment</h3>
                <p>
                  Saathis conduct comprehensive skill assessments to identify
                  the best job opportunities for each worker.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">3</div>
                <div className="image">
                  <img src={process3} alt="about" />
                </div>
                <h3>Access Essential Services</h3>
                <p>
                  Workers can access government schemes, banking, insurance,
                  travel, and remittance services through the platform.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box ">
                <div className="number">4</div>
                <div className="image">
                  <img src={process4} alt="about" />
                </div>
                <h3>Job Matching</h3>
                <p>
                  Advanced matching connects workers with verified employers
                  and positions that match their skills and aspirations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">5</div>
                <div className="image">
                  <img src={process5} alt="about" />
                </div>
                <h3>Application Support</h3>
                <p>
                  Saathis help with applications, resumes, and interview
                  preparation to ensure every worker is confident.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">6</div>
                <div className="image">
                  <img src={process6} alt="about" />
                </div>
                <h3>Ongoing Support</h3>
                <p>
                  After placement, workers continue to receive support and
                  guidance to grow their careers and build better futures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape} alt="about" />
        </div>
      </section>
    </>
  )
}

export default HowItWork
