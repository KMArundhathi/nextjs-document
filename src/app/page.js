"use client";

import { aboutImage1, aboutImage2, aboutImage3, baseImg, buttonImg, buttonImge2, cardImg, cardImge2, componentCode1, componentCode2, componentImg, lizardImg, nextImg, profileImg, runImg, tailwindImg, textfieldImg, textfieldImg2 } from "@/assets";
// import CardComponent from "@/component/CardCoponent";
import { Alert, Box, Button, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Read Docs");
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* <CardComponent /> */}
      <section className="bg-white max-w-7xl shadow p-8 rounded-lg">
        <div className="w-full text-left">
          <h2 className="text-3xl font-bold text-[#223354] mb-4 border-b-2 border-b-neutral-100 pb-12">
            Introduction
          </h2>
          <h2 className="text-3xl font-bold text-[#223354] mb-4 mt-12 ">
            Welcome
          </h2>
          <p className="mt-4 text-gray-600 text-2xl mb-12">
            This Next.js page is designed using Tailwind CSS. It provides a basic guide on installing Next.js, running the application, creating components, setting up the page router, and installing and using packages. This serves as a simple example of how to create a Next.js app.
          </p>
          <p className="mt-4 text-gray-600 text-2xl mb-12">
            In the tabs below, you'll find examples of how to write code using Tailwind CSS and Material UI. The first tab covers how to install and run a project. If you're developing a Next.js app, you only need to install one of these UI libraries—there's no need to install both. The other tabs demonstrate how to create a component, set up page routing, and include additional examples.
          </p>
        </div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-base font-semibold text-center" role="tablist">
            {["Read Docs", "Install Mui", "Install Tailwindcss", "Creating a Route", "Creating a Component", "Examples of Mui", "Examples of Tailwindcss"].map((tab) => (
              <li key={tab} className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg transition-all ${activeTab === tab
                    ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                    : "text-[#223354] hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabs Content */}
        <div>
          {activeTab === "Read Docs" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <p className="text-xl text-[#223354] dark:text-gray-400">
                Guide to Installing Next.js with Material UI and Tailwind CSS
              </p>
              <div className="mt-4">
                <Alert severity="info">
                  <span className="text-xl">
                    To know more, visit{" "}
                    <a
                      href="https://nextjs.org/docs/app/getting-started/installation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {' '}  Nextjs Installation
                    </a>.
                  </span>
                </Alert>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 underline underline-offset-8">Using npm:</h6>
              <ol className="list-decimal list-inside text-gray-600 mt-4 mb-4 text-xl">
                <li className="mb-2">Open a terminal or command prompt.</li>
                <li className="mb-2">Run the following command to create a new Next.js project:</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">npx create-next-app@latest my-next-app</code>
                  <p className="mt-2 text-sm text-gray-600">
                    You can replace <span className="text-blue-600 font-mono">my-next-app</span> with another name </p>
                </div>
                <li className="mb-2">During the installation, you will see prompts asking for configurations such as:</li>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-base font-medium">
                  <li className="mb-2">TypeScript: Choose whether to use TypeScript.</li>
                  <li className="mb-2">ESLint: Choose whether to enable ESLint.</li>
                  <li className="mb-2">Tailwind CSS: Optionally include Tailwind CSS setup.</li>
                  <li className="mb-2">
                    <code className="text-sm font-mono text-gray-700">**directory**: Decide if you want to use the src directory.</code>
                  </li>
                  <li className="mb-2">App Router (recommended): Choose between the new app router or the pages router.</li>
                  <li className="mb-2">Import alias: Set up import aliases for cleaner imports.</li>
                </ul>
                <li className="mb-2">Navigate into the project directory</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">cd my-next-app</code>
                </div>
                <li className="mb-2">Install dependencies</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">npm install</code>
                </div>
                <li className="mb-2">Start the development server</li>
                <div className="bg-gray-200 p-4 rounded-md">
                  <code className="text-sm font-mono text-gray-700">npm run dev</code>
                </div>
              </ol>
              <h6 className="text-base font-semibold text-[#223354] mt-6 underline underline-offset-8">Using pnpm:</h6>
              <ol className="list-decimal list-inside text-gray-600 mt-4 mb-4 text-xl">
                <li className="mb-2">Ensure pnpm is installed globally</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">npm install -g pnpm</code>
                </div>
                <li className="mb-2">Create a new Next.js project using pnpm:</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">pnpx create-next-app@latest my-next-app</code>
                </div>
                <li className="mb-2">Navigate into the project directory</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">cd my-next-app</code>
                </div>
                <li className="mb-2">Install dependencies</li>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                  <code className="text-sm font-mono text-gray-700">pnpm install</code>
                </div>
                <li className="mb-2">Start the development server</li>
                <div className="bg-gray-200 p-4 rounded-md">
                  <code className="text-sm font-mono text-gray-700">pnpm run dev</code>
                </div>
              </ol>
              <h3 className="text-xl font-extrabold">The project will be available at http://localhost:3000/</h3>
              <h3 className="text-xl font-medium"> This image displays the Next.js app running using npm.</h3>
              <div className="mt-2">
                <Image src={nextImg} alt="nextImg" />
                <Image src={runImg} alt="runImg" />
              </div>
            </div>
          )}
          {activeTab === "Install Mui" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <Alert severity="info">
                <span className="text-xl">
                  To know more, visit{" "}
                  <a
                    href="https://mui.com/material-ui/getting-started/installation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {' '}  Mui Installation
                  </a>.
                </span>
              </Alert>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Using npm:</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <code className="text-sm font-mono text-gray-700">npm install @mui/material @emotion/react @emotion/styled</code>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Using pnpm:</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <code className="text-sm font-mono text-gray-700">pnpm add @mui/material @emotion/react @emotion/styled</code>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">
                1. If you're using the app router (with the app/ directory), you should import CssBaseline in the app/layout.js file to apply global styles.
              </h6>
              <h6 className="text-base font-semibold text-[#223354]  mb-2">
                2. If you're using the page router (with the pages/ directory), you should import CssBaseline in the pages/_app.js file.
              </h6>
              <h6 className="text-indigo-900 text-base font-medium">CssBaseline in your project applies Material UI's global styles and ensures consistent styling across all pages and components.</h6>
              <div className="mt-2">
                <Image src={baseImg} alt="baseImg" />
              </div>
            </div>
          )}
          {activeTab === "Install Tailwindcss" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <Alert severity="warning" className="mb-4">
                <span className="text-xl">
                  By default, when installing Next.js, you are given the option to include Tailwind CSS. However, if you choose not to install it during setup, you can manually install Tailwind CSS using the following steps.
                </span>
              </Alert>
              <Alert severity="info">
                <span className="text-xl">
                  To know more, visit{" "}
                  <a
                    href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {' '}  Tailwind CSS Installation
                  </a>.
                </span>
              </Alert>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Using npm:</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <code className="text-sm font-mono text-gray-700">npm install tailwindcss @tailwindcss/postcss postcss</code>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Using pnpm:</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <code className="text-sm font-mono text-gray-700">pnpm add tailwindcss @tailwindcss/postcss postcss</code>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Configure Tailwind by editing tailwind.config.js</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700">
                  {`const config = {
plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;`}
                </pre>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Import Tailwind CSS into your project by adding the following lines to styles/globals.css</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <code className="text-sm font-mono text-gray-700">@import "tailwindcss";</code>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Start using Tailwind CSS classes in your components</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700 whitespace-pre-wrap">
                  {`export default function Home() {
  return (
    <div className="text-center text-2xl font-bold text-blue-600">
      Hello, Tailwind CSS in Next.js!
    </div>
  );
}`}
                </pre>
              </div>
              <div className="mt-2">
                <Image src={tailwindImg} alt="tailwindImg" />
              </div>
            </div>
          )}
          {activeTab === "Creating a Route" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">

              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Inside the app/ directory, create a new folder (this becomes the route)</h6>
              <h6 className="text-base font-normal text-[#223354]  mb-2">Inside the folder, create a page.js file.</h6>
              <h6 className="text-base font-normal text-[#223354]  mb-2">Creating an "about" page.</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700">
                  {`app/
 ├── page.js          
 ├── about/           # "about" route
 │   ├── page.js      # "/about" page
`}
                </pre>
              </div>
              <h6 className="text-base font-normal text-[#223354]  mb-2">Add Content to the Route Page</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700">
                  {`import React from 'react'
                  
                  function AboutPage() {
                      return (
                          <div>
                              <h1 className='text-center items-center justify-center text-2xl text-amber-700'>About Us</h1>
                              <p className='text-center items-center justify-center text-2xl text-amber-700'>This is the About page.</p></div>
                      )
                  }
                  
                  export default AboutPage
`}
                </pre>
              </div>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Open http://localhost:3000/about → About Page</h6>
              </div>
              <div className="mt-2">
                <Image src={aboutImage1} alt="aboutImage1" />
                <Image src={aboutImage2} alt="aboutImage2" />
                <Image src={aboutImage3} alt="aboutImage3" />
              </div>
            </div>
          )}
                    {activeTab === "Creating a Component" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <Alert severity="info">
                <span className="text-xl">
                  In the App Router, components are server components by default; add "use client" at the top if using state, hooks, or event handlers.
                </span>
              </Alert>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Inside the src folder create components folder and create a new file, e.g., Card.js</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700">
                  {`import React from 'react'

function CardComponent() {
  return (
    <div>
        <h1 className="text-xl text-amber-700 text-center justify-center">This is a reusable component</h1>
    </div>
  )
}

export default CardComponent`}
                </pre>
              </div>
              <h6 className="text-base font-semibold text-[#223354] mt-6 mb-2">Use the component inside a page</h6>
              <div className="bg-gray-200 p-4 rounded-md mb-4">
                <pre className="text-sm font-mono text-gray-700">
                  {`import CardComponent from "@/component/CardComponent";

export default function Home() {
  return (
    <div>
      <CardComponent />
    </div>
  );
}`}
                </pre>
              </div>
              <div className="mt-2">
                <Image src={componentCode1} alt="componentCode1" />
                <Image src={componentCode2} alt="componentCode2" />
                <Image src={componentImg} alt="componentImg" />
              </div>
            </div>
          )}
          {activeTab === "Examples of Mui" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <p className="text-xl text-[#223354] dark:text-gray-400">
                Material UI is an open-source React component library that implements Google's Material Design.
              </p>
              <ol className="list-decimal list-inside text-gray-600 mt-4 text-xl">
                <li>Saves time – no need to design components from scratch.</li>
                <li>Easy to customize – change themes, colors, and styles easily.</li>
                <li>Responsive – works well on all screen sizes.</li>
              </ol>
              <div className="mt-4">
                <Alert severity="info">
                  <span className="text-xl">
                    Here are a few examples. To know more, visit{" "}
                    <a
                      href="https://mui.com/material-ui/getting-started/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {' '}  MUI Documentation
                    </a>.
                  </span>
                </Alert>
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Card</h3>
              </div>
              <div className="mt-6">
                <Card sx={{ maxWidth: 345 }}>
                  <div style={{ position: "relative", width: "100%", height: "140px" }}>
                    <Image
                      src={lizardImg}
                      alt="Lizard Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="mt-8">
                <Image src={cardImg} alt="cardImage" />
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Button</h3>
              </div>
              <div className="mt-6">
                <Stack spacing={2} direction="row">
                  <Button variant="text">Text</Button>
                  <Button variant="contained">Contained</Button>
                  <Button variant="outlined">Outlined</Button>
                </Stack>
              </div>
              <div className="mt-8">
                <Image src={buttonImg} alt="buttonImage" />
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Basic TextField</h3>
              </div>
              <div className="mt-6">
                <Box
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>
              </div>
              <div className="mt-8">
                <Image src={textfieldImg} alt="testfieldImage" />
              </div>
            </div>
          )}
          {activeTab === "Examples of Tailwindcss" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <p className="text-lg text-[#223354] dark:text-gray-400">
                Tailwind CSS is a tool that helps you style your website or app quickly. Instead of writing custom CSS (styles), you use pre-made utility classes to add styles directly to HTML or JSX elements.
              </p>
              <ol className="list-decimal list-inside text-gray-600 mt-4 text-xl">
                <li>Customization – You can create any design you want without needing to change the default styles.</li>
                <li>Responsive Design – Tailwind has built-in options to make your site look good on all screen sizes (like mobile, tablet, or desktop).</li>
              </ol>
              <div className="mt-4">
                <Alert severity="info">
                  <span className="text-xl">
                    Here are a few examples. To know more, visit{" "}
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {' '}  Tailwind CSS Documentation
                    </a>.
                  </span>
                </Alert>
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Card</h3>
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 shadow-2xl">
                  <Image src={profileImg} alt="profileImage" className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" />
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                      <p className="text-lg font-semibold text-black">Erin Lindford</p>
                      <p className="font-medium text-gray-500">Product Engineer</p>
                    </div>
                    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 border-2 p-2 rounded-2xl">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Image src={cardImge2} alt="cardImge2" />
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Button</h3>
              </div>
              <div className="mt-6">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>

              </div>
              <div className="mt-8">
                <Image src={buttonImge2} alt="buttonImage" />
              </div>
              <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-[#223354]">Textfield</h3>
              </div>
              <div className="mt-6">
                <div className="mb-6">
                  <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
                  <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
                  <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

              </div>
              <div className="mt-8">
                <Image src={textfieldImg2} alt="textfieldImg2" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
