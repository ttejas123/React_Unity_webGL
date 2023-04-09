import { Unity, useUnityContext } from "react-unity-webgl";

function UnityContainer() {
  const { unityProvider, isLoaded, loadingProgression, addEventListener, removeEventListener, sendMessage }= useUnityContext({
    loaderUrl: "Build/Zoom.loader.js",
    dataUrl: "Build/Zoom.data.br",
    frameworkUrl: "Build/Zoom.framework.js.br",
    codeUrl: "Build/Zoom.wasm.br",
  });
  return (
    <div className="UnityContainer">
      <Unity
            style={{
                width: "100%",
                height: "100vh",
                justifyContent:"center",
                alignItems: "center"
            }}
          className="unity-canvas" devicePixelRatio={3}  unityProvider={unityProvider}   
        />
    </div>
  )
}

export default UnityContainer
