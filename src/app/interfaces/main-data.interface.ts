import IframeConfig from "../components/iframe/_def";

export default interface MainData {
  title?: string;
  subtitle?: string;
  mainIframeConfig: IframeConfig;
  tracks?: {
    id: string;
    title: string;
    iframeConfig?: IframeConfig;
  }[];
}
