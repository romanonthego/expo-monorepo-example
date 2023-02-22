import { MockScreen } from "../../src";

export default function SignUp() {
  return (
    <MockScreen
      title="Welcome"
      filename={__filename}
      links={[{ title: "Sign In", to: "/sign-in" }]}
    />
  );
}
