import ApplicationGraphic from '../svgs/ApplicationGraphic';
import BuildGraphic from '../svgs/BuildGraphic';
import DeployGraphic from '../svgs/DeployGraphic';

export const aboutMe = 'Although my background is in computer engineering, I\'m fascinated by the challenges that ' +
  'a user interface presents. Not only are they surprisingly complex technically, they also are representative of the mentality ' +
  'and branding of their creators in a uniquely visual way. In the oversaturated domain of web apps, experience is everything, and the UI often ' +
  'drives that experience, which means that UI developers need to have a combination of hard and soft skills to be successful. It\s this ' +
  'combination, plus an unwavering eye for detail, that has enabled much of my own success as a front end developer. Simply put, it\'s my ' +
  'job to make your job easier.';

export default [
  {
    title: 'Application',
    description: 'This application was built with React and Grommet. I\'ve grown to love React. It does an excellent job ' +
      'of abstracting the DOM, allows you to structure your code base by function instead of language with JSX, and employs a ' +
      'unidirectional data flow which makes managing your data lifecycle a breeze (usually). For the component library, I used Grommet. ' +
      'Grommet makes building flexible UIs easy, in that it is unopinionated and responsive.',
    image: ApplicationGraphic,
  },
  {
    title: 'Build',
    description: 'Gatsby is categorized as a static site builder, but it is so much more. It completely abstracts away the bundler and ' +
      'transpilation process, so no need to muck with Webpack and Babel. It also provides you with a local development environment, does ' +
      'bundle splitting automatically, allows you to prefetch and statically compile data at build time, uses GraphQL for everything (including ' +
      'querying your filesystem), and has a full suite of plugins for various purposes. In my experience, it\'s unmatched in terms of ' +
      'providing a rich and usable developer experience when building RIAs.',
    image: BuildGraphic,
  },
  {
    title: 'Deploy',
    description: 'After any code is pushed to Github and merged to master, Netlify triggers a build and deploy through managed CI/CD pipeline. ' +
      'Maybe before I would have used CircleCI or Jenkins for my CI/CD, which would test, build, and push a bundle to an S3 bucket that was served ' +
      'through CloudFront and connected to DNS via Route53. Now, all of that is abstracted by Netlify. They handle the entire DevOps stack for ' +
      'you and it is delightful. They also have support for Lambdas and other serverless functionality that can tied in through various triggers.',
    image: DeployGraphic,
  },
];