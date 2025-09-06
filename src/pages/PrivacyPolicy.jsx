
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const switchLanguage = (lang) => {
  i18n.changeLanguage(lang);
};


export default function PrivacyPolicy() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

    return (
        <div className={` inset-0 top-[150px] max-w-7xl mt-20`}>
            <>

                <h1 className="text-[#2a7a2a] text-center text-4xl">Privacy Policy</h1>
                <p
                    style={{
                        fontWeight: "bold",
                        lineHeight: "1.2",
                        fontSize: 22,
                        color: "#494e53ff",
                    }}
                >
                    <span style={{ fontSize: 14 }}>Last Updated On 02-Mar-2024</span>
                    <br />
                    <span style={{ fontSize: 14 }}>Effective Date 02-Mar-2024</span>
                </p>
                <br /> <p>
                    This Privacy Policy describes how <strong>SerhiiShevchenko.com</strong>{" "}
                    (“Company”, “we”, “us”, “website”) collects, uses, processes and distributes
                    your information, including Personal Data (as defined below) used to access
                    this Website. We will not use or share your information with anyone except
                    as described in this Privacy Policy. The use of information collected
                    through our Website shall be limited to the purposes under this Privacy
                    Policy, and also our Terms of Use if you’re a client or customer.
                </p>
                <br /> <h2 className="text-[#2a7a2a]">
                    <strong>
                        Consent
                    </strong>
                    <br /> </h2><p>
                    By using our website, you hereby consent to our Privacy Policy and agree to
                    its terms.
                </p>
                <br /> <h2 className="text-[#2a7a2a]">
                    <strong>
                        Non-Personal Data
                    </strong>
                    <br /></h2><p>
                    We also collect and use information about your interactions with the website
                    in a manner and format that does not identify you as an individual
                    (“Non-Personal Data”).&nbsp;
                </p>
                <br /> <h2 className="text-[#2a7a2a]">
                    <strong>Use of “Cookies”</strong></h2><p>
                    Like many websites, when you visit SerhiiShevchenko.com we may use cookies
                    to identify your browser and see how you use our website (e.g., the pages
                    you view, the links you click and other actions you take). You may choose to
                    disable cookies through your own web browser’s settings or by declining our
                    cookie consent settings by clicking on the button on the left bottom of the
                    Website. However, disabling cookies may diminish your experience on our
                    Website and some features may not work as intended.{" "}
                    <a
                        href="https://serhiishevchenko.com/cookie-policy/"
                        target="_blank"
                        rel="noopener"
                    >
                        Click here
                    </a>{" "}
                    to read our cookie policy.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Information automatically collected
                    </strong>
                    <br /> </h2>
                <p>
                    We automatically collect certain information when you visit, use, or
                    navigate our Website. This information does not reveal your specific
                    identity (like your name or contact information) but may include device and
                    usage information, such as your IP address, browser and device
                    characteristics, operating system, language preferences, referring URLs,
                    device name, country, location, information about how and when you use our
                    Services, and other technical information. This information is primarily
                    needed to maintain the security and operation of our Website, and for our
                    internal analytics and reporting purposes.
                </p>
                <br /> <p>
                    Like many businesses, we also collect information through cookies and
                    similar technologies.&nbsp;
                </p>
                <br /><p>
                    <strong>
                        The information we collect includes:
                    </strong>
                    <br /></p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        <strong>Log and Usage Data</strong>. Log and usage data is
                        service-related, diagnostic, usage, and performance information our
                        servers automatically collect when you access or use our Services and
                        which we record in log files. Depending on how you interact with us, this
                        log data may include your IP address, device information, browser type,
                        and settings and information about your activity in the Services (such as
                        the date/time stamps associated with your usage, pages and files viewed,
                        searches, and other actions you take such as which features you use),
                        device event information (such as system activity, error reports
                        (sometimes called “crash dumps”), and hardware settings).
                    </li>
                    <li>
                        <strong>Device Data</strong>. We collect device data such as information
                        about your computer, phone, tablet, or other device you use to access the
                        Services. Depending on the device used, this device data may include
                        information such as your IP address (or proxy server), device and
                        application identification numbers, location, browser type, hardware
                        model, Internet service provider and/or mobile carrier, operating system,
                        and system configuration information.
                    </li>
                    <li>
                        <strong>Location Data</strong>. We collect location data such as
                        information about your device’s location, which can be either precise or
                        imprecise. How much information we collect depends on the type and
                        settings of the device you use to access the Services. For example, we may
                        use GPS and other technologies to collect geolocation data that tells us
                        your current location (based on your IP address). You can opt out of
                        allowing us to collect this information either by refusing access to the
                        information or by disabling your Location setting on your device. However,
                        if you choose to opt out, you may not be able to use certain aspects of
                        our Website.
                    </li>
                </ul>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Web Beacons
                    </strong>
                </h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        Certain sections of our Website, resources and our emails may contain
                        small electronic files known as web beacons (also referred to as clear
                        gifs, pixel tags, and single-pixel gifs) that permit the Company, for
                        example, to count users who have visited those pages or opened an email
                        and for other related website statistics (for example, recording the
                        popularity of a certain section and verifying system and server
                        integrity).
                    </span>
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Personal Data
                    </strong>
                </h2>
                <p>
                    We collect personal information from you so that we can provide you with a
                    positive experience when utilizing our Website or content. Usually the
                    personal information that you are asked to provide, and the reasons why you
                    are asked to provide it, will be made clear to you at the point we ask you
                    to provide your personal information.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        We may collect:
                    </strong>
                    <br /></h2>
                <ol style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                        A name and an email address so we can deliver our newsletter to you – you
                        would be affirmatively consenting to this by providing this information to
                        us in our contact forms.
                    </li>
                    <li>
                        Billing information including name, address and credit card information so
                        that we can process payment to deliver our products or services to you
                        under our contractual obligation.
                    </li>
                    <li>
                        A name, an email address, the contents of the message and any other
                        information you may choose to provide us when contacting us directly by
                        completing our contact form. We may send you marketing emails with either
                        your consent or if we believe we have a legitimate interest to contact you
                        based on your contact or question.
                    </li>
                </ol>
                <br /> <p>
                    Please note that the information above that you are giving to us is
                    voluntarily, and by providing this information to us you are giving consent
                    for us to use, collect and process this Personal Data. You are welcome to
                    opt-out or request for us to delete your Personal Data at any point by
                    contacting us at {import.meta.env.VITE_MY_WORK_EMAIL}
                </p>
                <br /> <p>
                    If you choose not to provide us with certain Personal Data, you may not be
                    able to participate in certain aspects of our Website or Content.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        How do we use and process your data
                    </strong>
                    <br /></h2>
                <p>
                    We may use and disclose your Personal Data as follows:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>Improve, personalize, and expand our website and offers.</li>
                    <li>Understand and analyze how you use our website.</li>
                    <li>Develop new products, services, features, and functionality.</li>
                    <li>
                        Communicate with you, either directly or through one of our partners,
                        including for customer service, to provide you with updates and other
                        information relating to the website such as new features, updates, and
                        changes to our Privacy Policy, and for marketing and promotional purposes.
                    </li>
                    <li>
                        Share your information with trusted third parties such as our newsletter
                        provider in order to contact you via email, or our merchant accounts to
                        process payments, Google accounts in order to analyze how you use our
                        website, to run advertisements and our affiliates.
                    </li>
                    <li>
                        To provide information to representatives and advisors, like attorneys and
                        accountants, to help us comply with legal, accounting, or security
                        requirements.
                    </li>
                    <li>
                        To send you informational and promotional content that you may choose (or
                        “opt-in”) to receive, such as daily, weekly, and monthly emails. You can
                        stop receiving our promotional emails by following the unsubscribe
                        instructions included in every email.
                    </li>
                    <li>
                        To protect our Website. We may process your information as part of our
                        efforts to keep our Website safe and secure, including fraud monitoring
                        and prevention.
                    </li>
                </ul>
                <div><br />
                    <h2 className="text-[#2a7a2a]">
                        <strong>
                            WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                        </strong>
                    </h2>
                    <div>
                        In Short: We only process your personal information when we believe it is
                        necessary and we have a valid legal reason (i.e., legal basis) to do so
                        under applicable law, like with your consent, to comply with laws, to
                        provide you with services to enter into or fulfill our contractual
                        obligations, to protect your rights, or to fulfill our legitimate business
                        interests.
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <b>
                            <u>If you are located in the EU or UK, this section applies to you.</u>
                        </b>
                    </div>
                    <div>
                        The General Data Protection Regulation (GDPR) and UK GDPR require us to
                        explain the valid legal bases we rely on in order to process your personal
                        information. As such, we may rely on the following legal bases to process
                        your personal information:
                    </div>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        <li>
                            Consent. We may process your information if you have given us permission
                            (i.e., consent) to use your personal information for a specific purpose.
                            You can withdraw your consent at any time. Learn more about withdrawing
                            your consent.
                        </li>
                        <li>
                            Performance of a Contract. We may process your personal information when
                            we believe it is necessary to fulfill our contractual obligations to
                            you, including providing our Services or at your request prior to
                            entering into a contract with you.
                        </li>
                        <li>
                            Legitimate Interests. We may process your information when we believe it
                            is reasonably necessary to achieve our legitimate business interests and
                            those interests do not outweigh your interests and fundamental rights
                            and freedoms. For example, we may process your personal information for
                            some of the purposes described in order to:
                            <br />– Send users information about special offers and discounts on our
                            products and services
                            <br />– Develop and display personalized and relevant advertising
                            content for our users
                            <br />– Analyze how our Services are used so we can improve them to
                            engage and retain users
                            <br />– Support our marketing activities
                            <br />– Diagnose problems and/or prevent fraudulent activities
                            <br />– Understand how our users use our products and services so we can
                            improve user experience.
                        </li>
                        <li>
                            Legal Obligations. We may process your information where we believe it
                            is necessary for compliance with our legal obligations, such as to
                            cooperate with a law enforcement body or regulatory agency, exercise or
                            defend our legal rights, or disclose your information as evidence in
                            litigation in which we are involved.
                        </li>
                        <li>
                            Vital Interests. We may process your information where we believe it is
                            necessary to protect your vital interests or the vital interests of a
                            third party, such as situations involving potential threats to the
                            safety of any person.
                        </li>
                    </ul>
                    <div>
                        In legal terms, we are generally the “data controller” under European data
                        protection laws of the personal information described in this privacy
                        notice, since we determine the means and/or purposes of the data
                        processing we perform. This privacy notice does not apply to the personal
                        information we process as a “data processor” on behalf of our customers.
                        In those situations, the customer that we provide services to and with
                        whom we have entered into a data processing agreement is the “data
                        controller” responsible for your personal information, and we merely
                        process your information on their behalf in accordance with your
                        instructions. If you want to know more about our customers’ privacy
                        practices, you should read their privacy policies and direct any questions
                        you have to them.
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <div>
                            <b>
                                <u>If you are located in Canada, this section applies to you.</u>
                            </b>
                        </div>
                        <div>
                            We may process your information if you have given us specific permission
                            (i.e., express consent) to use your personal information for a specific
                            purpose, or in situations where your permission can be inferred (i.e.,
                            implied consent). You can withdraw your consent at any time by
                            contacting us by email at {import.meta.env.VITE_MY_WORK_EMAIL}{" "}
                            <span style={{ fontWeight: 400 }}>or updating your preferences</span>.
                        </div>
                        <div>&nbsp;</div>
                        <div>
                            In some exceptional cases, we may be legally permitted under applicable
                            law to process your information without your consent, including, for
                            example:
                        </div>
                        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                            <li>
                                If collection is clearly in the interests of an individual and consent
                                cannot be obtained in a timely way
                            </li>
                            <li>For investigations and fraud detection and prevention</li>
                            <li>For business transactions provided certain conditions are met</li>
                            <li>
                                If it is contained in a witness statement and the collection is
                                necessary to assess, process, or settle an insurance claim
                            </li>
                            <li>
                                For identifying injured, ill, or deceased persons and communicating
                                with next of kin
                            </li>
                            <li>
                                If we have reasonable grounds to believe an individual has been, is,
                                or may be victim of financial abuse
                            </li>
                            <li>
                                If it is reasonable to expect collection and use with consent would
                                compromise the availability or the accuracy of the information and the
                                collection is reasonable for purposes related to investigating a
                                breach of an agreement or a contravention of the laws of Canada or a
                                province
                            </li>
                            <li>
                                If disclosure is required to comply with a subpoena, warrant, court
                                order, or rules of the court relating to the production of records
                            </li>
                            <li>
                                If it was produced by an individual in the course of their employment,
                                business, or profession and the collection is consistent with the
                                purposes for which the information was produced
                            </li>
                            <li>
                                If the collection is solely for journalistic, artistic, or literary
                                purposes
                            </li>
                            <li>
                                If the information is publicly available and is specified by the
                                regulations.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <br />
                        <h2 className="text-[#2a7a2a]">
                            <strong>
                                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                            </strong>
                            <br /></h2>
                    </div>
                    <div>
                        Vendors, Consultants, and Other Third-Party Service Providers. We may
                        share your data with third-party vendors, service providers, contractors,
                        or agents (“third parties”) who perform services for us or on our behalf
                        and require access to such information to do that work. We have contracts
                        in place with our third parties, which are designed to help safeguard your
                        personal information. This means that they cannot do anything with your
                        personal information unless we have instructed them to do it. They will
                        also not share your personal information with any organization apart from
                        us. They also commit to protect the data they hold on our behalf and to
                        retain it for the period we instruct. The categories of third parties we
                        may share personal information with are as follows:
                    </div>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        <li>Ad Networks</li>
                        <li>Affiliate Marketing Programs</li>
                        <li>Cloud Computing Services</li>
                        <li>Communication &amp; Collaboration Tools</li>
                        <li>Data Analytics Services</li>
                        <li>Data Storage Service Providers</li>
                        <li>Finance &amp; Accounting Tools</li>
                        <li>Government Entities</li>
                        <li>Order Fulfillment Service Providers</li>
                        <li>Payment Processors</li>
                        <li>Performance Monitoring Tools</li>
                        <li>Product Engineering &amp; Design Tools</li>
                        <li>Retargeting Platforms</li>
                        <li>Sales &amp; Marketing Tools</li>
                        <li>Social Networks</li>
                        <li>Testing Tools</li>
                        <li>User Account Registration &amp; Authentication Services</li>
                        <li>Website Hosting Service Providers</li>
                    </ul>
                    <br />
                    <h2 className="text-[#2a7a2a]">
                        <strong>
                            We also may need to share your personal information in the following
                            situations:
                        </strong>
                        <br /></h2>

                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        <li>
                            Business Transfers. We may share or transfer your information in
                            connection with, or during negotiations of, any merger, sale of company
                            assets, financing, or acquisition of all or a portion of our business to
                            another company.
                        </li>
                        <li>
                            When we use Google Analytics. Google Analytics uses cookies to help us
                            analyze how you use our Website and Content so we could better
                            understand what content you are interested in and thus serve you better
                            Content.&nbsp;For more information on how Google uses this data, go
                            to&nbsp;
                            <a
                                className="text-[#00bbff] hover:text-[#0093c9ff]"
                                href="https://www.google.com/policies/privacy/partners/"
                                target="_blank"
                                rel="noopener"
                            >
                                www.google.com/policies/privacy/partners/
                            </a>
                            .&nbsp;You can learn more about how to opt out of Google Analytics by
                            going to&nbsp;
                            <a
                                className="text-[#00bbff] hover:text-[#0093c9ff]"
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                                rel="noopener"
                            >
                                https://tools.google.com/dlpage/gaoptout
                            </a>
                            . For more information on the privacy practices of Google, please visit
                            the Google Privacy &amp; Terms page.
                        </li>
                        <li>
                            Affiliates. We may share your information with our affiliates, in which
                            case we will require those affiliates to honor this privacy notice.
                            Affiliates include our parent company and any subsidiaries, joint
                            venture partners, or other companies that we control or that are under
                            common control with us.
                        </li>
                        <li>
                            Business Partners. We may share your information with our business
                            partners to offer you certain products, services, or promotions.
                        </li>
                        <li>
                            Other Users. When you share personal information (for example, by
                            posting comments, contributions, or other content to the Services) or
                            otherwise interact with public areas of the Services, such personal
                            information may be viewed by all users and may be publicly made
                            available outside the Services in perpetuity. If you interact with other
                            users of our Services and register for our Services through a social
                            network (such as Facebook), your contacts on the social network will see
                            your name, profile photo, and descriptions of your activity. Similarly,
                            other users will be able to view descriptions of your activity,
                            communicate with you within our Services, and view your profile.
                        </li>
                    </ul>
                    <br />
                    <h2 className="text-[#2a7a2a]">
                        <strong>
                            WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                        </strong>
                        <br /></h2>
                    <div>
                        Our Website may link to third-party websites, online services, or mobile
                        applications and/or contain advertisements from third parties that are not
                        affiliated with us and which may link to other websites, services, or
                        applications. Accordingly, we do not make any guarantee regarding any such
                        third parties, and we will not be liable for any loss or damage caused by
                        the use of such third-party websites, services, or applications. The
                        inclusion of a link towards a third-party website, service, or application
                        does not imply an endorsement by us. We cannot guarantee the safety and
                        privacy of data you provide to any third parties. Any data collected by
                        third parties is not covered by this privacy policy. We are not
                        responsible for the content or privacy and security practices and policies
                        of any third parties, including other websites, services, or applications
                        that may be linked to or from the Website. You should review the policies
                        of such third parties and contact them directly to respond to your
                        questions.&nbsp;
                    </div>
                </div>
                <br /> <p>
                    Also, whenever you voluntarily make your Personal Data available for viewing
                    by others online through this Website or its content, it may be seen,
                    collected and used by others, and therefore, we cannot be responsible for
                    any unauthorized or improper use of the information that you voluntarily
                    share (i.e., sharing a comment on a blog post, posting in a Facebook group
                    or commenting on a Telegram channel that we manage, etc.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                    </strong>
                    <br /></h2>
                <p>
                    Our Services offer you the ability to register and log in using your
                    third-party social media account details (like your Facebook or Twitter
                    logins). Where you choose to do this, we will receive certain profile
                    information about you from your social media provider. The profile
                    information we receive may vary depending on the social media provider
                    concerned, but will often include your name, email address, friends list,
                    and profile picture, as well as other information you choose to make public
                    on such a social media platform.
                </p>
                <br /> <p>
                    We will use the information we receive only for the purposes that are
                    described in this privacy policy or that are otherwise made clear to you on
                    the relevant Services. Please note that we do not control, and are not
                    responsible for, other uses of your personal information by your third-party
                    social media provider. We recommend that you review their privacy policy to
                    understand how they collect, use and share your personal information, and
                    how you can set your privacy preferences on their sites and apps.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Submission, Storage, Sharing and Transferring of Personal Data
                    </strong>
                    <br /></h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        Your information, including Personal Data, is processed at the Company’s
                        operating offices and in any other places where the parties involved in
                        the processing are located (i.e., our hosting provider, newsletter
                        provider, payment processors or team members). It means that this
                        information may be transferred to — and maintained on — computers located
                        outside of Your state, province, country or other governmental
                        jurisdiction where the data protection laws may differ than those from
                        Your jurisdiction.
                        <br />
                    </span>
                    <span style={{ fontWeight: 400 }}>
                        Your consent to this Privacy Policy followed by Your submission of such
                        information represents Your agreement to that transfer.
                    </span>
                </p>
                <br /> <p>
                    <span style={{ fontWeight: 400 }}>
                        The Company will take all steps reasonably necessary to ensure that Your
                        data is treated securely and in accordance with this Privacy Policy and no
                        transfer of Your Personal Data will take place to an organization or a
                        country unless there are adequate controls in place including the security
                        of Your data and other personal information.
                    </span>
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Security of Your Personal Data
                    </strong>
                    <br /></h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        The security of Your Personal Data is important to Us, but remember that
                        no method of transmission over the Internet, or method of electronic
                        storage is 100% secure. While We strive to use commercially acceptable
                        means to protect Your Personal Data, We cannot guarantee its absolute
                        security.
                    </span>
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Instances where we are required to share your Personal Data
                    </strong>
                    <br /></h2>
                <p>
                    SerhiiShevchenko.com will disclose Personal Information where required to do
                    so by law or subpoena or if we reasonably believe that such action is
                    necessary to (a) comply with the law and the reasonable requests of law
                    enforcement; (b) to enforce our Terms of Service or to protect the security
                    or integrity of our website; and/or (c) to exercise or protect the rights,
                    property, or personal safety of SerhiiShevchenko.com, our Users or others.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Retention
                    </strong>
                    <br /></h2>
                <p>
                    We retain your Personal Data for as long as we need it to fulfill the
                    purposes set out in this Privacy Policy. We may need to retain certain
                    information for longer periods such as record-keeping / reporting in
                    accordance with applicable law or for other legitimate reasons like
                    enforcement of legal rights, fraud prevention, etc.&nbsp;
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        How You Can Access, Update or Delete Your Personal Data
                    </strong>
                    <br /></h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        You have the right under this Privacy Policy, and by law if You are within
                        the EU, to:
                    </span>
                </p>
                <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b>Request access to Your Personal Data</b>
                        <span style={{ fontWeight: 400 }}>
                            . The right to access, update or delete the information We have on You.
                            You can access, update or request deletion of Your Personal Data by
                            contacting us at {import.meta.env.VITE_MY_WORK_EMAIL}.&nbsp;
                        </span>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b>Request correction of the Personal Data that We hold about You</b>
                        <span style={{ fontWeight: 400 }}>
                            . You have the right to have any incomplete or inaccurate information We
                            hold about You corrected.
                        </span>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b>Object to processing of Your Personal Data</b>
                        <span style={{ fontWeight: 400 }}>
                            . This right exists where We are relying on a legitimate interest as the
                            legal basis for Our processing and there is something about Your
                            particular situation, which makes You want to object to our processing
                            of Your Personal Data on this ground. You also have the right to object
                            where We are processing Your Personal Data for direct marketing
                            purposes.
                        </span>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b>Request erasure of Your Personal Data</b>
                        <span style={{ fontWeight: 400 }}>
                            . You have the right to ask Us to delete or remove Personal Data when
                            there is no good reason for Us to continue processing it.
                        </span>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b>Request the transfer of Your Personal Data</b>
                        <span style={{ fontWeight: 400 }}>
                            . We will provide to You, or to a third-party You have chosen, Your
                            Personal Data in a structured, commonly used, machine-readable format.
                            Please note that this right only applies to automated information which
                            You initially provided consent for Us to use or where We used the
                            information to perform a contract with You.
                        </span>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                        <b style={{ fontStyle: "inherit" }}>Withdraw Your consent.</b>
                        <span style={{ fontWeight: 400 }}>
                            {" "}
                            You have the right to withdraw Your consent on using your Personal Data.
                            If You withdraw Your consent, We may not be able to provide You with
                            access to certain specific functionalities of the Service.
                        </span>
                    </li>
                </ul>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Exercising of Your GDPR Data Protection Rights
                    </strong>
                    <br /></h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        You may exercise Your rights of access, rectification, cancellation and
                        opposition by contacting Us at {import.meta.env.VITE_MY_WORK_EMAIL}. Please note
                        that we may ask You to verify Your identity before responding to such
                        requests. If You make a request, We will try our best to respond to You as
                        soon as possible.
                    </span>
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        CONTROLS FOR DO-NOT-TRACK FEATURES
                    </strong>
                    <br /></h2>
                <p>
                    Most web browsers and some mobile operating systems and mobile applications
                    include a Do-Not-Track (“DNT”) feature or setting you can activate to signal
                    your privacy preference not to have data about your online browsing
                    activities monitored and collected. At this stage no uniform technology
                    standard for recognizing and implementing DNT signals has been finalized. As
                    such, we do not currently respond to DNT browser signals or any other
                    mechanism that automatically communicates your choice not to be tracked
                    online. If a standard for online tracking is adopted that we must follow in
                    the future, we will inform you about that practice in a revised version of
                    this privacy policy.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Children’s Privacy Policy
                    </strong>
                    <br /></h2>
                <p>
                    We do not collect any information from anyone under 18 years of age in
                    compliance with COPPA (Children’s Online Privacy Protection Act) and the
                    GDPR (General Data Protection Regulation of the EU). Our Website and its
                    content is directed to individuals who are at least 18 years old or older.
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Changes to this Privacy Policy
                    </strong>
                    <br /></h2>
                <p>
                    <span style={{ fontWeight: 400 }}>
                        We may update Our Privacy Policy from time to time. Please review this
                        Privacy Policy periodically. Continued use of any of information obtained
                        through or on the Website or its content following the posting of changes
                        and/or modifications constituted acceptance of the revised Privacy Policy.{" "}
                    </span>
                    We reserve the right to change this Privacy Policy on the Website at any
                    time without notice.{" "}
                    <span style={{ fontWeight: 400 }}>
                        We may let You know via email and/or a prominent notice on Our Service
                        about some important changes in our Privacy Policy.
                    </span>
                </p>
                <br />
                <h2 className="text-[#2a7a2a]">
                    <strong>
                        Data Controller and Processors
                    </strong>
                    <br /></h2>
                <p>
                    We are the data controllers as we are collecting and using your Personal
                    Data.&nbsp; We use trusted third parties as our data processors for
                    technical and organizational purposes, including for payments and email
                    marketing. We use reasonable efforts to make sure our data processors are
                    GDPR- compliant.
                </p>
                <br /> <p>
                    If you have any questions about this Privacy Policy, please contact us at
                    {import.meta.env.VITE_MY_WORK_EMAIL}
                </p>
            </>

        </div>
    );
}