export default function B2Csection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-pink-600">B2C Panel Highlights</h2>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            Online methodology is the most cost-efficient way to reach B2C audiences. 
            Over the years, we’ve conducted many repeat studies for our clients.
          </p>
        </div>

        {/* Panel Stats + Icons */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Column */}
          <div className="space-y-5">
            {[
              {
                icon: "💰",
                title: "Money & Finance",
                desc: "Bankers, specific bank card users, purchasing habits, home type, investing"
              },
              {
                icon: "❤️",
                title: "Health & Wellness",
                desc: "Emotional disorders, fitness, insurance, medications"
              },
              {
                icon: "✈️",
                title: "Business & Leisure Travelers",
                desc: "Air travelers, frequent travelers, online car rental"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-pink-600 text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {[
              {
                icon: "📺",
                title: "Demographics & Media",
                desc: "Generations in household, country of origin, television, internet"
              },
              {
                icon: "🛒",
                title: "Food & Grocery",
                desc: "Shopping habits, fast food consumption, brand performance"
              },
              {
                icon: "👩‍👧",
                title: "Family & Lifestyle",
                desc: "Moms, breastfeeding, entertainment, fertility, teens, television"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-pink-600 text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-800">517,196</p>
            <p className="text-sm text-gray-600">Global panel members (male)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">532,579</p>
            <p className="text-sm text-gray-600">Global panel members (female)</p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto text-center">
          Our B2C panel specializes in reaching hard-to-target audiences including Small Business Owners, 
          High Income Earners, and Decision Makers. Our experienced team maintains and nurtures the panel 
          to ensure it is constantly updated and engaged, delivering motivated and trusted respondents. 
          We uphold high quality standards and implement multiple security checks during recruitment 
          and project execution to provide reliable and accurate samples.
        </p>
      </div>
    </section>
  );
}
