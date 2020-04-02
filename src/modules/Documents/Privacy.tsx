import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

import './Documents.css';

function Privacy(props: any) {
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
                  <h1>Privacy Policy</h1>
                </div>
                <div className="article__body">
                  <p>Edit Mule collects some Personal Data from its Users.</p>
                  <p>Users may be subject to different protection standards and broader standards may therefore apply to some. In order to learn more about the protection criteria, Users can refer to the applicability section.</p>
                  <p>This document has <a href="#california_info" target="_self">a section dedicated to Californian consumers and their privacy rights</a>.</p>
                  <p>This document can be printed for reference by using the print command in the settings of any browser.</p>
                  <h2 id="owner_of_the_data"> Owner and Data Controller </h2>
                  <p><b>Edit Mule, LLC</b> <br />1911 Second Street <br />Livermore, CA 94550</p>
                  <p><b>Owner contact email:</b> hello@editmule.com</p>
                  <h2 id="types_of_data"> Types of Data collected </h2>
                  <p> Among the types of Personal Data that Edit Mule collects, by itself or through third parties, there are: Cookies; Usage Data; email address; first name; last name; various types of Data; Data communicated while using the service. </p>
                  <p>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.<br />Personal Data may be freely provided by
                  the User, or, in case of Usage Data, collected automatically when using Edit Mule.<br />Unless specified otherwise, all Data requested by Edit Mule is mandatory and failure to provide this Data may make it impossible for Edit Mule
                  to provide its services. In cases where Edit Mule specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.<br />Users
                  who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.<br />Any use of Cookies – or of other tracking tools – by Edit Mule or by the owners of third-party services used by Edit Mule serves the
                  purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.</p>
                  <p>Users are responsible for any third-party Personal Data obtained, published or shared through Edit Mule and confirm that they have the third party's consent to provide the Data to the Owner.</p>
                  <h2 id="place_of_processing">Mode and place of processing the Data</h2>
                  <h3>Methods of processing</h3>
                  <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.<br />The Data processing is carried out using computers and/or IT enabled tools, following
                    organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of Edit Mule
                    (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as
                  Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.</p>
                  <h3>Legal basis of processing</h3>
                  <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
                  <ul className="bullets">
                    <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent
                    or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li>
                    <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li>
                    <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
                    <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li>
                    <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
                  </ul>
                  <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to
                  enter into a contract. </p>
                  <h3>Place</h3>
                  <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.<br /><br /> Depending on the User's location, data transfers may involve transferring the User's Data
                  to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.</p>
                  <p>If broader protection standards are applicable, Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or
                  set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.<br /><br /> If any such transfer takes place, Users can find out more by checking the relevant sections of this
                  document or inquire with the Owner using the information provided in the contact section.</p>
                  <h3>Retention time</h3>
                  <p>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</p>
                  <p>Therefore:</p>
                  <ul className="bullets">
                    <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li>
                    <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner
                    within the relevant sections of this document or by contacting the Owner.</li>
                  </ul>
                  <p>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a
                  longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.<br /><br /> Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to
                  erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.</p>
                  <h2 id="use_collected_data">The purposes of processing</h2>
                  <p> The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect
                    any malicious or fraudulent activity, as well as the following: Tag Management, Analytics, User database management, Remarketing and behavioral targeting, Contacting the User, Advertising, Handling payments, Registration and
                  authentication, Hosting and backend infrastructure, Social features, Displaying content from external platforms and Interaction with live chat platforms. </p>
                  <p>For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.</p>
                  <h2 id="data_processing_detailed_info">Detailed information on the processing of Personal Data</h2>
                  <p>Personal Data is collected for the following purposes and using the following services:</p>
                  <h3>Advertising</h3>
                  <p>This type of service allows User Data to be utilized for advertising communication purposes displayed in the form of banners and other advertisements on Edit Mule, possibly based on User interests.<br /> This does not mean that all
                  Personal Data are used for this purpose. Information and conditions of use are shown below.<br /> Some of the services listed below may use Cookies to identify Users or they may use the behavioral retargeting technique, i.e. displaying ads
                  tailored to the User’s interests and behavior, including those detected outside Edit Mule. For more information, please check the privacy policies of the relevant services.<br /> In addition to any opt out offered by any of the services
                  below, the User may opt out of a third-party service's use of cookies by visiting the <a href="http://optout.networkadvertising.org/">Network Advertising Initiative opt-out page</a>.</p>

                  <h3>Analytics</h3>
                  <p>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</p>
                  <h4>Google Analytics (Google LLC)</h4>
                  <p>Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of Edit Mule, to prepare reports on its activities and share them with other Google
                  services.<br /> Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout?hl=en" rel="noopener noreferrer" target="_blank">Opt Out</a>. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h4>Google Ads conversion tracking (Google LLC)</h4>
                  <p>Google Ads conversion tracking is an analytics service provided by Google LLC that connects data from the Google Ads advertising network with actions performed on Edit Mule.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h4>Display Advertising extension for Google Analytics (Google LLC)</h4>
                  <p>Google Analytics on Edit Mule might use Google's Interest-based advertising, 3rd-party audience data and information from the DoubleClick Cookie to extend analytics with demographics, interests and ads interaction data.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Opt Out</a>. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h4>User ID extension for Google Analytics (Google LLC)</h4>
                  <p>Google Analytics on Edit Mule makes use of a feature called User ID. This setup allows for a more accurate tracking of Users by associating that User with the same ID over various sessions and devices. It is set up in a way that
                  doesn’t allow Google to personally identify an individual or permanently identify a particular device.<br /> The User ID extension might make it possible to connect Data from Google Analytics with other Data about the User collected by
                  Edit Mule.<br /> The opt-out link below will only opt you out for the device you are on, but not from tracking performed independently by the Owner. Contact the Owner via the email address provided in this privacy policy to object to
                  the aforementioned tracking as well.</p>
                  <p> Personal Data processed: Cookies. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Opt Out</a>. Privacy Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h4>Analytics collected directly (Edit Mule)</h4>
                  <p>Edit Mule uses an internal analytics system that does not involve third parties.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h3>Contacting the User</h3>
                  <h4>Mailing list or newsletter (Edit Mule)</h4>
                  <p>By registering on the mailing list or for the newsletter, the User’s email address will be added to the contact list of those who may receive email messages containing information of commercial or promotional nature concerning Edit Mule. Your email address might also be added to this list as a result of signing up to Edit Mule or after making a purchase.</p>
                  <p> Personal Data processed: email address; first name; last name. </p>
                  <p> Category of personal data collected according to CCPA: identifiers. </p>
                  <h4>Contact form (Edit Mule)</h4>
                  <p>By filling in the contact form with their Data, the User authorizes Edit Mule to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.</p>
                  <p> Personal Data processed: email address; first name; last name. </p>
                  <p> Category of personal data collected according to CCPA: identifiers. </p>

                  <h3>Handling payments</h3>
                  <p>Payment processing services enable Edit Mule to process payments by credit card, bank transfer or other means. To ensure greater security, Edit Mule shares only the information necessary to execute the transaction with the financial
                  intermediaries handling the transaction.<br /> Some of these services may also enable the sending of timed messages to the User, such as emails containing invoices or notifications concerning the payment.</p>
                  <h4>Stripe (Stripe Inc)</h4>
                  <p>Stripe is a payment service provided by Stripe Inc.</p>
                  <p> Personal Data processed: various types of Data as specified in the privacy policy of the service. </p>
                  <p> Place of processing: United States &ndash; <a href="https://stripe.com/terms/US" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h3>Hosting and backend infrastructure</h3>
                  <p>This type of service has the purpose of hosting Data and files that enable Edit Mule to run and be distributed as well as to provide a ready-made infrastructure to run specific features or parts of Edit Mule. Some of these services
                  work through geographically distributed servers, making it difficult to determine the actual location where the Personal Data are stored.</p>
                  <h4>Amazon Web Services (AWS) (Amazon Web Services, Inc.)</h4>
                  <p>Amazon Web Services (AWS) is a hosting and backend service provided by Amazon Web Services, Inc.</p>
                  <p> Personal Data processed: various types of Data as specified in the privacy policy of the service. </p>
                  <p> Place of processing: United States &ndash; <a href="https://aws.amazon.com/compliance/data-privacy-faq/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h3>Interaction with live chat platforms</h3>
                  <p>This type of service allows Users to interact with third-party live chat platforms directly from the pages of Edit Mule, for contacting and being contacted by Edit Mule support service.<br /> If one of these services is installed,
                  it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service. Moreover, live chat conversations may be logged.</p>
                  <h4>Drift Widget (Drift.com, Inc.)</h4>
                  <p>The Drift Widget is a service for interacting with the Drift live chat platform provided by Drift.com, Inc.</p>
                  <p> Personal Data processed: Cookies; Data communicated while using the service; Usage Data; various types of Data as specified in the privacy policy of the service. </p>
                  <p> Place of processing: United States &ndash; <a href="https://www.drift.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h3>Registration and authentication</h3>
                  <p>By registering or authenticating, Users allow Edit Mule to identify them and give them access to dedicated services.<br /> Depending on what is described below, third parties may provide registration and authentication services. In
                  this case, Edit Mule will be able to access some Data, stored by these third-party services, for registration or identification purposes.</p>
                  <h4>Amazon Web Services (AWS) (Amazon Web Services, Inc.)</h4>
                  <p>Amazon Web Services (AWS) is a hosting and backend service provided by Amazon Web Services, Inc.</p>
                  <p> Personal Data processed: various types of Data as specified in the privacy policy of the service. </p>
                  <p> Place of processing: United States &ndash; <a href="https://aws.amazon.com/compliance/data-privacy-faq/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h3>Remarketing and behavioral targeting</h3>
                  <p>This type of service allows Edit Mule and its partners to inform, optimize and serve advertising based on past use of Edit Mule by the User.<br /> This activity is performed by tracking Usage Data and by using Cookies, information
                  that is transferred to the partners that manage the remarketing and behavioral targeting activity.<br /> In addition to any opt out offered by any of the services below, the User may opt out of a third-party service's use of cookies by
                  visiting the <a href="http://optout.networkadvertising.org/">Network Advertising Initiative opt-out page</a>.</p>
                  <h4>Google Ads Remarketing (Google LLC)</h4>
                  <p>Google Ads Remarketing is a remarketing and behavioral targeting service provided by Google LLC that connects the activity of Edit Mule with the Google Ads advertising network and the DoubleClick Cookie.</p>
                  <p>Users can opt out of Google's use of cookies for ads personalization by visiting Google's <a href="https://adssettings.google.com/authenticated">Ads Settings</a>.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://adssettings.google.com/authenticated">Opt Out</a>. Privacy
                  Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>
                  <h4>Remarketing with Google Analytics (Google LLC)</h4>
                  <p>Remarketing with Google Analytics is a remarketing and behavioral targeting service provided by Google LLC that connects the tracking activity performed by Google Analytics and its Cookies with the Google Ads advertising network and the
                  Doubleclick Cookie.</p>
                  <p> Personal Data processed: Cookies; Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://adssettings.google.com/authenticated">Opt Out</a>. Privacy
                  Shield participant. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h3>Social features</h3>
                  <h4>Inviting and suggesting friends (Edit Mule)</h4>
                  <p>Edit Mule may use the Personal Data provided to allow Users to invite their friends - for example through the address book, if access has been provided - and to suggest friends or connections inside it.</p>
                  <p> Personal Data processed: various types of Data. </p>
                  <p> Category of personal data collected according to CCPA: internet information. </p>

                  <h2 id="further_data">Further information about Personal Data</h2>
                  <h3>Selling goods and services online</h3>
                  <p>The Personal Data collected are used to provide the User with services or to sell goods, including payment and possible delivery.<br /> The Personal Data collected to complete the payment may include the credit card, the bank account used
                  for the transfer, or any other means of payment envisaged. The kind of Data collected by Edit Mule depends on the payment system used.</p>

                  <h2 id="rights_subjects">The rights of Users</h2>
                  <p>Users may exercise certain rights regarding their Data processed by the Owner.</p>
                  <p>Users entitled to broader protection standards may exercise any of the rights described below. In all other cases, Users may inquire with the Owner to find out which rights apply to them.</p>
                  <p>In particular, Users have the right to do the following:</p>
                  <ul className="bullets">
                    <li><b>Withdraw their consent at any time.</b> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li>
                    <li><b>Object to processing of their Data.</b> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section
                    below.</li>
                    <li><b>Access their Data.</b> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li>
                    <li><b>Verify and seek rectification.</b> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li>
                    <li><b>Restrict the processing of their Data.</b> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it. </li>
                    <li><b>Have their Personal Data deleted or otherwise removed.</b> Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li>
                    <li><b>Receive their Data and have it transferred to another controller.</b> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to
                      another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on
                    pre-contractual obligations thereof.</li>
                    <li><b>Lodge a complaint.</b> Users have the right to bring a claim before their competent data protection authority.</li>
                  </ul>
                  <h3>Details about the right to object to processing</h3>
                  <p>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a
                  ground related to their particular situation to justify the objection.</p>
                  <p>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal
                  Data for direct marketing purposes, Users may refer to the relevant sections of this document. </p>
                  <h3>How to exercise these rights</h3>
                  <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always
                  within one month.</p>
                  <h2>Applicability of broader protection standards</h2>
                  <p>While most provisions of this document concern all Users, some provisions expressly only apply if the processing of Personal Data is subject to broader protection standards.</p>
                  <p>Such broader protection standards apply when the processing:</p>
                  <ul className="bullets">
                    <li>is performed by an Owner based within the EU;</li>
                    <li>concerns the Personal Data of Users who are in the EU and is related to the offering of paid or unpaid goods or services, to such Users;</li>
                    <li>concerns the Personal Data of Users who are in the EU and allows the Owner to monitor such Users’ behavior taking place in the EU.</li>
                  </ul>
                  <h2 id="cookie_policy">Cookie Policy</h2>
                  <p>Edit Mule uses Cookies and other Identifiers. To learn more, the User may consult the <Link to="/cookies" title="Cookie Policy">Cookie Policy</Link>.</p>
                  <h2 id="further_data_processing_info">Additional information about Data collection and processing</h2>
                  <h3>Legal action</h3>
                  <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of Edit Mule or the related Services.<br />The User declares to be aware that the
                  Owner may be required to reveal personal data upon request of public authorities.</p>
                  <h3>Additional information about User's Personal Data</h3>
                  <p>In addition to the information contained in this privacy policy, Edit Mule may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.</p>
                  <h3>System logs and maintenance</h3>
                  <p>For operation and maintenance purposes, Edit Mule and any third-party services may collect files that record interaction with Edit Mule (System logs) use other Personal Data (such as the IP Address) for this purpose.</p>
                  <h3>Information not contained in this policy</h3>
                  <p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p>
                  <h3>How “Do Not Track” requests are handled</h3>
                  <p>Edit Mule does not support “Do Not Track” requests.<br />To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.</p>
                  <h3>Changes to this privacy policy</h3>
                  <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within Edit Mule and/or - as far as technically and legally feasible - sending a notice to Users via any
                  contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. <br /><br /> Should the changes affect processing activities performed on
                  the basis of the User’s consent, the Owner shall collect new consent from the User, where required.</p>
                  <h2 id="california_info">Information for Californian consumers</h2>
                  <p>This part of the document integrates with and supplements the information contained in the rest of the privacy policy and is provided by the business running Edit Mule and, if the case may be, its parent, subsidiaries and affiliates
                  (for the purposes of this section referred to collectively as “we”, “us”, “our”).</p>
                  <p>The provisions contained in this section apply to all Users who are consumers residing in the state of California, United States of America, according to &quot;The California Consumer Privacy Act of 2018&quot; (Users are referred to
                  below, simply as “you”, “your”, “yours”), and, for such consumers, these provisions supersede any other possibly divergent or conflicting provisions contained in the privacy policy.</p>
                  <p>This part of the document uses the term “personal information“ as it is defined in The California Consumer Privacy Act (CCPA).</p>
                  <h3>Categories of personal information collected, disclosed or sold</h3>
                  <p>In this section we summarize the categories of personal information that we've collected, disclosed or sold and the purposes thereof. <strong>You can read about these activities in detail in the section titled “Detailed information on the
                    processing of Personal Data” within this document.</strong></p>
                  <h4>Information we collect: the categories of personal information we collect</h4>
                  <p>We have collected the following categories of personal information about you: identifiers and internet information.</p>
                  <p>We will not collect additional categories of personal information without notifying you.</p>
                  <h4>How we collect information: what are the sources of the personal information we collect?</h4>
                  <p>We collect the above mentioned categories of personal information, either directly or indirectly, from you when you use Edit Mule.</p>
                  <p>For example, you directly provide your personal information when you submit requests via any forms on Edit Mule. You also provide personal information indirectly when you navigate Edit Mule, as personal information about you is
                  automatically observed and collected. Finally, we may collect your personal information from third parties that work with us in connection with the Service or with the functioning of Edit Mule and features thereof.</p>
                  <h4>How we use the information we collect: sharing and disclosing of your personal information with third parties for a business purpose</h4>
                  <p>We may disclose the personal information we collect about you to a third party for business purposes. In this case, we enter a written agreement with such third party that requires the recipient to both keep the personal information
                  confidential and not use it for any purpose(s) other than those necessary for the performance of the agreement.</p>
                  <p>We may also disclose your personal information to third parties when you explicitly ask or authorize us to do so, in order to provide you with our Service.</p>
                  <p>To find out more about the purposes of processing, please refer to the relevant section of this document.</p>
                  <h4>Sale of your personal information</h4>
                  <p>For our purposes, the word “sale” means any “selling, renting, releasing, disclosing, disseminating, making available, transferring or otherwise communicating orally, in writing, or by electronic means, a consumer's personal information
                  by the business to <strong>another business or a third party, for monetary or other valuable consideration</strong>”.</p>
                  <p>This means that, for example, a sale can happen whenever an application runs ads, or makes statistical analyses on the traffic or views, or simply because it uses tools such as social network plugins and the like.</p>
                  <h4>Your right to opt out of the sale of personal information</h4>
                  <p>You have the right to opt out of the sale of your personal information. This means that whenever you request us to stop selling your data, we will abide by your request.<br />Such requests can be made freely, at any time, without
                  submitting any verifiable request, simply by following the instructions below.</p>
                  <h4>Instructions to opt out of the sale of personal information</h4>
                  <p>If you’d like to know more, or exercise your right to opt out in regard to all the sales carried out by Edit Mule, both online and offline, you can contact us for further information using the contact details provided in this document.</p>
                  <h4>What are the purposes for which we use your personal information?</h4>
                  <p>We may use your personal information to allow the operational functioning of Edit Mule and features thereof (“business purposes”). In such cases, your personal information will be processed in a fashion necessary and proportionate to
                  the business purpose for which it was collected, and strictly within the limits of compatible operational purposes.</p>
                  <p>We may also use your personal information for other reasons such as for commercial purposes (as indicated within the section “Detailed information on the processing of Personal Data” within this document), as well as for complying with
                  the law and defending our rights before the competent authorities where our rights and interests are threatened or we suffer an actual damage.</p>
                  <p>We will not use your personal information for different, unrelated, or incompatible purposes without notifying you.</p>
                  <h3>Your California privacy rights and how to exercise them</h3>
                  <h4>The right to know and to portability</h4>
                  <p>You have the right to request that we disclose to you:</p>
                  <ul className="bullets">
                    <li>the categories and sources of the personal information that we collect about you, the purposes for which we use your information and with whom such information is shared;</li>
                    <li> in case of sale of personal information or disclosure for a business purpose, two separate lists where we disclose: <br />
                    for sales, the personal information categories purchased by each category of recipient; and <br />
                    for disclosures for a business purpose, the personal information categories obtained by each category of recipient.<br />
                    </li>
                  </ul>
                  <p>The disclosure described above will be limited to the personal information collected or used over the past 12 months.</p>
                  <p>If we deliver our response electronically, the information enclosed will be "portable", i.e. delivered in an easily usable format to enable you to transmit the information to another entity without hindrance – provided that this is
                  technically feasible.</p>
                  <h4>The right to request the deletion of your personal information</h4>
                  <p>You have the right to request that we delete any of your personal information, subject to exceptions set forth by the law (such as, including but not limited to, where the information is used to identify and repair errors on Edit Mule,
                  to detect security incidents and protect against fraudulent or illegal activities, to exercise certain rights etc.).</p>
                  <p>If no legal exception applies, as a result of exercising your right, we will delete your personal information and direct any of our service providers to do so.</p>
                  <h4>How to exercise your rights</h4>
                  <p>To exercise the rights described above, you need to submit your verifiable request to us by contacting us via the details provided in this document.</p>
                  <p>For us to respond to your request, it’s necessary that we know who you are. Therefore, you can only exercise the above rights by making a verifiable request which must:</p>
                  <ul className="bullets">
                    <li>provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative;</li>
                    <li>describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
                  </ul>
                  <p>We will not respond to any request if we are unable to verify your identity and therefore confirm the personal information in our possession actually relates to you.</p>
                  <p>If you cannot personally submit a verifiable request, you can authorize a person registered with the California Secretary of State to act on your behalf.</p>
                  <p>If you are an adult, you can make a verifiable request on behalf of a minor under your parental authority.</p>
                  <p>You can submit a maximum number of 2 requests over a period of 12 months.</p>
                  <h4>How and when we are expected to handle your request</h4>
                  <p>We will confirm receipt of your verifiable request within 10 days and provide information about how we will process your request.</p>
                  <p>We will respond to your request within 45 days of its receipt. Should we need more time, we will explain to you the reasons why, and how much more time we need. In this regard, please note that we may take up to 90 days to fulfill your
                  request.</p>
                  <p>Our disclosure(s) will cover the preceding 12 month period.</p>
                  <p>Should we deny your request, we will explain you the reasons behind our denial.</p>
                  <p>We do not charge a fee to process or respond to your verifiable request unless such request is manifestly unfounded or excessive. In such cases, we may charge a reasonable fee, or refuse to act on the request. In either case, we will
                  communicate our choices and explain the reasons behind it.</p>
                  <h3 id="definitions_and_legal_references"> Definitions and legal references </h3>
                  <h4>Personal Data (or Data)</h4>
                  <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p>
                  <h4>Usage Data</h4>
                  <p>Information collected automatically through Edit Mule (or third-party services employed in Edit Mule), which can include: the IP addresses or domain names of the computers utilized by the Users who use Edit Mule, the URI
                    addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer
                    (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the
                  details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>
                  <h4>User</h4>
                  <p>The individual using Edit Mule who, unless otherwise specified, coincides with the Data Subject.</p>
                  <h4>Data Subject</h4>
                  <p>The natural person to whom the Personal Data refers.</p>
                  <h4>Data Processor (or Data Supervisor)</h4>
                  <p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p>
                  <h4>Data Controller (or Owner)</h4>
                  <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and
                  use of Edit Mule. The Data Controller, unless otherwise specified, is the Owner of Edit Mule.</p>
                  <h4>Edit Mule (or this Application)</h4>
                  <p>The means by which the Personal Data of the User is collected and processed.</p>
                  <h4>Service</h4>
                  <p>The service provided by Edit Mule as described in the relative terms (if available) and on this site/application.</p>
                  <h4>European Union (or EU) </h4>
                  <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area. </p>
                  <h4>Cookies</h4>
                  <p>Small sets of data stored in the User's device.</p>
                  <h4>Legal information</h4>
                  <p>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).</p>
                  <p>This privacy policy relates solely to Edit Mule, if not stated otherwise within this document.</p>
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

export default Privacy;
