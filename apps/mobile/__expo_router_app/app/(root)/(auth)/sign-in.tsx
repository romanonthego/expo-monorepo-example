import { MockScreen } from "../../../src";
import { useAuth } from "../../../src/state";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <MockScreen
      title="SignIn"
      actions={[{ title: "sign in success", onPress: () => signIn() }]}
    />
  );
}
