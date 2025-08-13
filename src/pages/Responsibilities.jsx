import { ShieldCheck, CopyX, UserCheck, Fingerprint } from "lucide-react";

export default function Responsibilities() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
          Our Responsibility
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          Ensuring the legitimacy of respondents is crucial because data quality 
          is a paramount concern for businesses involved in market research. 
          To guarantee study quality, we employ a comprehensive validation strategy 
          known as <span className="font-semibold">Cred Encuesta Quality Suites</span>.
        </p>

        {/* Responsibility Points */}
        <div className="space-y-8 text-left max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">IP Confirmation</h3>
              <p className="text-gray-700 mt-2">
                During recruitment, we verify the IP address of new panelists to 
                confirm their location within the market area. This process involves 
                checking against a known list of fraudulent servers to identify 
                any potential fraud.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CopyX className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Prevention of Duplication</h3>
              <p className="text-gray-700 mt-2">
                We prevent the same individual from participating in the same survey 
                multiple times, regardless of whether they come from different panels 
                or have multiple accounts within the same panel.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <UserCheck className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Loyalty Monitor</h3>
              <p className="text-gray-700 mt-2">
                Our system prevents fraudulent respondents from participating in surveys, 
                ensuring data integrity. This is standard for all consumer research 
                with a response rate exceeding 10%.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Fingerprint className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Unique Respondents to Surveys</h3>
              <p className="text-gray-700 mt-2">
                We ensure only unique respondents participate in our studies by using 
                proprietary and industry-accepted digital fingerprinting technology, 
                eliminating duplicate responses.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
