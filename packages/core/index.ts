import { makeInstaller } from "@NexusUI/utils";
import components from "./components";
import "@NexusUI/theme/index.css";

const installer = makeInstaller(components);

export * from "@NexusUI/components";
export default installer;
