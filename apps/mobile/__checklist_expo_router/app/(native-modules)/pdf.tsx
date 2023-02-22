import PDFViewer from "react-native-pdf";
import { CheckListScreen } from "../../src";

export default function PDFScreen() {
  return (
    <CheckListScreen checkId="PDF">
      <PDFViewer
        // WTF: https://stackoverflow.com/a/72674864
        trustAllCerts={false}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        source={{
          uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    </CheckListScreen>
  );
}
