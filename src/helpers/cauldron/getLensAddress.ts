export const getLensAddress = (chainId: Number): string => {
  // check type
  switch (Number(chainId)) {
    case 11155111:
      return "0x79Be67f6B0E68C03Da77bE62E79b77470C1511C8";
    case 80084:
      return "0x1E217d3cA2a19f2cB0F9f12a65b40f335286758E";
    default:
      return "0x1d17009Dde57CAea3dC614962a6c01420776523f";
  }
};
