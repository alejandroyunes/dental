import { Link } from "react-router-dom"
import { Container, Legal } from "../styles.styled"

export default function () {
  const url = 'https://www.vanguardia.tech/'
  const email = 'irrigatordental@gmail.com'

  return (
    <Container>
      <Legal>
        <h2>Legal Notice</h2>
        <p>This Legal Notice aims to inform you about your rights and obligations as a user of this website. Here, you will find all the information you need about this website, its activities, the personal data it collects, and its purpose, as well as the rules of use that govern the use of this website.</p>
        <p>When you access this website<span>{url}</span>, you assume the status of a user, and therefore, the content of this Legal Notice directly affects you. It is important that you read it to dispel any doubts you may have and to be informed about the conditions you are accepting.</p>
        <p>To begin with, you should know that this website complies with current regulations on data protection, aiming to provide you with the guarantees, security, and transparency that, as a user, are your rights when using this website.</p>


        <p><span>The GDPR (General Data Protection Regulation) (Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, on the protection of individuals)</span> is the new regulation of the European Union that unifies the regulation of the processing of personal data in different EU countries.</p>
        <p><span>The LOPD (Organic Law 15/1999, of December 13, on the Protection of Personal Data, and Royal Decree 1720/2007, of December 21, the Regulation for the development of the LOPD) </span>regulates the processing of personal data and the obligations that web or blog owners must assume when managing this information.</p>
        <p><span>The LSSI (Law 34/2002, of July 11, on Information Society Services and Electronic Commerce) </span>regulates economic transactions through electronic means, such as in the case of this blog.</p>



        <h2>Identification</h2>
        <p>The responsible for this blog is: {email}</p>

        <h2>Rules to access this website</h2>
        <p>- You may not use this website for activities contrary to laws, morals, public order, and, in general, for use in accordance with the conditions established in this Legal Notice.</p>
        <p>- You may not engage in advertising or commercial exploitation activities by sending messages using a false identity.</p>
        <p>- You are solely responsible for the truthfulness and accuracy of the content you enter on this website and the personal data you provide to us for the purposes outlined in our Privacy Policy.</p>
        <p>You are also solely responsible for any illicit, harmful, and/or damaging actions on third-party sites to which we may redirect you from this website for the development of our activity.</p>
        <p>As the website owner, we may interrupt the service of the page being used by the user and immediately terminate the relationship if it detects the use of the website or any of the services offered therein that may be considered contrary to what is expressed in this Legal Notice.</p>

        <h2>Intelectual Property</h2>
        <p>As the owner of this website, we do not guarantee that the contents are accurate or free of errors or that their free use by users does not infringe the rights of third parties. The proper or improper use of this page and its contents is the responsibility of the user.</p>

        <h2>Links</h2>
        <p>This website includes links to third-party sites. The pages belonging to these third parties have not been reviewed or subject to controls by us, so we cannot be held responsible for the contents of these websites or the measures taken regarding their privacy or the processing of their personal data or others that may arise.</p>
        <p>Therefore, we recommend a careful reading of the terms of use, privacy policy, legal notices, and/or similar documents of these sites.</p>

        <h2>Amazon Affiliate Links</h2>
        <p>This website, in accordance with its purpose, uses Amazon affiliate links.</p>
        <p>This means that you will find links to Amazon product pages that you can access directly from our website. However, please note that any purchase will be made on Amazon, under its own conditions at that time.</p>

        <h2>Limitation of Liability</h2>
        <h3>In exercising its right as the owner of this website, we inform you that we are not responsible in any case for the following:</h3>
        <p>- The quality of service, access speed, proper functioning, availability, or continuity of operation of the page.</p>
        <p>- The existence of viruses, malware, malicious or harmful programs in the content.</p>
        <p>- The lack of legality, quality, reliability, usefulness, and availability of services provided by third parties and made available to users on this website.</p>
        <p>- Damages that may arise from the illegal or improper use of this blog.</p>

        <h2>Policy of Privacy and Data Protection</h2>
        <p>This website complies with current data protection regulations, which means that, as a user, you must give your express consent before providing us with personal data through the various forms available in the sections of our page.</p>
        <p>Therefore, in the interest of transparency and the exercise of your rights, it is our duty to inform you about the personal data we collect, store, and process and for what purposes, with the possibility of freely revoking your consent at any time.</p>
        <p>You can find all this information in our <Link to={'/private-policy'}>PRIVACY POLICY</Link>.</p>
        <p></p>

        <h2>Cookie Policy</h2>
        <p>This site uses its own and third-party cookies in order to provide you with the best user experience and develop our activity.</p>
        <p>At any time, you will have the option to configure your browser to reject the use of these cookies that, in some cases, will affect your user experience.</p>
        <p>To access complete information about the use of cookies on this website, their purpose, and their rejection, you can consult our <Link to={'/cookie-policy'}>COOKIES POLICY</Link>.</p>
        <p></p>

        <p>We remind you that for more information, you can consult our <Link to={'/privacy-policy'}><span>Private Policy</span></Link> and <Link to={'/cookie-policy'}><span>Cookie Policy</span></Link> pages.</p>
      </Legal>
    </Container>
  )
}