export interface Menu {
  actionList?: [{ actionId: number, actionName: string }]
  children?: Menu[],
  moduleId: number
  moduleName: string
  modulePath?: string
  platformName?: string
  moduleLogo?: string
  url?: string
}