import { MockScreen } from "../../../src";

export default function WalletItem() {
  return (
    <MockScreen
      title="WalletItem"
      links={[
        {
          title: "HistoryItem",
          to: "/history/1",
        },
      ]}
    />
  );
}
