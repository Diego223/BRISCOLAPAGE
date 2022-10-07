import React from "react";
import './fam.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "../../../public/WebBuild/Build/webBuild.loader.js",
  //   dataUrl: "../../../public/WebBuild/Build/webBuild.data",
  //   frameworkUrl: "../../../public/WebBuild/Build/webBuild.framework.js",
  //   codeUrl: "../../../public/WebBuild/Build/webBuild.wasm",
  // });

  return (
    <div class='container'>
      <iframe src="https://jmdeleon2000.github.io/tour-unity/" width="100%" height="100%" />
    </div>
  );
}

export default Game;