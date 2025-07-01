export default function Projects() {
  return (
    <div className="pt-4">
      <div style={{ opacity: 1, transform: 'none' }}>
        <section className="pl-1 mb-2 overflow-hidden">
          <h2 className="text-accent-orange font-bold text-md text-[18px] text-end">projects</h2>
          {/* --- Project 1 --- */}
          <article className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a
                  href="https://github.com/orgs/House-of-Events/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-orange font-semibold hover:underline"
                >
                  HouseOfEvents
                </a>
                <p class="flex items-center gap-1 text-highlight-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E6D94B"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                  </svg>
                  <span class="ml-2 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                    </svg>
                  </span>{' '}
                  <span class="text-xs overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
                    complete
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="mt-2 text-xs">the sports games reminder</p>
            </div>

            <div className="flex justify-between text-xs gap-3 s:flex-nowrap flex-wrap mt-4">
              <img
                src="/images/projects/HouseOfEvents.png"
                alt="HouseOfEvents"
                className="mt-1 w-full s:w-[45ch] mb-auto rounded-md"
              />
              <div className="flex flex-col w-[50%] mt-1 mr-1 text-gray-4">
                <ul className="flex gap-2 flex-wrap w-full s:w-[50ch]">
                  <li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
                    next.js
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    javascript
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    hapi.js
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
                    s3
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    sqs
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    ec2
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    cron
                  </li>
                </ul>
                <p className="mt-2">
                  HouseOfEvents is a project I like to think of as my CEO moment. Born out of my
                  passion for sports and frustration with missing games, I built HouseOfEvents—a
                  personalized sports fixture notifier that sends users reminders an hour before
                  their favorite games. Built using a microservices architecture, the platform
                  allows users to subscribe to specific sports and stay effortlessly updated. It’s
                  simple, effective, and built to make sure no fan ever misses a game again.
                </p>
                <div className="flex items-center gap-1 text-gray-3 group-hover:text-gray-6 mt-4 mr-1">
                  <a
                    href="https://houseofevents.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                    </svg>
                    <span className="overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/orgs/House-of-Events/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                    </svg>
                    <span className="hidden [@media(min-width:355px)]:block -ml-0.5 overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      repo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a
                  href="https://github.com/orgs/VendiMate/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-orange font-semibold hover:underline"
                >
                  VenidMate
                </a>
                <p class="flex items-center gap-1 text-highlight-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E6D94B"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                  </svg>
                  <span class="ml-2 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                    </svg>
                  </span>{' '}
                  <span class="text-xs overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
                    complete
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="mt-2 text-xs"> real-time vending machine transaction system</p>
            </div>

            <div className="flex justify-between text-xs gap-3 s:flex-nowrap flex-wrap mt-4">
              <img
                src="/images/projects/VendiMate2.png"
                alt="VendiMate"
                className="mt-1 w-full s:w-[45ch] mb-auto rounded-md"
              />
              <div className="flex flex-col w-[50%] mt-1 mr-1 text-gray-4">
                <ul className="flex gap-2 flex-wrap w-full s:w-[50ch]">
                  <li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
                    hapi.js
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    next.js
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    google-maps
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    docker
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    api
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    redis
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    knex
                  </li>
                </ul>

                <p className="mt-2">
                  Ever been so hungry that you start hunting for a vending machine—only to find it’s
                  empty or out of order? I’ve been there more times than I can count. That’s exactly
                  why I built VendiMate. VendiMate helps users locate the nearest functioning
                  vending machines with real-time maps and directions. It also tracks live
                  inventory, so you know exactly what items are available before you get
                  there—saving time, energy, and hangry frustration.
                </p>
                <div className="flex items-center gap-1 text-gray-3 group-hover:text-gray-6 mt-4 mr-1">
                  <a
                    href="https://miro.com/app/board/uXjVIAnnUHI=/?share_link_id=71375563329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                    </svg>
                    <span className="overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      Architecture
                    </span>
                  </a>
                  <a
                    href="https://github.com/orgs/VendiMate/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                    </svg>
                    <span className="hidden [@media(min-width:355px)]:block -ml-0.5 overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      repo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a
                  href="https://github.com/mananshah78424/Aws-S3-node-image-upload"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-orange font-semibold hover:underline"
                >
                  InstaS3Verse
                </a>
                <p class="flex items-center gap-1 text-highlight-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E6D94B"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                  </svg>
                  <span class="ml-2 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                    </svg>
                  </span>{' '}
                  <span class="text-xs overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
                    complete
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="mt-2 text-xs"> indexable Social Media Platform</p>
            </div>
            <div className="flex justify-between text-xs gap-3 s:flex-nowrap flex-wrap mt-4">
              <video
                src="./videos/InstaS3Verse.mp4"
                alt="VenidMate"
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="mt-1 w-full s:w-[45ch] mb-auto rounded-md"
              />

              <div className="flex flex-col w-[50%] mt-1 mr-1 text-gray-4">
                <ul className="flex gap-2 flex-wrap w-full s:w-[50ch]">
                  <li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
                    react
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    javascript
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    s3
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    cdn
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    ec2
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    node.js
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    postgre
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    prisma
                  </li>
                  <li className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
                    nginx
                  </li>
                </ul>

                <p className="mt-2">
                  InstaS3Verse is a social media platform where users can post images, videos, and
                  threads—all in one place. Unlike traditional platforms, InstaS3Verse solves a
                  common frustration: the inability to search posts by caption. I built this to fix
                  that exact problem—how often do you remember a caption but lose the post after
                  refreshing? With full-text caption search, InstaS3Verse makes it easy to
                  rediscover content. Leveraging AWS S3 and CloudFront, the platform achieves 98%
                  faster load times and sub-10ms global response times, delivering a blazing-fast
                  user experience.
                </p>
                <div className="flex items-center gap-1 text-gray-3 group-hover:text-gray-6 mt-4 mr-1">
                  <a
                    href="https://www.youtube.com/watch?v=rtA9n8ot7jA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                    </svg>
                    <span className="overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/mananshah78424/InstaS3Verse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                        opacity="0.2"
                      ></path>
                      <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                    </svg>
                    <span className="hidden [@media(min-width:355px)]:block -ml-0.5 overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
                      repo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
