import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

import './Documents.css';

function Cookies(props: any) {
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
                  <h1>Cookies</h1>
                </div>
                <div className="article__body">
                  <p>Cookies and other Identifiers consist of portions of code installed in the browser that assist the Owner in providing the Service according to the purposes described. Some of the purposes for which Cookies are installed may also
                  require the User's consent.</p>
                  <p>Where the installation of Cookies is based on consent, such consent can be freely withdrawn at any time following the instructions provided in this document.</p>
                  <p>To find more information dedicated to Californian consumers and their privacy rights, Users may <Link to="/privacy">read the privacy policy</Link>.</p>
                  <h3 id="technical_cookies">Technical Cookies and Cookies serving aggregated statistical purposes</h3>
                  <ul className="bullets">
                    <li><b>Activity strictly necessary for the functioning of the service:</b> Edit Mule uses Cookies to save the User's session and to carry out other activities that are strictly necessary for the operation of Edit Mule, for example in relation to the distribution of traffic.
                    </li>
                    <li><b>Activity regarding the saving of preferences, optimization, and statistics:</b> Edit Mule uses Cookies to save browsing preferences and to optimize the User's browsing experience. Among these Cookies are, for example, those used for the setting of language and currency preferences or for the management of first party statistics employed directly by the Owner of the site.
                    </li>
                  </ul>
                  <h3 id="other_types_cookies">Other types of Cookies or third parties that install Cookies</h3>
                  <p>Some of the services listed below collect statistics in an anonymized and aggregated form and may not require the consent of the User or may be managed directly by the Owner - depending on how they are described - without the help
                  of third parties.</p>
                  <p>If any third party operated services are listed among the tools below, these may be used to track Users’ browsing habits – in addition to the information specified herein and without the Owner’s knowledge. Please refer to the
                  privacy policy of the listed services for detailed information.</p>

                  <h3>Advertising</h3>
                  <p>This type of service allows User Data to be utilized for advertising communication purposes displayed in the form of banners and other advertisements on Edit Mule, possibly based on User interests.<br /> This does not mean that all Personal Data are used for this purpose. Information and conditions of use are shown below.<br /> Some of the services listed below may use Cookies to identify Users or they may use the behavioral retargeting technique, i.e. displaying ads tailored to the User’s interests and behavior, including those detected outside Edit Mule. For more information, please check the privacy policies of the relevant services.<br /> In addition to any opt out offered by any of the services below, the User may opt out of a third-party service's use of cookies by visiting the <a href="http://optout.networkadvertising.org/">Network Advertising Initiative opt-out page</a>.</p>

                  <h3>Analytics</h3>
                  <p>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</p>
                  <h4>Google Analytics (Google LLC)</h4>
                  <p>Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of Edit Mule, to prepare reports on its activities and share them with other Google services.<br /> Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout?hl=en" rel="noopener noreferrer" target="_blank">Opt Out</a>. </p>
                  <h4>Google Ads conversion tracking (Google LLC)</h4>
                  <p>Google Ads conversion tracking is an analytics service provided by Google LLC that connects data from the Google Ads advertising network with actions performed on Edit Mule.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <h4>Display Advertising extension for Google Analytics (Google LLC)</h4>
                  <p>Google Analytics on Edit Mule might use Google's Interest-based advertising, 3rd-party audience data and information from the DoubleClick Cookie to extend analytics with demographics, interests and ads interaction data.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Opt Out</a>. </p>
                  <h4>User ID extension for Google Analytics (Google LLC)</h4>
                  <p>Google Analytics on Edit Mule makes use of a feature called User ID. This setup allows for a more accurate tracking of Users by associating that User with the same ID over various sessions and devices. It is set up in a waythat doesn’t allow Google to personally identify an individual or permanently identify a particular device.<br /> The User ID extension might make it possible to connect Data from Google Analytics with other Data about the User collected by Edit Mule.<br /> The opt-out link below will only opt you out for the device you are on, but not from tracking performed independently by the Owner. Contact the Owner via the email address provided in this privacy policy to object to the aforementioned tracking as well.</p>
                  <p> Personal Data processed: Cookies. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Opt Out</a>. Privacy Shield participant. </p>
                  <h4>Analytics collected directly (Edit Mule)</h4>
                  <p>Edit Mule uses an internal analytics system that does not involve third parties.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>

                  <h3>Interaction with live chat platforms</h3>
                  <p>This type of service allows Users to interact with third-party live chat platforms directly from the pages of Edit Mule, for contacting and being contacted by Edit Mule support service.<br /> If one of these services is installed, it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service. Moreover, live chat conversations may be logged.</p>
                  <h4>Drift Widget (Drift.com, Inc.)</h4>
                  <p>The Drift Widget is a service for interacting with the Drift live chat platform provided by Drift.com, Inc.</p>
                  <p> Personal Data processed: Cookies, Data communicated while using the service, Usage Data and various types of Data as specified in the privacy policy of the service. </p>
                  <p> Place of processing: United States &ndash; <a href="https://www.drift.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Privacy Shield participant. </p>
                  <h3>Remarketing and behavioral targeting</h3>
                  <p>This type of service allows Edit Mule and its partners to inform, optimize and serve advertising based on past use of Edit Mule by the User.<br /> This activity is performed by tracking Usage Data and by using Cookies, information that is transferred to the partners that manage the remarketing and behavioral targeting activity.<br /> In addition to any opt out offered by any of the services below, the User may opt out of a third-party service's use of cookies by visiting the <a href="http://optout.networkadvertising.org/">Network Advertising Initiative opt-out page</a>.</p>
                  <h4>Google Ads Remarketing (Google LLC)</h4>
                  <p>Google Ads Remarketing is a remarketing and behavioral targeting service provided by Google LLC that connects the activity of Edit Mule with the Google Ads advertising network and the DoubleClick Cookie.</p>
                  <p>Users can opt out of Google's use of cookies for ads personalization by visiting Google's <a href="https://adssettings.google.com/authenticated">Ads Settings</a>.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://adssettings.google.com/authenticated">Opt Out</a>.
                      Privacy Shield participant. </p>
                  <h4>Remarketing with Google Analytics (Google LLC)</h4>
                  <p>Remarketing with Google Analytics is a remarketing and behavioral targeting service provided by Google LLC that connects the tracking activity performed by Google Analytics and its Cookies with the Google Ads advertising
                      network and the Doubleclick Cookie.</p>
                  <p> Personal Data processed: Cookies and Usage Data. </p>
                  <p> Place of processing: United States &ndash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &ndash; <a href="https://adssettings.google.com/authenticated">Opt Out</a>. Privacy Shield participant. </p>

                  <h3 id="manage_cookies">How to provide or withdraw consent to the installation of Cookies</h3>
                  <p>In addition to what is specified in this document, the User can manage preferences for Cookies directly from within their own browser and prevent – for example – third parties from installing Cookies.<br />Through browser
                  preferences, it is also possible to delete Cookies installed in the past, including the Cookies that may have saved the initial consent for the installation of Cookies by this website.<br />Users can, for example, find information
                  about how to manage Cookies in the most commonly used browsers at the following addresses: <a rel="noopener noreferrer nofollow" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies">Google Chrome</a>, <a rel="noopener noreferrer nofollow" target="_blank" href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a>, <a rel="noopener noreferrer nofollow" target="_blank" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/">Apple Safari</a> and <a rel="noopener noreferrer nofollow" target="_blank" href="http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies">Microsoft Internet Explorer</a>.</p>
                  <p>With regard to Cookies installed by third parties, Users can manage their preferences and withdrawal of their consent by clicking the related opt-out link (if provided), by using the means provided in the third party's privacy
                  policy, or by contacting the third party.</p>
                  <p>Notwithstanding the above, Users are hereby informed that they may follow the instructions provided by <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.youronlinechoices.eu/">YourOnlineChoices</a> (EU), the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.networkadvertising.org/understanding-digital-advertising">Network Advertising Initiative</a> (US) and the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.aboutads.info/consumers/">Digital Advertising Alliance</a> (US), <a target="_blank" rel="noopener noreferrer nofollow" href="https://youradchoices.ca/understanding-online-advertising/">DAAC</a> (Canada), <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.ddai.info/optout">DDAI</a> (Japan) or other similar services. Such initiatives allow Users to select their tracking preferences for most of the advertising tools. The Owner thus recommends that Users make use of these resources in addition to the information provided in this document.</p>
                  <h3 id="owner_of_the_data">Owner and Data Controller</h3>
                  <p><b>Edit Mule, LLC</b> <br />1911 Second Street <br />Livermore, CA 94550</p>
                  <p><b>Owner contact email:</b> hello@editmule.com</p>
                  <p> Since the installation of third-party Cookies and other tracking systems through the services used within Edit Mule cannot be technically controlled by the Owner, any specific references to Cookies and tracking systems installed by third parties are to be considered indicative. In order to obtain complete information, the User is kindly requested to consult the privacy policy for the respective third-party services listed in this document. </p>
                  <p>Given the objective complexity surrounding the identification of technologies based on Cookies, Users are encouraged to contact the Owner should they wish to receive any further information on the use of Cookies by Edit Mule.</p>
                  <h3>Definitions and legal references</h3>
                  <h4>Personal Data (or Data)</h4>
                  <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p>
                  <h4>Usage Data</h4>
                  <p>Information collected automatically through Edit Mule (or third-party services employed in Edit Mule), which can include: the IP addresses or domain names of the computers utilized by the Users who use Edit Mule, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>
                  <h4>User</h4>
                  <p>The individual using Edit Mule who, unless otherwise specified, coincides with the Data Subject.</p>
                  <h4>Data Subject</h4>
                  <p>The natural person to whom the Personal Data refers.</p>
                  <h4>Data Processor (or Data Supervisor)</h4>
                  <p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p>
                  <h4>Data Controller (or Owner)</h4>
                  <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of Edit Mule. The Data Controller, unless otherwise specified, is the Owner of Edit Mule.</p>
                  <h4>Edit Mule (or this Application)</h4>
                  <p>The means by which the Personal Data of the User is collected and processed.</p>
                  <h4>Service</h4>
                  <p>The service provided by Edit Mule as described in the relative terms (if available) and on this site/application.</p>
                  <h4>European Union (or EU) </h4>
                  <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area. </p>
                  <h4>Cookies</h4>
                  <p>Small sets of data stored in the User's device.</p>
                  <h4>Legal information</h4>
                  <p>Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies.</p>
                  <p>This privacy policy relates solely to Edit Mule.</p>
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

export default Cookies;
