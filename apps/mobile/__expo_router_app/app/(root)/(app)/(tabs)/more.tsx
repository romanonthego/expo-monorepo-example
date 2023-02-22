import { MockScreen } from "../../../../src";
import { useAuth } from "../../../../src/state";

export default function More() {
  const { signOut } = useAuth();
  return (
    <MockScreen
      title="More"
      actions={[{ title: "sign out", onPress: () => signOut() }]}
    />
  );
}
