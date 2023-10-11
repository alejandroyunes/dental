import LinkIconSvg from "../../pages/translate/svgs/alejandro/LinkIconSvg"
import ArrowUp from "../../pages/translate/svgs/alejandro/ArrowUp"

interface AlejandroProps {
  image: string
  title: string
  subtitle: string
  about: string
  experience: string
  projects: string
  aboutTextOne: string
  aboutTextTwo: string
  aboutTextThree: string
  jobs?: JobsType[]
  projectsArr?: JobsType[]
}

export type JobsType = {
  date: string
  title: string
  titleCompany: string
  companyUrl: string
  description: string
  img?: string
  urls?: {
    relatedUrl: string
    url: string
  }[]
  technologies?: string[]
}

export default function AlejandroPage({
  aboutTextThree,
  aboutTextTwo,
  aboutTextOne,
  subtitle,
  about,
  experience,
  projects,
  jobs,
  projectsArr
}: AlejandroProps) {


  return (

    <div>
      <div className="__variable_20b187 group/spotlight relative">


        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">

          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                    <span className="sr-only">Korok seeds</span>
                    <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">A</span>
                    <span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]" aria-hidden="true">l</span>
                    <span className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]" aria-hidden="true">e</span>
                    <span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">j</span>
                    <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]" aria-hidden="true">a</span>
                    <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">n</span>
                    <span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]" aria-hidden="true">d</span>
                    <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]" aria-hidden="true">r</span>
                    <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]" aria-hidden="true">o</span>
                    &nbsp;
                    <span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]" aria-hidden="true">C</span>
                    <span className="group-hover/korok:text-pink-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]" aria-hidden="true">a</span>

                    <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[325ms]" aria-hidden="true">n</span>
                    <span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[350ms]" aria-hidden="true">o</span>
                  </span>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">{subtitle}</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                    <li><a className="group flex items-center py-3 active" href={`#${about}`}><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" /><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{about}</span></a>
                    </li>
                    <li><a className="group flex items-center py-3"  href={`#${experience}`}><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" /><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{experience}</span></a>
                    </li>
                    <li><a className="group flex items-center py-3" href={`#${projects}`}><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" /><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{projects}</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs"><a className="block hover:text-slate-200" href="https://github.com/alejandroyunes" target="_blank" rel="noreferrer"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                  </path>
                </svg></a></li>
                <li className="mr-5 text-xs"><a className="block hover:text-slate-200" href="https://www.linkedin.com/in/alejandro-cano-yunes-bb562720a/" target="_blank" rel="noreferrer"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                  </path>
                </svg></a></li>
              </ul>
            </header>

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

              <section id={about} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">

                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{about}</h2>
                </div>
                <div>
                  <p className="mb-4">{aboutTextOne}</p>
                  <p className="mb-4">{aboutTextTwo}</p>
                  <p className="mb-4">{aboutTextThree}</p>
                </div>
              </section>

              <section id={experience} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">

                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{experience}</h2>
                </div>

                <div>
                  <ol className="group/list">
                    {jobs?.map((job, i) => (
                      <li className="mb-12" key={i}>
                        <div className="group relative z-0 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                          </div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">{job.date}</header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={job.companyUrl} target="_blank" rel="noreferrer" aria-label="UI Engineer Co-op at Apple">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                  <span>{job.title} · {/* */}
                                    <span className="inline-block">
                                      {job.titleCompany}
                                      <ArrowUp />
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{job.description}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                              {job.urls?.map((url, i) => (
                                <li className="mr-4" key={i}>
                                  <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href={url.url} target="_blank" rel="noreferrer">
                                    <LinkIconSvg />
                                    <span>{url.relatedUrl}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {job.technologies.map((tech, i) => (
                                <li className="mr-1.5 mt-2" key={i}>
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-12">
                    <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Résumé" href="/resume.pdf">
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full{/* */} </span>
                        <span className="whitespace-nowrap"><span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Résumé</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              <section id={projects} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">

                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{projects}</h2>
                </div>
                <div>

                  <ul className="group/list">

                    {projectsArr?.map((project, i) => (
                      <li className="mb-12" key={i}>
                        <div className="group relative z-0 grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={project.companyUrl} target="_blank" rel="noreferrer" aria-label="Spotify Profile">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                  {project.title} {/* */}
                                  <span className="inline-block">
                                    {project.titleCompany}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{project.description}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                              {project.technologies?.map((e, i) => (
                                <li className="mr-1.5 mt-2" key={i}>
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    {e}
                                  </div>
                                </li>
                              ))}

                            </ul>
                          </div>
                          <img
                            alt=""
                            loading="lazy"
                            width={200}
                            height={48}
                            decoding="async"
                            data-nimg={1}
                            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }}
                            src={project.img} />
                        </div>
                      </li>
                    ))}

                  </ul>

                </div>
              </section>
            </main>
          </div>
        </div>

      </div>
    </div>
  )
}