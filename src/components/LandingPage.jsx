import webdev from '../images/webDevelopment.jpeg'
import socialMedia from '../images/socialMedia.jpeg'
import digimart from '../images/digiMart.jpeg'
import { 
  SparklesIcon, 
  GlobeIcon,
} from '@heroicons/react/outline' 
import FooterSection from './FooterSection'
import HeaderSection from './HeaderSection'
  
 
export default function LandingPage() {
  return (
    <div className="bg-white">
      <HeaderSection />
      <main>
        {/* Hero section */}
        <div className="relative mt-10">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={digimart}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0    mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24  lg:py-32 lg:px-8 ">
                <h1 className="text-center text-4xl  font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white border-white ">Be on top of the</span>
                  <span className="block text-gray-400">Digital Market </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  Let us help you to beat your competitors with modern tools
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-50 hover:text-indigo-700 sm:px-8"
                    >
                      Email us 
                    </a>
                    {/* <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Call us
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
             
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          
          <div className="relative">
            <div className="lg:mx-12 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <GlobeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Website Creation and management
                    </h2>
                    <p className="mt-4 text-lg text-justify text-gray-500">
                      COVID has accelerated the need for an online presence for every business.
                       Most of the time, people search on google, and if you have a modern website, 
                       it will come up first. Generally, four steps are involved in sales or service — 
                       awareness, Interest, Desire and Action. In the first step, you are letting them know 
                       that you are in the market. Once they look at your website, they like your product and buy it. 
                        We develop the website with updated technology and follow the current trends. 
                        It will be easy to access and user friendly.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="px-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={webdev}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
 
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-auto lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="col-span-1 px-4 max-w-xl mx-auto sm:px-6 lg:py-auto lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-3">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Pay Per Click and other ad management services
                    </h2>
                    <p className="mt-4 text-lg text-justify text-gray-500">
                      If you want to buy an item or if you want to know more about anything, what would you do?
                      Yes, you’re right. You google it. 

                      Have you ever wondered when you search for something on google on top, an advertisement related to your search will show up?

                      Do you have any idea where this ad comes from and how google knows this is the relevant ad related to your search?

                      The logic/technique behind this is PPC (Pay per click).

                      If you click on the click to check the website, that website will pay for that click to search engines like google.

                      For example, you are running a grocery store. If you use PPC, when I search on google, your shop will show up. 

                      Most importantly, PCC brings visits (Attract the customers) to your website, and it is one of the best ways of digital marketing.

                      It is a digital era, and people spend most of their time virtually.

                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="px-4   sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" 
                    src={webdev}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="relative mt-24">
            <div className="lg:mx-12 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <GlobeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Search engine optimization services
                    </h2>
                    <p className="mt-4 text-lg text-justify text-gray-500">
                      SEO is a bit different than the PCC. For PCC, we invest the money, 
                      whereas SEO involves time.  SEO is an organic way of ranking your website, 
                      and this means your not going to pay the search engine to appear on top, and we take care of your website while developing and maintaining it. SEO is not a one day job, and it is an ongoing process. Every time new competitors join the market to beat the competition, you need to update the SEO regularly.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="px-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={webdev}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-auto lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="col-span-1 px-4 max-w-xl mx-auto sm:px-6 lg:py-auto lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-3">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Social Media management services
                    </h2>
                    <p className="mt-4 text-lg text-justify text-gray-500">
                      Nowadays, everyone is on social media, and it not only connects the people,
                       but it can connect the business with consumers. Depending on the product,
                        we can choose the platform, and you can choose from multiple packages.
                        Nowadays, everyone is on social media, and it not only connects the people,
                       but it can connect the business with consumers. Depending on the product,
                        we can choose the platform, and you can choose from multiple packages.
                        Nowadays, everyone is on social media, and it not only connects the people,
                       but it can connect the business with consumers. Depending on the product,
                        we can choose the platform, and you can choose from multiple packages.

                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="px-4   sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" 
                    src={socialMedia}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
 
          <div className="relative mt-24">
            <div className="lg:mx-12 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <GlobeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Blogs and content creation services
                    </h2>
                    <p className="mt-4 text-lg text-justify text-gray-500">
                      It is a good idea to maintain a blog for your brand. 
                      You can explain your whole journey over there and attract more 
                      customers to your website with your article. 

                              Critical points to consider: 

                              How did you start your business?
                              What is your motivation? 
                              Client reviews.
                              Upcoming changes.

                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="px-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={webdev}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Get in touch.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
      <FooterSection /> 
    </div>
  )
}
