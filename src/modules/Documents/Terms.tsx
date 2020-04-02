import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import './Documents.css';

function Terms(props: any) {
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
                  <h1>Terms and Conditions</h1>
                </div>
                <div className="article__body">
                  <p>These Terms govern</p>
                  <ul className="bullets">
                    <li>the use of Edit Mule, and,</li>
                    <li>any other related Agreement or legal relationship with the Owner</li>
                  </ul>
                  <p>in a legally binding way. Capitalized words are defined in the relevant dedicated section of this document.</p>
                  <p>The User must read this document carefully.</p>
                  <p> <b>Edit Mule, LLC</b> <br />1911 Second Street <br />Livermore, CA 94550</p>
                  <p><b>Owner contact email:</b> hello@editmule.com </p>
                  <h2 id="introduction">Introduction</h2>
                  <h3 id="this-document">This document</h3>
                  <p>This document is a legal agreement between you, the User, and the entity providing Edit Mule. It governs your use of the online properties and, in any case, for the use of the services provided. “Legal agreement” means that the terms of this agreement are binding on the relationship between you and us once you have accepted the terms. For simplicity, “User”, “you”, “your” and similar terms, either in singular or plural form, refer to you, the User. “We”, “our”, “us” and similar terms refer to the corporation that owns and manages Edit Mule as outlined in the present document. “Edit Mule” refers to the current website and/or application. “Agreement” refers to this document, as amended from time to time. The Agreement is concluded in the English language. Other defined terms are set forth in the section named “Definitions” at the bottom of the Agreement.</p>
                  <h2 id="registration-content-on-this_application-and-prohibited-use-of-this_application">Registration, content on Edit Mule and prohibited use of Edit Mule</h2>
                  <h3 id="registration">Registration</h3>
                  <p>In order to use the Service or any part of it, Users must register in a truthful and complete manner by providing all the required data in the relevant registration form. The Users must also accept the Privacy Policy and these Terms and Conditions in full. Users are responsible for keeping their login credentials confidential.</p>
                  <p>It is understood that the Owner shall not be held responsible under any circumstances in case of loss, disclosure, theft or unauthorized use by third parties, for whatever reason, of the User's access credential.</p>
                  <h3 id="deleting-user-accounts-and-account-termination">Deleting User accounts and account termination</h3>
                  <p>Registered Users can cancel their accounts and stop using the Service at any time, through the interface of Edit Mule or by directly contacting the Owner. The Owner, in case of breach of the Terms by the User, reserves the right to suspend or terminate the User's account at any time and without notice.</p>
                  <p>The Owner reserves the right to suspend or terminate the User's account at any time and without notice if it believes that:</p>
                  <ul className="bullets">
                    <li>User has violated this Agreement; and/or</li>
                    <li>User's access or use of the Service may result in injury to the Owner, other Users or third parties; and/or</li>
                    <li>the use of Edit Mule by the User may result in violation of law or regulations; and/or</li>
                    <li>in case of an investigation by legal action or governmental involvement; and/or</li>
                    <li>the account is deemed to be, at the Owner’s sole discretion, for whatever reason, inappropriate or offensive or in violation of this Agreement.</li>
                  </ul>
                  <h3 id="content-available-on-this_application">Content available on Edit Mule</h3>
                  <p>The content available on Edit Mule is protected by the laws in force on intellectual property rights and by related international treaties. Unless otherwise stated, use of any content is permitted exclusively within the limits set forth in the present clause.<br /> The Owner grants the User, for the entire duration of the Agreement, a personal, non-assignable and non-exclusive license for the use of such content. Such license is solely intended for personal use of any such content and never for its commercial use and is limited to the User's device.<br /> Therefore, User may not copy and/or download and/or share (beyond the limits set forth below), modify, publish, transmit, sell, sublicense, edit, transfer/assign to third parties or create derivative works from the content, even of third parties, available on Edit Mule, nor allow any third party to do so through the User or its device, even without User's knowledge. Where explicitly stated on Edit Mule, the User may be authorized, only for personal use, to download and/or copy and/or share some content available through Edit Mule, for its sole personal use and provided that the copyright attributions and all the other attributions requested by the Owner are correctly implemented.</p>
                  <h3 id="content-provided-by-third-parties">Content provided by third parties</h3>
                  <p>The Owner does not moderate the content or links provided by third parties before their publication on Edit Mule. The Owner is not responsible for the content provided by third parties or for its availability.</p>
                  <h3 id="content-provided-by-the-user">Content provided by the User</h3>
                  <p>Users are responsible for their own content and that of third parties that they share through Edit Mule, that they upload and post on or through Edit Mule, or that they transfer by any other means. Users confirm that they have allthe necessary consents from third parties whose data and/or content they share with the Owner and hereby indemnify the Owner for any liability or claim arising against the Owner in connection with illegal distribution of third-party content or unlawful use of the Service.<br /> The Owner does not moderate the content provided by Users or by third parties but will act if complaints are received from Users or if orders are issued by the public authorities regarding content deemed offensive or illegal.</p>
                  <p>In particular, the Owner may decide to suspend or interrupt the visualisation of content in the event that:</p>
                  <ul className="bullets">
                    <li>other Users file complaints;</li>
                    <li>a notice of infringement of intellectual property rights is received;</li>
                    <li>it is decided to do so in view of, or as a result of, legal actions;</li>
                    <li>said action is solicited by a public authority; or</li>
                    <li>if it is believed that the content, while being accessible via Edit Mule, may put at risk the Users, third parties, the availability of the Service and/or the Owner.</li>
                  </ul>
                  <h3 id="rights-over-content-provided-by-users">Rights over content provided by Users</h3>
                  <p>The only rights granted to the Owner in relation to content provided by Users are those necessary to operate and maintain Edit Mule.</p>
                  <p>Unless stated otherwise, the following applies:<br /> By submitting, posting or displaying content on or through Edit Mule, the User grants a license to the Owner without territorial limits, non-exclusive, royalty-free and with the right to sublicense, to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any media or via distribution methods currently available or developed later.</p>
                  <h3 id="services-provided-by-third-parties">Services provided by third parties</h3>
                  <p>Users may use third-party services or content included in Edit Mule, but they must be aware of these third parties' terms and conditions and have given consent to them. Under no circumstances will the Owner be deemed liable in relation to the proper functionality or availability, or both, of third-party services.</p>
                  <h3 id="forbidden-use">Forbidden use</h3>
                  <p>The Service shall be used only in accordance with these Terms.<br /> Users may not:</p>
                  <ul className="bullets">
                    <li>reverse engineer, decompile, disassemble, modify or create derivative works based on Edit Mule or any portion of it;</li>
                    <li>circumvent any technology used by Edit Mule or its licensors to protect content accessible via it;</li>
                    <li>copy, store, edit, change, prepare any derivative work of or alter in any way any of the content provided through Edit Mule;</li>
                    <li>use any robot, spider, site search/retrieval application, or other automated device, process or means to access, retrieve, scrape, or index any portion of Edit Mule or its content;</li>
                    <li>rent, lease or sublicense Edit Mule;</li>
                    <li>defame, abuse, harass, use threatening practices, threaten or violate the legal rights of others in any other way (such as rights of privacy and publicity);</li>
                    <li>disseminate or publish content that is unlawful, obscene, illegitimate, defamatory or inappropriate;</li>
                    <li>misappropriate any account in use by another User;</li>
                    <li>register or use the Service in order to approach the Users to promote, sell or advertise products or services of any kind through Edit Mule in any way;</li>
                    <li>use Edit Mule in any other improper manner that violates the Terms.</li>
                  </ul>
                  <h2 id="terms-and-conditions-of-sale">Terms and conditions of sale</h2>
                  <h2 id="purchase">Purchase</h2>
                  <h3 id="paid-services">Paid services</h3>
                  <p>Edit Mule provides for additional services or subscriptions available upon payment of a fee.<br /> The fees, duration and conditions for the accounts and paid services are highlighted in the relevant section of Edit Mule.</p>
                  <h3 id="methods-of-payment">Methods of payment</h3>
                  <p>Edit Mule uses third-party tools for its payment processing and is not connected with any of the provided payment information – such as the credit card – in any way.</p>
                  <p>Any declined payment costs shall be borne by the User.</p>
                  <h3 id="offers-and-discounts">Offers and discounts</h3>
                  <p>The Owner reserves the right, at its sole and unquestionable discretion, to offer discounts and / or offers for a limited period of time.<br /> The conditions of these discounts and / or offers will be specified each time on the corresponding information page of Edit Mule. Each discount and / or offer will be valid for the fixed term or, where appropriate, while stocks last.<br /> If the discount and / or offer are for a limited time only, the time refers to the time zone of the Owner, as indicated by its location in this document.</p>
                  <h3 id="refunds">Refunds</h3>
                  <p>Edit Mule accepts requests for cancellation and refund by the Users only for the portion of Service not yet provided and within 14 days after payment. The fees paid are non-refundable in the event that:</p>
                  <ul className="bullets">
                    <li>the Service has already been provided at the time of payment;</li>
                    <li>the User had not disabled automatic renewals before the expiration date and the service has been automatically renewed for an additional billing period.</li>
                  </ul>
                  <h2 id="delivery">Delivery</h2>
                  <h3 id="delivery">Delivery</h3>
                  <p>Deliveries are made in digital form during normal business hours using the email address indic by the User and in the manner specified in the order summary.<br/>
                  Upon delivery, the User must verify the quality and content of all services rendered specifying any anomalies in the delivery form.</p>
                  <h2 id="indemnification-and-limitation-of-liability">Indemnification and limitation of liability</h2>
                  <h3 id="indemnity">Indemnity</h3>
                  <p>The User agrees to indemnify and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners and employees, as the case may be, harmless from and against any claim or demand, including without limitation, reasonable lawyer's fees and costs, made by any third party due to or arising out of the User’s content, use of or connection to the Service, violation of these Terms, or violation of any third-party rights.</p>
                  <h3 id="limitations-of-liability">Limitations of liability</h3>
                  <p>Edit Mule and all functions accessible through Edit Mule are made available to the Users under the terms and conditions of the Agreement, without any warranty, express or implied, that is not required by law. In particular, there is no guarantee of suitability of the services offered for the User's specific goals.<br /> Edit Mule and functions accessible through Edit Mule are used by the Users at their own risk and under their own responsibility.<br /> In particular, the Owner, within the limits of applicable law, is liable for contractual and non-contractual damages to Users or third parties only by way of intent or gross negligence, when these are immediate and direct consequences of the activity of Edit Mule. Therefore, the Owner shall not be liable for:</p>
                  <ul className="bullets">
                    <li>any losses that are not a direct consequence of the breach of the Agreement by the Owner;</li>
                    <li>any loss of business opportunities and any other loss, even indirect, that may be incurred by the User (such as, but not limited to, trading losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, etc.);</li>
                    <li>damages or losses resulting from interruptions or malfunctions of Edit Mule due to acts of force majeure, or at least to unforeseen and unforeseeable events and, in any case, independent of the will and extraneous to the Owner's control, such as, by way of example but not limited to, failures or disruptions of telephone or electrical lines, the Internet and / or other means of transmission, unavailability of websites, strikes, natural disasters, viruses and cyber attacks, interruptions in the delivery of products, third-party services or applications; and</li>
                    <li>incorrect or unsuitable use of Edit Mule by Users or third parties.</li>
                  </ul>
                  <h2 id="miscellaneous">Miscellaneous</h2>
                  <h3 id="service-interruption">Service interruption </h3>
                  <p>To guarantee the Users the best possible use of the Service, the Owner reserves the right to interrupt the service for maintenance or system updates, informing the Users through constant updates published on Edit Mule.</p>
                  <h3 id="service-reselling">Service reselling</h3>
                  <p>Users are not allowed to reproduce, duplicate, copy, sell, resell or exploit any portion of Edit Mule and of its Service without the Owner’s express prior written permission, granted either directly or through a proper reselling program.</p>
                  <h3 id="privacy-policy">Privacy policy</h3>
                  <p>For information about the use of their personal data, Users must refer to the privacy policy of Edit Mule which is hereby considered to be part of these Terms.</p>
                  <h3 id="intellectual-property-rights">Intellectual property rights</h3>
                  <p>All trademarks, nominal or figurative, and all other marks, trade names, service marks, word marks, illustrations, images, or logos that appear concerning Edit Mule are, and remain, the exclusive property of the Owner or its licensors and are protected by the laws in force on trademarks and by related international treaties.</p>
                  <p>All trademarks and all other marks, trade names, service marks, word marks, trademarks, illustrations, images, logos regarding third parties and content posted by such third parties on Edit Mule are and remain the exclusive property of such third parties and their licensors, and are protected by applicable trademark laws and relevant international treaties. The Owner does not own the aforementioned intellectual property rights and may use them only within the limits and in accordance with the contracts concluded with such third parties and for the purposes outlined herein.</p>
                  <h3 id="filing-claims-under-dmca">Filing claims under DMCA</h3>
                  <p>Under the Digital Millennium Copyright Act (DMCA), you can request that the Owner remove material that infringes a copyright. To do so you must file a document that is known as a DMCA “takedown notice”, which must comply with the requirements specified by the law.</p>
                  <p>In particular, your “takedown notice” must include:</p>
                  <ul className="bullets">
                    <li>a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                    <li>identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works;</li>
                    <li>identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material;</li>
                    <li>information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted;</li>
                    <li>a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
                    <li>a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  </ul>
                  <p>You must send this takedown notice in physical form using the following contact information: <b>Edit Mule, LLC</b> 1911 Second Street Livermore, CA 94550.</p>
                  <p>If you knowingly misrepresent in your notification that the material or activity is infringing, you will be liable for any damages, including costs and attorneys' fees, incurred by us or the alleged infringer as the result of our relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing.</p>
                  <h3 id="changes-to-these-terms">Changes to these Terms</h3>
                  <p>The Owner reserves the right to modify these Terms at any time, informing Users by publishing a notice within Edit Mule.</p>
                  <p>Users who continue to use Edit Mule after the publication of the changes accept the new Terms in their entirety.</p>
                  <h3 id="assignment-of-contract">Assignment of contract</h3>
                  <p>The Owner reserves the right to transfer, assign, dispose of by novation or subcontract all or any rights or obligations under these Terms, as long as the User's rights under the Terms are not affected.</p>
                  <p>Users may not assign or transfer their rights or obligations under these Terms in any way without the written permission of the Owner.</p>
                  <h3 id="contacts">Contacts</h3>
                  <p>All communications relating to Edit Mule must be sent using the contacts stated in this document.</p>
                  <h3 id="severability">Severability</h3>
                  <p>If any provision of these Terms is invalid or unenforceable, that clause will be removed and the remaining provisions shall not be affected and they will remain in force.</p>
                  <h3 id="governing-law-and-jurisdiction">Governing law and jurisdiction</h3>
                  <p>These Terms and any dispute concerning the implementation, interpretation and validity of this agreement are subject to the law, the jurisdiction of the state and to the exclusive jurisdiction of the courts where the Owner has their registered offices.<br /> An exception to this rule applies in cases, where the law provides a sole place of jurisdiction for consumers.</p>
                  <div className="one_line_col">
                    <div className="box_primary box_10 definitions expand">
                      <h3 className="expand-click w_icon_24 icon_ribbon"> Definitions </h3>
                      <div className="expand-content">
                        <h4>Edit Mule (or this Application)</h4>
                        <p>The property that enables the provision of the Service as defined above and described in the introductory section of these Terms.</p>
                        <h4>Agreement</h4>
                        <p>Any legally binding or contractual relationship between the Owner and the User, governed by these Terms.</p>
                        <h4>European (or Europe)</h4>
                        <p>Applies where a User is physically present or has their registered offices within the EU, regardless of nationality.</p>
                        <h4>Example withdrawal form</h4>
                        <p><em>Addressed to:</em></p>
                        <p><em><b>Edit Mule, LLC</b> 1911 Second Street Livermore, CA 94550</em><br /> <em>hello@editmule.com</em></p>
                        <p><em>I/We hereby give notice that I/we withdraw from my/our contract of sale of the following goods/for the provision of the following service:</em></p>
                        <p><em>_____________________________________________ (insert a description of the goods/services that are subject to the respective withdrawal)</em></p>
                        <ul>
                          <li><em>Ordered on: _____________________________________________ (insert the date)</em></li>
                          <li><em>Received on: _____________________________________________ (insert the date)</em></li>
                          <li><em>Name of consumer(s):_____________________________________________</em></li>
                          <li><em>Address of consumer(s):_____________________________________________</em></li>
                          <li><em>Date: _____________________________________________</em></li>
                        </ul>
                        <p><em>(sign if this form is notified on paper)</em></p>
                        <h4>Example withdrawal form</h4>
                        <p><em>Addressed to:</em></p>
                        <p><em><b>Edit Mule, LLC</b> 1911 Second Street Livermore, CA 94550</em><br /> <em>hello@editmule.com</em></p>
                        <p><em>I/We hereby give notice that I/we withdraw from my/our contract of sale of the following goods/for the provision of the following service:</em></p>
                        <p><em>_____________________________________________ (insert a description of the goods/services that are subject to the respective withdrawal)</em></p>
                        <ul>
                          <li><em>Ordered on: _____________________________________________ (insert the date)</em></li>
                          <li><em>Received on: _____________________________________________ (insert the date)</em></li>
                          <li><em>Name of consumer(s):_____________________________________________</em></li>
                          <li><em>Address of consumer(s):_____________________________________________</em></li>
                          <li><em>Date: _____________________________________________</em></li>
                        </ul>
                        <p><em>(sign if this form is notified on paper)</em></p>
                        <h4>Owner (or We)</h4>
                        <p>Indicates the natural person(s) or legal entity that provides Edit Mule and/or the Service to Users.</p>
                        <h4>Service</h4>
                        <p>The service provided by Edit Mule as described in these Terms and on Edit Mule.</p>
                        <h4>Terms</h4>
                        <p>All provisions applicable to the use of Edit Mule and/or the Service as described in this document, including any other related documents or agreements, and as updated from time to time.</p>
                        <h4>User (or You)</h4>
                        <p>Indicates any natural person or legal entity using Edit Mule.</p>
                        <span className="type--fine-print">
                          Last updated: April 1, 2020
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
