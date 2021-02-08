// import something here
import { boot } from "quasar/wrappers";
import { BaseButton } from "base-components";
export default boot(async ({ app }) => {
  app.component("BaseButton", BaseButton);
});
