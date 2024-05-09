import React from 'react'
import ColorTable from "../../ColorTable";
import blueCheck from "../../../img/svg/blue-check-2.svg";
import greenCheck from "../../../img/svg/green-check-2.svg";

const Benefits = () => {
    return (
        <section className="section benefits">
            <div className="container">
              <h2 className="title">
                Why is this beneficial?
              </h2>
              <div className="boxesWrapper">
                <ColorTable
                  color="#2FB2DF"
                  title="Open Source Community Benefits"
                  items={[
                    'Building healthier, more resilient open source communities through diversity of background and skillset of the students entering the community as contributors.',
                    'Larger pipeline and funnel for companies to hire from for expertise in open source collaboration and knowledge.'
                  ]}
                  itemIcon={blueCheck}
                />
                <ColorTable
                  color="#45B65C"
                  title="Funding Governance"
                  items={[
                    'Honed communication skills for students as a result of collaboration with a global open source community with a geographically distributed base of contributors.',
                    'Real world development experience for students that isn’t done under an NDA or on proprietary software so they can share it in future interviews and on their resumes.'
                  ]}
                  itemIcon={greenCheck}
                />
              </div>
            </div>
        </section>
    )
}

export default Benefits;
