import { margin } from "../utils/constants";

const TermsAndConditions = () => {
  return (
    <div className={`flex flex-col justify-center items-center ${margin}`}>
      <div className="flex flex-col justify-center items-center md:py-[5vw] py-[10vw]">
        <span className="text-[#FF00E5] md:text-[5vw] text-[7vw] md:font-semibold font-bold text-center">
          Terms and Conditions
        </span>
        <span className="text-[#63666D] md:text-[0.8vw] text-[2.2vw] md:font-medium font-semibold">
          Last Updated September 1, 2025
        </span>
      </div>
      <div className="flex flex-col md:pb-[5vw] pb-[10vw] md:w-[50vw] w-full">
        <p className="text=[#63666D] md:text-[0.8vw] text-[2.2vw] font-normal text-justify opacity-70">
          Welcome to ShipX, a joint platform developed by Amilo and SG Link and
          operated by INFI COMMERCE ECOSYSTEMS PTE. LTD. (“Company,” “we,”
          “our,” or “us”). These Terms and Conditions (“Terms”) govern your
          access to and use of the ShipX platform, website, and services
          (collectively, the “Services”). By accessing or using ShipX, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms, together with our Privacy Policy. If you do not agree,
          you should not access or use the Services.
          <br />
          <br />
          ShipX is designed as a logistics and commerce platform that
          facilitates transactions and services between businesses and other
          participants in the ecosystem. Access to certain Services may require
          account registration. When creating an account, you agree to provide
          accurate, complete, and up-to-date information, and you are solely
          responsible for maintaining the confidentiality of your login
          credentials. You accept full responsibility for all activities carried
          out under your account. If you suspect unauthorized access or use, you
          must notify us immediately.
          <br />
          <br />
          Your use of ShipX must comply with all applicable laws and
          regulations. You agree not to use our Services for unlawful purposes,
          including but not limited to fraud, money laundering, intellectual
          property infringement, spamming, or distribution of harmful code. You
          further agree not to disrupt, interfere with, or attempt to gain
          unauthorized access to the ShipX systems or networks.
          <br />
          <br />
          The content provided on ShipX, including but not limited to text,
          graphics, software, logos, and trade names, is the intellectual
          property of INFI COMMERCE ECOSYSTEMS PTE. LTD. and its affiliates,
          partners, or licensors. You are granted a limited, non-exclusive,
          non-transferable license to access and use the Services for legitimate
          business purposes, but you may not copy, reproduce, modify,
          distribute, or exploit the content without our prior written
          permission. All rights not expressly granted are reserved.
          <br />
          <br />
          ShipX may include tools, integrations, or links that rely on
          third-party services. We do not control and are not responsible for
          the availability, accuracy, or performance of such third-party
          services. Your use of any third-party products or services is at your
          own risk and may be subject to the terms and conditions of those third
          parties.
          <br />
          <br />
          The Services may involve financial transactions such as payment for
          shipping, logistics, or related services. Unless otherwise stated, all
          fees are due and payable at the time of transaction. You are
          responsible for providing valid payment details, and you authorize us
          or our payment processors to charge you for the Services you use. Any
          disputes regarding charges must be raised promptly, and you remain
          liable for all costs incurred through your account.
          <br />
          <br />
          ShipX strives to provide accurate and reliable services; however, we
          do not guarantee uninterrupted, error-free, or timely operation of the
          platform. The Services are provided on an “as is” and “as available”
          basis, without warranties of any kind, either express or implied. To
          the fullest extent permitted by law, we disclaim all warranties,
          including but not limited to merchantability, fitness for a particular
          purpose, and non-infringement.
          <br />
          <br />
          To the maximum extent allowed by law, INFI COMMERCE ECOSYSTEMS PTE.
          LTD., Amilo, SG Link, and their affiliates shall not be liable for any
          indirect, incidental, special, or consequential damages arising out of
          or in connection with your use of ShipX, even if we have been advised
          of the possibility of such damages. Our total liability for any claim
          shall not exceed the amount you paid, if any, for accessing or using
          the Services during the twelve months preceding the event giving rise
          to the claim.
          <br />
          <br />
          We reserve the right to suspend or terminate your account and restrict
          access to ShipX at our sole discretion if we believe you have violated
          these Terms, misused the Services, or engaged in activities that may
          harm ShipX, our partners, or other users. Upon termination, your right
          to use ShipX will immediately cease, but provisions relating to
          intellectual property, liability limitations, and governing law will
          remain in effect.
          <br />
          <br />
          We may update these Terms periodically to reflect changes in legal,
          technical, or business requirements. Any modifications will be
          effective immediately upon posting to the ShipX website, and your
          continued use of the Services after changes are published will signify
          your acceptance of the revised Terms.
          <br />
          <br />
          These Terms and any disputes arising out of your use of ShipX shall be
          governed by and construed in accordance with the laws of Singapore.
          You agree that any legal action or proceeding shall be subject to the
          exclusive jurisdiction of the courts of Singapore, unless mandatory
          law requires otherwise. Where applicable, disputes may alternatively
          be resolved through binding arbitration in Singapore under recognized
          arbitration procedures.
          <br />
          <br />
        </p>
        <hr className="bg-[#63666D] h-[0.05vw] border-none opacity-70" />
        <p className="text-[#63666D] opacity-60 md:text-[0.6vw] text-[2vw] font-normal mt-[1vw]">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <b>
            INFI COMMERCE ECOSYSTEMS PTE. LTD.; info@shipx.asia or +65 9674 4446
          </b>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
