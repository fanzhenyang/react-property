export interface Menu {
  actionList?: [{ actionId: number, actionName: string }]
  children?: Menu[],
  meta?: IMeta,
  moduleId: number
  moduleName: string
  modulePath?: string
  platformName?: string
  moduleLogo?: string
  url?: string
}

interface IMeta {
  [x: string]: any
}