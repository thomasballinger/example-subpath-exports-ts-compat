import assert from "assert";
import extensionless from "extensionless";
import extensionlessOne from "extensionless/one";
import extensionlessTwo from "extensionless/two";
assert(extensionless === "extensionless/index.js");
assert(extensionlessOne === "extensionless/one.js");
assert(extensionlessTwo === "extensionless/two/index.js");

import { index as pjr } from "package-json-redirects";
import { one as pjrOne } from "package-json-redirects/one";
import { two as pjrTwo } from "package-json-redirects/two";
assert(pjr === "package-json-redirects/cjs/index.js");
assert(pjrOne === "package-json-redirects/cjs/one.js");
assert(pjrTwo === "package-json-redirects/cjs/two.js");

import tvw from "types-versions-wildcards";
import tvwOne from "types-versions-wildcards/one";
import tvwTwo from "types-versions-wildcards/two";
assert(tvw === "types-versions-wildcards/dist/index.js");
assert(tvwOne === "types-versions-wildcards/dist/one.js");
assert(tvwTwo === "types-versions-wildcards/dist/two.js");
