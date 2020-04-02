import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import './Documents.css';

function NonDisclosureAgreement(props: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main-container">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <article>
                <div className="article__title text-center">
                  <h1>Non-Disclosure Agreement</h1>
                  <span>This confidentiality agreement applies by default to all documents submitted to Edit Mule.</span>
                </div>
                <div className="article__body">
                  <p>
                    This Non-Disclosure Agreement (this "Agreement") is made effective as of April 01, 2020 (the "Effective Date"), by and between you as an Edit Mule User (the "Owner"), and Edit Mule (the "Recipient").
                  </p>
                  <p>
                    The Owner has requested and the Recipient agrees that the Recipient will protect the confidential material and information which may be disclosed between the Owner and the Recipient. Therefore, the parties agree as follows:
                  </p>
                  <h3>1. Confidential Information</h3>
                  <p>
                    The term "Confidential Information" means any information or material which is proprietary to the Owner, whether or not owned or developed by the Owner, which is not generally known other than by the Owner, and which the Recipient may obtain through any direct or indirect contact with the Owner. Regardless of whether specifically identified as confidential or proprietary, Confidential Information shall include any information provided by the Owner concerning the business, technology and information of the Owner and any third party with which the Owner deals, including, without limitation, business records and plans, trade secrets, technical data, product ideas, contracts, financial information, pricing structure, discounts, computer programs and listings, source code and/or object code, copyrights and intellectual property, inventions, sales leads, strategic alliances, partners, and customer and client lists. The nature of the information and the manner of disclosure are such that a reasonable person would understand it to be confidential.
                  </p>
                  <p>"Confidential Information" does not include:</p>
                  <ul className="bullets">
                    <li>matters of public knowledge that result from disclosure by the Owner; </li>
                    <li>information rightfully received by the Recipient from a third party without a duty of confidentiality; </li>
                    <li>information independently developed by the Recipient;</li>
                    <li>information disclosed by operation of law;</li>
                    <li>information disclosed by the Recipient with the prior written consent of the Owner;</li>
                  </ul>
                  <p>and any other information that both parties agree in writing is not confidential.</p>

                  <h3>2. Protection of Confidential Information</h3>
                  <p>
                    The Recipient understands and acknowledges that the Confidential Information has been developed or obtained by the Owner by the investment of significant time, effort and expense, and that the Confidential Information is a valuable, special and unique asset of the Owner which provides the Owner with a significant competitive advantage, and needs to be protected from improper disclosure. In consideration for the receipt by the Recipient of the Confidential Information, the Recipient agrees as follows:
                  </p>
                  <p>
                    <span className="type--uppercase">A. No Disclosure.</span> The Recipient will hold the Confidential Information in confidence and will not disclose the Confidential Information to any person or entity without the prior written consent of the Owner.
                  </p>
                  <p>
                    <span className="type--uppercase">B. Unauthorized Use.</span> The Recipient shall promptly advise the Owner if the Recipient becomes aware of any possible unauthorized disclosure or use of the Confidential Information.
                  </p>
                  <p>
                    <span className="type--uppercase">C. Application to Employees.</span> The Recipient shall not disclose any Confidential Information to any employees of the Recipient, except those employees who are required to have the Confidential Information in order to perform their job duties in connection with the limited purposes of this Agreement.
                  </p>

                  <h3>3. Unauthorized Disclosure of Information - Injunction</h3>
                  <p>
                    If it appears that the Recipient has disclosed (or has threatened to disclose) Confidential Information in violation of this Agreement, the Owner shall be entitled to an injunction to restrain the Recipient from disclosing the Confidential Information in whole or in part. The Owner shall not be prohibited by this provision from pursuing other remedies, including a claim for losses and damages.
                  </p>

                  <h3>4. Return of Confidential Information</h3>
                  <p>
                    Upon the written request of the Owner, the Recipient shall return to the Owner all written materials containing the Confidential Information. The Recipient shall also deliver to the Owner written statements signed by the Recipient certifying that all materials have been returned within five (5) days of receipt of the request.
                  </p>

                  <h3>5. Relationship of Parties</h3>
                  <p>
                    Neither party has an obligation under this Agreement to purchase any service or item from the other party, or commercially offer any products using or incorporating the Confidential Information. This Agreement does not create any agency, partnership, or joint venture.
                  </p>

                  <h3>6. No Warranty</h3>
                  <p>
                    The Recipient acknowledges and agrees that the Confidential Information is provided on an "AS IS" basis. THE OWNER MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THE CONFIDENTIAL INFORMATION AND HEREBY EXPRESSLY DISCLAIMS ANY AND ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL THE OWNER BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH OR ARISING OUT OF THE PERFORMANCE OR USE OF ANY PORTION OF THE CONFIDENTIAL INFORMATION. The Owner does not represent or warrant that any product or business plans disclosed to the Recipient will be marketed or carried out as disclosed, or at all. Any actions taken by the Recipient in response to the disclosure of the Confidential Information shall be solely at the risk of the Recipient.
                  </p>

                  <h3>7. Limited License to Use</h3>
                  <p>
                    The Recipient shall not acquire any intellectual property rights under this Agreement except the limited right to use as set forth above. The Recipient acknowledges that, as between the Owner and the Recipient, the Confidential Information and all related copyrights and other intellectual property rights, are (and at all times will be) the property of the Owner, even if suggestions, comments, and/or ideas made by the Recipient are incorporated into the Confidential Information or related materials during the period of this Agreement.
                  </p>

                  <h3>8. Indemnity</h3>
                  <p>
                    Each party agrees to defend, indemnify, and hold harmless the other party and its officers, directors, agents, affiliates, distributors, representatives, and employees from any and all third party claims, demands, liabilities, costs and expenses, including reasonable attorney's fees, costs and expenses resulting from the indemnifying party's material breach of any duty, representation, or warranty under this Agreement.
                  </p>

                  <h3>9. Attorney's Fees</h3>
                  <p>
                    In any legal action between the parties concerning this Agreement, the prevailing party shall be entitled to recover reasonable attorney's fees and costs.
                  </p>

                  <h3>10. Term</h3>
                  <p>
                    The obligations of this Agreement shall survive indefinitely from the Effective Date or until the Owner sends the Recipient written notice releasing the Recipient from this Agreement. After that, the Recipient must continue to protect the Confidential Information that was received during the term of this Agreement from unauthorized use or disclosure indefinitely.
                  </p>

                  <h3>11. General Provisions</h3>
                  <p>
                    This Agreement sets forth the entire understanding of the parties regarding confidentiality. Any amendments must be in writing and signed by both parties. This Agreement shall be construed under the laws of the State of South Carolina. This Agreement shall not be assignable by either party. Neither party may delegate its duties under this Agreement without the prior written consent of the other party. The confidentiality provisions of this Agreement shall remain in full force and effect at all times in accordance with the term of this Agreement. If any provision of this Agreement is held to be invalid, illegal or unenforceable, the remaining portions of this Agreement shall remain in full force and effect and construed so as to best effectuate the original intent and purpose of this Agreement.
                  </p>

                  <h3>12. Whistleblower Protection</h3>
                  <p>
                    This Agreement is in compliance with the Defend Trade Secrets Act and provides civil or criminal immunity to any individual for the disclosure of trade secrets: (i) made in confidence to a federal, state, or local government official, or to an attorney when the disclosure is to report suspected violations of the law; or (ii) in a complaint or other document filed in a lawsuit if made under seal.
                  </p>

                  <h3>12. Signatories</h3>
                  <p>
                    This Agreement shall be executed by "Edit Mule User" and Edit Mule and delivered in the manner prescribed by law as of the date first written above.
                  </p>
                  <span className="type--fine-print">
                    Last updated: April 1, 2020
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NonDisclosureAgreement;
