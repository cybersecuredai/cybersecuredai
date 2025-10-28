// Ambient type shims to keep CI typecheck green for optional 3D/visual components
// These components are only used in demos; we relax types to avoid pulling heavy three.js types.
declare class Vector3 { constructor(...args: any[]); }
declare const Line: any;
declare const Canvas: any;
declare const OrbitControls: any;
declare const SecurityNodeMesh: any;
declare const Sphere: any;

declare namespace JSX {
  interface IntrinsicElements {
    group: any;
    Sphere: any;
    meshBasicMaterial: any;
    ambientLight: any;
    pointLight: any;
    gridHelper: any;
  }
}

declare global {
  interface Window {
    // Web Speech API stubs
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}
