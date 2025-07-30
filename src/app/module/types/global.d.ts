// declaration.d.ts
declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const svg: string
  export default svg
}
