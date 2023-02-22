import { MockScreen, useAuth } from "../../src";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <MockScreen
      title="SignIn"
      actions={[{ title: "sign in success", onPress: () => signIn() }]}
    />
  );
}
