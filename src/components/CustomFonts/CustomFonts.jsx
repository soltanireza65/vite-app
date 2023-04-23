import { Global } from "@mantine/core";

import regular from "./fonts/iranSansDN/IRANSansDN.woff";

// @font-face {
//   font-family: "IRANSansWeb";
//   src:url("./fonts/IRANSansWeb/IRANSansWeb_0.ttf") format("truetype"),
//     url("./fonts/IRANSansWeb/IRANSansWeb_0.woff") format("woff");
// }

// @font-face {
//   font-family: "IRANSansFaNum";
//   src: url("./fonts/IRANSansFaNum/IRANSansWebFaNum.ttf") format("truetype"),
//     url("./fonts/IRANSansFaNum/IRANSansWebFaNum.eot") format("embedded-opentype"),
//     url("./fonts/IRANSansFaNum/IRANSansWebFaNum.woff") format("woff");
// }


// @font-face {
//   font-family: "iransansDN";
//   src: url("./fonts/IRANSansDN/IRANSansDN.eot") format("embedded-opentype"),
//     url("./fonts/IRANSansDN/IRANSansDN.ttf") format("truetype"),
//     url("./fonts/IRANSansDN/IRANSansDN.woff") format("woff");
// }

// @font-face {
//   font-family: "tahoma";
//   font-weight: 100;
//   src: url("./fonts/tahoma/tahoma/TAHOMAB0.ttf") format("embedded-opentype"),
//     url("./fonts/tahoma/TAHOMA_0.ttf") format("truetype"), url("./fonts/tahoma/tahoma/TAHOMABD.ttf") format("woff");
// }

// /******************************/

// @font-face {
//   font-family: "iranSansDN";
//   src: url("./fonts/iranSansDN/IRANSansDN.eot");
//   src: local("IRANSansDN"), url("./assets/fonts/iransans/IRANSansDN.eot?#iefix") format("embedded-opentype"),
//     url("./fonts/iranSansDN/IRANSansDN.woff2") format("woff2"),
//     url("./fonts/iranSansDN/IRANSansDN.woff") format("woff"),
//     url("./fonts/iranSansDN/IRANSansDN.ttf") format("truetype"),
//     url("./fonts/iranSansDN/IRANSansDN.svg#IRANSansDN") format("svg");
// }
export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "IRANSansWeb",
            src: `url('${regular}') format("woff")`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
        // {
        //   '@font-face': {
        //     fontFamily: 'IRANSansWeb',
        //     src: `url('${heavy}') format("woff2")`,
        //     fontWeight: 900,
        //     fontStyle: 'normal',
        //   },
        // },
      ]}
    />
  );
}
