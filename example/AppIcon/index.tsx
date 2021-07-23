export type AppIconName =
  'ic_analytics'
  |
  'ic_appointments'
  |
  'ic_arrow_round_back'
  |
  'ic_attachment'
  |
  'ic_calendar_2'
  |
  'ic_campaigns'
  |
  'ic_chevron_left'
  |
  'ic_chevron_right'
  |
  'ic_clock'
  |
  'ic_dropdown_arrow'
  |
  'ic_dropdown_arrow_bottom'
  |
  'ic_dropdown_arrow_top'
  |
  'ic_facialrecognition'
  |
  'ic_filter'
  |
  'ic_finance'
  |
  'ic_fingerprint'
  |
  'ic_growth'
  |
  'ic_growth_down'
  |
  'ic_home'
  |
  'ic_image'
  |
  'ic_info'
  |
  'ic_inquiries'
  |
  'ic_landingpages'
  |
  'ic_legal'
  |
  'ic_membermanagement'
  |
  'ic_ordermanagement'
  |
  'ic_productmanagement'
  |
  'ic_profile'
  |
  'ic_search'
  |
  'ic_social_media'
  |
  'ic_sort_by'
  |
  'ic_store'
  |
  'ic_tasktracker'
  ;


export type AppIconProps = {
  color?: string;
  className?: string;
  height?: number;
  name: AppIconName;
  onClick?: () => void;
  preview?: boolean;
  size?: number;
  style?: any,
  width?: number;
  wrapperStyle?: any;
}
const AppIcon = (props: AppIconProps) => {
  const { name, preview } = props;


  const renderPreview = () => {
    return <div>{renderPreviewKind(name)}</div>;
  };

  const renderIcon = (name: AppIconName) => {
    const { wrapperStyle } = props;
    if (wrapperStyle) {
      return <div style={wrapperStyle}>{getIcon(name)}</div>;
    }
    return getIcon(name);
  };


  const renderPreviewKind = (name: AppIconName) => {
    return (
      <div key={name}>
        <h3>&lt;Icon name="{name}" /&gt;</h3>
        {renderIcon(name)}
      </div>
    );
  };


  const getIcon = (name: AppIconName) => {
    const { color, height, onClick, size, style, width, className } = props;

    switch (name) {
      case ('ic_analytics'): return (<svg xmlns="http://www.w3.org/2000/svg" width="16.872" height="16.872" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 16.872 16.872"><path d="M16.213 3.625h-3.559a.659.659 0 0 0-.659.659v11.27h-1.12V.659a.659.659 0 0 0-.66-.659H6.656A.659.659 0 0 0 6 .659v14.894H4.877V8.9a.659.659 0 0 0-.659-.659H.659A.659.659 0 0 0 0 8.9v7.315a.659.659 0 0 0 .659.659h15.554a.659.659 0 0 0 .659-.659V4.284a.659.659 0 0 0-.659-.659zM3.559 15.553H1.318v-6h2.241zM7.315 1.318h2.241v14.235H7.315zm8.238 14.235h-2.24V4.943h2.241z" fill="inherit" /></svg>);
      case ('ic_appointments'): return (<svg xmlns="http://www.w3.org/2000/svg" width="17.988" height="16.582" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 17.988 16.582"><path d="M17.285 1.411h-3.46V.7a.702.702 0 1 0-1.405 0v.708H5.568V.7a.702.702 0 1 0-1.405 0v.708H.7a.7.7 0 0 0-.7.7V15.88a.7.7 0 0 0 .7.7h16.585a.7.7 0 0 0 .7-.7V2.114a.7.7 0 0 0-.7-.703zm-.7 13.766H1.405V2.816h2.758v.708a.702.702 0 1 0 1.405 0v-.708h6.852v.708a.702.702 0 1 0 1.405 0v-.708h2.758z" fill="inherit" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(8.045 6.603)" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(8.045 10.732)" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(3.917 6.603)" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(12.174 6.603)" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(3.917 10.732)" /><circle cx=".949" cy=".949" r=".949" fill="inherit" transform="translate(12.174 10.732)" /></svg>);
      case ('ic_arrow_round_back'): return (<svg xmlns="http://www.w3.org/2000/svg" height="20.753" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 22 20.753"><path d="M20.093 8.376H6.714l5.189-4.964a2.068 2.068 0 0 0 0-2.826 1.849 1.849 0 0 0-2.7 0L.563 8.963a1.9 1.9 0 0 0-.563 1.4v.025a1.9 1.9 0 0 0 .563 1.4l8.633 8.382a1.849 1.849 0 0 0 2.7 0 2.068 2.068 0 0 0 0-2.826L6.707 12.38h13.38a1.957 1.957 0 0 0 1.913-2 1.936 1.936 0 0 0-1.907-2.004z" fill="inherit" /></svg>);
      case ('ic_attachment'): return (<svg xmlns="http://www.w3.org/2000/svg" height="18.995" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 20 18.995"><path d="M6.974 18.995A7.013 7.013 0 0 1 2.015 7.059l5.661-5.6a5 5 0 0 1 7.073 7.063l-5.661 5.641A3.015 3.015 0 0 1 4.84 9.885l5.661-5.638a1.002 1.002 0 1 1 1.423 1.412l-5.663 5.642a1 1 0 0 0 1.413 1.413l5.662-5.655a2.993 2.993 0 1 0-4.248-4.218l-5.66 5.634a4.98 4.98 0 0 0 7.073 7.013l7.785-7.755a1.003 1.003 0 0 1 1.423 1.413l-7.785 7.765a7.013 7.013 0 0 1-4.949 2.084z" fill="inherit" /></svg>);
      case ('ic_calendar_2'): return (<svg xmlns="http://www.w3.org/2000/svg" width="21.964" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 21.964 22"><path d="M20.204 2.221h-2.64V0h-2.2v2.221h-8.8V0h-2.2v2.221h-2.6a1.76 1.76 0 0 0-1.76 1.76V20.24A1.76 1.76 0 0 0 1.76 22h18.444a1.76 1.76 0 0 0 1.76-1.76V3.981a1.76 1.76 0 0 0-1.76-1.76zm-.44 17.579h-17.6v-11h17.6zm0-13.2h-17.6V4.4h17.6z" fill="inherit" /><path fill="inherit" d="M10.084 11h2.2v2.2h-2.2zM14.484 11h2.2v2.2h-2.2zM10.084 15.4h2.2v2.2h-2.2zM5.684 15.4h2.2v2.2h-2.2z" /></svg>);
      case ('ic_campaigns'): return (<svg xmlns="http://www.w3.org/2000/svg" width="20.018" height="22.066" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 20.018 22.066"><g fill="inherit" stroke="#a4a4a4"><path d="M16.266 4.654l1.366-1.366a.638.638 0 1 0-.9-.9l-1.366 1.366a.638.638 0 0 0 .9.9zM8.75 2.386a.638.638 0 0 0-1.028.179L2.307 14.076l-1.97 1.97a.638.638 0 0 0 0 .9l2.732 2.732a.638.638 0 0 0 .9 0l1.6-1.6 3.647 3.647a.638.638 0 0 0 .9 0l2.391-2.391a.638.638 0 0 0 0-.9l-2.6-2.6 7.543-3.541a.638.638 0 0 0 .179-1.028zM3.52 18.327l-1.83-1.829 1.147-1.147 1.83 1.83zm7.636.56l-1.489 1.489-3.006-3.006 2.025-.953zm-5.453-2.475l-2.1-2.1L8.49 3.927l7.6 7.6zM19.23 7.664h-1.37a.638.638 0 1 0 0 1.275h1.366a.638.638 0 1 0 0-1.275zM11.713 2.791a.638.638 0 0 0 .641-.641V.788a.638.638 0 1 0-1.275 0V2.15a.638.638 0 0 0 .634.641z" /></g></svg>);
      case ('ic_chevron_left'): return (<svg data-name="Icon ionic-ios-arrow-back" xmlns="http://www.w3.org/2000/svg" height="10.495" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 6 10.495"><path data-name="Icon ionic-ios-arrow-back" d="M4.192 5.249L.221 9.217a.75.75 0 0 0 1.062 1.059l4.5-4.5a.749.749 0 0 0 .022-1.034L1.287.215A.75.75 0 1 0 .225 1.274z" fill="inherit" /></svg>);
      case ('ic_chevron_right'): return (<svg data-name="Icon ionic-ios-arrow-back" xmlns="http://www.w3.org/2000/svg" height="10.495" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 6 10.495"><path data-name="Icon ionic-ios-arrow-back" d="M4.192 5.249L.221 9.217a.75.75 0 0 0 1.062 1.059l4.5-4.5a.749.749 0 0 0 .022-1.034L1.287.215A.75.75 0 1 0 .225 1.274z" fill="inherit" /></svg>);
      case ('ic_clock'): return (<svg xmlns="http://www.w3.org/2000/svg" height="20.005" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 20 20.005"><path d="M9.997 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm3.678 13.928l-.292.292a.669.669 0 0 1-.907.024l-3.768-3.3A1.489 1.489 0 0 1 8.277 9.9l.349-5.946a.668.668 0 0 1 .658-.624h.413a.664.664 0 0 1 .656.623l.285 4.947a2.081 2.081 0 0 0 .446 1.091l2.621 3.024a.673.673 0 0 1-.027.913z" fill="inherit" /></svg>);
      case ('ic_dropdown_arrow'): return (<svg data-name="Component 68 – 1" xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 25 22"><path data-name="Rectangle 113" fill="inherit" d="M0 0h25v22H0z" /><path data-name="Path 20" d="M8.012 8.5l4.5 4.5 4.5-4.5" fill="inherit" stroke="#666c72" stroke-width="1.5" /></svg>);
      case ('ic_dropdown_arrow_bottom'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 25 22"><path fill="inherit" d="M0 0h25v22H0z" /><path d="M8.012 8.5l4.5 4.5 4.5-4.5" fill="inherit" stroke="#666c72" /></svg>);
      case ('ic_dropdown_arrow_top'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 22 22"><path fill="inherit" d="M22 22H0V0h22z" /><path d="M15.49 13.5L10.99 9l-4.5 4.5" fill="inherit" stroke="#666c72" /></svg>);
      case ('ic_facialrecognition'): return (<svg xmlns="http://www.w3.org/2000/svg" width="26.871" height="26.787" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 26.871 26.787"><defs><style>{`.a{fill:#666c72}`}</style></defs><path className="a" d="M9.461 2.951l-.98-1.365A8.4 8.4 0 0 0 7.099 2.83l1.255 1.117a6.754 6.754 0 0 1 1.107-.996zM7.5 5.157l-1.475-.8a8.091 8.091 0 0 0-.7 1.734l1.62.443A6.388 6.388 0 0 1 7.5 5.157z" /><path className="a" d="M18.473 19.468c1.829-1.442 3.359-3.266 3.359-5.333V8.229A8.324 8.324 0 0 0 13.438.003a8.507 8.507 0 0 0-3.329.672l.653 1.547a6.846 6.846 0 0 1 2.675-.539 6.643 6.643 0 0 1 6.718 6.55v5.9c0 1.679-1.831 3.708-5.023 5.563a3.434 3.434 0 0 1-3.389 0c-3.192-1.854-5.023-3.882-5.023-5.562V7.995l-1.682-.063v6.2c0 2.067 1.53 3.891 3.359 5.334v4.367l-2.894 1.445.751 1.5 3.823-1.912v-4.217c.276.176.552.344.822.5a5.058 5.058 0 0 0 5.074 0c.27-.157.546-.326.822-.5v4.221l3.823 1.916.751-1.5-2.894-1.451zM1.679 1.679h3.359V-.003H0v5.041h1.679zM25.192 20.154h-3.359v1.679h5.038v-5.041h-1.679zM21.833-.003v1.682h3.359v3.359h1.679V-.003zM1.679 16.792H0v5.038h5.038v-1.679H1.679z" /></svg>);
      case ('ic_filter'): return (<svg xmlns="http://www.w3.org/2000/svg" width="13.463" height="16.427" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 13.463 16.427"><path data-name="Path 73" d="M3.52 16.427v-3.754h1.643V7.51H3.52V0H1.643v7.51H0v5.163h1.643v3.755H3.52zm-1.643-7.04h1.408V10.8H1.877z" fill="inherit" /><path data-name="Path 71" d="M11.82 16.427V8.214h1.643V3.051H11.82V0H9.943v3.051H8.3v5.163h1.643v8.214zm-1.643-11.5h1.408v1.408h-1.408z" fill="inherit" /></svg>);
      case ('ic_finance'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18 18"><g fill="inherit" stroke="#a4a4a4"><circle cx="9" cy="9" r="9" stroke="none" /><circle cx="9" cy="9" r="8.3" fill="inherit" /></g><path d="M11.799 5.176a.177.177 0 0 0-.157-.093h-1.107a.168.168 0 0 0-.168.11L9.259 7.629q-.041.1-.159.354t-.177.394q-.215-.5-.325-.725L7.349 5.183a.183.183 0 0 0-.168-.1H6.057a.182.182 0 0 0-.162.093.2.2 0 0 0 0 .186l1.862 3.353H6.515a.188.188 0 0 0-.186.186v.6a.176.176 0 0 0 .055.133.183.183 0 0 0 .13.052h1.67v.497h-1.67a.188.188 0 0 0-.186.186v.6a.176.176 0 0 0 .055.133.183.183 0 0 0 .13.052h1.671v1.91a.175.175 0 0 0 .055.133.184.184 0 0 0 .13.052h1a.188.188 0 0 0 .186-.186V11.15h1.682a.183.183 0 0 0 .13-.052.175.175 0 0 0 .055-.133v-.6a.188.188 0 0 0-.185-.186H9.554v-.491h1.682a.183.183 0 0 0 .13-.052.175.175 0 0 0 .055-.133v-.6a.188.188 0 0 0-.185-.186H9.989l1.816-3.361a.176.176 0 0 0-.006-.18z" fill="inherit" /></svg>);
      case ('ic_fingerprint'): return (<svg xmlns="http://www.w3.org/2000/svg" width="24.115" height="26.787" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 24.115 26.787"><path d="M19.839 3.308a.718.718 0 0 1-.308-.074 15.655 15.655 0 0 0-14.92-.007.671.671 0 0 1-.643-1.179 17.017 17.017 0 0 1 16.179-.007.67.67 0 0 1-.308 1.266zM.673 10.34a.7.7 0 0 1-.388-.121.667.667 0 0 1-.161-.931A13.949 13.949 0 0 1 5.153 4.9a15.453 15.453 0 0 1 13.815-.013 14.011 14.011 0 0 1 5.023 4.353.665.665 0 0 1-.154.931.673.673 0 0 1-.938-.154 12.574 12.574 0 0 0-4.54-3.938 14.092 14.092 0 0 0-12.59.013 12.577 12.577 0 0 0-4.547 3.971.682.682 0 0 1-.549.275zM9.05 26.5a.665.665 0 0 1-.475-.2 14.035 14.035 0 0 1-2.692-3.529 11.919 11.919 0 0 1-1.413-5.819 7.419 7.419 0 0 1 7.587-7.219 7.415 7.415 0 0 1 7.587 7.219.67.67 0 1 1-1.339 0 6.077 6.077 0 0 0-6.248-5.88 6.082 6.082 0 0 0-6.248 5.88 10.608 10.608 0 0 0 1.239 5.163 12.7 12.7 0 0 0 2.471 3.241.661.661 0 0 1-.007.944.6.6 0 0 1-.462.2zm9.6-2.478a7.275 7.275 0 0 1-4.152-1.185 7.141 7.141 0 0 1-3.181-5.88.67.67 0 1 1 1.339 0 5.795 5.795 0 0 0 5.994 5.726 8.79 8.79 0 0 0 1.4-.127.67.67 0 1 1 .234 1.319 9.59 9.59 0 0 1-1.634.147zm-2.7 2.766a.5.5 0 0 1-.174-.027 10.229 10.229 0 0 1-4.976-2.813 9.805 9.805 0 0 1-2.9-6.991 4.129 4.129 0 0 1 8.25 0 2.792 2.792 0 0 0 5.572 0 9.451 9.451 0 0 0-9.7-9.154A9.771 9.771 0 0 0 3.164 13.2a8.6 8.6 0 0 0-.784 3.757 13.363 13.363 0 0 0 .891 4.828.672.672 0 0 1-1.259.469 14.912 14.912 0 0 1-.978-5.3 9.917 9.917 0 0 1 .917-4.333A11.124 11.124 0 0 1 12.01 6.467c6.087 0 11.043 4.708 11.043 10.494a4.129 4.129 0 0 1-8.25 0 2.792 2.792 0 0 0-5.572 0 8.473 8.473 0 0 0 2.5 6.04 9.035 9.035 0 0 0 4.386 2.471.668.668 0 0 1-.174 1.313z" fill="inherit" /></svg>);
      case ('ic_growth'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 14 7"><path data-name="ic_growth" d="M13.125 0h-3.5a.875.875 0 1 0 0 1.75h1.388L7.875 4.888 4.993 2.006a.875.875 0 0 0-1.237 0l-3.5 3.5a.875.875 0 1 0 1.237 1.237l2.881-2.881 2.881 2.881a.875.875 0 0 0 1.237 0l3.756-3.756v1.388a.875.875 0 0 0 1.75 0v-3.5A.875.875 0 0 0 13.123 0z" fill="inherit" /></svg>);
      case ('ic_growth_down'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 14 7"><path d="M.875 7h3.5a.875.875 0 1 0 0-1.75H2.987l3.138-3.138 2.882 2.882a.875.875 0 0 0 1.237 0l3.5-3.5A.875.875 0 1 0 12.507.257L9.626 3.138 6.745.257a.875.875 0 0 0-1.237 0L1.752 4.013V2.625a.875.875 0 0 0-1.75 0v3.5A.875.875 0 0 0 .877 7z" fill="inherit" /></svg>);
      case ('ic_home'): return (<svg xmlns="http://www.w3.org/2000/svg" height="17.778" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 16 17.778"><path d="M15.058 5.835L9.259.487a1.871 1.871 0 0 0-2.518 0l-5.8 5.348A3.193 3.193 0 0 0-.002 7.98V16a1.779 1.779 0 0 0 1.778 1.775h5.347v-5.3h1.768v5.3h5.326A1.778 1.778 0 0 0 16 16V7.98a3.19 3.19 0 0 0-.942-2.145zM14.219 16h-3.552v-5.3H5.348V16h-3.57V7.98a1.469 1.469 0 0 1 .37-.838l5.8-5.348a.1.1 0 0 1 .107 0l5.8 5.348a1.464 1.464 0 0 1 .37.838Q14.222 16 14.219 16z" fill="inherit" /></svg>);
      case ('ic_image'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 24 24"><path d="M24 21.333V2.667A2.666 2.666 0 0 0 21.333 0H2.667A2.666 2.666 0 0 0 0 2.667v18.666A2.666 2.666 0 0 0 2.667 24h18.666A2.666 2.666 0 0 0 24 21.333zM7.333 14l3.333 4.007L15.333 12l6 8H2.667z" fill="inherit" /></svg>);
      case ('ic_info'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 10 10"><path d="M5.023 10A5 5 0 1 0 0 5a4.994 4.994 0 0 0 5.023 5zM4.5 2.5h1v1h-1zm0 2h1v3h-1z" fill="inherit" /></svg>);
      case ('ic_inquiries'): return (<svg xmlns="http://www.w3.org/2000/svg" width="17.072" height="17.072" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 17.072 17.072"><path d="M10.117 3.263H3.79a.527.527 0 0 0 0 1.054h6.327a.527.527 0 0 0 0-1.054zM8.008 5.372H3.79a.527.527 0 1 0 0 1.054h4.218a.527.527 0 1 0 0-1.054z" fill="inherit" stroke="#a4a4a4" /><path d="M11.7.1H2.209A2.111 2.111 0 0 0 .1 2.209v10.545a.527.527 0 0 0 .3.478.535.535 0 0 0 .224.05.527.527 0 0 0 .337-.122l3.017-2.514H11.7a2.111 2.111 0 0 0 2.109-2.109V2.209A2.111 2.111 0 0 0 11.7.1zm1.054 8.436A1.056 1.056 0 0 1 11.7 9.59H3.791a.527.527 0 0 0-.337.122l-2.3 1.916V2.209a1.056 1.056 0 0 1 1.055-1.055H11.7a1.056 1.056 0 0 1 1.054 1.054z" fill="inherit" stroke="#a4a4a4" /><path d="M14.863 4.318a.527.527 0 1 0 0 1.054 1.056 1.056 0 0 1 1.054 1.054v8.92l-1.78-1.424a.531.531 0 0 0-.329-.115H6.427a1.056 1.056 0 0 1-1.054-1.054v-.527a.527.527 0 0 0-1.054 0v.527a2.111 2.111 0 0 0 2.109 2.109h7.2l2.492 1.994a.528.528 0 0 0 .857-.412V6.427a2.111 2.111 0 0 0-2.114-2.109z" fill="inherit" stroke="#a4a4a4" /></svg>);
      case ('ic_landingpages'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.017" height="15.76" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.017 15.76"><g transform="translate(.15 .15)" fill="inherit" stroke="#a4a4a4"><path d="M15.994.001H1.723A1.725 1.725 0 0 0 0 1.723v12.014a1.725 1.725 0 0 0 1.723 1.723h14.271a1.725 1.725 0 0 0 1.723-1.723V1.723A1.725 1.725 0 0 0 15.994.001zM1.723 1.038h14.271a.685.685 0 0 1 .685.685v2.372H1.038V1.723a.685.685 0 0 1 .685-.685zm14.271 13.384H1.723a.685.685 0 0 1-.685-.685v-8.6h15.64v8.6a.685.685 0 0 1-.684.685z" /><circle cx=".523" cy=".523" r=".523" transform="translate(2.084 2.075)" /><circle cx=".523" cy=".523" r=".523" transform="translate(4.21 2.075)" /><circle cx=".523" cy=".523" r=".523" transform="translate(6.431 2.075)" /></g></svg>);
      case ('ic_legal'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.988" height="18.988" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.988 18.988"><path d="M1.622 18.9c.214.132-.817.083 15.141.083a2.227 2.227 0 0 0 2.225-2.224v-1.672a.556.556 0 0 0-.556-.556h-1.3V2.325A2.328 2.328 0 0 0 14.808 0H.556A.556.556 0 0 0 0 .556v16.2A2.225 2.225 0 0 0 1.622 18.9zm16.253-2.141a1.114 1.114 0 0 1-1.113 1.112H4.152a2.21 2.21 0 0 0 .3-1.112v-1.116h13.423zM1.113 1.112h13.7a1.214 1.214 0 0 1 1.213 1.213v12.206H3.894a.556.556 0 0 0-.556.556v1.64a1.117 1.117 0 0 1-1.9.815 1.1 1.1 0 0 1-.326-.786z" fill="inherit" /><path d="M4.029 4.485h9.074a.556.556 0 1 0 0-1.112H4.029a.556.556 0 1 0 0 1.112zM4.029 7.079h9.074a.556.556 0 1 0 0-1.112H4.029a.556.556 0 1 0 0 1.112zM4.029 9.67h9.074a.556.556 0 1 0 0-1.112H4.029a.556.556 0 1 0 0 1.112zM4.029 12.27h9.074a.556.556 0 1 0 0-1.112H4.029a.556.556 0 1 0 0 1.112z" fill="inherit" /></svg>);
      case ('ic_membermanagement'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.934" height="16.605" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.934 16.605"><g fill="inherit" stroke="#b8b8b8"><path d="M17.933 11.076a12.223 12.223 0 0 0-5.194-1.55 12.3 12.3 0 0 1 1.117.54 2.831 2.831 0 0 1 1 .987 10.834 10.834 0 0 1 2.5 1.033.564.564 0 0 1 .266.495v2.708h-2.329v1.165h2.911a.582.582 0 0 0 .582-.582v-3.29a1.729 1.729 0 0 0-.853-1.506z" /><path d="M13.275 11.078a12.7 12.7 0 0 0-12.274 0 1.73 1.73 0 0 0-.851 1.5v3.29a.582.582 0 0 0 .582.582h12.811a.582.582 0 0 0 .582-.582v-3.291a1.73 1.73 0 0 0-.85-1.499zm-.314 4.213H1.315v-2.708a.563.563 0 0 1 .266-.495 11.521 11.521 0 0 1 11.114 0 .563.563 0 0 1 .266.494zM11.509 1.342a2.782 2.782 0 0 1 .29-.027 2.912 2.912 0 1 1 0 5.823 2.783 2.783 0 0 1-.29-.027 5.252 5.252 0 0 1-.881 1 3.978 3.978 0 0 0 1.171.193 4.076 4.076 0 0 0 0-8.152 3.979 3.979 0 0 0-1.171.193 5.255 5.255 0 0 1 .881.997z" /><path d="M7.137 8.305a4.076 4.076 0 1 0-4.076-4.076 4.081 4.081 0 0 0 4.076 4.076zm0-6.988a2.912 2.912 0 1 1-2.912 2.912 2.915 2.915 0 0 1 2.912-2.912z" /></g></svg>);
      case ('ic_ordermanagement'): return (<svg xmlns="http://www.w3.org/2000/svg" width="15.575" height="17.826" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 15.575 17.826"><path d="M15.307 5.009l-.013-.022a.823.823 0 0 0-.062-.106L12.808.689A.983.983 0 0 0 11.959.2H3.616a.983.983 0 0 0-.849.491L.303 4.965a.512.512 0 0 0-.049.12.863.863 0 0 0-.054.3v11.04a1.2 1.2 0 0 0 1.2 1.2h12.774a1.2 1.2 0 0 0 1.2-1.2V5.345v-.044a.508.508 0 0 0-.067-.292zM8.316 1.221h3.622l1.907 3.3H8.316zm-4.676 0h3.654v3.3H1.738zm10.714 15.2a.18.18 0 0 1-.179.179H1.401a.18.18 0 0 1-.179-.179V5.54h13.132z" fill="inherit" stroke="#a4a4a4" /><path d="M11.134 8.638a.739.739 0 0 0-1.045 0l-3.3 3.3-1.269-1.269a.739.739 0 0 0-1.045 1.045l1.791 1.791a.739.739 0 0 0 1.045 0l3.822-3.822a.739.739 0 0 0 .001-1.045z" fill="inherit" /></svg>);
      case ('ic_productmanagement'): return (<svg xmlns="http://www.w3.org/2000/svg" width="17.988" height="18.693" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 17.988 18.693"><path d="M13.837 2.86V.692a.692.692 0 0 0-1.384 0V2.86h-.692a3.456 3.456 0 0 0-2.767 1.386A3.456 3.456 0 0 0 6.227 2.86h-.692V.692a.692.692 0 1 0-1.384 0v5.627a.721.721 0 0 0 .073.309l1.127 2.254c-1.646 1.386-3.028.987-4.115 4.9C.368 16.907.02 17.8.001 17.915a.693.693 0 0 0 .687.778h16.6a.7.7 0 0 0 .687-.778c-.014-.115-.362-1.008-1.231-4.134-1.087-3.912-2.469-3.513-4.115-4.9l1.127-2.253a.725.725 0 0 0 .073-.309V4.243c.015-1.354.002-1.395.008-1.383zm-7.61 1.384a2.078 2.078 0 0 1 2.074 2.075.692.692 0 0 0 1.384 0 2.078 2.078 0 0 1 2.076-2.076h.692v1.913l-1.119 2.238h-4.68L5.535 6.156V4.243zm9.188 9.892c.574 2.063.919 2.144 1.081 3.174h-2.659v-2.077a.692.692 0 1 0-1.384 0v2.076H11.07v-2.076a.692.692 0 1 0-1.384 0v2.076H8.301v-2.076a.692.692 0 1 0-1.384 0v2.076H5.535v-2.076a.692.692 0 1 0-1.384 0v2.076H1.493c.163-1.03.508-1.111 1.081-3.174 1.047-3.765 2.384-3.25 3.873-4.357h5.1c1.484 1.107 2.82.592 3.868 4.357z" fill="inherit" /></svg>);
      case ('ic_profile'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.909" height="19.65" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.909 19.65"><path d="M.9 18.75h17.109v-4.755s0-1.585-2.138-1.585H3.039S.9 12.41.9 13.995z" fill="inherit" stroke="#a4a4a4" /><circle cx="3.922" cy="3.922" r="3.922" transform="translate(5.502 .9)" fill="inherit" stroke="#a4a4a4" /></svg>);
      case ('ic_search'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.198" height="18.216" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.198 18.216"><g data-name="Icon feather-search" fill="inherit" stroke="#666c72"><path data-name="Path 18" d="M12.934 6.967A5.967 5.967 0 1 1 6.967 1a5.967 5.967 0 0 1 5.967 5.967z" /><path data-name="Path 19" d="M17.5 17.5l-6.4-6.24" /></g></svg>);
      case ('ic_social_media'): return (<svg xmlns="http://www.w3.org/2000/svg" width="20.317" height="18.923" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 20.317 18.923"><path d="M19.361 7.814a5.028 5.028 0 0 0-8.6-5.2 7.606 7.606 0 1 0-4.22 14.537l1.065 1.328a.385.385 0 0 0 .6 0l1.065-1.328a7.608 7.608 0 0 0 6.212-6.817 4.983 4.983 0 0 0 2.548-1l.086-.064 1.122.166a.385.385 0 0 0 .428-.481zM9 16.416a.385.385 0 0 0-.239.139l-.856 1.067-.856-1.067a.385.385 0 0 0-.239-.139 6.836 6.836 0 1 1 2.19 0zm9.618-8.86a.385.385 0 0 0-.044.3l.2.731-.7-.1a.385.385 0 0 0-.287.073l-.217.162a4.221 4.221 0 0 1-2.055.837 7.614 7.614 0 0 0-4.05-6.611 4.258 4.258 0 0 1 7.157 4.611z" fill="inherit" stroke="#a4a4a4" /></svg>);
      case ('ic_sort_by'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 14 14"><path data-name="ic_arrow" d="M12.444 0H1.556A1.557 1.557 0 0 0 0 1.556v10.888A1.557 1.557 0 0 0 1.556 14h10.888A1.557 1.557 0 0 0 14 12.444V1.556A1.557 1.557 0 0 0 12.444 0zM7 10.433L2.561 5.994l1.1-1.1L7 8.234l3.339-3.339 1.1 1.1z" fill="inherit" /></svg>);
      case ('ic_store'): return (<svg xmlns="http://www.w3.org/2000/svg" width="18.2" height="15.95" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 18.2 15.95"><path d="M18.083 5.026l-1.125-4.5A.562.562 0 0 0 16.413.1H1.787a.562.562 0 0 0-.546.426l-1.125 4.5a.55.55 0 0 0-.016.137 2.853 2.853 0 0 0 1.125 2.285v7.84a.563.563 0 0 0 .562.563h5.626a.563.563 0 0 0 .562-.562V11.35h2.25v3.938a.563.563 0 0 0 .563.563h5.625a.563.563 0 0 0 .563-.562v-7.84A2.853 2.853 0 0 0 18.1 5.163a.55.55 0 0 0-.017-.137zm-2.233 9.7h-4.5v-3.938a.563.563 0 0 0-.562-.562H7.413a.563.563 0 0 0-.563.563v3.937h-4.5V7.93a2.5 2.5 0 0 0 .422.045 2.624 2.624 0 0 0 2.109-1.088 2.589 2.589 0 0 0 4.219 0 2.589 2.589 0 0 0 4.219 0 2.624 2.624 0 0 0 2.109 1.088 2.5 2.5 0 0 0 .422-.045zm-.422-7.875a1.624 1.624 0 0 1-1.547-1.687.563.563 0 0 0-1.125 0 1.624 1.624 0 0 1-1.547 1.688 1.624 1.624 0 0 1-1.547-1.687.563.563 0 0 0-1.125 0A1.624 1.624 0 0 1 6.991 6.85a1.624 1.624 0 0 1-1.547-1.687.563.563 0 0 0-1.125 0A1.624 1.624 0 0 1 2.772 6.85a1.618 1.618 0 0 1-1.546-1.622l1-4h13.748l1 4a1.62 1.62 0 0 1-1.546 1.622z" fill="inherit" stroke="#666c72" /></svg>);
      case ('ic_tasktracker'): return (<svg xmlns="http://www.w3.org/2000/svg" width="16.872" height="16.441" fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox="0 0 16.872 16.441"><path d="M7.1 14.115H2.992a1.5 1.5 0 0 1-1.5-1.5V4.862a1.5 1.5 0 0 1 1.5-1.5h2.352v.378a2.244 2.244 0 1 0 4.488 0v-.374h2.356a1.5 1.5 0 0 1 1.5 1.5V8.19a.748.748 0 1 0 1.5 0V4.862a3 3 0 0 0-3-2.992H9.832V.748A.748.748 0 0 0 9.084 0H6.092a.748.748 0 0 0-.748.748V1.87H2.992A3 3 0 0 0 0 4.862v7.757a3 3 0 0 0 2.992 2.992H7.1a.748.748 0 1 0 0-1.5zM6.84 1.5h1.5v2.24a.748.748 0 1 1-1.5 0zm5.507 5.89a4.6 4.6 0 0 0-4.6 4.525 4.6 4.6 0 0 0 4.6 4.525 4.525 4.525 0 1 0 0-9.05zm0 7.554a3.029 3.029 0 1 1 3.029-3.029 3.033 3.033 0 0 1-3.029 3.03zm1.832-3.029a.748.748 0 0 1-.748.748h-1.084a.748.748 0 0 1-.748-.748v-1.533a.748.748 0 1 1 1.5 0v.785h.337a.748.748 0 0 1 .743.748zm0 0" fill="inherit" /></svg>);
      default: return null;
    }
  }

  return preview ? renderPreview() : renderIcon(name);
}

export default AppIcon;
