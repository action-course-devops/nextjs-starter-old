import { Flagsmith } from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.NEXT_PUBLIC_FLAGSMITH_KEY as string,
  requestTimeoutSeconds: 60,
});

export default flagsmith;
