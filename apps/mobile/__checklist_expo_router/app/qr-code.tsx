import QRCode from "react-native-qrcode-svg";
import { CheckListScreen } from "../src";

export default function QRCodeScreen() {
  return (
    <CheckListScreen checkId="QR-CODE">
      <QRCode value="http://awesome.link.qr" size={200} />
    </CheckListScreen>
  );
}
