/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UploadExportSmallProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const UploadExportSmall: React.SFC<UploadExportSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 18 18" fill="currentColor" width={ size || "18" } height={ size || "18" } {...props}>
    <path d="M5,10 L5,13 C5,13.5522847 5.44771525,14 6,14 L13,14 C13.5522847,14 14,13.5522847 14,13 L14,10 L15,10 L15,13 C15,14.1045695 14.1045695,15 13,15 L6,15 C4.8954305,15 4,14.1045695 4,13 L4,10 L5,10 Z M9,4.70513268 L6.84604339,6.85689248 C6.65261624,7.05012236 6.33919341,7.05004241 6.14586487,6.85671387 C5.95249133,6.66334033 5.95228669,6.34988304 6.14540758,6.15625718 L9.5,2.79289322 L12.8517404,6.15611589 C13.0448058,6.34984271 13.0445378,6.66331747 12.8511414,6.85671387 C12.6578109,7.05001031 12.3444378,7.04998276 12.1511721,6.8566831 L10,4.70513268 L10,12 L9,12 L9,4.70513268 Z"
    />
  </svg>
);
UploadExportSmall.displayName = 'UploadExportSmall';
export default UploadExportSmall;
/* tslint:enable */
/* eslint-enable */
