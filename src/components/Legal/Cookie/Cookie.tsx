import { Link } from "react-router-dom"
import { Container, Legal } from "../styles.styled"

export default function () {
  const url = 'https://www.vanguardia.tech/'

  return (
    <Container>
      <Legal>

        <h2>Cookie Policy</h2>
        <p>If you want to know more about the use of cookies on this website <Link to={url}><span>{url}</span></Link>, you are in the right place. Below, we will explain exactly what cookies are; what types of cookies we use and for what purposes; and how you can exercise your right to configure your browser and reject the use of any of them.</p>
        <p>However, you should be aware that if you choose not to use some cookies, you will not be able to navigate this website.</p>
        <h2>What is a Cookie?</h2>
        <p>A cookie is a file that is downloaded to your computer more specifically your browser when you access certain websites or blogs.</p>
        <p>Cookies allow that page, among other things, to store and retrieve information about your browsing habits or your device, and depending on the information they contain and how you use your device, they can be used to recognize you.</p>
        <p>The user's browser stores cookies on the hard drive only during the current session, occupying minimal memory space and not harming the computer. Cookies do not contain any specific personal information, and most of them are deleted from the hard drive at the end of the browser session (known as session cookies).</p>
        <p>Most browsers accept cookies as standard and, regardless of them, allow or prevent temporary or stored cookies in the security settings.</p>
        <p>Cookies are associated with the browser, not the person, so they usually do not store sensitive information about you such as credit cards or bank details, photos, or personal information, etc. The data they store is technical, statistical, personal preferences, content personalization, etc.</p>

        <h2>Acceptance of cookies: Current Regulations</h2>
        <p>By accessing this website, and in accordance with current data protection regulations, we inform you about the use of cookies, giving you the option to expressly accept them and access more information through this Cookie Policy.</p>
        <p>You should know that, in the case of continuing to browse, you will be giving your consent to the use of these cookies. However, at any time, you can change your mind and block their use through your browser.</p>
        <p>For your complete peace of mind, this website complies with the provisions of current regulations regarding the use of cookies and your personal data:</p>

        <p>The LSSI-CE Regulation <span>(Law on Information Society Services and Electronic Commerce)</span></p>
        <p>The <span>GDPR (General Data Protection Regulation) (Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, on the protection of natural persons),</span> which unifies the regulation of the processing of personal data in EU countries.</p>
        <p>This Cookie Policy may be modified at any time to adapt to regulatory developments or changes in our activities, with the version published on the website at any given time being valid.</p>

        <h2>Types of Cookies</h2>
        <p>In order to provide you with a better user experience, obtain analytical data, store and retrieve information about your browsing habits or your device, and carry out its activity, this website <span>{url}</span> uses its own and third-party cookies.</p>

        <h3>What types of cookies does this website use?</h3>

        <p><span>Technical Cookies: </span>These enable users to navigate through a website, platform, or application and use different options or services available, such as controlling traffic and data communication, identifying sessions, accessing restricted access areas, remembering elements of an order, completing the purchase process, making a registration request, or participating in an event, using security elements during navigation, storing content for the dissemination of videos or sound, or sharing content through social networks.</p>
        <p><span>Customization Cookies: </span>These allow users to access the service with some predefined general features based on certain criteria on the user's terminal, such as language, the type of browser through which they access the service, regional settings from which they access the service, etc.</p>
        <p><span>Analytical Cookies: </span>These, whether processed by us or third parties, allow us to quantify the number of users and perform the measurement and statistical analysis of the use that users make of the offered service. To do this, your navigation on our website is analyzed in order to improve the range of products or services we offer.</p>
        <p><span>Advertising Cookies: </span>These, whether processed by us or third parties, allow us to manage the advertising spaces on the website as effectively as possible, adapting the content of the ad to the content of the requested service or the use made of our website. To achieve this, we can analyze your Internet browsing habits and show you advertising related to your browsing profile.</p>
        <p><span>Behavioral Advertising Cookies: </span>These allow for the most effective management of advertising spaces that the publisher may have included on a website, application, or platform from which the requested service is provided. These cookies store information on user behavior obtained through continuous observation of their browsing habits, allowing the development of a specific profile to display advertising based on it.</p>
        <p><span>Third-Party Cookies: </span>This website <span>{url}</span> may use third-party services that, on behalf of Google, collect information for statistical purposes, user site usage, and the provision of other services related to the website's activity and other internet services.</p>
        <p>In particular, this website uses Google Analytics, a web analytics service provided by Google, Inc., with its headquarters in the United States at 1600 Amphitheatre Parkway, Mountain View, California 94043. For the provision of these services, Google uses cookies that collect information, including the user's IP address, which will be transmitted, processed, and stored by Google in accordance with the terms outlined on the Google.com website. This may include the possible transmission of such information to third parties for legal requirements or when these third parties process the information on behalf of Google.</p>

        <h2>Manage and Reject the use of Cookies</h2>

        <p>At any time, you can adjust your browser settings to manage, reject the use of cookies, and be notified before they are downloaded.</p>
        <p>You can also configure your settings to have the browser reject all cookies or only third-party cookies. Additionally, you can delete any cookies already on your device.</p>
        <p>Keep in mind that you'll need to adjust the settings separately for each browser and device you use since, as mentioned earlier, cookies are associated with the browser, not the person.</p>

        <p>We remind you that for more information, you can consult our <Link to={'/legal-notice'}><span>Legal Notice</span></Link> and <Link to={'/privacy-policy'}><span>Private Policy</span></Link> pages.</p>
      </Legal>
    </Container>
  )
}