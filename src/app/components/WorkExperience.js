import '../css/WorkExperience.css';
export default function WorkExperience() {
  return (
    <div className=" pt-4">
      <div style={{ opacity: 1, transform: 'none' }}>
        <section className="pl-1 mb-2 overflow-hidden">
          <h2 className="text-accent-blue font-bold text-end text-[18px]">work experience</h2>
          {/* --- Work Experience 1 --- */}
          <article className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a
                  href="https://lob.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white font-semibold hover:underline text-[16px]"
                >
                  Lob
                </a>
              </div>
              <p className="text-xs text-gray-500">Series C SaaS Startup ($50M+ ARR) </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs">Software Engineer - Partner Experience</p>
              </div>
              <span className="flex items-center gap-1 text-gray-500 text-xs ml-2">
                {/* Calendar SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z" />
                </svg>
                Oct. 2024 - Present
              </span>
            </div>
            <div className="flex items-center justify-between text-xs gap-3 s:flex-nowrap flex-wrap mt-4">
              <p className="mt-1 w-full s:w-[45ch] mb-auto">
                Lob is a platform that allows you to send physical mail to your customers.
              </p>
              <p>
                As a Software Engineer on the Partner Experience team at Lob, I was responsible for
                ensuring customer-ordered mail seamlessly reached our print partners. I played a key
                role in building and scaling the USPS promotion portal integrated with Lob’s
                platform, which enabled the delivery of over 50 million mail pieces and contributed
                to more than $12 million in revenue. My work included designing robust APIs,
                orchestrating end-to-end architectural workflows, and implementing critical bug
                fixes to improve system reliability and partner integrations.
              </p>
            </div>
            <div className="flex mt-4 mr-1 text-gray-4">
              <ul className="flex gap-2 flex-wrap w-full">
                <li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
                  hapi.js
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  javascript
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  golang
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  vite
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  typescript
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  api
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  docker
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  postgre
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  terraform
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  nomad
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  sqs
                </li>
              </ul>
            </div>
          </article>

          <article className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a
                  href="https://zebra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white font-semibold hover:underline text-[16px]"
                >
                  Zebra Technologies
                </a>
              </div>
              <p className="text-xs text-gray-500">Fortune 500 Technology Company </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs">
                  Software Engineer - Generative AI & Automation{' '}
                </p>
              </div>
              <span className="flex items-center gap-1 text-gray-500 text-xs ml-2">
                {/* Calendar SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z" />
                </svg>
                Mar. 2023 - Oct. 2024
              </span>
            </div>
            <div className="flex items-center justify-between text-xs gap-3 s:flex-nowrap flex-wrap mt-4">
              <p className="mt-1 w-full s:w-[45ch] mb-auto">
                Zebra Technologies provides enterprise automation and real-time data solutions.
              </p>
              <p>
                At Zebra Technologies, I had the opportunity to explore the intersection of
                generative AI and software engineering. One of my most impactful projects involved
                developing a Large Language Model (LLM)-powered chatbot designed to handle customer
                support queries. I led the full lifecycle of the project—from backend integration to
                frontend UI/UX design—resulting in a 96% reduction in customer support response
                times. In addition to the technical challenges, this role helped me grow as a
                leader, as I mentored an intern and guided them through key aspects of software
                engineering, including development workflows, code quality, and agile practices.
              </p>
            </div>
            <div className="flex mt-4 mr-1 text-gray-4">
              <ul className="flex gap-2 flex-wrap w-full">
                <li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
                  javascript
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  node.js
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  postgre
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  ci/cd
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  docker
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  python
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  gcp
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  git
                </li>
                <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                  llm
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
