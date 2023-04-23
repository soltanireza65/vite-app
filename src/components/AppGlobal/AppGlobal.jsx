import { Global } from "@mantine/core";

import regular from "./fonts/iranSansDN/IRANSansDN.woff";

export function AppGlobal() {
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
      ]}
    />
  );
}
