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

export interface MenuRouter {
  element: () => JSX.Element
  name: string
  path: string
  children?: MenuRouter[]
  [x: string]: any
}