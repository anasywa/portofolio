// Tech stack assets module - consolidates all tech stack icons
import AWSLight from './AWS-Light.svg';
import Bootstrap from './Bootstrap.svg';
import Canva from './Canva.svg';
import CapCut from './CapCut.png';
import C from './C.svg';
import CPP from './CPP.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import DartLight from './Dart-Light.svg';
import Docker from './Docker.svg';
import Electron from './Electron.svg';
import ExpressJSLight from './ExpressJS-Light.svg';
import Flask from './Flask.svg';
import FlutterLight from './Flutter-Light.svg';
import GoogleColab from './GoogleColab.svg';
import GithubLight from './Github-Light.svg';
import GraphQLLight from './GraphQL-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import JQuery from './JQuery.svg';
import LaTeXLight from './LaTeX-Light.svg';
import MaterialUILight from './MaterialUI-Light.svg';
import MongoDB from './MongoDB.svg';
import MySQL from './MySQL.svg';
import NodeJSLight from './NodeJS-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import Pandas from './Pandas.svg';
import PHP from './PHP.svg';
import Postman from './Postman.svg';
import Python from './Python.svg';
import ReactLight from './React-Light.svg';
import RedisLight from './Redis-Light.svg';
import StackOverflowLight from './StackOverflow-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TensorFlowLight from './TensorFlow-Light.svg';
import ThreeJSLight from './ThreeJS-Light.svg';
import TypeScript from './TypeScript.svg';
import UnityLight from './Unity-Light.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';
import VSCode from './VSCode.svg';

export const techStackIcons = {
  AWSLight,
  Bootstrap,
  Canva,
  CapCut,
  C,
  CPP,
  CS,
  CSS,
  DartLight,
  Docker,
  Electron,
  ExpressJSLight,
  Flask,
  FlutterLight,
  GoogleColab,
  GithubLight,
  GraphQLLight,
  HTML,
  JavaLight,
  JavaScript,
  JQuery,
  LaTeXLight,
  MaterialUILight,
  MongoDB,
  MySQL,
  NodeJSLight,
  NotionLight,
  NpmLight,
  Pandas,
  PHP,
  Postman,
  Python,
  ReactLight,
  RedisLight,
  StackOverflowLight,
  TailwindCSSLight,
  TensorFlowLight,
  ThreeJSLight,
  TypeScript,
  UnityLight,
  VercelLight,
  ViteLight,
  VSCode,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;