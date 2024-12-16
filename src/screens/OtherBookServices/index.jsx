import React from 'react'
import DefaultLayout from '../../components/layout'

import servicesBg from "../../assets/images/services/services-bg.jpg"

const OtherBookServices = () => {
  return (
    <DefaultLayout>
      <section id="banner_parent" className="othrspgserv" style={{ backgroundImage: `url(${servicesBg})` }}>
        <section id="banner" className="page-section">
            <div className="wrapper">
                <div className="bnr_con animatedParent">
                    {/* <!-- <figure className="services_banner"><img src="assets/images/services/services-bg.jpg" alt="large books" /></figure> --> */}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="services_bnr_info">
                                    <div className="services_bnr_info">
                                        <h1 className="othrspgghdng">Other Book Services</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </section>
    </section>
    </DefaultLayout>
  )
}

export default OtherBookServices
