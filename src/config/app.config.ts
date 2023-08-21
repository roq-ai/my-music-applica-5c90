interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin', 'Viewer', 'Editor'],
  tenantName: 'Provider',
  applicationName: 'My music application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
