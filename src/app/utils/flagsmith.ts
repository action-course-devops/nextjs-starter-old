import { Flagsmith } from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_KEY_1 as string,
  requestTimeoutSeconds: 60,
});

export default flagsmith;
