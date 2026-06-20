import { mkdir, writeFile } from "node:fs/promises";

await mkdir("out", { recursive: true });
await writeFile("out/.nojekyll", "");
